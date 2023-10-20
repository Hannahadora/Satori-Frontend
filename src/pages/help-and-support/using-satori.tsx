import { BiChevronLeft } from "react-icons/bi";
import { Link } from "react-router-dom";

const UsingSatori = () => {
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
          Using Satori
        </h3>

        <p className="md:leading-[36px] leading-[28px] md:mt-[40px] mt-[20px] text-[0E606E] md:text-[28px] text-[20px]">
          Welcome to the Satori Mental Health application, a dedicated platform
          designed to support your mental well-being journey. This guide will
          walk you through the essential steps to make the most of our app and
          its features.
        </p>

        <ul className="my-[24px] md:leading-[36px] leading-[28px] text-[0E606E] md:text-[28px] text-[20px] list-disc list-inside">
          <li>
            <b>Install:</b> Install the Satori Mental Health app
          </li>
          <br />
          <br />
          <li>
            <b>Sign Up or Log In:</b> Create an account using your email or log
            in if you already have one.
          </li>
          <br />
          <br />
          <li>
            <b>Explore the Home page:</b> Once logged in, you'll find the
            dashboard as the starting point. Here, you'll access various
            features and tools.
          </li>
          <br />
          <br />
          <li>
            <b>Profile Setup:</b> Complete your profile with basic information.
            This helps personalize your experience and connect with others in
            the community.
          </li>
          <br />
          <br />
          <li>
            <b>Discover Content:</b> Navigate to the "Insights" section to
            access a wealth of valuable content related to mental health,
            self-care, and personal growth.
          </li>
          <br />
          <br />

          <li>
            <b>Join the Community:</b> Engage with like-minded individuals in
            the Satori Mental Health Community. Share your thoughts,
            experiences, and find support.
          </li>
          <br />
          <br />
          <li>
            <b>Notifications and Updates:</b> Stay informed about new articles,
            community discussions, and events through app notifications.
          </li>
          <br />
          <br />
          <li>
            <b>Help:</b> Have a question or need assistance? Reach out to our
            help team directly through the "Help" section in your profile
            settings.
          </li>
          <br />
          <br />
          <li>
            <b>Customize Your Experience:</b> Adjust app settings according to
            your preferences. This may include notification preferences, account
            settings, and more.
          </li>
          <br />
          <br />
          <li>
            <b>Stay Connected:</b> Connect your social media accounts, if
            available, to share valuable insights and resources with your
            network.
          </li>
          <br />
          <br />
        </ul>

        <p className="md:leading-[36px] leading-[28px] md:mt-[40px] mt-[40px] text-[0E606E] md:text-[28px] text-[20px]">
          If you find value in the Satori Mental Health app, share it with
          friends, family, and colleagues who may benefit from its features.
        </p>
      </div>
    </main>
  );
};

export default UsingSatori;
