import { useState, useEffect } from "react";
import { IFaq, faqsData } from "../../../public/json/faqsData";
import arrow_up from "../../assets/icons/circle_arrow_up.svg";
import arrow_down from "../../assets/icons/circle_arrow_down.svg";

const Faq = () => {
  const [faqs, setFaqs] = useState(faqsData);
  const [activeBtn, setActiveBtn] = useState('satori') 

  // Use an array of boolean states to manage whether each FAQ's answer is shown or not
  const [showAnswer, setShowAnswer] = useState(new Array(faqs.length).fill(false));


  const toggleShowAnswer = (index: any) => {
    setShowAnswer((prevState) => {
        const newState = prevState.map((state, i) => (i === index ? !state : false));
        return newState;
      });
  };

  useEffect(() => {
    setFaqs(faqsData)
  }, [])
  

  return (
    <div className="app-container pt-[80px]">
      <div className="md:px-[24px] px-[16px] pt-[24px] pb-[40px] bg-[#F5E8D7] rounded-[32px]">
        <div className="lg:w-[30%] md:w-[70%] w-[100%] mb-[30px] mx-auto text-center">
          <h5 className="text-[#021012] md:text-[20px] text-[18px]">
            Frequently asked questions
          </h5>
          <p className="text-[#555E5F] mt-[24px]">
            Find quick answers to frequently asked questions about Satori and
            our community.
          </p>
        </div>
        <div className="py-[24px] lg:w-[70%] w-full mx-auto">
            <div className="flex items-center mb-[24px] md:space-x-[24px] space-x-[16px]">
                <p onClick={() => setActiveBtn('satori')} className={`text-[#353B3C] md:px-[16px] px-[10px] py-[8px] md:text-[18px] rounded-[100px] cursor-pointer ${activeBtn === 'satori' && 'border border-[#353B3C]'}`}>About Satori</p>
                <p onClick={() => setActiveBtn('community')} className={`text-[#353B3C] md:px-[16px] px-[10px] py-[8px] md:text-[18px] rounded-[100px] cursor-pointer ${activeBtn === 'community' && 'border border-[#353B3C]'}`}>About our community</p>
            </div>
          {faqs &&
            faqs.map((faq: IFaq, i: any) => (
              <div key={i} className="md:p-[16px] mt-[16px] p-[5px] border-b border-[#808C8E]">
                <div className="flex items-start justify-between">
                  <div className="mr-[8px] md:w-auto w-[60%]">
                    <p className="md:text-[20px] text-[16px]">{faq.question}</p>
                  </div>
                  <div className="md:w-auto w-[40%] flex items-center justify-end">
                    {!showAnswer[i] && (
                      <h5 className="md:text-[20px] text-[16px] mr-[2px]">{faq.openings}</h5>
                    )}
                    <img
                    onClick={() => toggleShowAnswer(i)}
                    className="cursor-pointer"
                      src={showAnswer[i] ? arrow_down : arrow_up}
                      alt="arrow"
                    />
                  </div>
                </div>
                {showAnswer[i] && (
                  <p className="mt-[10px] text-[#353B3C]">{faq.answer}</p>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
