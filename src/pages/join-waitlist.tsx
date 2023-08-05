import NewsLetter from "../components/Shared/NewsLetter";
import WhoWeAre from "../components/Shared/WhoWeAre";
import Hero from "../components/WaitList/Hero";
import Header from "../components/JWLHeader";
import logo from "../assets/images/satori-logo.png";
import WhyChooseUs from "../components/Shared/WhyChooseUs";

const waitlist = () => {
  return (
    <>
      <Header />
      <Hero />
      <WhyChooseUs />
      <WhoWeAre />
      <NewsLetter />
      <div className="border-t border-[#E2E8F0] my-[24px]">
        <div className="flex items-center justify-center mb-[20px] mt-[50px]">
          <img src={logo} className="h-[58px] w-[174px]" alt="logo" />
        </div>
        <p className="text-[14px] text-center text-[#71717A]">
          © Copyright {new Date().getFullYear()}, All Rights Reserved{" "}
        </p>
      </div>
    </>
  );
};

export default waitlist;
