import React from "react";

const BottomBanner = () => {
  return (
    <main className="app-container">
      <div className="md:h-[495px] h-[278px] my-[80px]">
        <div className="md:h-[400px] h-[275px] bg-[#F5E8D7] flex items-center justify-center">
          <div className="md:w-[494px] w-[290px] md:h-[494px] h-[275px] bg-[#fff] rounded-full h-full flex flex-col items-center justify-center md:px-[99px] px-[38px] md:py-[73px] py-[30px]">
            <h4 className="lg:text-[56px] md:text-[45px] text-[36px] font-[700] text-center md:leading-[72px] leading-[50px]">
              Take Control of Your Privacy
            </h4>
            <button className="pry-btn rounded-[100px] mt-[24px] px-[20px] py-[8px]">
              Adjust your settings
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BottomBanner;
