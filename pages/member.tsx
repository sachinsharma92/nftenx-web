import { Seo } from "components/atoms";
import { Header, WithSidebar } from "components/common";
import {
  FAQSection,
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

const Member: NextPage = (props: any) => {
  const { mentors = [], events = [] } = props;

  const getEventsRestructured=()=>{
    return events.map((event: any)=>{
      return {
          date: {
            day: moment(event.eventDate).format("DD"),
            month: moment(event.eventDate).format("MMMM"),
            time: moment(event.eventTime).format("LT"),
          },
          title: event.title,
          description:
            event.description,
        }
    })
  }

  return (
    <main className="bg-primary-1 min-h-screen">
      <Seo title="Member's Page" />
      <WithSidebar>
        <Header />

        <TitlesDescriptionSingleCardHero
          title="Up Next:"
          titleSecondary="Programmes this week"
          description="Web3’s pace, depth, and potential are immense. We saw that Builders, Operators, and Leaders from all backgrounds are searching for ways to learn more, to get involved, to harness this once-in-a-decade."
          cardImage={userImage.src}
          cardTitle={"Fireside Chats"}
          cardDescription={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
          }
          cardLinkHref="/join"
          cardlinkTitle={"Know More"}
        />

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
  const eventsResponse = await Api.getEvents();

  let propsResponse = {};

  if (mentorsResponse.success) {
    propsResponse = {
      ...propsResponse,
      mentors: mentorsResponse.data.results,
    };
  }
  if (eventsResponse.success) {
    propsResponse = {
      ...propsResponse,
      events: eventsResponse.data.results,
    };
  }
  return {
    props: propsResponse,
  };
};
