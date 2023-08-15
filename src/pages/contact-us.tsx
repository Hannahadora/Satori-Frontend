import '../style/contact-us.css'
import telephone_icon from '../assets/icons/telephone_icon.svg'
import mail_icon from '../assets/icons/mail_icon.svg'
import location_icon from '../assets/icons/location_icon.svg'
import facebook_icon from '../assets/icons/facebook_line_icon.svg'
import twitter_icon from '../assets/icons/twitter_line_icon.svg'
import instagram_icon from '../assets/icons/instagram_line_icon.svg'
import linkedin_icon from '../assets/icons/linkedin_line_icon.svg'
import ContactUsForm from '../components/ContactUs/Form'

const contactUs = () => {
  return (
    <div className="mt-[160px] mb-[100px]">
      <div className="app-container">
        <h3 className="text-center text-[#555E5F] md:text-[48px] text-[30px] mb-[8px] font-[700]">
          Contact Us
        </h3>
        <p className="text-center text-[#555E5F] md:text-[20px] text-[18px] font-[600]">
          Any question or remarks? Just write us a message!
        </p>

        <div className="contact_us_form_section mt-[58px] flex md:flex-row flex-col items-center py-[10px] pl-[10px] lg:pr-[45px] md:pr-[20px] pr-[0]">
          <div className="md:w-[40%] w-full md:py-[40px] py-[24px] lg:px-[48px] md:px-[24px] px-[16px] lg:rounded-t-[24px] rounded-t-[12px] lg:rounded-bl-[24px] rounded-bl-[12px] lg:rounded-br-[0px] rounded-br-[0px] bg-[#C6F0F8] lg:mr-[50px] md:mr-[20px]">
            <h5 className="md:text-left text-center text-[28px] font-[600] text-[#094049]">
              Contact Information
            </h5>
            <p className="md:text-left text-center mt-[20px] text-[18px] font-[500] text-[#094049]">
              Say something to start a live chat!
            </p>

            <div className="mt-[104px] flex flex-col md:items-start items-center">
              <div className="flex md:flex-row flex-col items-center">
                <img className="lg:mr-[24px] mr-[16px]" src={telephone_icon} alt="phone" />
                <p className="font-[500]">+234 916 207 2203</p>
              </div>
              <div className="mt-[48px] flex md:flex-row flex-col items-center">
                <img className="lg:mr-[24px] mr-[16px]" src={mail_icon} alt="mail" />
                <a href="mailto:hello@satori.ng">hello@satori.ng</a>
              </div>
              <div className="mt-[48px] flex md:flex-row flex-col items-center">
                <img className="lg:mr-[24px] mr-[16px]" src={location_icon} alt="location" />
                <p className="font-[500]">
                  No. 35 Odalume Street, Lagos, Nigeria
                </p>
              </div>
            </div>

            <div className="mt-[184px] flex items-center md:justify-start justify-center">
              <img className="lg:mr-[24px] mr-[20px]" src={twitter_icon} alt="twitter" />
              <img className="lg:mr-[24px] mr-[20px]" src={linkedin_icon} alt="linkedIn" />
              <img className="lg:mr-[24px] mr-[20px]" src={facebook_icon} alt="facebook" />
              <img className="lg:mr-[24px] mr-[20px]" src={instagram_icon} alt="instagram" />
            </div>
          </div>


          <ContactUsForm />
        </div>

      </div>
    </div>
  );
};

export default contactUs;
