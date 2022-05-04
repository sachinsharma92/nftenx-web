import { Button, H1, Seo } from "components/atoms";
import { TOKEN_DETAILS, TOKEN_TYPE } from "constants/globalConstants";
import { pageAction, pageTitles } from "constants/mint";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { storage } from "utils/storage";
import { Api } from "../../services/api"

const Mint = (props: Record<string, any>) => {
  const router = useRouter();

  const mint=() => {
    router.push('/mint-pass');
  }

  useEffect(()=>{
    if(props){
      storage.set(TOKEN_DETAILS, JSON.stringify(props));
    }
  }, [props])

  return (
    <>
      <Seo title="Mint"/>
      <main className="bg-primary-1">
        <section className="min-h-screen p-section flex flex-col justify-center items-center text-secondary-1">
          <div className="content lg:w-3/4 flex flex-col gap-8 justify-center items-center">
            { props.isValid ? <>
              <H1 className="text-center opacity-50">Congratulations</H1>
              <H1 className="text-center">You are now eligible to mint the {props.tokenType}'s pass.</H1>
              <Button onClick={mint}>Mint Now</Button>
            </>: <>
              <H1 className="text-center opacity-50">Sorry!</H1>
              <H1 className="text-center">Invalid link, please contact the admin support!</H1>
            </>}

          </div>
        </section>
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
        isValid: true,
        tokenType: response.data.membershipType.name,
        tokenId: response.data.group.tokenId,
      },
    };
  }
  return {
    props: {
      isValid: false,
    },
  };
};

export default Mint;
