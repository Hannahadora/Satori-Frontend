
import "../../style/privacy-policy.css";
import { Link } from "react-router-dom";

const Contact = () => {


  return (
    <section id="privacy-contact" className="mt-[80px]">
      <div className="blue_bordered-card text-center py-[40px]">
        <h4 className="lg:text-[56px] md:text-[45px] text-[35px] font-[600] text-[#353B3C] mb-[40px] md:leading-[70px]">
          How can I contact Satori?
        </h4>
        <p className="md:text-[24px] text-[18px] font-[500]">
          <Link className="text-blue-500 font-[500]" to={'/contact-us'}>Slide into our very official inbox.</Link>
        </p>
      </div>

      <div className="mt-[40px]">
        <div className="">
          <article>
            <p className="md:text-[36px] text-[24px] font-[600] mb-[40px] pl-[20px]">
              6. How To Contact Satori
            </p>
            <p className="md:text-[22px] text-[20px] mb-[16px] text-[#353B3C]">
              We want to hear from you if you have thoughts or questions about
              this Privacy Policy. You can contact us via our <Link className="text-blue-500 font-[500]" to={'/contact-us'}>Contact us page</Link> or
              creating a ticket in our <Link className="text-blue-500 font-[500]" to={"/help-and-support"}>help and support page.</Link> <br/><br/> By using our
              Website, you agree to the practices described in this Privacy
              Policy.<br/><br/> We appreciate your trust in us and your commitment to your
              mental well-being journey.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
