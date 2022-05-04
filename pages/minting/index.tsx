import ElligibleComponent from "components/mint/elligible";
import LinkExpiredComponent from "components/mint/linkExpired";
import MintLiveComponent from "components/mint/mintLive";
import SoldOutComponent from "components/mint/soldOut";

const Minting = (props: Record<string, any>) => {
  return (
    <main className="mint-page-style main-bg">
      <ElligibleComponent />
      <MintLiveComponent />
      <SoldOutComponent />
      <LinkExpiredComponent />
    </main>
  );
};

export default Minting;