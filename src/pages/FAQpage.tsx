import { Accordion, AccordionItem } from 'react-accessible-accordion';
import faqData from "../components/FAQcomponents/FaqData";
import MainLayout from "../layout/MainLayout"
import { BiChevronDown, BiChevronUp} from 'react-icons/bi';
import { Link } from "react-router-dom";
import { useState } from 'react';
import AvatarGroupSec from '../components/FAQcomponents/AvatarGroupSec';
const FAQpage: React.FC = () => {
  const [openAccordionId, setOpenAccordionId] = useState<number | null>(null);

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
        <h3 className="font-semibold mb-2 text-black pt-8 text-4xl font-bold">You’ve got questions?</h3>
        <p className="mb-4 text-black">We’ve got answers!</p>
        <p className="mb-8 text-black text-base">
            Find quick answers to frequently asked questions about Satori and our community.
        </p>
        <div className="flex ms-16 ps-6 gap-4 faq-btn-wrapper py-8 md:px-8  md:ps-10">
            <button className="bg-transparent border border-gray-700  text-black  py-4 px-5 tracking-widest text-xs rounded-full">About Satori</button>
            <Link to="/community">
            <button className="bg-transparent border border-#E6E8E8 text-black  py-4 px-8 text-xs rounded-full">About our community</button>
            </Link>
        </div>
      </div>
      <div className="app-container text-center max-auto px-4 py-8 md:px-8 lg:px-16  sm:px-4  pb-16">
      <Accordion className='px:10'>
        {faqData.map((item) => (
            <AccordionItem key={item.id}>
               <h3
              className="border-b pt-4 accordion-trigger text-justify flex justify-between cursor-pointer transition-transform ease duration-300 transform sm:tracking-normal"
              onClick={() => toggleAccordion(item.id)}
            >
            <span className="mr-2">{item.question}</span>
        <span className="accordion-arrow flex items-center ">
          {openAccordionId === item.id ? (
            <BiChevronUp className=" border-black border rounded-full" />
          ) : (
            <span className="flex items-center">
              5 openings<span className="ml-1" />{' '}
              <BiChevronDown className=" border-black border rounded-full" />
            </span>
          )}
        </span>
      </h3>
      <div
        className={`accordion-content ${
          openAccordionId === item.id ? 'block' : 'hidden'
        } border-b pt-5 text-justify`}
      >
        {item.answer}
      </div>
    </AccordionItem>
  ))}
</Accordion>
</div>
</div>
<AvatarGroupSec />
<div className="pb-20" />
<MainLayout />
</>
  );
}

export default FAQpage;
