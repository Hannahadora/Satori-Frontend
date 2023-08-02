import { Link } from "react-router-dom";
import footerLogo from "../../assets/images/footer-logo.png";
import facebook_icon from "../../assets/icons/facebook-icon.svg";
import twitter_icon from "../../assets/icons/twitter-icon.svg";
import instagram_icon from "../../assets/icons/instagram-icon.svg";
import whatsapp_icon from "../../assets/icons/whatsapp-icon.svg";
import linkedIn_icon from "../../assets/icons/linkedin-icon.svg";
import "../../style/footer.css";

const Footer = () => {
  return (
    <main className="bg-[#021012] pt-[64px] pb-[48px]">
      <div className="app-container w-full mt-[116px] mb-[34px] flex items-start justify-between">
        <div className="w-[15%]">
          <img src={footerLogo} alt="logo" />
        </div>

        <section className="w-[70%] flex flex-row items-start justify-between mb-[96px]">
          <div className="footer_nav-links">
            <p className="text-[#F9F9F9] mb-[16px] text-[14px] fomt-[600]">
              Company
            </p>
            <Link className="mb-[12px]" to="/about-us">
              About us
            </Link>
            <Link className="mb-[12px]" to="/contact-us">
              Contact us
            </Link>
            <Link className="mb-[12px]" to="/faq">
              FAQ
            </Link>
            <Link className="mb-[12px]" to="/careers">
              Careers
            </Link>
            <Link className="mb-[12px]" to="/partners">
              Partners
            </Link>
          </div>
          <div className="footer_nav-links">
            <p className="text-[#F9F9F9] mb-[16px] text-[14px] fomt-[600]">
              Resources
            </p>
            <Link className="mb-[12px]" to="/blog">
              Blog
            </Link>
            <Link className="mb-[12px]" to="/help-centre">
              Help centre
            </Link>
            <Link className="mb-[12px]" to="/support">
              Support
            </Link>
          </div>
          <div className="footer_nav-links">
            <p className="text-[#F9F9F9] mb-[16px] text-[14px] fomt-[600]">
              Social
            </p>
            <Link className="mb-[12px]" to="/">
              Twitter
            </Link>
            <Link className="mb-[12px]" to="/">
              LinkedIn
            </Link>
            <Link className="mb-[12px]" to="/">
              Facebook
            </Link>
            <Link className="mb-[12px]" to="/">
              Instagram
            </Link>
          </div>
          <div className="footer_nav-links">
            <p className="text-[#F9F9F9] mb-[16px] text-[14px] fomt-[600]">
              Legal
            </p>
            <Link className="mb-[12px]" to="/">
              Terms
            </Link>
            <Link className="mb-[12px]" to="/">
              Privacy policy
            </Link>
            <Link className="mb-[12px]" to="/">
              Cookies
            </Link>
          </div>
        </section>
      </div>

      <div className="app-container flex items-center justify-between">
        <p className="text-[#99A3A5]">
          © {new Date().getFullYear()} Satori Mental Health. All rights
          reserved.
        </p>

        <section className="flex items-center">
          <Link className="mr-[24px]" to="https://www.instagram.com">
            <img src={instagram_icon} alt="instagram_icon" />
          </Link>
          <Link className="mr-[24px]" to="https://www.twitter.com/" target="_blank">
            <img src={twitter_icon} alt="twitter_icon" />
          </Link>
          <Link className="mr-[24px]" to="https://www.linkedIn.com/" target="_blank">
            <img src={linkedIn_icon} alt="linkedIn_icon" />
          </Link>
          <Link className="mr-[24px]" to="https://www.facebook.com/" target="_blank">
            <img src={facebook_icon} alt="facebook_icon" />
          </Link>
          <Link className="mr-[24px]" to="https://www.whatsapp.com/" target="_blank">
            <img src={whatsapp_icon} alt="whatsapp_icon" />
          </Link>
        </section>
      </div>
    </main>
  );
};

export default Footer;
