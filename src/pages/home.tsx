import NewsLetter from "../components/Shared/NewsLetter";
import Hero from "../components/Home/Hero";
import WhyChooseUs from "../components/Shared/WhyChooseUs";
import Reviews from "../components/Home/Reviews"
import CommunityData from "../components/Home/CommunityData";
import { useNavigate } from "react-router-dom";
import Faq from "../components/Home/Faq";

const home = () => {
  const navigate = useNavigate();

  const getStarted = () => {
    navigate("/join-waitlist");
  };
  return (
    <>
      <Hero />
      <WhyChooseUs />

      <div className="max-w-[336px] w-[100%] mx-auto">
        <button
          type="button"
          className="btn pry-btn py-[8px] px-[16px]"
          onClick={getStarted}
        >
          Get Started
        </button>
      </div>
      <Reviews />
      <CommunityData />
      <Faq />
      <NewsLetter />
    </>
  );
};

export default home;
