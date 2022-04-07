import  { GenericModal } from "components/atoms";
import MetaMaskCard from "components/connectors/metamask/MetaMaskCard";

export const WalletConnectModal = (props: any) => {

  return (
   <GenericModal setShowModal = {props.setShowModal} showModal={props.showModal}  title="Connect Wallet" body={MetaMaskCard} >
   
   </GenericModal>
  );
};