import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import React, { useState } from "react";
import sarkari from "../../assets/sarkari.svg"
const SarkariJob = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return <>
 <Accordion type="single" collapsible className="w-full hover:bg-gray-50 rounded-lg px-5">
      <AccordionItem value="item-1">
        <AccordionTrigger onClick={handleToggle}>
          <div className="flex justify-between items-center w-full">
            <div className="flex justify-between items-center gap-5">
              <img src={sarkari} alt="Sarkari" />
              <h2 className="text-xl font-bold flex-grow">Rajasthan Board Class 10th Result 2024</h2>
            </div>
           
            {!isExpanded && (
               <div>
              <button className="bg-sarkaribg text-lg text-sarkari px-4 py-2 hover:bg-white rounded-md">
                Apply Job
              </button>
              </div>
            )}
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="w-full flex justify-around">
            <div className="gap-5">
              <p className="flex gap-3">Application Begin <li className="text-gray-500">29/05/2024</li></p>
              <p className="flex gap-3">Last Date for Apply <li className="text-gray-500">29/05/2024</li></p>
              <p className="flex gap-3">Exam / Merit List <li className="text-gray-500">As per Schedule</li></p>
              <p className="flex gap-3">Age Eligibility <li className="text-gray-500">18 - 32 Years</li></p>
            </div>
            <div className="w-250 text-sarkari h-5"></div>
            <div className="gap-5">
              <p className="flex gap-3">General / OBC / EWS Fees <li className="text-gray-500"> ₹0/-</li></p>
              <p className="flex gap-3">SC / ST / PH <li className="text-gray-500"> ₹0/-</li></p>
              <p className="flex gap-3">Education <li className="text-gray-500"> 10th pass</li></p>
            </div>
          </div>
          <div className="w-full flex justify-center items-center mt-10">
            <button className="bg-sarkaribg text-lg text-sarkari px-4 py-2 hover:bg-[#05CFC3] hover:text-white rounded-md">
              Apply Job
            </button>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </>;
};

export default SarkariJob;
