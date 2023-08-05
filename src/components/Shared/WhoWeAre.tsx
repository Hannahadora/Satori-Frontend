const WhoWeAre = () => {
  return (
    <>
      <main className="app-container py-[60px]">
        <div className="lg:mx-[80px] flex lg:flex-row flex-col items-center justify-between">
          <article className="lg:w-[50%] w-full lg:mr-[120px] mr-[0] lg:text-left text-center">
            <h3 className="lg:mb-[22px] mb-[20px] lg:text-[40px] text-[30px] lg:text-left text-center">
              Who we are
            </h3>
            <p className="lg:mb-[22px] mb-[20px]">
              We are a dedicated group of passionate youth working tirelessly to
              breakdown the barriers and eradicate the stigma surrounding mental
              health in Nigeria.
            </p>
            <p className="lg:mb-[22px] mb-[20px]">
              We aim to create a safe and inclusive space where individuals can
              freely express themselves, seek support and find the resources
              they need to navigate their mental health journey.
            </p>
            <p className="lg:mb-[22px] mb-[20px]">
              We firmly believe that every individual deserves compassion,
              understanding and access to the support they need for their mental
              well-being.
            </p>
          </article>

          <article className="lg:w-[40%] w-full bg-[#F5E8D7] rounded-[32px] lg:p-[24px] p-[20px]">
            <div className="rounded-[16px] p-[20px] border border-[#D3D7D7] bg-[#fff] mb-[24px] lg:text-left text-center">
              <p className="sub-title_01">Our Mission</p>
              <p className="mt-[10px]">
                To empower individuals across Nigeria to prioritise their mental
                health and embrace a life of emotional well being.
              </p>
            </div>
            <div className="rounded-[16px] p-[20px] border border-[#D3D7D7] bg-[#fff] lg:text-left text-center">
              <p className="sub-title_01">Our Vision</p>
              <p className="mt-[10px]">
                We envision a Nigeria where mental health is openly discussed,
                understood and prioritized.{" "}
              </p>
            </div>
          </article>
        </div>
      </main>
    </>
  );
};

export default WhoWeAre;
