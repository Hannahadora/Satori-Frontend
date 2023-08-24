import { BiChevronLeft } from "react-icons/bi";
import { Link } from "react-router-dom";

const community = () => {
  return (
    <main className="lg:my-[130px] md:my-[100px] my-[80px]">
      <div className="app-container">
        <Link to={"/help-and-support"}>
          <div className="flex items-center lg:mb-[94px] md:mb-[40px] mb-[20px] cursor-pointer">
            <BiChevronLeft className="mr-[8px]" />
            <p className="hover:font-[600] text-[16px]">Back</p>
          </div>
        </Link>

        <h3 className="font-ubuntu lg:text-[48px] md:text-[40px] text-[32px] lg:leading-[60px] font-[700] text-[#010809] text-center">
          Community
        </h3>

        <p className="md:leading-[36px] leading-[28px] md:mt-[40px] mt-[20px] text-[0E606E] md:text-[28px] text-[20px]">
          We have two community platforms, WhatsApp and our App. On WhatsApp, we
          grow a community where you can get real time updates on Satori and
          partake in developing Satori for the better. In our App, the Satori
          community is a warm and judgment-free zone that encourages open and
          honest conversations about mental health. Our commitment to anonymity
          ensures you can express yourself authentically while maintaining the
          privacy you desire.
        </p>
        <p className="md:leading-[36px] leading-[28px] mt-[20px] text-[0E606E] md:text-[28px] text-[20px]">
          We prioritize user privacy. You can engage in community discussions
          without using your name. We use generated avatars that we shuffle to
          represent user profiles.
        </p>
        <p className="md:leading-[36px] leading-[28px] mt-[20px] text-[0E606E] md:text-[28px] text-[20px]">
          The community guidelines in place to maintain a positive and safe
          environment for all users. These guidelines promote respectful
          communication, inclusivity, and the encouragement of others.
        </p>
      </div>
    </main>
  );
};

export default community;
