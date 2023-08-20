import BottomBanner from "../components/PrivacyPolicy/BottomBanner";
import DataWeCollect from "../components/PrivacyPolicy/DataWeCollect";
import HowWeUseInfo from "../components/PrivacyPolicy/HowWeUseInfo";

const privacyPolicy = () => {
  return (
    <div className="mt-[130px]">
      <div className="app-container">
        <div className="lg:w-[60%] md-[80%] w-full mx-auto">
        <h3 className="lg:text-[56px] md:text-[45px] text-[35px] lg:leading-p[70px] font-[700] text-[#010809] text-center">
          Satori Privacy Policy
        </h3>
        <p className="text-[#010809] text-[18px] text-center mt-[12px] font-[500]">
          Effective Date: 30th September, 2023
        </p>
        <p className="text-[#808C8E] text-[22px] text-center mt-[24px] font-[500]">
          Want to better understand your privacy controls, using Satori and so
          much more, We’ll show you in the most human way possible
        </p>
        <p className="text-[#179EB5] text-[32px] text-center mt-[34px] font-[700]">
          Before you scroll
        </p>
        </div>

        <div className="lg:px-[40px] mt-[40px] mb-[80px] text-center">
          <p className="text-[#808C8E] text-[22px] font-[500]">
            At Satori, your privacy is our priority. We want to make it easy for
            you to understand how we protect your personal information. Our
            user-friendly Privacy Policy empowers you to stay in control when
            using our platform.
          </p>
          <p className="text-[#808C8E] text-[22px] mt-[40px] font-[500]">
            Our Privacy Policy is designed with your well-being in mind. We
            believe in empowering you to make informed decisions about your
            personal information.
          </p>
          <p className="text-[#808C8E] text-[22px] mt-[40px] font-[500]">
            We've carefully crafted this policy to explain what information we
            collect, how we use it, and when it's shared. Though we must meet
            legal requirements, we've simplified the process to prioritize your
            privacy.
          </p>
          <p className="text-[#808C8E] text-[22px] mt-[40px] font-[500]">
            Trust us to keep your data secure as we create a supportive space
            for you on Satori. Your mental well-being matters, and we're here to
            safeguard your privacy every step of the way.
          </p>
          <p className="text-[#808C8E] text-[22px] mt-[40px] font-[500]">
            So, even if you don't read every word of the Privacy Policy, at
            least, know this:
          </p>
        </div>

        <div className="w-full flex flex-row flex-wrap items-start justify-between">
          <div className="border border-[#C0C5C6] rounded-[16px] p-[16px] text-center max-w-[360px] w-[100%] lg:mb-[80px] md:mb-[40px] mb-[24px]">
            <h5 className="text-[36px] font-[700] text-[#353B3C] mb-[36px]">
              We collect some data about you.
            </h5>
            <a className="text-[16px] font-[700] text-[#0E606E]" href="#data-we-collect">Learn what data we collect</a>
          </div>
          <div className="border border-[#C0C5C6] rounded-[16px] p-[16px] text-center max-w-[360px] w-[100%] lg:mb-[80px] md:mb-[40px] mb-[24px]">
            <h5 className="text-[36px] font-[700] text-[#353B3C] mb-[36px]">
            We value and protect your data
            </h5>
            <a className="text-[16px] font-[700] text-[#0E606E]" href="">Learn how we protect your data</a>
          </div>
          <div className="border border-[#C0C5C6] rounded-[16px] p-[16px] text-center max-w-[360px] w-[100%] lg:mb-[80px] md:mb-[40px] mb-[24px]">
            <h5 className="text-[36px] font-[700] text-[#353B3C] mb-[36px]">
            We use your data to make Satori better
            </h5>
            <a className="text-[16px] font-[700] text-[#0E606E]" href="#how-we-use-info-collected">Learn how we use your data</a>
          </div>
          <div className="border border-[#C0C5C6] rounded-[16px] p-[16px] text-center max-w-[360px] w-[100%] lg:mb-[80px] md:mb-[40px] mb-[24px]">
            <h5 className="text-[36px] font-[700] text-[#353B3C] mb-[36px]">
            Satori is not for under 18
            </h5>
            <a className="text-[16px] font-[700] text-[#0E606E]" href="">Learn who can use Satori</a>
          </div>
          <div className="border border-[#C0C5C6] rounded-[16px] p-[16px] text-center max-w-[360px] w-[100%] lg:mb-[80px] md:mb-[40px] mb-[24px]">
            <h5 className="text-[36px] font-[700] text-[#353B3C] mb-[36px]">
            You can control your experience
            </h5>
            <a className="text-[16px] font-[700] text-[#0E606E]" href="">Learn how to update your settings</a>
          </div>
          <div className="border border-[#C0C5C6] rounded-[16px] p-[16px] text-center max-w-[360px] w-[100%] lg:mb-[80px] md:mb-[40px] mb-[24px]">
            <h5 className="text-[36px] font-[700] text-[#353B3C] mb-[36px]">
            If you have questions, just ask
            </h5>
            <a className="text-[16px] font-[700] text-[#0E606E]" href="">Learn how to contact us</a>
          </div>
        </div>

        <DataWeCollect />
        <HowWeUseInfo />
        <BottomBanner />
      </div>
    </div>
  );
};

export default privacyPolicy;
