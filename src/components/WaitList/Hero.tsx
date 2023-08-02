import hero_bg from "../../assets/images/home-hero.png";
// import JoinWaitListBtn from "../JoinWaitListBtn";

const Header = () => {
  return (
    <>
      <main className="app-container relative lg:pt-[140px] md:pt-[120px] pt-[110px] pb-[60px]">
        <div className="flex lg:flex-row flex-col items-center justify-center">
          <div className="lg:w-[60%] w-full lg:mr-[65px] mr-[0] flex flex-col lg:items-start items-center lg:text-left text-center">
            <p className="lg:leading-[64px] mb-[32px] font-[500] lg:text-[56px] text-[32px] hero-text">
              Transform your <br />
              <span className="lg:leading-[89px] lg:text-[78px] text-[48px] font-[700]">
                Mental Health
              </span>{" "}
              <br /> and Empower your life
            </p>
            <p className="lg:mb-[120px] mb-[60px] lg:text-[24px] text-[16px] lg:leading-[34px]">
              Embrace a healthier mind and happier life with Satori, your path
              to mental well-being and personal growth.
            </p>

            <div className="max-w-[336px] lg:w-[100%] w-[80%]">
              <button type="button" className="btn pry-btn py-[8px] px-[16px]">
                <a className="w-full m-0 p-0" href="#waitlist-section">
                  Join our waitlist
                </a>
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
