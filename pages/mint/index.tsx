import { Seo } from "components/atoms";
import LinkExpiredComponent from "components/mint/linkExpired";
import MintLiveComponent from "components/mint/mintLive";
import SoldOutComponent from "components/mint/soldOut";
import TransactionProcessor from "components/TransactionProcessor";
import { TOKEN_DETAILS } from "constants/globalConstants";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { storage } from "utils/storage";
import { Api } from "../../services/api"

const Mint = (props: Record<string, any>) => {
  const {
    linkId,
    isExpired,
    tokenType,
    tokenId,
    cohortName,
    totalTokens,
    isSoldOut,
    soldTokens
  } = props;
  const router = useRouter();
  const [processTxns, setProcessTxns] = useState(false);

  const mint=() => {
    setProcessTxns(true);
    // router.push('/mint-pass');
  }

  useEffect(()=>{
    if(props){
      storage.set(TOKEN_DETAILS, JSON.stringify(props));
    }
  }, [props])

  return (
    <>
      <Seo title="Mint"/>
      <main className="mint-page-style main-bg">
        {isExpired ?
          <LinkExpiredComponent />:
          <>
            { isSoldOut ?
              <SoldOutComponent type={tokenType} total={totalTokens} name={cohortName} sold={soldTokens}/>:
              <>
                {processTxns? <TransactionProcessor linkId={linkId} tokenId={tokenId}/>:
                  <MintLiveComponent type={tokenType} total={totalTokens} onClick={mint} sold={soldTokens}/>
                }

              </>
            }
          </>
        }
      </main>
    </>
  );
};

export const getServerSideProps = async (ctx: any) => {
  const { query } = ctx;
  const invitationId = query.linkId;

  const response = await Api.validateEmailLink(invitationId);

  if(response.success) {
    return {
      props: {
        linkId: invitationId,
        isExpired: response.data.isExpired,
        tokenType: response.data.membershipType.name,
        tokenId: response.data.group.tokenId,
        cohortName: response.data.group.cohort.name,
        totalTokens: response.data.group.cohort.noOfTokens,
        isSoldOut: response.data.isSoldOut,
        soldTokens: response.data.soldTokens,
      },
    };
  }
  return {
    props: {
      isExpired: true,
    },
  };
};

export default Mint;
