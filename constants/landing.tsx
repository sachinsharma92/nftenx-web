import { RightArrowSecondary } from "assets/icons";
import coinBgImage from "../assets/images/coins-bg.png";
import peopleConected from "../assets/images/people-connected.png";
import gridGradient from "../assets/images/grid-gradient-bg.png";

export const section1 = {
  headings: [
    "The Web3 Community for Founders and Operators",
    "Learn and connect with Web3’s best and brightest minds",
  ],
  image: coinBgImage.src,
  linkTitle: (
    <span className="group text-secondary-1 text-mono whitespace-nowrap flex items-center text-lg">
      Join the Waitlist
      <span role="img" className="transition-all pl-2 group-hover:pl-5">
        <RightArrowSecondary className="h-10 w-auto" />
      </span>
    </span>
  ),
  href: "/join",
};

export const section2 = {
  heading: "Learn and Grow Together",
  description:
    "Web3 is more than a sprouting new industry. It’s a re-architecting of the internet. New, unthought-of companies will emerge. Legacy companies will be forced to adapt or leave themselves vulnerable to Web3-native challengers.We’ve heard from our network of Founders and Operators that they’ve been searching for ways to learn more, to prepare, to get involved, but can’t find the right entry point - the right community. We created NF10X to be that entry point.",
  image: peopleConected.src,
  bgImage: gridGradient.src,
  linkTitle: (
    <span className="group text-secondary-1 text-mono whitespace-nowrap flex items-center text-lg">
      Know More
      <span role="img" className="transition-all pl-2 group-hover:pl-5">
        <RightArrowSecondary className="h-10 w-auto" />
      </span>
    </span>
  ),
  href: "/more",
};
