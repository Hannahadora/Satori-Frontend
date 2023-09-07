import { NavLink, Link } from "react-router-dom";
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
            <NavLink
              to="/about-us"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "border-b border-[#fff] font-[700] mb-[12px]"
                  : "mb-[12px]"
              }
            >
              About us
            </NavLink>
            <NavLink
              to="/contact-us"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "border-b border-[#fff] font-[700] mb-[12px]"
                  : "mb-[12px]"
              }
            >
              Contact us
            </NavLink>
            <NavLink
              to="/faqs"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "border-b border-[#fff] font-[700] mb-[12px]"
                  : "mb-[12px]"
              }
            >
              FAQ
            </NavLink>
            <NavLink
              to="/careers"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "border-b border-[#fff] font-[700] mb-[12px]"
                  : "mb-[12px]"
              }
            >
              Careers
            </NavLink>
            <NavLink
              to="/our-partners"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "border-b border-[#fff] font-[700] mb-[12px]"
                  : "mb-[12px]"
              }
            >
              Partners
            </NavLink>
          </div>
          <div className="footer_nav-links md:mt-[0px] mt-[32px]">
            <p className="text-[#F9F9F9] mb-[16px] text-[14px] fomt-[600]">
              Resources
            </p>
            <NavLink
              to="/blog"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "border-b border-[#fff] font-[700] mb-[12px]"
                  : "mb-[12px]"
              }
            >
              Blog
            </NavLink>
            <NavLink
              to="/help-and-support"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "border-b border-[#fff] font-[700] mb-[12px]"
                  : "mb-[12px]"
              }
            >
              Help & Support
            </NavLink>
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
            <NavLink
              to="/terms-of-use"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "border-b border-[#fff] font-[700] mb-[12px]"
                  : "mb-[12px]"
              }
            >
              Terms
            </NavLink>
            <NavLink
              to="/privacy-policy"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "border-b border-[#fff] font-[700] mb-[12px]"
                  : "mb-[12px]"
              }
            >
              Privacy policy
            </NavLink>
            <NavLink
              to="/cookies"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "border-b border-[#fff] font-[700] mb-[12px]"
                  : "mb-[12px]"
              }
            >
              Cookies
            </NavLink>
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
