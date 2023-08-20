import { useState } from "react";
import "../../style/privacy-policy.css";
import { Accordion, AccordionItem } from "react-accessible-accordion";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const DataWeCollect = () => {
  const [openAccordionId, setOpenAccordionId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    if (openAccordionId === id) {
      setOpenAccordionId(null);
    } else {
      setOpenAccordionId(id);
    }
  };
  return (
    <section id="data-we-collect">
      <div className="blue_bordered-card text-center py-[40px]">
        <h4 className="lg:text-[56px] md:text-[45px] text-[35px] font-[600] text-[#353B3C] mb-[40px] md:leading-[70px]">
          For real -what data do you collect from me?
        </h4>
        <p className="md:text-[24px] text-[18px] font-[500]">
          You give some data, we collect some data. In return, we offer valuable
          services.
        </p>
      </div>

      <div className="mt-[40px]">
        <div className="">
          <article>
            <p className="md:text-[36px] text-[24px] font-[600] mb-[40px] pl-[20px]">
              1. Information we collect
            </p>
            <p className="md:text-[24px] text-[20px] mb-[16px] text-[#353B3C]">
              The information we collect when you use Satori fall under three
              categories.
            </p>
            <p className="md:text-[24px] text-[20px] mb-[16px] text-[#353B3C]">
              Expand the dropdows for more information
            </p>
          </article>
          <Accordion className="pt-[10px] pb-[20px]">
            <AccordionItem>
              <div
                className={`${
                  openAccordionId === 1.1 ? "border-b-none" : "border-b"
                } pb-[16px] pt-[40px] font-600 accordion-trigger text-justify flex justify-between cursor-pointer transition-transform ease duration-300 transform xl:text-[36px] md:[24px] text-[20px]`}
                onClick={() => toggleAccordion(1.1)}
              >
                <h3 className="w-[80%]">
                  <span className="mr-2">1.1 Information you provide us.</span>
                </h3>
                <div className="w-[20%] flex items-center justify-end">
                  {openAccordionId === 1.1 ? (
                    <BiChevronUp className="" />
                  ) : (
                    <BiChevronDown className="" />
                  )}
                </div>
              </div>
              <div
                className={`accordion-content ${
                  openAccordionId === 1.1 ? "block" : "hidden"
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
                  openAccordionId === 1.2 ? "border-b-none" : "border-b"
                } pb-[16px] pt-[40px] font-600 accordion-trigger text-justify flex justify-between cursor-pointer transition-transform ease duration-300 transform xl:text-[36px] md:[24px] text-[20px]`}
                onClick={() => toggleAccordion(1.2)}
              >
                <h3 className="w-[80%]">
                  <span className="mr-2">
                    1.2 Information we collect when you use Satori
                  </span>
                </h3>
                <div className="[w-20%] flex items-center justify-end">
                  {openAccordionId === 1.2 ? (
                    <BiChevronUp className="" />
                  ) : (
                    <BiChevronDown className="" />
                  )}
                </div>
              </div>
              <div
                className={`accordion-content ${
                  openAccordionId === 1.2 ? "block" : "hidden"
                } border-b pt-5 text-justify md:text-[20px] text-base pb-[20px] px-[16px]`}
              >
                <p>
                  When you use our services, we collect information about how
                  you use our products and services. We use that information to
                  provide you with products and services, to help keep Satori
                  more secure and respectful for everyone, and more relevant to
                  you.
                </p>

                <ul className="text-[#555E5F] list-disc list-inside">
                  <li className="mt-[40px]">
                    <b>Usage information:</b> The information we collect from
                    you when you use Satori include:
                  </li>
                  <li className="mt-[24px]">
                    Posts you make in the community and its contents (including
                    the date, application, and version of Satori) and
                    information about communities you are a part of.
                  </li>
                  <li className="mt-[16px]">
                    Your interactions with other users’ content, such as, likes,
                    bookmarks, and replies. Posts you’ve participated in
                    (including your viewing history, commenting, and reacting).
                  </li>
                  <li className="mt-[16px]">
                    If you communicate with us, such as through email, we will
                    collect information about the communication and its content.
                    We collect information on links you interact with across our
                    services (including in our emails sent to you).
                  </li>
                  <li className="mt-[40px]">
                    <b>Device information:</b> We collect information from and
                    about the devices you use to access Satori, including:
                  </li>
                  <li className="mt-[24px]">
                    Information about your connection, such as your IP address
                    and browser type.
                  </li>
                  <li className="mt-[16px]">
                    Information about your device and its settings, such as
                    device and advertising ID, operating system, carrier,
                    language, memory, apps installed, and battery level.
                  </li>
                  <li className="mt-[40px]">
                    <b>Location information:</b> We collect information from and
                    about the devices you use to access Satori, including:
                  </li>
                  <li className="mt-[24px]">
                    Information about your connection, such as your IP address
                    and browser type.
                  </li>
                  <li className="mt-[16px]">
                    Information about your device and its settings, such as
                    device and advertising ID, operating system, carrier,
                    language, memory, apps installed, and battery level.
                  </li>
                  <li className="mt-[16px]">
                    Articles you read, your mood trackers and journaling, how
                    you engage them in the community and actions you take from
                    them.
                  </li>
                  <li className="mt-[16px]">
                    If you communicate with us, such as through email, we will
                    collect information about the communication and its content.
                    We collect information on links you interact with across our
                    services (including in our emails sent to you).
                  </li>
                </ul>
              </div>
            </AccordionItem>
          </Accordion>
          <Accordion className="pt-[10px] pb-[20px]">
            <AccordionItem>
              <div
                className={`${
                  openAccordionId === 1.3 ? "border-b-none" : "border-b"
                } pb-[16px] pt-[40px] font-600 accordion-trigger text-justify flex justify-between cursor-pointer transition-transform ease duration-300 transform xl:text-[36px] md:[24px] text-[20px]`}
                onClick={() => toggleAccordion(1.3)}
              >
                <h3 className="w-[80%]">
                  <span className="mr-2">
                    1.3 Information we collect when you use Satori
                  </span>
                </h3>
                <div className="[w-20%] flex items-center justify-end">
                  {openAccordionId === 1.3 ? (
                    <BiChevronUp className="" />
                  ) : (
                    <BiChevronDown className="" />
                  )}
                </div>
              </div>
              <div
                className={`accordion-content ${
                  openAccordionId === 1.3 ? "block" : "hidden"
                } border-b pt-5 text-justify md:text-[20px] text-base pb-[20px] px-[16px]`}
              >
                <p>
                  Certain information is necessary. In order to use our product
                  and services, you need to provide us some information.
                </p>

                <ul className="text-[#555E5F] list-disc list-inside">
                  <li className="mt-[40px]">
                    <b>Personal information:</b> If you create an account, you must
                    provide us with some information so that we can provide our
                    services to you. This includes a display name (for example,
                    “Satori Mental Health”); a username (for example, satori.ng)
                    a password; an email address or phone number; a date of
                    birth; your display language; and third-party single sign-in
                    information (if you choose this sign-in method). You can
                    also choose to share your location in your profile. Your
                    profile information, which includes your display name and
                    username, is always public, except in the community where
                    you choose to enter anonymously, but you can use either your
                    real name or a pseudonym.{" "}
                  </li>
                </ul>
              </div>
            </AccordionItem>
          </Accordion>
          <Accordion className="pt-[10px] pb-[20px]">
            <AccordionItem>
              <div
                className={`${
                  openAccordionId === 1.4 ? "border-b-none" : "border-b"
                } pb-[16px] pt-[40px] font-600 accordion-trigger text-justify flex justify-between cursor-pointer transition-transform ease duration-300 transform xl:text-[36px] md:[24px] text-[20px]`}
                onClick={() => toggleAccordion(1.4)}
              >
                <h3 className="w-[80%]">
                  <span className="mr-2">1.4 Information we receive from third parties</span>
                </h3>
                <div className="w-[20%] flex items-center justify-end">
                  {openAccordionId === 1.4 ? (
                    <BiChevronUp className="" />
                  ) : (
                    <BiChevronDown className="" />
                  )}
                </div>
              </div>
              <div
                className={`accordion-content ${
                  openAccordionId === 1.4 ? "block" : "hidden"
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

export default DataWeCollect;
