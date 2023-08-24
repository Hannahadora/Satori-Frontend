import { BiChevronLeft, BiSolidLock } from "react-icons/bi";
import satoriIcon from "../../assets/images/satori-part-logo.png";
import { Link } from "react-router-dom";

const AccountSettings = () => {
  return (
    <main className="lg:my-[130px] md:my-[100px] my-[80px]">
      <div className="app-container">
        <Link to={"/help-and-support"}>
          <div className="flex items-center lg:mb-[94px] md:mb-[40px] mb-[20px] cursor-pointer">
            <BiChevronLeft className="mr-[8px]" />
            <p className="hover:font-[600] text-[16px]">Back</p>
          </div>
        </Link>

        <h3 className="font-ubuntu lg:text-[48px] md:text-[40px] text-[32px] lg:leading-[60px] font-[700] text-[#010809] text-center">
          Account Settings
        </h3>

        <p className="md:leading-[36px] leading-[28px] md:mt-[40px] mt-[20px] text-[0E606E] md:text-[28px] text-[20px]">
          You can manage settings for your Satori account at any time. Update
          your contact information, adjust your Satori settings, change your
          username or choose a legacy contact for your account. Go to your
          profile settings to adjust your settings.
        </p>

        <hr className="md:mt-[102px] mt-[50px] md:mb-[80px] mb-[40px] text-[#E6E8E8]" />

        <p className="text-[32px] font-[500] md:mb-[80px] mb-[40px]">
          Related Topics
        </p>

        <div className="w-full flex flex-row flex-wrap items-start md:justify-start justify-center lg:space-x-[24px] md:space-x-[16px] ">
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
          <Link to={"/help-and-support/privacy-and-security"}>
            <article className="lg:max-w-[385px] md:max-w-[300px] w-[100%] hover:border-2 hover:border-[#0e606e] md:mb-[80px] mb-[40px] lg:px-[32px] px-[30px] lg:py-[32px] py-[30px] bg-[#F1FBFD] rounded-[32px] text-center flex flex-col items-center justify-center">
              <BiSolidLock className="w-[60px] h-[60px]" />
              <p className="md:mt-[24px] mt-[18px] md:text-[24px] text-[20px] font-[600] text-[#0A0E0F]">
                Your Privacy
              </p>
              <p className="h-[112px] md:text-[20px] text-[18px] mt-[8px]">
                Learn how privacy help you learn and stay anonymous...
              </p>
            </article>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default AccountSettings;
