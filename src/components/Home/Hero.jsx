import React from "react";
import hero_bg from "../../assets/home_hero.png";
// import JoinWaitListBtn from "../JoinWaitListBtn";

const Header = () => {
  return (
    <>
      <main className="app-container relative lg:pt-[140px] md:pt-[120px] pt-[110px] pb-[60px]">
        <div className="flex lg:flex-row flex-col items-center justify-center">
          <div className="lg:w-[50%] w-full lg:mr-[65px] mr-[0] flex flex-col lg:items-start items-center lg:text-left text-center">
            <h1 className="mb-[32px] lg:text-[60px] text-[40px] hero-text">
              Revolutionizing mental health, empowering lives
            </h1>
            <h2 className="lg:mb-[120px] mb-[60px] lg:text-[28px] text-[20px]">
              Ready to embark on a transformative journey towards mental health
              and well-being?
            </h2>

            <div className="lg:w-[40%] w-[70%]">
              <button type="button" className="btn pry-btn py-[12px]">
                <a className="w-full" href="#waitlist-section">Join our waitlist</a>
              </button>
            </div>
          </div>

          <div className="lg:w-[40%] w-full lg:mt-0 mt-[24px]">
            <img src={hero_bg} alt="sample-image" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Header;
