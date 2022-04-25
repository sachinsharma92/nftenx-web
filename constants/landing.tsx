import { RightArrowSecondary, TwitterSecondary } from "assets/icons";
import coinBgImage from "../assets/images/coins-bg.png";
import peopleConected from "../assets/images/people-connected.png";
import gridGradient from "../assets/images/grid-gradient-bg.png";

import insightImg from "/assets/images/Insight.png";
import accessImg from "/assets/images/Access.png";
import immersionImg from "/assets/images/Immersion.png";

import logo3d from "/assets/images/nf10x-logo-3d.png";
import square3dTranslucent from "/assets/images/sqiares-3d-translucent.png";
import sphereSqTranslucent from "/assets/images/shperes-square-translucent.png";

import eventLogo1 from "/assets/images/event-logo-1.png";

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
    <span className="group text-secondary-2 text-mono whitespace-nowrap flex items-center text-lg">
      Know More
      <span role="img" className="transition-all pl-2 group-hover:pl-5">
        <RightArrowSecondary className="h-10 w-auto" />
      </span>
    </span>
  ),
  href: "/more",
};

export const section3 = {
  title: "Who is NF10X For?",
  description: "Web3 isn’t the next frontier. It’s a new paradigm.",
  image: sphereSqTranslucent.src,
  items: [
    {
      title: "Disruptors",
      description:
        "Entrepreneurs and leaders actively building in Web3 that want to learn with and from a productive, insight-filled community",
    },
    {
      title: "Catalysts",
      description:
        "Entrepreneurs and leaders actively building in Web3 that want to learn with and from a productive, insight-filled community",
    },
  ],
};

export const section4 = {
  title: "Who is NF10X For?",
  description: "Web3 isn’t the next frontier. It’s a new paradigm.",
  image: square3dTranslucent.src,
  items: [
    {
      title: "Disruptors",
      description:
        "Entrepreneurs and leaders actively building in Web3 that want to learn with and from a productive, insight-filled community",
    },
    {
      title: "Catalysts",
      description:
        "Entrepreneurs and leaders actively building in Web3 that want to learn with and from a productive, insight-filled community",
    },
  ],
};

export const section6 = {
  title: (
    <>
      Why Join <b className="font-serif">NF10X</b>
    </>
  ),
  description:
    "NF10X will arm you with the knowledge and network needed to intelligently navigate, invest and build in Web3.",
  image: logo3d.src,
  items: [
    {
      title: "Insights",
      description: (
        <>
          Live and on-demand modules to get you up to speed on Web3.Tactical
          discussions about operating a business in Web3 Weekly roundups of
          Web3&apos;s biggest headlines, stories, and projects
          <br />
          <ul className="list-inside">
            <li className="list-item">
              Tactical discussions about operating a business in Web3
            </li>
            <li className="list-item">
              Weekly roundups of Web3&apos;s biggest headlines, stories, and
              projects
            </li>
          </ul>
        </>
      ),
      image: insightImg.src,
    },
    {
      title: "Access",
      description:
        "Connect with our mentors - Leaders, Investors, and Builders in Web3 Attend members-only sessions with Web3’s trailblazers",
      image: accessImg.src,
    },
    {
      title: "Immersion",
      description:
        "Join a cohort of other Founders and Operators exploring opportunities in Web3 Connect with the community in our private Discord server",
      image: immersionImg.src,
    },
  ],
};

export const section7 = {
  title: "Meet the Mentors",
  description:
    "We recruited X Leaders, Investors, and Builders in Web3 to share their knowledge and act as resources for the community",
  linkTitle: (
    <span className="group text-secondary-2 text-mono whitespace-nowrap flex items-center text-lg">
      Join the Community
      <span role="img" className="transition-all pl-2 group-hover:pl-5">
        <RightArrowSecondary className="h-10 w-auto" />
      </span>
    </span>
  ),
  linkHref: "/join",
  items: [
    {
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      title: "Marilyn Botosh",
      description:
        "Web3’s pace, depth, and potential are immense. We saw that Builders, Operators, and Leaders from all backgrounds are",
      links: [
        {
          title: <TwitterSecondary />,
          href: "https://www.twitter.com",
        },
      ],
    },
    {
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
      title: "Marilyn Botosh",
      description:
        "Web3’s pace, depth, and potential are immense. We saw that Builders, Operators, and Leaders from all backgrounds are",
      links: [
        {
          title: <TwitterSecondary />,
          href: "https://www.twitter.com",
        },
      ],
    },
    {
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
      title: "Marilyn Botosh",
      description:
        "Web3’s pace, depth, and potential are immense. We saw that Builders, Operators, and Leaders from all backgrounds are",
      links: [
        {
          title: <TwitterSecondary />,
          href: "https://www.twitter.com",
        },
      ],
    },
    {
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
      title: "Marilyn Botosh",
      description:
        "Web3’s pace, depth, and potential are immense. We saw that Builders, Operators, and Leaders from all backgrounds are",
      links: [
        {
          title: <TwitterSecondary />,
          href: "https://www.twitter.com",
        },
      ],
    },
    {
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
      title: "Marilyn Botosh",
      description:
        "Web3’s pace, depth, and potential are immense. We saw that Builders, Operators, and Leaders from all backgrounds are",
      links: [
        {
          title: <TwitterSecondary />,
          href: "https://www.twitter.com",
        },
      ],
    },
    {
      image:
        "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
      title: "Marilyn Botosh",
      description:
        "Web3’s pace, depth, and potential are immense. We saw that Builders, Operators, and Leaders from all backgrounds are",
      links: [
        {
          title: <TwitterSecondary />,
          href: "https://www.twitter.com",
        },
      ],
    },
    {
      image:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
      title: "Marilyn Botosh",
      description:
        "Web3’s pace, depth, and potential are immense. We saw that Builders, Operators, and Leaders from all backgrounds are",
      links: [
        {
          title: <TwitterSecondary />,
          href: "https://www.twitter.com",
        },
      ],
    },
    {
      image:
        "https://images.unsplash.com/photo-1523464862212-d6631d073194?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
      title: "Marilyn Botosh",
      description:
        "Web3’s pace, depth, and potential are immense. We saw that Builders, Operators, and Leaders from all backgrounds are",
      links: [
        {
          title: <TwitterSecondary />,
          href: "https://www.twitter.com",
        },
      ],
    },
    {
      image:
        "https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
      title: "Marilyn Botosh",
      description:
        "Web3’s pace, depth, and potential are immense. We saw that Builders, Operators, and Leaders from all backgrounds are",
      links: [
        {
          title: <TwitterSecondary />,
          href: "https://www.twitter.com",
        },
      ],
    },
  ],
};

