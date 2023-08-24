import { useState } from "react";
import "../../style/privacy-policy.css";
import { Accordion, AccordionItem } from "react-accessible-accordion";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const Security = () => {
  const [openAccordionId, setOpenAccordionId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    if (openAccordionId === id) {
      setOpenAccordionId(null);
    } else {
      setOpenAccordionId(id);
    }
  };

  return (
    <section id="privacy-security" className="mt-[80px]">
      <div className="blue_bordered-card text-center py-[40px]">
        <h4 className="lg:text-[56px] md:text-[45px] text-[35px] font-[600] text-[#353B3C] mb-[40px] md:leading-[70px]">
        How do we protect your data?
        </h4>
        <p className="md:text-[24px] text-[18px] font-[500]">
          To make Satori the platform that is safe and secured
        </p>
      </div>

      <div className="mt-[40px]">
        <div className="">
          <article>
            <p className="md:text-[36px] text-[24px] font-[600] mb-[40px] pl-[20px]">
              3. Security
            </p>
            <p className="md:text-[22px] text-[20px] mb-[16px] text-[#353B3C]">
              We implement security measures to protect your information from
              unauthorized access, alteration, or disclosure. Despite our
              efforts, no method of transmission over the Internet is entirely
              secure. We cannot guarantee absolute security of your data.
            </p>
          </article>
          <Accordion className="pb-[20px]">
            <AccordionItem>
              <div
                className={`${
                  openAccordionId === 3.1 ? "border-b-none" : "border-b"
                } pb-[16px] md:pt-[40px] pt-[20px] font-600 accordion-trigger text-justify flex justify-between cursor-pointer transition-transform ease duration-300 transform xl:text-[36px] md:text-[24px] text-[20px]`}
                onClick={() => toggleAccordion(3.1)}
              >
                <h3 className="w-[80%]">
                  <span className="mr-2">
                    3.1 Children's Privacy
                  </span>
                </h3>
                <div className="w-[20%] flex items-center justify-end">
                  {openAccordionId === 3.1 ? (
                    <BiChevronUp className="" />
                  ) : (
                    <BiChevronDown className="" />
                  )}
                </div>
              </div>
              <div
                className={`accordion-content ${
                  openAccordionId === 3.1 ? "block" : "hidden"
                } border-b pt-5 text-justify md:text-[20px] text-base pb-[20px] px-[16px]`}
              >
                <p className="pl-[10px] text-[20px] leading-[28px]">
                  While our products and services are accessible to children, it
                  is not aimed directly at them. We do not knowingly collect
                  personal information from individuals under the age of 18. If
                  you are a parent or guardian and believe your child has
                  provided us with personal information, please contact us at
                  <a href="mailto:hello@satori.ng">hello@satori.ng</a> to request removal of such information.
                </p>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Security;
