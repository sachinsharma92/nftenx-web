import ElligibleComponent from "components/mint/elligible";
import MintLiveComponent from "components/mint/mintLive";

const Mint = (props: Record<string, any>) => {
  return (
    <main className="mint-page-style main-bg">
      <ElligibleComponent />
      {/* <MintLiveComponent /> */}
    </main>
  );
};

export default Mint;
