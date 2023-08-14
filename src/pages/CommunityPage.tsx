import { useState } from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import MainLayout from '../layout/MainLayout'
import { Accordion, AccordionItem } from 'react-accessible-accordion';
import CommunityFaqData from '../components/CommunityCompo/CommunityFaqData'
import AvatarGroupSec from '../components/FAQcomponents/AvatarGroupSec';


const CommunityPage: React.FC = () => {
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
      <div className="max-w-4xl mx-auto pt-24 text-center">
        <h3 className="font-semibold mb-2 text-black pt-8 text-4xl font-bold">You’ve got questions?</h3>
        <p className="mb-4 text-black">We’ve got answers!</p>
        <p className="mb-8 text-black text-base">
            Find quick answers to frequently asked questions our community.
        </p>
        <div className="app-container text-center max-auto  py-8  pb-16">
          <Accordion>
            {CommunityFaqData.map((item) => (
              <AccordionItem key={item.id}>
              <h3
              className="border-b pt-4 accordion-trigger text-justify flex justify-between cursor-pointer transition-transform ease duration-300 transform sm:tracking-normal"
              onClick={() =>
              toggleAccordion(item.id)}>
              {item.question}
              <span className="accordion-arrow">
                {openAccordionId === item.id ? <BiChevronUp className='border-black border rounded-full'/> : <span className='flex items-center'>5 openings<BiChevronDown className='border-black border rounded-full' /></span>}
              </span>
              </h3>
              <div
              className={`accordion-content ${openAccordionId === item.id ? 'block' : 'hidden'} pt-5 text-justify`}
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

export default CommunityPage;
