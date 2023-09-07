
const CommunityData = () => {
  return (
    <main className="app-container pt-[80px]">
      <main className="bg-[#F9F9F9] px-[24px] py-[40px]">
        <div className="text-center">
          <p>Become part of our</p>
          <h4 className="text-[36px]">Community</h4>
        </div>
        <div className="my-[40px] text-center flex items-center justify-center">
            <div className="p-[16px]">
                <p className="text-[#179EB5] md:text-[36px] text-[30px] font-[700]">100+</p>
                <p className="text-[#353B3C]">Members</p>
            </div>
            <div className="p-[16px]">
                <p className="text-[#179EB5] md:text-[36px] text-[30px] font-[700]">16+</p>
                <p className="text-[#353B3C]">Advocates</p>
            </div>
            <div className="p-[16px]">
                <p className="text-[#179EB5] md:text-[36px] text-[30px] font-[700]">25+</p>
                <p className="text-[#353B3C]">Enthusiasts</p>
            </div>
        </div>
        <div className="lg:w-[20%] md:w-[50%] w-auto mx-auto flex items-center justify-center">
        <button className="w-full pry-btn text-[18px] px-[16px] py-[8px] rounded-[100px]">Join Now</button>
      </div>
      </main>
    </main>
  );
};

export default CommunityData;
