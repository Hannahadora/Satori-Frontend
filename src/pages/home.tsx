import NewsLetter from "../components/Shared/NewsLetter";
import WhoWeAre from "../components/Shared/WhoWeAre";
import Hero from "../components/Home/Hero";
import Header from "../components/Header";
import WhyChooseUs from "../components/Shared/WhyChooseUs";

const home = () => {
  return (
    <>
      <Header />
      <Hero />
      <WhyChooseUs />

      <div className="max-w-[336px] w-[100%] mx-auto">
        <button type="button" className="btn pry-btn py-[8px] px-[16px]">
          <a className="w-full m-0 p-0" href="">
            Get Started
          </a>
        </button>
      </div>
      <WhoWeAre />
      <NewsLetter />
    </>
  );
};

export default home;
