import { H1, P } from "components/atoms";
import generalCoin from "../../assets/images/Gen_Front.png";
import founderCoin from "../../assets/images/FDR_Front.png";
import { ButtonWithDescription } from 'components/molecules';
import { purchaseToken } from "utils/tokenMint";
import { TOKEN_TYPE_ID } from "constants/globalConstants";
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

  return (
      <article className="p-section lg:py-32 overflow-x-hidden">
        <H1 className="text-center mb-10">Join the Community</H1>
        <P className="mb-10 font-mono text-primary-light">
            <>
            The NF10x community is built with a hands-on approach to onboarding. Every two weeks, we welcome a new cohort of<br/> members into the fold. These smaller groups foster an environment that is more conducive to building<br/> genuine relationships while integrating into the broader community.
            </>
        </P>
        <div className="flex flex-col gap-7 md:grid md:grid-cols-2 md:justify-center md:gap-5">
            <ButtonWithDescription
                onClick={()=>purchaseToken(TOKEN_TYPE_ID.FOUNDER)}
                src={founderCoin.src}
                title={"100 Tokens"}
                subTitle={<>
                    Our first cohort will receive our Founding<br/> Members token and be added to a dedicated<br/> channel only available to.
                </>}
            />
            <ButtonWithDescription
                onClick={()=>purchaseToken(TOKEN_TYPE_ID.GENERAL)}
                src={generalCoin.src}
                title={"100 Tokens"}
                subTitle={<>Subsequent cohorts will mint General Member<br/> tokens until the community grows to 1,100<br/> members.</>}
            />
        </div>
      </article>
  );
};
