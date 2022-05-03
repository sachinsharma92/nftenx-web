import { Loader, Seo } from "components/atoms";
import {
  PurchaseProcessingCard,
  PurchaseProcessingCard_states,
} from "components/molecules";
import { METAMASK_CONSTANTS, TOKEN_TYPE } from "constants/globalConstants";
import { useEffect, useState } from "react";
import { metaMask, hooks } from '../components/connectors/metamask/MetamaskConnector';
import { useWeb3Context } from 'web3-react';
// images
import generalCoin from "/assets/images/coin-general-1.png";
import { storage } from "utils/storage";
import { purchaseToken } from '../utils/tokenMint';

const MintPass = () => {
  const { useAccounts } = hooks;

  const context = useWeb3Context();
  const account = useAccounts()

  enum ScreenStateEnum {
    loading = "loading",
    purchase = "processing_purchase",
    view = "view"
  }

  const [screenState, setScreenState] = useState<ScreenStateEnum>(
    ScreenStateEnum.purchase
  );

  const [loaderText, setLoaderText] = useState<null | string>();
  const [loaderActive, setLoaderActive] = useState<boolean>(true);
  const [assetId, setAssetId] = useState<number>(1);

  const mint=() => {
    const metamaskAddress = storage.get(METAMASK_CONSTANTS.ADDRESS);
    if(!metamaskAddress){
      void metaMask.connectEagerly();
      context.setFirstValidConnector(['MetaMask', 'Infura']);
    }else{
      purchaseToken(assetId);
      setLoaderActive(false);
    }
  }

  useEffect(() => {
    mint();
  }, []);

  useEffect(() => {
    if(account) {
      storage.set(METAMASK_CONSTANTS.ADDRESS, account);
      purchaseToken(assetId);
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
          state={PurchaseProcessingCard_states.processing}
          image={generalCoin.src}
          message="0xF7bEC...82309"
          tokenType={TOKEN_TYPE.FOUNDER}
        />
      )}
    </main>
  );
};

export default MintPass;
