import { BiChevronLeft, BiSolidNotepad } from "react-icons/bi";
import communityIcon from "../../assets/icons/people_icon.svg";
import { Link } from "react-router-dom";

const LoginAndPassword = () => {
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
          Login and Password
        </h3>

        <p className="md:leading-[36px] leading-[28px] md:mt-[40px] mt-[20px] text-[0E606E] md:text-[28px] text-[20px]">
          If you forget your current password, you can change it. When you
          create a new password, remember:
        </p>

        <ul className="my-[24px] md:leading-[36px] leading-[28px] text-[0E606E] md:text-[28px] text-[20px] list-disc list-inside">
          <li>
            Your password should be easy for you to remember but difficult for
            others to guess.
          </li>
          <li>
            Your Satori password should be different than the passwords you use
            to log into other accounts, like your email or bank account.
          </li>
          <li>Longer passwords are usually more secure.</li>
          <li>
            Your password should not be your email, phone number or birthday.
          </li>
        </ul>

        <p className="md:leading-[36px] leading-[28px] md:mt-[80px] mt-[40px] text-[0E606E] md:text-[28px] text-[20px]">
          If you have a Satori account and can’t login, try to{" "}
          <Link
            className="text-[#555E5F] font-[500]"
            to={"/help-and-support/account-settings"}
          >
            Reset your password
          </Link>
          .
        </p>

        <hr className="md:mt-[102px] mt-[50px] md:mb-[80px] mb-[40px] text-[#E6E8E8]" />

        <p className="text-[32px] font-[500] md:mb-[80px] mb-[40px]">
          Related Topics
        </p>

        <div className="w-full flex flex-row flex-wrap items-start md:justify-start justify-center lg:space-x-[24px] md:space-x-[16px] ">
          <Link className="md:w-auto w-full" to={"/help-and-support/community"}>
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
          <Link className="md:w-auto w-full" to={"/help-and-support/our-blog"}>
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
    </main>
  );
};

export default LoginAndPassword;
