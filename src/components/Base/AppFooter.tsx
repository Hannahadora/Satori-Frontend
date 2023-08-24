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
      <div className="app-container w-full mt-[116px] mb-[34px] flex md:flex-row flex-col items-start justify-between">
        <div className="lg:w-[25%] md:w-[40%] mr-[30px] w-full flex md:flex-col flex-row items-start justify-between">
          <Link className="mr-[30px]" to="/">
            <img src={footerLogo} alt="logo" />
          </Link>
          <div className="md:pt-[40px]">
          <p className="text-[#fff] font-500 pb-[16px] ">
            Make a donation to help someone today
          </p>
          <button className="pry-btn rounded-[100px] py-[8px] px-[16px]">
            Make a donation
          </button>
          </div>
        </div>
        <section className="lg:w-[70%] md:w-[60%] md:mt-[0] mt-[40px] w-full grid md:grid-cols-4 grid-cols-2 items-start justify-between mb-[96px]">
          <div className="footer_nav-links md:mt-[0px] mt-[32px]">
            <p className="text-[#F9F9F9] mb-[16px] text-[14px] fomt-[600]">
              Company
            </p>
            <Link className="mb-[12px]" to="/about-us">
              About us
            </Link>
            <Link className="mb-[12px]" to="/contact-us">
              Contact us
            </Link>
            <Link className="mb-[12px]" to="/faqs">
              FAQ
            </Link>
            <Link className="mb-[12px]" to="/careers">
              Careers
            </Link>
            <Link className="mb-[12px]" to="/partners">
              Partners
            </Link>
          </div>
          <div className="footer_nav-links md:mt-[0px] mt-[32px]">
            <p className="text-[#F9F9F9] mb-[16px] text-[14px] fomt-[600]">
              Resources
            </p>
            <Link className="mb-[12px]" to="/blog">
              Blog
            </Link>
            <Link className="mb-[12px]" to="/help-and-support">
              Help & Support
            </Link>
          </div>
          <div className="footer_nav-links md:mt-[0px] mt-[32px]">
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
          <div className="footer_nav-links md:mt-[0px] mt-[32px]">
            <p className="text-[#F9F9F9] mb-[16px] text-[14px] fomt-[600]">
              Legal
            </p>
            <Link className="mb-[12px]" to="/terms-of-use">
              Terms
            </Link>
            <Link className="mb-[12px]" to="/privacy-policy">
              Privacy policy
            </Link>
            <Link className="mb-[12px]" to="/cookies">
              Cookies
            </Link>
          </div>
        </section>
      </div>

      <div className="app-container flex md:flex-row flex-col items-center justify-between">
        <p className="text-[#99A3A5]">
          © {new Date().getFullYear()} Satori Mental Health. All rights
          reserved.
        </p>

        <section className="flex items-center md:mt-0 mt-10">
          <Link className="mr-[24px]" to="https://www.instagram.com">
            <img src={instagram_icon} alt="instagram_icon" />
          </Link>
          <Link
            className="mr-[24px]"
            to="https://www.twitter.com/"
            target="_blank"
          >
            <img src={twitter_icon} alt="twitter_icon" />
          </Link>
          <Link
            className="mr-[24px]"
            to="https://www.linkedIn.com/"
            target="_blank"
          >
            <img src={linkedIn_icon} alt="linkedIn_icon" />
          </Link>
          <Link
            className="mr-[24px]"
            to="https://www.facebook.com/"
            target="_blank"
          >
            <img src={facebook_icon} alt="facebook_icon" />
          </Link>
          <Link
            className="mr-[24px]"
            to="https://www.whatsapp.com/"
            target="_blank"
          >
            <img src={whatsapp_icon} alt="whatsapp_icon" />
          </Link>
        </section>
      </div>
    </main>
  );
};

export default Footer;
