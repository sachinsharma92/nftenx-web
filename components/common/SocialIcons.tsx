import Image from "next/image";

// Images
import InstaIcon from "../../assets/icons/new/insta.svg";
import DiscordIcon from "../../assets/icons/new/discord.svg";
import TwitterIcon from "../../assets/icons/new/twitter.svg";

export const SocialIcons = () => {

  return (
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
  );
};
