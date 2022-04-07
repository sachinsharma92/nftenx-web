import { H1, P } from "components/atoms";
import founderCoin from "../../assets/images/coin-founder.svg";
import { ButtonWithDescription } from 'components/molecules';
/* eslint-disable @next/next/no-img-element */
// type Props = {
//   headings?: string[];
//   linkTitle?: string | JSX.Element;
//   href?: string;
//   image?: string;
// };

export const JoinTheCommunity = (props: any) => {
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
                href={""}
                src={founderCoin.src}
                title={"100 Tokens"}
                subTitle={<>
                    Our first cohort will receive our Founding<br/> Members token and be added to a dedicated<br/> channel only available to.
                </>}
            />
            <ButtonWithDescription
                href={""}
                src={founderCoin.src}
                title={"100 Tokens"}
                subTitle={<>Subsequent cohorts will mint General Member<br/> tokens until the community grows to 1,100<br/> members.</>}
            />
        </div>
      </article>
  );
};
