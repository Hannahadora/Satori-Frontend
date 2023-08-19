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
      <div className="pt-24 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-semibold mb-2 text-black pt-8 text-4xl font-bold">
            You’ve got questions?
          </h3>
          <p className="mb-4 text-black text-xl">We’ve got answers!</p>
          <p className="mb-8 text-black text-2xl">
            Find quick answers to frequently asked questions about Satori and
            our community.
          </p>
          <div className="flex justify-start items-start faq-btn-wrapper py-8 space-x-4">
            <button
              onClick={() => setActiveState("satori")}
              className="bg-transparent border border-gray-700 text-black  py-4 px-5 tracking-widest text-base rounded-full"
            >
              About Satori
            </button>
            <button
              onClick={() => setActiveState("community")}
              className="bg-transparent border border-#E6E8E8 text-black  py-4 px-8 text-base rounded-full"
            >
              About our community
            </button>
          </div>
        </div>
        {activeState === "satori" ? (
          <div className="px-36">
            <div className="app-container text-center max-auto px-4 py-8 md:px-8 lg:px-16  sm:px-4  pb-16">
              <Accordion className="px-10 pt-[10px] pb-[20px]">
                {faqData.map((item) => (
                  <AccordionItem key={item.id}>
                    <h3
                      className={`${openAccordionId === item.id ? 'border-none' : 'border-b'} px-4 pb-[16px] pt-[40px] accordion-trigger text-justify flex justify-between cursor-pointer transition-transform ease duration-300 transform xl:text-2xl md:text-base sm:text-sm`}
                      onClick={() => toggleAccordion(item.id)}
                    >
                      <div className="w-60 md:w-full">
                        <span className="mr-2">{item.question}</span>
                      </div>
                      <div className="w-40 md:w-full flex items-center justify-end">
                        {openAccordionId === item.id ? (
                          <BiChevronUp className="border-black border rounded-full" />
                        ) : (
                          <span className="flex items-center">
                            5 openings <span className="ml-1" />{" "}
                            <BiChevronDown className="border-black border rounded-full" />
                          </span>
                        )}
                      </div>
                    </h3>
                    <div
                      className={`accordion-content ${
                        openAccordionId === item.id ? "block" : "hidden"
                      } border-b pt-5 text-justify xl:text-xl md:text-base sm:text-sm pb-[20px] px-[16px]`}
                    >
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
