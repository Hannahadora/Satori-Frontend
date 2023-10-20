import "../../style/contact-us.css";
import letter_send from "../../assets/images/letter_send_1.png"

const Form = () => {
  return (
    <div className="md:w-[60%] w-[100%] md:mt-[20px] mt-[60px]">
      <form className="w-full">
        <div className=" flex flex-col items-start">
          <input
            className="w-full contact_us_form-input px-[12px] py-[4px] mb-[24px]"
            type="text"
            placeholder="Name"
          />
          <input
            className="w-full contact_us_form-input px-[12px] py-[4px] mb-[24px]"
            type="email"
            placeholder="Email"
          />
          <input
            className="w-full contact_us_form-input px-[12px] py-[4px] mb-[24px]"
            type="text"
            placeholder="Phone Number"
          />
        </div>

        <div className="mt-[30px]">
          <label className="text-[#0A0E0F] font-[600]">Select Subject</label>
          <div className="mt-[14px] flex md:flex-nowrap flex-wrap items-center">
            <div className="flex items-center mr-[24px]">
              <input
                className="mr-[8px]"
                type="radio"
                name="messageSubject"
                id="generalInquiry"
              />
              <label
                className="text-[12px] font-[500] text-[#0A0E0F"
                htmlFor="generalInquiry"
              >
                General Inquiry
              </label>
            </div>
            <div className="flex items-center mr-[24px]">
              <input
                className="mr-[8px]"
                type="radio"
                name="messageSubject"
                id="partnerships"
              />
              <label
                className="text-[12px] font-[500] text-[#0A0E0F"
                htmlFor="partnerships"
              >
                Partnerships
              </label>
            </div>
            <div className="flex items-center mr-[24px]">
              <input
                className="mr-[8px]"
                type="radio"
                name="messageSubject"
                id="appIssues"
              />
              <label
                className="text-[12px] font-[500] text-[#0A0E0F"
                htmlFor="appIssues"
              >
                App Issues
              </label>
            </div>
          </div>
        </div>

        <textarea
          className="w-full h-[200px] mt-[33px] w-full contact_us_form-input px-[12px] py-[4px]"
          placeholder="Write your message here"
          name=""
          id=""
        ></textarea>

        <div className="mt-[36px] flex flex-col items-end justify-end">
          <div className="w-[30%]">
          <button className="self-end w-full pry-btn rounded-[100px] px-[16px] py-[8px] text-[16px] font-[600]">
            Submit
          </button>
          </div>
          <img className="mt-[-30px] mr-[20px]" src={letter_send} alt="letter send" />
        </div>
      </form>
    </div>
  );
};

export default Form;
