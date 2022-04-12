import { H1, P } from "components/atoms";
import founderCoin from "../../assets/images/coin-founder.svg";
import { ButtonWithDescription } from 'components/molecules';
import { Api } from 'services/api';
import { storage } from "utils/storage";
import { METAMASK_CONSTANTS } from 'constants/globalConstants';
/* eslint-disable @next/next/no-img-element */
// type Props = {
//   headings?: string[];
//   linkTitle?: string | JSX.Element;
//   href?: string;
//   image?: string;
// };

export const JoinTheCommunity = (props: any) => {
    const TOKEN_TYPE = {
        'FOUNDER': 1,
        'MEMBER': 2
    }
    const purchaseToken = async (assetId: number) => {
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
            generatedPayload.data.from = '0x3537Ef0a21a0f3B4256421f46Bb3bf2F4ba36aFD';
            // myJson.data.from = selectedAddress
            const windowObj:any = window;
            const txHash = await windowObj.ethereum.request({
                method: METAMASK_CONSTANTS.SEND_TRANSACTION,
                params: [generatedPayload.data],
            });
        }
    }

  return (
      <article className="p-section">
        <H1 className="text-center mb-10">Join the Community</H1>
        <P className="mb-10">
            <>
            The NF10x community is built with a hands-on approach to onboarding. Every two weeks, we welcome a new cohort of<br/> members into the fold. These smaller groups foster an environment that is more conducive to building<br/> genuine relationships while integrating into the broader community.
            </>
        </P>
        <div className="grid grid-cols-2 gap-5">
            <ButtonWithDescription
                onClick={()=>purchaseToken(TOKEN_TYPE.FOUNDER)}
                src={founderCoin.src}
                title={"100 Tokens"}
                subTitle={<>
                    Our first cohort will receive our Founding<br/> Members token and be added to a dedicated<br/> channel only available to.
                </>}
            />
            <ButtonWithDescription
                onClick={()=>purchaseToken(TOKEN_TYPE.MEMBER)}
                src={founderCoin.src}
                title={"100 Tokens"}
                subTitle={<>Subsequent cohorts will mint General Member<br/> tokens until the community grows to 1,100<br/> members.</>}
            />
        </div>
      </article>
  );
};
