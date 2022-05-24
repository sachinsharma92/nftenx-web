import { Loader, Seo } from "components/atoms";
import {
  PurchaseProcessingCard,
  PurchaseProcessingCard_states,
} from "components/molecules";
import { METAMASK_CONSTANTS, TOKEN_DETAILS, TOKEN_TYPE } from "constants/globalConstants";
import { useEffect, useState } from "react";
import { metaMask, hooks } from '../components/connectors/metamask/MetamaskConnector';
import { useWeb3Context } from 'web3-react';
// images
import generalCoin from "/assets/images/coin-general-1.png";
import { storage } from "utils/storage";
import { formatAccount, purchaseToken } from '../utils/tokenMint';
import { Api } from "services/api";

const MintPass = () => {
  const { useAccounts } = hooks;

  const context = useWeb3Context();
  const account: any = useAccounts()

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
  const getTxnStatus = async (txHash: string)=>{
    const response = await Api.getTransactionReceipt(txHash);
    if(response.result.isError==='0'){
      setPurchaseState(PurchaseProcessingCard_states.success);
      clearInterval(handler);
      // TODO: call API to update invitation
    }else {
      setPurchaseState(PurchaseProcessingCard_states.fail);
    }
  }

  const startTxn = async ()=>{
    const txnHash = await purchaseToken(assetId);
    handler = setInterval(() => getTxnStatus(txnHash), 5000);
  }

  const mint=async () => {
    const metamaskAddress: any = storage.get(METAMASK_CONSTANTS.ADDRESS);
    setAccountNumber(metamaskAddress);
    if(!metamaskAddress){
      void metaMask.connectEagerly();
      context.setFirstValidConnector(['MetaMask', 'Infura']);
    }else{
      startTxn()
      setLoaderActive(false);
    }
  }

  useEffect(() => {
    const tokenDetails = storage.get(TOKEN_DETAILS);
    if(tokenDetails){
      const tokenObj = JSON.parse(tokenDetails);
      setAssetId(tokenObj.tokenId);
    }
    mint();
  }, []);

  useEffect(() => {
    if(account) {
      let accountNumber = account;
      if(typeof(account)=='object'){
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

      {loaderActive && (
        <Loader active={loaderActive} text={loaderText} />
      )}

      {screenState == ScreenStateEnum.purchase && (
        <PurchaseProcessingCard
          title="Founders Access Pass"
          state={purchaseState}
          image={generalCoin.src}
          message={formatAccount(accountNumber)}
          tokenType={TOKEN_TYPE.FOUNDER}
          tokenId={assetId}
        />
      )}
    </main>
  );
};

export default MintPass;
