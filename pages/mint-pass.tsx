import { Loader, Seo } from "components/atoms";
import {
  PurchaseProcessingCard,
  PurchaseProcessingCard_states,
} from "components/molecules";
import { TOKEN_TYPE } from "constants/globalConstants";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// images
import generalCoin from "/assets/images/coin-general-1.png";

const MintPass = () => {
  const router = useRouter();

  enum ScreenStateEnum {
    loading = "loading",
    purchase = "processing_purchase",
    view = "view"
  }

  const [screenState, setScreenState] = useState<ScreenStateEnum>(
    ScreenStateEnum.loading
  );

  const [loaderText, setLoaderText] = useState<null | string>();
  const [loaderActive, setLoaderActive] = useState<boolean>(true);

  useEffect(() => {
    {
      // Remove this block for
      setTimeout(() => {
        setLoaderText("Loading... Please Wait.");
      }, 2000);
      setTimeout(() => {
        setLoaderText("Minting in progress. Don’t close this window");
      }, 6000);
      setTimeout(() => {
        setScreenState(ScreenStateEnum.purchase);
      }, 8000);      
    }
  }, []);

  return (
    <main>
      <Seo title="Mint da Pass" />

      {screenState == ScreenStateEnum.loading && (
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
