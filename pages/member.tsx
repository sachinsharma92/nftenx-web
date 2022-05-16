import { Seo, ToggleButtons } from "components/atoms";
import { Header, WithSidebar } from "components/common";
import {
  FAQSection,
  HeadingToggleCards,
  ImageTitleDescriptionLinkHero,
  TitleDescriptionLink_ImageTitleDescriptionButtonsCarousal,
  TitlesDescriptionSingleCardHero,
} from "components/molecules";
import { TitleDescriotion_DateTitleDesctiptionElements } from "components/molecules/TitleDescriotion-DateTitleDesctiptionElements";
import { section11, section12, section7 } from "constants/landing";
import { NextPage } from "next";
import { Api } from "services/api";
import moment from "moment";
// images - remove
import userImage from "assets/images/user-image.jpeg";
import { RightArrowSecondary } from "assets/icons";
import { ToggleButton } from "react-bootstrap";

const Member: NextPage = (props: any) => {
  const { mentors = [], eventsThisWeek, eventsThisMonth = [] } = props;

  const getEventsRestructured=()=>{
    return (eventsThisMonth || []).map((event: any)=>{
      return {
        date: {
          day: moment(event.eventDate).format("DD"),
          month: moment(event.eventDate).format("MMMM"),
          time: moment(event.eventTime).format("LT"),
        },
        title: event.title,
        description: event.description,
      };
    });
  };

  return (
    <main className="bg-primary-1 min-h-screen">
      <Seo title="Member's Page" />
      <WithSidebar>
        <Header />

        {eventsThisWeek && <TitlesDescriptionSingleCardHero
            title="Up Next:"
            titleSecondary="Programmes this week"
            description="Web3’s pace, depth, and potential are immense. We saw that Builders, Operators, and Leaders from all backgrounds are searching for ways to learn more, to get involved, to harness this once-in-a-decade."
            cardImage={eventsThisWeek.eventImage.mediaUrl}
            cardTitle={eventsThisWeek.title}
            cardDescription={eventsThisWeek.description}
            cardLinkHref={`/event/${eventsThisWeek.id}`}
            cardlinkTitle={"Know More"}
          />
        }

        <TitleDescriotion_DateTitleDesctiptionElements
          title="Programmes this month"
          description="Web3’s pace, depth, and potential are immense. We saw that Builders, Operators, and Leaders from all backgrounds are searching for ways to learn more, to get involved, to harness this once-in-a-decade."
          items={getEventsRestructured()}
        />
        <TitleDescriptionLink_ImageTitleDescriptionButtonsCarousal
          title={section7.title}
          description={section7.description}
          linkTitle={section7.linkTitle}
          linkHref={section7.linkHref}
          items={mentors}
        />

        <HeadingToggleCards
          title="From the Content Hub"
          categories={[
            {
              title: "TRENDING IN WEB3",
              value: "trending",
            },
            {
              title: "HOT IN WEB3",
              value: "hot",
            },
            {
              title: "AWESOME IN WEB3",
              value: "awesome",
            },
          ]}
          items={[
            {
              title: "Design Thinking for Blockchains",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
              image:
                "https://images.unsplash.com/photo-1636388951474-d84e2e5bb6a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
              href: '/content/1',
            },
            {
              title: "Design Thinking for Blockchains",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
              image:
                "https://images.unsplash.com/photo-1636388951474-d84e2e5bb6a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
              href: '/content/1',
            },
            {
              title: "Design Thinking for Blockchains",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
              image:
                "https://images.unsplash.com/photo-1636388951474-d84e2e5bb6a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
              href: '/content/1',
            },
            {
              title: "Design Thinking for Blockchains",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
              image:
                "https://images.unsplash.com/photo-1636388951474-d84e2e5bb6a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
              href: '/content/1',
            },
          ]}
        />

        <FAQSection title={section11.title} items={section11.items} gradient />

        <ImageTitleDescriptionLinkHero
          title={section12.title}
          description={section12.description}
          linkHref={section12.linkHref}
          image={section12.image}
          linkTitle={
            <span className="group text-secondary-1 text-mono whitespace-nowrap flex items-center text-lg">
              Join the Community
              <span role="img" className="transition-all pl-2 group-hover:pl-5">
                <RightArrowSecondary className="h-10 w-auto" />
              </span>
            </span>
          }
        />
      </WithSidebar>
    </main>
  );
};

export default Member;

export const getServerSideProps = async (ctx: any) => {
  const mentorsResponse = await Api.getMentors();
  const eventsThisMonth = await Api.getEvents('month');
  const eventsThisWeek = await Api.getEvents('week');

  let propsResponse = {};

  if (mentorsResponse.success) {
    propsResponse = {
      ...propsResponse,
      mentors: mentorsResponse.data.results,
    };
  }
  if (eventsThisMonth.success) {
    propsResponse = {
      ...propsResponse,
      eventsThisMonth: eventsThisMonth.data.results,
    };
  }
  if (eventsThisWeek.success) {
    propsResponse = {
      ...propsResponse,
      eventsThisWeek: !!eventsThisWeek.data.results.length && eventsThisWeek.data.results[0],
    };
  }
  return {
    props: propsResponse,
  };
};
