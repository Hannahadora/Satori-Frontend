import {
  BiSolidKey,
  BiSolidLock,
  BiSolidUser,
  BiSolidNotepad,
} from "react-icons/bi";
import communityIcon from "../assets/icons/people_icon.svg";
import satoriIcon from "../assets/images/satori-part-logo.png";
import { Link } from "react-router-dom";

const HelpAndSupport = () => {
  return (
    <main className="md:my-[130px] my-[80px]">
      <div className="app-container">
        <div className="lg:w-[45%] md-[80%] w-full mx-auto">
          <h3 className="font-ubuntu lg:text-[48px] md:text-[40px] text-[32px] lg:leading-[60px] font-[700] text-[#010809] text-center">
            How may we help you
          </h3>
          <div className="md:mt-[48px] mt-[24px] flex items-center justify-center">
            <input
              type="text"
              placeholder="&#x1F50E;&#xFE0E; Search"
              className="text-[14px] w-full px-[12px] py-[8px] border border-[#99A3A5] rounded-[100px]"
            />
          </div>
        </div>

        <div className="md:mt-[112px] mt-[80px]">
          <div className="w-full flex flex-row flex-wrap items-start xl:justify-between justify-center xl:space-x-0 lg:space-x-[24px] md:space-x-[16px] ">
            <Link to={"/help-and-support/account-settings"}>
              <article className="lg:max-w-[385px] md:max-w-[300px] w-[100%] hover:border-2 hover:border-[#0e606e] md:mb-[80px] mb-[40px] lg:px-[32px] px-[30px] lg:py-[32px] py-[30px] bg-[#F1FBFD] rounded-[32px] text-center flex flex-col items-center justify-center">
                <BiSolidUser className="w-[60px] h-[60px]" />
                <p className="md:mt-[24px] mt-[18px] md:text-[24px] text-[20px] font-[600] text-[#0A0E0F]">
                  Account Settings
                </p>
                <p className="h-[112px] md:text-[20px] text-[18px] mt-[8px]">
                  Adjust settings, manage notifications, learn about changes,
                  about suspended account and more.
                </p>
              </article>
            </Link>
            <Link to={"/help-and-support/login-and-password"}>
              <article className="lg:max-w-[385px] md:max-w-[300px] w-[100%] hover:border-2 hover:border-[#0e606e] md:mb-[80px] mb-[40px] lg:px-[32px] px-[30px] lg:py-[32px] py-[30px] bg-[#F1FBFD] rounded-[32px] text-center flex flex-col items-center justify-center">
                <BiSolidKey className="w-[60px] h-[60px]" />
                <p className="md:mt-[24px] mt-[18px] md:text-[24px] text-[20px] font-[600] text-[#0A0E0F]">
                  Login and password
                </p>
                <p className="h-[112px] md:text-[20px] text-[18px] mt-[8px]">
                  Fix login issues and learn how to change or reset your
                  password.
                </p>
              </article>
            </Link>
            <Link to={"/help-and-support/privacy-and-security"}>
              <article className="lg:max-w-[385px] md:max-w-[300px] w-[100%] hover:border-2 hover:border-[#0e606e] md:mb-[80px] mb-[40px] lg:px-[32px] px-[30px] lg:py-[32px] py-[30px] bg-[#F1FBFD] rounded-[32px] text-center flex flex-col items-center justify-center">
                <BiSolidLock className="w-[60px] h-[60px]" />
                <p className="md:mt-[24px] mt-[18px] md:text-[24px] text-[20px] font-[600] text-[#0A0E0F]">
                  Privacy and security
                </p>
                <p className="h-[112px] md:text-[20px] text-[18px] mt-[8px]">
                  Control who can see what you share and add extra protection to
                  your account.
                </p>
              </article>
            </Link>
            <Link to={"/help-and-support/using-satori"}>
              <article className="lg:max-w-[385px] md:max-w-[300px] w-[100%] hover:border-2 hover:border-[#0e606e] md:mb-[80px] mb-[40px] lg:px-[32px] px-[30px] lg:py-[32px] py-[30px] bg-[#F1FBFD] rounded-[32px] text-center flex flex-col items-center justify-center">
                <img
                  className="w-[60px] h-[60px]"
                  src={satoriIcon}
                  alt="satori"
                />
                <p className="md:mt-[24px] mt-[18px] md:text-[24px] text-[20px] font-[600] text-[#0A0E0F]">
                  Using Satori
                </p>
                <p className="h-[112px] md:text-[20px] text-[18px] mt-[8px]">
                  Signing up with satori, about satori, about therapist.
                </p>
              </article>
            </Link>
            <Link
              className="md:w-auto w-full"
              to={"/help-and-support/community"}
            >
              <article className="lg:max-w-[385px] md:max-w-[300px] w-[100%] hover:border-2 hover:border-[#0e606e] md:mb-[80px] mb-[40px] lg:px-[32px] px-[30px] lg:py-[32px] py-[30px] bg-[#F1FBFD] rounded-[32px] text-center flex flex-col items-center justify-center">
                <img
                  className="w-[60px] h-[60px]"
                  src={communityIcon}
                  alt="people"
                />
                <p className="md:mt-[24px] mt-[18px] md:text-[24px] text-[20px] font-[600] text-[#0A0E0F]">
                  Community
                </p>
                <p className="h-[112px] md:text-[20px] text-[18px] mt-[8px]">
                  Ask questions about our community
                </p>
              </article>
            </Link>
            <Link
              className="md:w-auto w-full"
              to={"/help-and-support/our-blog"}
            >
              <article className="lg:max-w-[385px] md:max-w-[300px] w-[100%] hover:border-2 hover:border-[#0e606e] md:mb-[80px] mb-[40px] lg:px-[32px] px-[30px] lg:py-[32px] py-[30px] bg-[#F1FBFD] rounded-[32px] text-center flex flex-col items-center justify-center">
                <BiSolidNotepad className="w-[60px] h-[60px]" />
                <p className="md:mt-[24px] mt-[18px] md:text-[24px] text-[20px] font-[600] text-[#0A0E0F]">
                  Satori Blog
                </p>
                <p className="h-[112px] md:text-[20px] text-[18px] mt-[8px]">
                  Ask questions related to our blogs and articles
                </p>
              </article>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HelpAndSupport;
