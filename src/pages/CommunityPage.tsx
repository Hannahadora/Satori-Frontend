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
        <p className="mb-4 text-black text-xl">We’ve got answers!</p>
        <p className="mb-8 text-black text-2xl">
            Find quick answers to frequently asked questions about our community.
        </p>
        <div className="app-container text-center max-auto  py-8  pb-16">
          <Accordion>
            {CommunityFaqData.map((item) => (
           <AccordionItem key={item.id}>
           <h3
             className="border-b pt-4 accordion-trigger text-justify flex justify-between cursor-pointer transition-transform ease duration-300 transform xl:text-2xl md:text-base sm:text-sm"
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
                   5 openings <span className="ml-1" />{' '}
                   <BiChevronDown className="border-black border rounded-full" />
                 </span>
               )}
             </div>
           </h3>
           <div
             className={`accordion-content ${
               openAccordionId === item.id ? 'block' : 'hidden'
             } border-b pt-5 text-justify xl:text-xl md:text-base sm:text-sm`}
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
