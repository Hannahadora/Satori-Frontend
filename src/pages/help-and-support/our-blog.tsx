import { BiChevronLeft } from "react-icons/bi";
import { Link } from "react-router-dom";

const OurBlog = () => {
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
          Our Blog
        </h3>

        <p className="md:leading-[36px] leading-[28px] md:mt-[40px] mt-[20px] text-[0E606E] md:text-[28px] text-[20px]">
          Welcome to the enlightening world of Satori Mental Health's blog
          articles, where knowledge meets compassion, and insight meets
          inspiration. Our blog is a treasure trove of valuable content
          dedicated to enhancing your understanding of mental health, promoting
          self-care, and guiding you on a path of personal growth.
        </p>

        <ul className="my-[40px] md:leading-[36px] leading-[28px] text-[0E606E] md:text-[28px] text-[20px] list-disc list-inside">
          <li>
            <b>Diverse Topics, Holistic Approach:</b> Our blog covers a wide
            spectrum of topics, ranging from anxiety and depression to
            mindfulness practices, self-discovery, and relationship dynamics. We
            believe in addressing mental health from a holistic perspective,
            embracing the multifaceted nature of well-being.
          </li>
          <br />
          <br />
          <li>
            <b>Practical Tips and Techniques:</b> Beyond awareness, our blog
            offers practical tips, techniques, and actionable steps you can
            incorporate into your daily life. Whether it's managing stress,
            improving relationships, or boosting self-esteem, our articles
            provide real-world guidance.
          </li>
          <br />
          <br />
          <li>
            <b>Navigating Challenges and Celebrating Triumphs:</b>
            We're here to help you navigate challenges and celebrate your
            triumphs. Our blog is a space where you can find strategies to
            overcome obstacles, cope with setbacks, and savor your achievements.
          </li>
          <br />
          <br />
          <li>
            <b>Supportive Community Engagement:</b>
            Each blog article sparks discussions in our vibrant community. Share
            your thoughts, engage in meaningful conversations, and connect with
            others who share your journey to mental well-being.
          </li>
          <br />
          <br />
          <li>
            <b>Constant Learning and Growth:</b> The journey to better mental
            health is a continuous one. Our regularly updated blog ensures that
            you're always learning, growing, and discovering new ways to enhance
            your emotional well-being.
          </li>
          <br />
          <br />

          <li>
            <b>Resourceful and Accessible:</b> Our blog is readily accessible,
            available at your convenience. Whether you're seeking guidance
            during a quiet moment or exploring topics on-the-go, our articles
            are just a click away.
          </li>
          <br />
          <br />
          <li>
            <b>Empowering Your Journey:</b> Satori Mental Health's blog articles
            are more than words on a page. They are a means to empower your
            journey—inspiring you to embrace your uniqueness, fostering
            understanding, and nurturing the belief that your mental well-being
            is worth investing in.
          </li>
          <br />
          <br />
        </ul>
      </div>
    </main>
  );
};

export default OurBlog;
