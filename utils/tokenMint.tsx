import { Api } from 'services/api';
import { storage } from "utils/storage";
import { METAMASK_CONSTANTS } from 'constants/globalConstants';

export const purchaseToken = async (assetId: number) => {
  const payload = {
      assetId,
      methodName: METAMASK_CONSTANTS.TOKEN_TRANSFER_METHOD_NAME,
      chainId: process.env.NEXT_PUBLIC_CHAIN_ID,
      receiver: storage.get(METAMASK_CONSTANTS.ADDRESS),
      tokenCount: 1,
      payloadRsv: METAMASK_CONSTANTS.SIGNING_TOKEN
  }
  const generatedPayload = await Api.getContractData(payload);
  if (generatedPayload.success) {
      generatedPayload.data.from = storage.get(METAMASK_CONSTANTS.ADDRESS);
      // myJson.data.from = selectedAddress
      console.log(generatedPayload.data);
      const windowObj:any = window;
      const txHash = await windowObj.ethereum.request({
          method: METAMASK_CONSTANTS.SEND_TRANSACTION,
          params: [generatedPayload.data],
      });
  }
}