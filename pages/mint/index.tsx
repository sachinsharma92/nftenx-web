import { Button, H1, Seo } from "components/atoms";
import { TOKEN_TYPE } from "constants/globalConstants";
import { pageAction, pageTitles } from "constants/mint";
import { useRouter } from "next/router";

const Mint = (props: Record<string, any>) => {
  const router = useRouter();

  const mint=() => {
    router.push('/mint-pass');
  }

  return (
    <>
      <Seo title="Mint"/>
      <main className="bg-primary-1">
        <section className="min-h-screen p-section flex flex-col justify-center items-center text-secondary-1">
          <div className="content lg:w-3/4 flex flex-col gap-8 justify-center items-center">
            { props.isValid ? <>
              <H1 className="text-center opacity-50">Congratulations</H1>
              <H1 className="text-center">{pageTitles[(props.tokenType as TOKEN_TYPE)]}</H1>
              {/* <Button onClick={pageAction[(props.tokenType as TOKEN_TYPE)]}>Mint Now</Button> */}
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

export const getServerSideProps = ({
  query,
}: {
  query?: Record<string, any>;
}) => {
  // TODO: API call to verify request and fetch cohort details
  // TODO: get response of blockchain from an API
  return {
    props: {
      isValid: true,
      tokenType: 'FOUNDER',
    },
  };
};

export default Mint;
