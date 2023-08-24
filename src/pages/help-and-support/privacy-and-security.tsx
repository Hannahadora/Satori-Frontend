import { BiChevronLeft, BiSolidKey } from "react-icons/bi";
import forbiddenIcon from "../../assets/icons/forbidden.svg";
import { Link } from "react-router-dom";

const PrivacyAndSecurity = () => {
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
          Privacy and Security
        </h3>

        <p className="md:leading-[36px] leading-[28px] md:mt-[40px] mt-[20px] text-[0E606E] md:text-[28px] text-[20px]">
          You can use the{" "}
          <Link to={"/privacy-policy"} className="text-[#555E5F] font-[500]">
            Privacy Policy
          </Link>{" "}
          to review and adjust your profile to make sure you're staying
          anonymous in the community you want. To be sure you continue to stay
          anonymous in the community.
        </p>

        <hr className="md:mt-[102px] mt-[50px] md:mb-[80px] mb-[40px] text-[#E6E8E8]" />

        <p className="text-[32px] font-[500] md:mb-[80px] mb-[40px]">
          Related Topics
        </p>

        <div className="w-full flex flex-row flex-wrap items-start md:justify-start justify-center lg:space-x-[24px] md:space-x-[16px] ">
          <Link to={"/help-and-support/login-and-password"}>
            <article className="lg:max-w-[385px] md:max-w-[300px] w-[100%] hover:border-2 hover:border-[#0e606e] md:mb-[80px] mb-[40px] lg:px-[32px] px-[30px] lg:py-[32px] py-[30px] bg-[#F1FBFD] rounded-[32px] text-center flex flex-col items-center justify-center">
              <img
                className="w-[60px] h-[60px]"
                src={forbiddenIcon}
                alt="satori"
              />

              <p className="md:mt-[24px] mt-[18px] md:text-[24px] text-[20px] font-[600] text-[#0A0E0F]">
                Login and password
              </p>
              <p className="h-[112px] md:text-[20px] text-[18px] mt-[8px]">
                Fix login issues and learn how to change or reset your password.
              </p>
            </article>
          </Link>
          <Link to={"/help-and-support/reporting-abuse"}>
            <article className="lg:max-w-[385px] md:max-w-[300px] w-[100%] hover:border-2 hover:border-[#0e606e] md:mb-[80px] mb-[40px] lg:px-[32px] px-[30px] lg:py-[32px] py-[30px] bg-[#F1FBFD] rounded-[32px] text-center flex flex-col items-center justify-center">
              <BiSolidKey className="w-[60px] h-[60px]" />
              <p className="md:mt-[24px] mt-[18px] md:text-[24px] text-[20px] font-[600] text-[#0A0E0F]">
                Reporting Abuse
              </p>
              <p className="h-[112px] md:text-[20px] text-[18px] mt-[8px]">
                Learn how to report something that goes against Satori community
                rules
              </p>
            </article>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default PrivacyAndSecurity;
