import { Accordion, AccordionItem } from "react-accessible-accordion";
import faqData from "../components/FAQcomponents/FaqData";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { useState } from "react";
import AvatarGroupSec from "../components/FAQcomponents/AvatarGroupSec";
import CommunityFaq from "./CommunityFaq";

const FAQpage: React.FC = () => {
  const [openAccordionId, setOpenAccordionId] = useState<number | null>(null);
  const [activeState, setActiveState] = useState<String>("satori");

  const toggleAccordion = (id: number) => {
    if (openAccordionId === id) {
      setOpenAccordionId(null);
    } else {
      setOpenAccordionId(id);
    }
  };
  return (
    <>
      <div className="pt-24 lg:w-[100%] md-[60%] w-full mx-auto">
        <div className="app-container text-center">
          <h3 className="font-semibold mb-2 text-black pt-8 text-4xl font-bol">
            You’ve got questions?
          </h3>
          <p className="mb-4 text-black text-xl">We’ve got answers!</p>
          <p className="mb-8 text-black lg:text-2xl md:text-1xl text-lg text-start lg:px-30 md:px-20 ">
            Find quick answers to frequently asked questions about Satori and
            our community.
          </p>
          <div className="flex justify-start text-center faq-btn-wrapper py-8 space-x-4 lg:px-30 md:px-20">
          <button onClick={() => setActiveState("satori")}className="bg-transparent border border-gray-700 text-black py-2 md:py-4 px-5 md:tracking-widest text-xs md:text-base rounded-full">About Satori</button><button onClick={() => setActiveState("community")} className="bg-transparent border border-#E6E8E8 text-black py-2 md:py-4 px-6 md:px-8 text-base rounded-full">About our community</button>
          </div>
        </div>
        {activeState === "satori" ? (
          <div className="lg:px-20 md:px-10">
            <div className="text-center max-auto lg:px-20 md:px-10 px-4 pb-16">
              <Accordion className="pt-[10px] pb-[20px] p-[4px]">
                {faqData.map((item) => (
                  <AccordionItem key={item.id}>
                    <h3 className={`${openAccordionId === item.id ? 'border-none' : 'border-b'}  pb-[16px] pt-[40px] accordion-trigger text-justify flex justify-between cursor-pointer transition-transform ease duration-300 transform xl:text-xl md:text-lg text-base`}
                      onClick={() => toggleAccordion(item.id)}>
                      <div className="sm-width1"><span className="mr-2 ">{item.question}</span></div>
                      <div className=" flex items-center justify-end sm-width2">
                        {openAccordionId === item.id ? (
                          <BiChevronUp className="border-black border rounded-full" />
                        ) : (
                          <span className="flex items-center ">
                            5 openings <span className="ml-1" />{" "}
                            <BiChevronDown className="border-black border rounded-full" />
                          </span>)}
                      </div>
                    </h3>
                    <div className={`accordion-content ${
                        openAccordionId === item.id ? "block" : "hidden"
                      } border-b pt-5 text-justify xl:text-lg md:text-base text-sm pb-[20px]`}>
                      {item.answer}
                    </div>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        ) : (
          <CommunityFaq />
        )}
      </div>
      <AvatarGroupSec />
      <div className="pb-20" />
    </>
  );
};

export default FAQpage;
