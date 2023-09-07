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
            <p className="md:text-[22px] text-[20px] mb-[16px] text-[#353B3C]">
              Breaking down how we use the information we collect is not simple
              because of the way the systems that bring our services to you
              work. For example, the same piece of information may be used
              differently for different purposes to ultimately deliver a single
              service.
            </p>
            <p className="md:text-[22px] text-[20px] mb-[16px] text-[#353B3C]">
              But generally, we use the collected information to provide,
              maintain, and improve our services. Your data helps us tailor
              content and resources to enhance your mental well-being journey.
              We do not share your personal information with third parties for
              their marketing purposes.
            </p>
            <p className="md:text-[22px] text-[20px] mb-[16px] text-[#353B3C]">
              We think it’s most useful to describe the five main ways we use
              information and if you have questions that are not answered, you
              can always contact us. Here we go:
            </p>
            <p className="md:text-[22px] text-[20px] mb-[16px] text-[#353B3C]">
              Expand the dropdowns for more information
            </p>
          </article>
          <Accordion className="pb-[20px]">
            <AccordionItem>
              <div
                className={`${
                  openAccordionId === 2.1 ? "border-b-none" : "border-b"
                } pb-[16px] md:pt-[40px] pt-[20px] font-600 accordion-trigger text-justify flex justify-between cursor-pointer transition-transform ease duration-300 transform xl:text-[36px] md:text-[24px] text-[20px]`}
                onClick={() => toggleAccordion(2.1)}
              >
                <h3 className="w-[80%]">
                  <span className="mr-2">
                    2.1 Operate, improve and personalise our services
                  </span>
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
                <p className="pl-[5px] text-[20px] leading-[28px]">
                  We use the information we collect to provide and operate
                  Satori services. We also use the information we collect to
                  improve and personalize our services so that you have a better
                  experience on Satori, including by showing you more relevant
                  content, suggesting topics to follow. We may use the
                  information we collect from accounts of other services that
                  you choose to connect your Satori account to provide you
                  features like cross-service authentication, and to operate our
                  services.<br/><br/> We use your information to provide our advertising
                  and sponsored content services subject to your settings, which
                  helps make ads on Satori more relevant to you. We also use
                  this information to measure the effectiveness of ads and to
                  help recognize your devices to serve you ads on and off of
                  Satori. Some of our ad partners also enable us to collect
                  similar information directly from their website or app by
                  integrating our advertising technology.<br/><br/> Information shared by
                  ad partners and affiliates or collected by Satori from the
                  websites and apps of ad partners and affiliates may be
                  combined with the other information you share with Satori and
                  that Satori receives, generates, or infers about you, as
                  described elsewhere in our Privacy Policy.
                </p>
              </div>
            </AccordionItem>
          </Accordion>
          <Accordion className="pb-[20px]">
            <AccordionItem>
              <div
                className={`${
                  openAccordionId === 2.2 ? "border-b-none" : "border-b"
                } pb-[16px] md:pt-[40px] pt-[20px] font-600 accordion-trigger text-justify flex justify-between cursor-pointer transition-transform ease duration-300 transform xl:text-[36px] md:text-[24px] text-[20px]`}
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
                <p className="pl-[5px] text-[20px] leading-[28px]">
                  We use information we collect to provide for the safety and
                  security of our users, our products, services, and your
                  account.<br/><br/> This includes verifying your identity, authenticating
                  your account, and defending against fraud, unauthorized use,
                  and illegal activity.<br/><br/> We also use the information to evaluate
                  and affect the safety and quality of content on Satori - this
                  includes investigating and enforcing our policies and and
                  terms, as well as applicable law.
                </p>
              </div>
            </AccordionItem>
          </Accordion>
          <Accordion className="pb-[20px]">
            <AccordionItem>
              <div
                className={`${
                  openAccordionId === 2.3 ? "border-b-none" : "border-b"
                } pb-[16px] md:pt-[40px] pt-[20px] font-600 accordion-trigger text-justify flex justify-between cursor-pointer transition-transform ease duration-300 transform xl:text-[36px] md:text-[24px] text-[20px]`}
                onClick={() => toggleAccordion(2.3)}
              >
                <h3 className="w-[80%]">
                  <span className="mr-2">
                    2.3 Measure, analyse and make our services better
                  </span>
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
                <p className="pl-[5px] text-[20px] leading-[28px]">
                  We use the information we collect to measure and analyze the
                  effectiveness of our services and to better understand how you
                  use them in order to make them better.
                </p>
              </div>
            </AccordionItem>
          </Accordion>
          <Accordion className="pb-[20px]">
            <AccordionItem>
              <div
                className={`${
                  openAccordionId === 2.4 ? "border-b-none" : "border-b"
                } pb-[16px] md:pt-[40px] pt-[20px] font-600 accordion-trigger text-justify flex justify-between cursor-pointer transition-transform ease duration-300 transform xl:text-[36px] md:text-[24px] text-[20px]`}
                onClick={() => toggleAccordion(2.4)}
              >
                <h3 className="w-[80%]">
                  <span className="mr-2">
                    2.4 Communicate with you about our services
                  </span>
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
                <p className="pl-[5px] text-[20px] leading-[28px]">
                  We use the information we collect to communicate with you
                  about our products and services, including about product
                  updates and changes to our policies and terms. If you’re open
                  to hearing from us, we may also send you marketing messages
                  from time to time.
                </p>
              </div>
            </AccordionItem>
          </Accordion>
          <Accordion className="pb-[20px]">
            <AccordionItem>
              <div
                className={`${
                  openAccordionId === 2.5 ? "border-b-none" : "border-b"
                } pb-[16px] md:pt-[40px] pt-[20px] font-600 accordion-trigger text-justify flex justify-between cursor-pointer transition-transform ease duration-300 transform xl:text-[36px] md:text-[24px] text-[20px]`}
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
                <p className="pl-[5px] text-[20px] leading-[28px]">
                  We use information you share with us, or that we collect to
                  conduct research, surveys, product testing, and
                  troubleshooting to help us operate and improve our products
                  and services.
                </p>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default HowWeUseInfo;
