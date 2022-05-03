import { Logo } from "assets/icons";
import { ButtonOutline } from "components/atoms/ButtonOutline";
import { InputPrimary } from "components/common/InputPrimary";
import Image from "next/image";
import Flickity from 'react-flickity-component';
import ImageUser from "../../assets/images/user-image.jpeg";
import CommentIcon from "../../assets/icons/comment.svg";

const flickityOptions = {
  cellAlign: 'left',
  wrapAround: true
}

const cardSliderData = [
  {
    title: 'Fireside',
    subtitle: 'Chats'
  },
  {
    title: 'Fireside',
    subtitle: 'Teardown'
  },
  {
    title: 'Fireside',
    subtitle: 'Chats'
  },
  {
    title: 'Fireside',
    subtitle: 'Teardown'
  },
]
const UpcomingComponent = (props: Record<string, any>) => {
  return (
    <section className="upcoming-section">
      <div className="content-section">
        <div className="head-section">
          <div className="container">
            <h1 className="title1">Upcoming this month</h1>
            <p className="description mt-3">Web3 is more than a sprouting new industry. It’s a re-architecting of <br /> the internet. New, unthought-of companies will emerge.</p>
          </div>
        </div>

        <div className="card-slider">
          <Flickity
            className={'carousel'} // default ''
            elementType={'div'} // default 'div'
            options={flickityOptions} // takes flickity options {}
            disableImagesLoaded={false} // default false
            reloadOnUpdate // default false
            static // default false
          >
            {cardSliderData.map((item) => (
              <div className="card">
                <div className="info-section">
                  <div className="dotted-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="image-section">
                    <div className="comment-icon">
                      <Image src={CommentIcon} />
                    </div>
                    <div className="image-box">
                      <Image src={ImageUser} />
                    </div>
                  </div>
                </div>
                <div className="content-sec">
                  <h3 className="title3">{item.title}</h3>
                  <h3 className="title3 text-golden">{item.subtitle}</h3>
                  <p className="description mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                </div>

                <ButtonOutline className="btn-join">Know more</ButtonOutline>
              </div>
            ))}
          </Flickity>
        </div>
      </div>
    </section>
  );
};

export default UpcomingComponent;
