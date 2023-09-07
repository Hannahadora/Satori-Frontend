import { useRef, useLayoutEffect } from "react";
import reasons from "../../../public/json/reasonToChoose";
import { slideDown } from "../../../helpers/gsapAnimations";

const WhyChooseUs = () => {
  const chooseArea = useRef<HTMLElement | any>();

  const handleScroll = () => {
    const chooseAreaElement = chooseArea.current;
    const elementPosition = chooseAreaElement.getBoundingClientRect().top;

    if (elementPosition - window.innerHeight <= 0) {
      slideDown(chooseAreaElement);
      window.removeEventListener("scroll", handleScroll);
    }
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main ref={chooseArea} className="app-container py-[60px]">
      <h3 className="lg:mb-[40px] mb-[30px] lg:text-[40px] text-[30px] text-center">
        Why Choose Satori
      </h3>
      <div className="lg:mx-[80px] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-[24px] gap-y-[32px]">
        {reasons.map((el, i) => (
          <div
            key={i}
            className="relative px-[20px] py-[28px] rounded-[16px] bg-[#F1FBFD]"
          >
            <div className="flex flex-col items-center justify-center text-center">
              {el.comingSoon && (
                <div className="absolute top-[25px] right-[17px] bg-[#B22D17] rounded-[4px] px-[6px] py-[4px]">
                  <p className="text-[#fff] text-[16px] font-[700]">
                    Coming soon
                  </p>
                </div>
              )}
              <div className="w-[60px] h-[60px]">
                <img
                  src={el.icon}
                  alt={`${el.title}-icon`}
                  className="mb-[10px]"
                />
              </div>
              <p className="sub-title_01">{el.title}</p>
              <p>{el.note}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default WhyChooseUs;
