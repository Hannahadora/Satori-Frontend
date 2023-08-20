import { useState } from "react";
import "../../style/privacy-policy.css";
import { Accordion, AccordionItem } from "react-accessible-accordion";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const HowWeUseInfo = () => {
  const [openAccordionId, setOpenAccordionId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    if (openAccordionId === id) {
      setOpenAccordionId(null);
    } else {
      setOpenAccordionId(id);
    }
  };

  return (
    <section id="how-we-use-info-collected" className="mt-[80px]">
      <div className="blue_bordered-card text-center py-[40px]">
        <h4 className="lg:text-[56px] md:text-[45px] text-[35px] font-[600] text-[#353B3C] mb-[40px] md:leading-[70px]">
        How do you use my information?
        </h4>
        <p className="md:text-[24px] text-[18px] font-[500]">
        To make Satori the platform you know and love 
        </p>
      </div>

      <div className="mt-[40px]">
        <div className="">
          <article>
            <p className="md:text-[36px] text-[24px] font-[600] mb-[40px] pl-[20px]">
            2. How we use information
            </p>
            <p className="md:text-[24px] text-[20px] mb-[16px] text-[#353B3C]">
            Breaking down how we use the information we collect is not simple because of the way the systems that bring our services to you work. For example, the same piece of information may be used differently for different purposes to ultimately deliver a single service. 
            </p>
            <p className="md:text-[24px] text-[20px] mb-[16px] text-[#353B3C]">
            But generally, we use the collected information to provide, maintain, and improve our services. Your data helps us tailor content and resources to enhance your mental well-being journey. We do not share your personal information with third parties for their marketing purposes.
            </p>
            <p className="md:text-[24px] text-[20px] mb-[16px] text-[#353B3C]">
            We think it’s most useful to describe the five main ways we use information and if you have questions that are not answered, you can always contact us. Here we go:
            </p>
            <p className="md:text-[24px] text-[20px] mb-[16px] text-[#353B3C]">
            Expand the dropdows for more information
            </p>
          </article>
          <Accordion className="pt-[10px] pb-[20px]">
            <AccordionItem>
              <div
                className={`${
                  openAccordionId === 2.1 ? "border-b-none" : "border-b"
                } pb-[16px] pt-[40px] font-600 accordion-trigger text-justify flex justify-between cursor-pointer transition-transform ease duration-300 transform xl:text-[36px] md:[24px] text-[20px]`}
                onClick={() => toggleAccordion(2.1)}
              >
                <h3 className="w-[80%]">
                  <span className="mr-2">2.1 Operate, improve and personalise our services</span>
                </h3>
                <div className="w-[20%] flex items-center justify-end">
                  {openAccordionId === 2.1 ? (
                    <BiChevronUp className="" />
                  ) : (
                    <BiChevronDown className="" />
                  )}
                </div>
              </div>
              <div
                className={`accordion-content ${
                  openAccordionId === 2.1 ? "block" : "hidden"
                } border-b pt-5 text-justify md:text-[20px] text-base pb-[20px] px-[16px]`}
              >
                ...
              </div>
            </AccordionItem>
          </Accordion>
          <Accordion className="pt-[10px] pb-[20px]">
            <AccordionItem>
              <div
                className={`${
                  openAccordionId === 2.2 ? "border-b-none" : "border-b"
                } pb-[16px] pt-[40px] font-600 accordion-trigger text-justify flex justify-between cursor-pointer transition-transform ease duration-300 transform xl:text-[36px] md:[24px] text-[20px]`}
                onClick={() => toggleAccordion(2.2)}
              >
                <h3 className="w-[80%]">
                  <span className="mr-2">2.2 Foster safety and security</span>
                </h3>
                <div className="w-[20%] flex items-center justify-end">
                  {openAccordionId === 2.2 ? (
                    <BiChevronUp className="" />
                  ) : (
                    <BiChevronDown className="" />
                  )}
                </div>
              </div>
              <div
                className={`accordion-content ${
                  openAccordionId === 2.2 ? "block" : "hidden"
                } border-b pt-5 text-justify md:text-[20px] text-base pb-[20px] px-[16px]`}
              >
                ...
              </div>
            </AccordionItem>
          </Accordion>
          <Accordion className="pt-[10px] pb-[20px]">
            <AccordionItem>
              <div
                className={`${
                  openAccordionId === 2.3 ? "border-b-none" : "border-b"
                } pb-[16px] pt-[40px] font-600 accordion-trigger text-justify flex justify-between cursor-pointer transition-transform ease duration-300 transform xl:text-[36px] md:[24px] text-[20px]`}
                onClick={() => toggleAccordion(2.3)}
              >
                <h3 className="w-[80%]">
                  <span className="mr-2">2.3 Measure, analyse and make our services better</span>
                </h3>
                <div className="w-[20%] flex items-center justify-end">
                  {openAccordionId === 2.3 ? (
                    <BiChevronUp className="" />
                  ) : (
                    <BiChevronDown className="" />
                  )}
                </div>
              </div>
              <div
                className={`accordion-content ${
                  openAccordionId === 2.3 ? "block" : "hidden"
                } border-b pt-5 text-justify md:text-[20px] text-base pb-[20px] px-[16px]`}
              >
                ...
              </div>
            </AccordionItem>
          </Accordion>
          <Accordion className="pt-[10px] pb-[20px]">
            <AccordionItem>
              <div
                className={`${
                  openAccordionId === 2.4 ? "border-b-none" : "border-b"
                } pb-[16px] pt-[40px] font-600 accordion-trigger text-justify flex justify-between cursor-pointer transition-transform ease duration-300 transform xl:text-[36px] md:[24px] text-[20px]`}
                onClick={() => toggleAccordion(2.4)}
              >
                <h3 className="w-[80%]">
                  <span className="mr-2">2.4 Communicate with you about our services</span>
                </h3>
                <div className="w-[20%] flex items-center justify-end">
                  {openAccordionId === 2.4 ? (
                    <BiChevronUp className="" />
                  ) : (
                    <BiChevronDown className="" />
                  )}
                </div>
              </div>
              <div
                className={`accordion-content ${
                  openAccordionId === 2.4 ? "block" : "hidden"
                } border-b pt-5 text-justify md:text-[20px] text-base pb-[20px] px-[16px]`}
              >
                ...
              </div>
            </AccordionItem>
          </Accordion>
          <Accordion className="pt-[10px] pb-[20px]">
            <AccordionItem>
              <div
                className={`${
                  openAccordionId === 2.5 ? "border-b-none" : "border-b"
                } pb-[16px] pt-[40px] font-600 accordion-trigger text-justify flex justify-between cursor-pointer transition-transform ease duration-300 transform xl:text-[36px] md:[24px] text-[20px]`}
                onClick={() => toggleAccordion(2.5)}
              >
                <h3 className="w-[80%]">
                  <span className="mr-2">2.5 Research</span>
                </h3>
                <div className="w-[20%] flex items-center justify-end">
                  {openAccordionId === 2.5 ? (
                    <BiChevronUp className="" />
                  ) : (
                    <BiChevronDown className="" />
                  )}
                </div>
              </div>
              <div
                className={`accordion-content ${
                  openAccordionId === 2.5 ? "block" : "hidden"
                } border-b pt-5 text-justify md:text-[20px] text-base pb-[20px] px-[16px]`}
              >
                ...
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default HowWeUseInfo;
