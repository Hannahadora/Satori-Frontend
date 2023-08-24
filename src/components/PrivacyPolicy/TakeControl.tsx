import { useState } from "react";
import "../../style/privacy-policy.css";
import { Accordion, AccordionItem } from "react-accessible-accordion";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { Link } from "react-router-dom";

const TakeControl = () => {
  const [openAccordionId, setOpenAccordionId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    if (openAccordionId === id) {
      setOpenAccordionId(null);
    } else {
      setOpenAccordionId(id);
    }
  };

  return (
    <section id="take-control" className="mt-[80px]">
      <div className="blue_bordered-card text-center py-[40px]">
        <h4 className="lg:text-[56px] md:text-[45px] text-[35px] font-[600] text-[#353B3C] mb-[40px] md:leading-[70px]">
          How can I control my data?
        </h4>
        <p className="md:text-[24px] text-[18px] font-[500]">
          You can access it, delete it, or change your settings. Basically,
          you’re the boss.
        </p>
      </div>

      <div className="mt-[40px]">
        <div className="">
          <article>
            <p className="md:text-[36px] text-[24px] font-[600] mb-[40px] pl-[20px]">
              4. Take Control
            </p>
            <p className="md:text-[22px] text-[20px] mb-[16px] text-[#353B3C]">
              Expand dropdowns for more information:
            </p>
          </article>
          <Accordion className="pb-[20px]">
            <AccordionItem>
              <div
                className={`${
                  openAccordionId === 4.1 ? "border-b-none" : "border-b"
                } pb-[16px] md:pt-[40px] pt-[20px] font-600 accordion-trigger text-justify flex justify-between cursor-pointer transition-transform ease duration-300 transform xl:text-[36px] md:text-[24px] text-[20px]`}
                onClick={() => toggleAccordion(4.1)}
              >
                <h3 className="w-[80%]">
                  <span className="mr-2">
                    4.1 Access, Correction, Portability.
                  </span>
                </h3>
                <div className="w-[20%] flex items-center justify-end">
                  {openAccordionId === 4.1 ? (
                    <BiChevronUp className="" />
                  ) : (
                    <BiChevronDown className="" />
                  )}
                </div>
              </div>
              <div
                className={`accordion-content ${
                  openAccordionId === 4.1 ? "block" : "hidden"
                } border-b pt-5 text-justify md:text-[20px] text-base pb-[20px] px-[16px]`}
              >
                <p className="pl-[10px] text-[20px] leading-[28px]">
                  You can access, correct, or modify the information you
                  provided to us by editing your profile and adjusting your{" "}
                  <Link
                    to={"/help-and-support/account-settings"}
                    className="text-blue-500 font-[500]"
                  >
                    account settings
                  </Link>
                  . <br />
                  <br />
                  To protect your privacy and maintain security, we take steps
                  to verify your identity before granting you access to your
                  personal information or complying with a deletion,
                  portability, or other related request. We may, in certain
                  situations, reject your request for access, correction, or
                  portability, for example, we may reject access where you are
                  unable to verify your identity.
                </p>
              </div>
            </AccordionItem>
          </Accordion>
          <Accordion className="pb-[20px]">
            <AccordionItem>
              <div
                className={`${
                  openAccordionId === 4.2 ? "border-b-none" : "border-b"
                } pb-[16px] md:pt-[40px] pt-[20px] font-600 accordion-trigger text-justify flex justify-between cursor-pointer transition-transform ease duration-300 transform xl:text-[36px] md:text-[24px] text-[20px]`}
                onClick={() => toggleAccordion(4.2)}
              >
                <h3 className="w-[80%]">
                  <span className="mr-2">4.2 Deleting your Information</span>
                </h3>
                <div className="w-[20%] flex items-center justify-end">
                  {openAccordionId === 4.2 ? (
                    <BiChevronUp className="" />
                  ) : (
                    <BiChevronDown className="" />
                  )}
                </div>
              </div>
              <div
                className={`accordion-content ${
                  openAccordionId === 4.2 ? "block" : "hidden"
                } border-b pt-5 text-justify md:text-[20px] text-base pb-[20px] px-[16px]`}
              >
                <p className="pl-[10px] text-[20px] leading-[28px]">
                  If you follow the instructions{" "}
                  <Link
                    to={"/delete-account"}
                    className="text-blue-500 font-[500]"
                  >
                    here
                  </Link>
                  , your account will be deleted. When deleted, your Satori
                  account, including your display name, username, and public
                  profile, will no longer be viewable on satori.ng. For up to 30
                  days after deletion, it is still possible to restore your
                  Satori account if it was accidentally or wrongfully deleted.
                </p>
              </div>
            </AccordionItem>
          </Accordion>
          <Accordion className="pb-[20px]">
            <AccordionItem>
              <div
                className={`${
                  openAccordionId === 4.3 ? "border-b-none" : "border-b"
                } pb-[16px] md:pt-[40px] pt-[20px] font-600 accordion-trigger text-justify flex justify-between cursor-pointer transition-transform ease duration-300 transform xl:text-[36px] md:text-[24px] text-[20px]`}
                onClick={() => toggleAccordion(4.3)}
              >
                <h3 className="w-[80%]">
                  <span className="mr-2">
                    4.3 Objecting to, Restricting, or Withdrawing your Consent.
                  </span>
                </h3>
                <div className="w-[20%] flex items-center justify-end">
                  {openAccordionId === 4.3 ? (
                    <BiChevronUp className="" />
                  ) : (
                    <BiChevronDown className="" />
                  )}
                </div>
              </div>
              <div
                className={`accordion-content ${
                  openAccordionId === 4.3 ? "block" : "hidden"
                } border-b pt-5 text-justify md:text-[20px] text-base pb-[20px] px-[16px]`}
              >
                <p className="pl-[10px] text-[20px] leading-[28px]">
                  If you change your settings it may take some time for your
                  choices to be fully reflected throughout our systems. You may
                  also notice changes in your Satori experience or limitations
                  in your ability to access certain features depending on the
                  settings you’ve adjusted.
                </p>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default TakeControl;
