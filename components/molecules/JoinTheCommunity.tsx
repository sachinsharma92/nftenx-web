import { H1 } from "components/atoms";
import generalCoin from "../../assets/images/general-token.png";
import founderCoin from "../../assets/images/founder-token.png";
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
	// const TOKEN_TYPE = {
	// 	'FOUNDER': 1,
	// 	'MEMBER': 2
	// }

	return (
		<article className="p-section lg:py-32 overflow-x-hidden join-community">
			<H1 className="mb-10">Join the Community</H1>
			<p className="description size-sm">
				The NF10x community is built with a hands-on approach to onboarding. Every two weeks, we welcome a new cohort of<br /> members into the fold. These smaller groups foster an environment that is more conducive to building<br /> genuine relationships while integrating into the broader community.
			</p>
			<div className="tokken-section">
				<div className="card">
					<div className="content">
						<h2 className="title2">General Token</h2>
						<h4 className="title4 font-mono">Lorem ipsum dolorem</h4>
						<p className="description font-mono">Subsequent cohorts will mint General Member<br /> tokens until the community grows to 1,100<br /> members</p>
					</div>
					<button className="img-button with-gradient" onClick={()=>purchaseToken(TOKEN_TYPE_ID.GENERAL)}>
						<img src={generalCoin.src} alt="" className="img" />
					</button>
				</div>

				<div className="divider"></div>

				<div className="card">
					<button className="img-button" onClick={()=>purchaseToken(TOKEN_TYPE_ID.FOUNDER)}>
						<img src={founderCoin.src} alt="" className="img" />
					</button>
					<div className="content">
						<h2 className="title2 founder">Founder Token</h2>
						<h4 className="title4 font-mono">Lorem ipsum dolorem</h4>
						<p className="description font-mono">Our first cohort will receive our Founding<br /> Members token and be added to a dedicated<br /> channel only available to.</p>
					</div>
				</div>
			</div>
		</article>
	);
};
