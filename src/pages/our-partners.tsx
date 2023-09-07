import "../style/our-partners.css";
import holdingHands from "../assets/images/holding-hamds.png";
import partneringBlock from "../assets/images/partnering-block.png";
import bushaIcon from '../assets/icons/busha_icon.svg'
import techCityIcon from '../assets/icons/techcity_icon.svg'
import ehealthAfrica from '../assets/icons/ehealth_africa.svg'
import eyowo from '../assets/icons/eyowo.svg'
import zebrox from '../assets/icons/zebrox.svg'

const ourPartners = () => {
  return (
    <div className="mt-[130px]">
      <div className="app-container">
        <div className="lg:w-[60%] md-[80%] w-full mx-auto">
          <h3 className="lg:text-[78px] md:text-[50px] text-[36px] lg:leading-[70px] font-[700] text-[#242331] text-center">
            Our Partners
          </h3>
          <p className="text-[#797979] md:text-[24px] text-[20px] text-center mt-[12px] font-[500]">
            Discover our esteemed network of valued partners who collaborate
            with us to achieve shared goals and deliver exceptional solutions
          </p>
        </div>

        <div className="md:mt-[64px] mt-[40px] flex md:flex-row flex-col items-center justify-between ">
          <div className="md:mr-[16px]">
            <img className="w-full h-full" src={holdingHands} alt="illustration" />
          </div>
          <div className="">
            <img className="w-full h-full" src={partneringBlock} alt="illustration" />
          </div>
        </div>

        <div className="md:mt-[80px] mt-[40px] md:mb-[100px] mb-[60px] bg-[#151718] rounded-[24px]">
          <div className="mx-auto pt-[65px] pb-[30px] px-[32px] sm:space-x-[20px] flex flex-wrap items-center justify-center">
            <div className="partners-card mb-[24px]">
                <img src={bushaIcon} alt="icon" />
                <p className="text-[14px] text-[#f9f9f9] mt-[24px] text-center">Unlocking the future with our innovative technology partner, driving digital transformation and elevating user experiences.</p>
            </div>
            <div className="partners-card mb-[24px]">
                <img src={techCityIcon} alt="icon" />
                <p className="text-[14px] text-[#f9f9f9] mt-[24px] text-center">Empowering data-driven decisions with our strategic partner, providing cutting-edge analytics solutions for actionable insights.</p>
            </div>
            <div className="partners-card mb-[24px]">
                <img src={ehealthAfrica} alt="icon" />
                <p className="text-[14px] text-[#f9f9f9] mt-[24px] text-center">Joining hands with our healthcare partner to promote holistic well-being and enhance mental health care accessibility.</p>
            </div>
            <div className="partners-card mb-[24px]">
                <img src={eyowo} alt="icon" />
                <p className="text-[14px] text-[#f9f9f9] mt-[24px] text-center">Paving the way for sustainable progress alongside our environmental partner, working towards a greener, eco-conscious future.</p>
            </div>
            <div className="partners-card mb-[24px]">
                <img src={zebrox} alt="icon" />
                <p className="text-[14px] text-[#f9f9f9] mt-[24px] text-center">Fostering creativity with our design and branding partner, crafting captivating visuals that tell impactful stories across the digital space.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ourPartners;
