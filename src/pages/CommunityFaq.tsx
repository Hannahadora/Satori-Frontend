import { useState } from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { Accordion, AccordionItem } from 'react-accessible-accordion';
import CommunityFaqData from '../components/CommunityCompo/CommunityFaqData'

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
    <div className="">
        <div className="app-container text-center lg:px-20 md:px-10 ">
          <Accordion className="pt-[10px] pb-[20px]">
            {CommunityFaqData.map((item) => (
           <AccordionItem key={item.id}>
           <h3
             className={`${openAccordionId === item.id ? 'border-none' : 'border-b'}  pb-[16px] pt-[40px] accordion-trigger text-justify flex justify-between cursor-pointer transition-transform ease duration-300 transform xl:text-xl md:text-lg text-base`}
             onClick={() => toggleAccordion(item.id)}
           >
             <div className="sm-width1">
               <span className="mr-2 ">{item.question}</span>
             </div>
             <div className=" flex items-center justify-end sm-width2">
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
