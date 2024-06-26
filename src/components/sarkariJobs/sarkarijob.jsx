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
          <img src={sarkari} alt="Sarkari" className="" />
          <h2 className="text-lg font-bold flex-grow">Rajasthan Board Class 10th Result 2024</h2>
        </div>
        {!isExpanded && (
          <div>
            <button className="bg-sarkaribg text-lg text-sarkari px-4 py-2 hover:bg-white rounded-md">
              View Job
            </button>
          </div>
        )}
      </div>
    </AccordionTrigger>
    <AccordionContent>
      <div className="w-full flex-col justify-around">
        <div className="gap-5">
          <div className="flex gap-3 items-center">
            <p>Application Begin</p>
            <li className="text-gray-500 ml-auto">29/05/2024</li>
          </div>
          <div className="flex gap-3 items-center">
            <p>Last Date for Apply</p>
            <li className="text-gray-500 ml-auto">29/05/2024</li>
          </div>
          <div className="flex gap-3 items-center">
            <p>Exam / Merit List</p>
            <li className="text-gray-500 ml-auto">As per Schedule</li>
          </div>
          <div className="flex gap-3 items-center">
            <p>Age Eligibility</p>
            <li className="text-gray-500 ml-auto">18 - 32 Years</li>
          </div>
        </div>
        <div className="border-r-2 sm:border-b-2 border-gray-300"></div>
        <div className="gap-5">
          <div className="flex gap-3 items-center">
            <p>General / OBC / EWS Fees</p>
            <li className="text-gray-500 ml-auto">₹0/-</li>
          </div>
          <div className="flex gap-3 items-center">
            <p>SC / ST / PH</p>
            <li className="text-gray-500 ml-auto">₹0/-</li>
          </div>
          <div className="flex gap-3 items-center">
            <p>Education</p>
            <li className="text-gray-500 ml-auto">10th pass</li>
          </div>
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
