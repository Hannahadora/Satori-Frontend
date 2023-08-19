import { useState } from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
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
    <div className="px-36">
        <div className="app-container text-center max-auto  py-8  px-4 py-8 md:px-8 lg:px-16  sm:px-4  pb-16 pb-16">
          <Accordion className="px-10 pt-[10px] pb-[20px]">
            {CommunityFaqData.map((item) => (
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
                   5 openings <span className="ml-1" />{' '}
                   <BiChevronDown className="border-black border rounded-full" />
                 </span>
               )}
             </div>
           </h3>
           <div
             className={`accordion-content ${
               openAccordionId === item.id ? 'block' : 'hidden'
             } border-b pt-5 text-justify xl:text-xl md:text-base sm:text-sm pb-[20px] px-[16px]`}
           >
             {item.answer}
           </div>
         </AccordionItem>
            ))}
          </Accordion>
        </div>
        </div>
    </>
  );
}

export default CommunityPage;
