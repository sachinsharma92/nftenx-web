/* eslint-disable @next/next/no-img-element */
import { A, Article, ArticleCentered, H1, Loader, Seo } from "components/atoms";
import {
  PurchaseProcessingCard,
  PurchaseProcessingCard_states,
} from "components/molecules";
import { METAMASK_CONSTANTS, TOKEN_DETAILS, TOKEN_TYPE } from "constants/globalConstants";
import { useEffect, useState } from "react";
import { metaMask, hooks } from '../connectors/metamask/MetamaskConnector';
import { useWeb3Context } from 'web3-react';
// images
import generalCoin from "/assets/images/Gen_Front.png";
import founderCoin from "/assets/images/FDR_Front.png";
import { storage } from "utils/storage";
import { formatAccount, purchaseToken } from '../../utils/tokenMint';
import { Api } from "services/api";

// images
import coinImg from 'assets/images/coin-general-1.png';
import { Logo, RightArrowSecondary } from "assets/icons";
import gradientBlob from 'assets/images/illustrations/green-blue-blob-to-bottom-right.png';

type TransactionProcessorProps = {
  linkId: string,
  tokenId: string | number
  tokenType: string
}

const TransactionProcessor = (props: TransactionProcessorProps) => {
  const { linkId, tokenId, tokenType } = props;
  const { useAccounts } = hooks;

  const context = useWeb3Context();
  const account: any = useAccounts()

  const getOpenSeaUrl = () => {
    return `${process.env.NEXT_PUBLIC_OPENSEA_URL}/${METAMASK_CONSTANTS.CONTRACT_ADDRESS}/${tokenId}`
  }

  enum ScreenStateEnum {
    loading = "loading",
    purchase = "processing_purchase",
    view = "view"
  }

  const [screenState, setScreenState] = useState<ScreenStateEnum>(
    ScreenStateEnum.purchase
  );

  const [purchaseState, setPurchaseState] = useState(
    PurchaseProcessingCard_states.processing
  );

  const [loaderText, setLoaderText] = useState<null | string>();
  const [loaderActive, setLoaderActive] = useState<boolean>(true);
  const [assetId, setAssetId] = useState<number>(1);
  const [accountNumber, setAccountNumber] = useState<string>('');

  let handler: any = null;
  const getTxnStatus = async (txHash: string) => {
    const response = await Api.getTransactionReceipt(txHash);
    if (response.result.isError === '0') {
      clearInterval(handler);
      const updateStatus = await Api.updateInvite(linkId, { status: 2 });
      if (updateStatus.success) {
        const address: any = storage.get(METAMASK_CONSTANTS.ADDRESS);
        const postSuccessResponse = await Api.postSuccess(linkId, txHash, address);
        if (postSuccessResponse.success) {
          setScreenState(ScreenStateEnum.view);
        }
      }
    } else {
      setPurchaseState(PurchaseProcessingCard_states.fail);
    }
  }

  const startTxn = async () => {
    try {
      const txnHash = await purchaseToken(tokenId);
      if (txnHash) {
        handler = setInterval(() => getTxnStatus(txnHash), 5000);
      } else {
        setPurchaseState(PurchaseProcessingCard_states.fail);
      }
    } catch (error) {
      setPurchaseState(PurchaseProcessingCard_states.fail);
    }
  }

  const mint = async () => {
    const metamaskAddress: any = storage.get(METAMASK_CONSTANTS.ADDRESS);
    setAccountNumber(metamaskAddress);
    if (!metamaskAddress) {
      void metaMask.connectEagerly();
      context.setFirstValidConnector(['MetaMask', 'Infura']);
    } else {
      startTxn()
      setLoaderActive(false);
    }
  }

  useEffect(() => {
    mint();
  }, []);

  useEffect(() => {
    if (account) {
      let accountNumber = account;
      if (typeof (account) == 'object') {
        accountNumber = account[0];
      }
      storage.set(METAMASK_CONSTANTS.ADDRESS, accountNumber);
      setAccountNumber(accountNumber);
      startTxn();
      setLoaderActive(false);
    }
  }, [account]);

  return (
    <main>
      <Seo title="Mint Pass" />

      {false && (
        <Loader active={loaderActive} text={loaderText} />
      )}

      {screenState == ScreenStateEnum.purchase && (
        <PurchaseProcessingCard
          title={`${tokenType === 'member' ? 'General' : 'Founder'} Access Pass`}
          state={purchaseState}
          image={tokenType === 'member' ? generalCoin.src : founderCoin.src}
          message={formatAccount(accountNumber)}
          tokenType={tokenType === 'member' ? TOKEN_TYPE.GENERAL : TOKEN_TYPE.FOUNDER}
          tokenId={tokenId}
        />
      )}

      {screenState == ScreenStateEnum.view && (
        <ArticleCentered>
          <img src={gradientBlob.src} alt="blob" className="absolute top-0 left-0 opacity-40" />
          <div className="z-[1] w-full flex flex-col lg:flex-row gap-40 text-secondary-1">
            <div className="bg-white bg-opacity-5 border-white border-[1px] border-opacity-20 rounded-2xl p-16 flex flex-col gap-5 items-center justify-between shrink-0 backdrop-blur-md">
              <img src={tokenType==='member'? generalCoin.src :founderCoin.src} alt="" className="w-80" />
              <p className="font-mono text-center text-2xl">{tokenType==='member'? 'MEMBER': 'FOUNDER'} ACCESS PASS</p>
              <div className="">
                <p className="font-mono text-center text-primary-light">GEN01C2#84</p>
                <p className="font-mono text-center text-primary-light">Color: Deep Purple Musgrave</p>
                <p className="font-mono text-center text-primary-light">Type: {tokenType==='member'?'MEMBER':'FOUNDER'}</p>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <Logo />
              <div className="">
                <H1 className="font-[500]">Mint Successful!</H1>
                <H1 className="font-[500]">Here is your {tokenType==='member'?'Member': 'Founder'}&apos;s Token.</H1>
              </div>
              <div className="">
                <p className="font-mono text-secondary-1 font-light">You can also see this token on</p>
                <p className="font-mono text-[#7C6EF6] font-light break-all">{getOpenSeaUrl()}</p>
              </div>
              <div className="">
                <p className="font-mono text-primary-light font-light">Head to the NF10X members&apos; page to view your unlocked content</p>
              </div>
              <A href="/member" className="flex flex-row w-fit">
                <>Take me to member&apos;s page <RightArrowSecondary /></>
              </A>
            </div>
          </div>
        </ArticleCentered>
      )}
    </main>
  );
};

export default TransactionProcessor;
