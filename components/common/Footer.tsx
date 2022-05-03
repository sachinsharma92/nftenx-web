import Image from "next/image";
import { SocialIcons } from "./SocialIcons";

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
            <SocialIcons/>
          </div>
        </div>

      </div>
    </footer>
  );
};
