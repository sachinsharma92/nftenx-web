import { Api } from 'services/api';
import { storage } from "utils/storage";
import { METAMASK_CONSTANTS } from 'constants/globalConstants';

export const purchaseToken = async (assetId: number) => {
  // receiver=accounts[0]
// don't send sender
// assetId 1->founder 2->member
// address hard-coded
// chainId from localstorage

// 0x3537Ef0a21a0f3B4256421f46Bb3bf2F4ba36aFD
  const payload = {
      assetId,
      methodName: METAMASK_CONSTANTS.TOKEN_TRANSFER_METHOD_NAME,
      chainId: storage.get(METAMASK_CONSTANTS.CHAIN_ID),
      receiver: storage.get(METAMASK_CONSTANTS.ADDRESS),
      tokenCount: 1,
      payloadRsv: METAMASK_CONSTANTS.SIGNING_TOKEN
  }
  const generatedPayload = await Api.getContractData(payload);
  if (generatedPayload.success) {
      generatedPayload.data.from = '0x51B3fC04075B3F8a0Ce30217EcF6545B75043950';
      // myJson.data.from = selectedAddress
      const windowObj:any = window;
      const txHash = await windowObj.ethereum.request({
          method: METAMASK_CONSTANTS.SEND_TRANSACTION,
          params: [generatedPayload.data],
      });
  }
}