export const section8 = [
  <i
    key={0}
    className="inline-block h-5 w-5 p-2 rounded-full bg-secondary-2"
  ></i>,
  <span key={0} className="p-1 text-secondary-2 font-mono text-3xl">
    AMAS
  </span>,
  <i
    key={0}
    className="inline-block h-5 w-5 p-2 rounded-full bg-secondary-2"
  ></i>,
  <span key={0} className="p-1 text-secondary-2 font-mono text-3xl">
    Web3 deep dives
  </span>,
  <i
    key={0}
    className="inline-block h-5 w-5 p-2 rounded-full bg-secondary-2"
  ></i>,
  <span key={0} className="p-1 text-secondary-2 font-mono text-3xl">
    Product teardowns
  </span>,
  <i
    key={0}
    className="inline-block h-5 w-5 p-2 rounded-full bg-secondary-2"
  ></i>,
  <span key={0} className="p-1 text-secondary-2 font-mono text-3xl">
    Fireside chats
  </span>,
  <i
    key={0}
    className="inline-block h-5 w-5 p-2 rounded-full bg-secondary-2"
  ></i>,
  <span key={0} className="p-1 text-secondary-2 font-mono text-3xl">
    AMAS
  </span>,
  <i
    key={0}
    className="inline-block h-5 w-5 p-2 rounded-full bg-secondary-2"
  ></i>,
  <span key={0} className="p-1 text-secondary-2 font-mono text-3xl">
    Web3 deep dives
  </span>,
  <i
    key={0}
    className="inline-block h-5 w-5 p-2 rounded-full bg-secondary-2"
  ></i>,
  <span key={0} className="p-1 text-secondary-2 font-mono text-3xl">
    Product teardowns
  </span>,
  <i
    key={0}
    className="inline-block h-5 w-5 p-2 rounded-full bg-secondary-2"
  ></i>,
  <span key={0} className="p-1 text-secondary-2 font-mono text-3xl">
    AMAS
  </span>,
  <i
    key={0}
    className="inline-block h-5 w-5 p-2 rounded-full bg-secondary-2"
  ></i>,
  <span key={0} className="p-1 text-secondary-2 font-mono text-3xl">
    Web3 deep dives
  </span>,
  <i
    key={0}
    className="inline-block h-5 w-5 p-2 rounded-full bg-secondary-2"
  ></i>,
  <span key={0} className="p-1 text-secondary-2 font-mono text-3xl">
    Product teardowns
  </span>,
];

export const section9 = {
  title: "Download Schedule",
  description:
    "NF10X will host regular programming for the community. These sessions include Web3 Foundations, Project Debriefs, Tactical Talks, and Trend/Sector Reports.",
  items: [
    {
      image: eventLogo1.src,
      description: (
        <>
          DeFi Fundamentals by
          <br />
          Emma-Jane MacKinnon-Lee
          <br />
          25th MAR
        </>
      ),
      buttonTitle: "RSVP",
      buttonAction: () => console.log("RSVPd"),
    },
    {
      image: eventLogo1.src,
      description: (
        <>
          DeFi Fundamentals by
          <br />
          Emma-Jane MacKinnon-Lee
          <br />
          25th MAR
        </>
      ),
      buttonTitle: "RSVP",
      buttonAction: () => console.log("RSVPd"),
    },
    {
      image: eventLogo1.src,
      description: (
        <>
          DeFi Fundamentals by
          <br />
          Emma-Jane MacKinnon-Lee
          <br />
          25th MAR
        </>
      ),
      buttonTitle: "RSVP",
      buttonAction: () => console.log("RSVPd"),
    },
    {
      image: eventLogo1.src,
      description: (
        <>
          DeFi Fundamentals by
          <br />
          Emma-Jane MacKinnon-Lee
          <br />
          25th MAR
        </>
      ),
      buttonTitle: "RSVP",
      buttonAction: () => console.log("RSVPd"),
    },
    {
      image: eventLogo1.src,
      description: (
        <>
          DeFi Fundamentals by
          <br />
          Emma-Jane MacKinnon-Lee
          <br />
          25th MAR
        </>
      ),
      buttonTitle: "RSVP",
      buttonAction: () => console.log("RSVPd"),
    },
    {
      image: eventLogo1.src,
      description: (
        <>
          DeFi Fundamentals by
          <br />
          Emma-Jane MacKinnon-Lee
          <br />
          25th MAR
        </>
      ),
      buttonTitle: "RSVP",
      buttonAction: () => console.log("RSVPd"),
    },
  ],
};
