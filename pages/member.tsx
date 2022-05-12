import { Seo } from "components/atoms";
import { Header, WithSidebar } from "components/common";
import {
  FAQSection,
  TitleDescriptionLink_ImageTitleDescriptionButtonsCarousal,
} from "components/molecules";
import { TitleDescriotion_DateTitleDesctiptionElements } from "components/molecules/TitleDescriotion-DateTitleDesctiptionElements";
import { section11, section7 } from "constants/landing";
import { NextPage } from "next";
import { Api } from "services/api";

const Member: NextPage = (props: any) => {
  const { mentors = [], events = [] } = props;
  return (
    <main className="bg-primary-1 min-h-screen">
      <Seo title="Member's Page" />
      <WithSidebar>
        <Header />
        <TitleDescriotion_DateTitleDesctiptionElements
          title="Programmes this month"
          description="Web3’s pace, depth, and potential are immense. We saw that Builders, Operators, and Leaders from all backgrounds are searching for ways to learn more, to get involved, to harness this once-in-a-decade."
          items={[
            {
              date: {
                day: "2",
                month: "JULY",
                time: "09:00 am IST",
              },
              title: "Fireside Chats",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit a",
            },
            {
              date: {
                day: "2",
                month: "JULY",
                time: "09:00 am IST",
              },
              title: "Fireside Chats",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit a",
            },
            {
              date: {
                day: "2",
                month: "JULY",
                time: "09:00 am IST",
              },
              title: "Fireside Chats",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit a",
            },
            {
              date: {
                day: "2",
                month: "JULY",
                time: "09:00 am IST",
              },
              title: "Fireside Chats",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit a",
            },
            {
              date: {
                day: "2",
                month: "JULY",
                time: "09:00 am IST",
              },
              title: "Fireside Chats",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit a",
            },
          ]}
        />
        <TitleDescriptionLink_ImageTitleDescriptionButtonsCarousal
          title={section7.title}
          description={section7.description}
          linkTitle={section7.linkTitle}
          linkHref={section7.linkHref}
          items={mentors}
        />
        <FAQSection title={section11.title} items={section11.items} />
      </WithSidebar>
    </main>
  );
};

export default Member;

export const getServerSideProps = async (ctx: any) => {
  const mentorsResponse = await Api.getMentors();
  const eventsResponse = await Api.getEvents();

  let propsResponse = {};

  if(mentorsResponse.success) {
    propsResponse = {
      ...propsResponse,
      mentors: mentorsResponse.data.results
    };
  }
  if(eventsResponse.success) {
    propsResponse = {
      ...propsResponse,
      events: eventsResponse.data.results
    };
  }
  return {
      props: propsResponse,
  };
};