import Image from "next/image";

// Images
import InstaIcon from "../../assets/icons/insta.svg";
import DiscordIcon from "../../assets/icons/discord.svg";
import TwitterIcon from "../../assets/icons/twitter.svg";

export const Footer = () => {

  return (
    <footer className="footer-style">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12">
            <div className="divider"/>
          </div>
          <div className="col-sm-6"><div className="copyright">2021©10X Factory</div></div>
          <div className="col-sm-6">
            <div className="social-icons">
              <div className="social-item">
                <a href="#"><Image src={InstaIcon} /></a>
              </div>
              <div className="social-item">
                <a href="#"><Image src={DiscordIcon} /></a>
              </div>
              <div className="social-item">
                <a href="#"><Image src={TwitterIcon} /></a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
