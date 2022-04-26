import { Button, H1 } from "components/atoms";
import { TOKEN_TYPE } from "constants/globalConstants";
import { pageAction, pageTitles } from "constants/mint";

const Mint = (props: Record<string, any>) => {
  return (
    <main className="bg-primary-1">
      <section className="min-h-screen p-section flex flex-col justify-center items-center text-secondary-1">
        <div className="content lg:w-3/4 flex flex-col gap-8 justify-center items-center">
          <H1 className="text-center opacity-50">Congratulations</H1>
          <H1 className="text-center">{pageTitles[(props.tokenType as TOKEN_TYPE)]}</H1>
          <Button onClick={pageAction[(props.tokenType as TOKEN_TYPE)]}>Mint Now</Button>
        </div>
      </section>
    </main>
  );
};

// export const getServerSideProps = ({
//   query,
// }: {
//   query?: Record<string, any>;
// }) => {
//   const tokenType =
//     ((query?.slugs[0] as string).toUpperCase() as TOKEN_TYPE) ??
//     TOKEN_TYPE.GENERAL;
//   const generalType = (query?.slugs[1] as number) ?? 0;

//   return {
//     props: {
//       tokenType: tokenType,
//       generalType: generalType,
//     },
//   };
// };

export default Mint;
