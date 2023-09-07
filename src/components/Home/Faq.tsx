import { useState, useEffect } from "react";
import faqsData from "../FAQcomponents/FaqData";
import communityFaqData from "../CommunityCompo/CommunityFaqData";
import arrow_up from "../../assets/icons/circle_arrow_up.svg";
import arrow_down from "../../assets/icons/circle_arrow_down.svg";
import { Link } from "react-router-dom";

const Faq = () => {
  const [faqs, setFaqs] = useState(faqsData.slice(0,3));
  const [commuunityFaqs, setCommunityFaqs] = useState(communityFaqData.slice(0,3));
  const [activeBtn, setActiveBtn] = useState('satori') 

  // Use an array of boolean states to manage whether each FAQ's answer is shown or not
  const [showAnswer, setShowAnswer] = useState(new Array(activeBtn === 'satori' ? faqs.length : commuunityFaqs.length).fill(false));


  const toggleShowAnswer = (index: any) => {
    setShowAnswer((prevState) => {
        const newState = prevState.map((state, i) => (i === index ? !state : false));
        return newState;
      });
  };

  useEffect(() => {
    setFaqs(faqsData.slice(0,3))
    setCommunityFaqs(communityFaqData.slice(0,3))
  }, [])
  

  return (
    <div className="app-container pt-[80px] pb-[40px]">
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
          {activeBtn === 'satori' &&
            faqs.map((faq: any, i: any) => (
              <div key={i} className="md:p-[16px] mt-[16px] p-[5px] border-b border-[#808C8E]">
                <div className="flex items-start justify-between">
                  <div className="mr-[8px] md:w-auto w-[60%]">
                    <p className="md:text-[20px] text-[16px] font-[600]">{faq.question}</p>
                  </div>
                  <div className="md:w-auto w-[40%] flex items-center justify-end">
                    <img
                    onClick={() => toggleShowAnswer(i)}
                    className="cursor-pointer"
                      src={showAnswer[i] ? arrow_up : arrow_down}
                      alt="arrow"
                    />
                  </div>
                </div>
                {showAnswer[i] && (
                  <p className="mt-[10px] text-[#353B3C]">{faq.answer}</p>
                )}
              </div>
            ))}
          {activeBtn === 'community' &&
            commuunityFaqs.map((faq: any, i: any) => (
              <div key={i} className="md:p-[16px] mt-[16px] p-[5px] border-b border-[#808C8E]">
                <div className="flex items-start justify-between">
                  <div className="mr-[8px] md:w-auto w-[60%]">
                    <p className="md:text-[20px] text-[16px] font-[600]">{faq.question}</p>
                  </div>
                  <div className="md:w-auto w-[40%] flex items-center justify-end">
                    <img
                    onClick={() => toggleShowAnswer(i)}
                    className="cursor-pointer"
                      src={showAnswer[i] ? arrow_up : arrow_down}
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

        
      <div className="flex flex-col items-center justify-center m-[24px]">
        <button className="sec-btn text-[18px] md:px-[32px] px-[20px] py-[8px] rounded-[100px]">
          <Link to={'/faqs'}>See more FAQs</Link>
        </button>
      </div>
      </div>
    </div>
  );
};

export default Faq;
