import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React, { useState } from "react";
import sarkari from "../../assets/sarkari.svg";
import Loading from "../loading/Loading";

const SarkariJob = ({ data }) => {
  if (!data || data.length === 0) {
    return <Loading />; // Replace with your loading component
  }

  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      {data.map((key, index) => (
        <Accordion
          key={index}
          type="single"
          collapsible
          className="w-full hover:bg-gray-50 rounded-lg px-5"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger onClick={handleToggle}>
              <div className="flex justify-between items-center w-full">
                <div className="flex justify-between items-center gap-5">
                  <img src={sarkari} alt="Sarkari" className="" />
                  <h2 className="w-full text-xl text-bold">
                    {key.jobtitle.substring(0, 80)}
                    {key.jobtitle.length > 80 && "..."}
                  </h2>
                </div>
                {!isExpanded && (
                  <div>
                    <button className="border-primary text-primary hover:text-white border-2 px-5 rounded-md py-2 hover:bg-primary text-sm">
                      View
                    </button>
                  </div>
                )}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="w-full flex  justify-around flex-col lg:flex-row items-start  gap-5">
                <div className="gap-5">
                  <div className="flex gap-3 items-center">
                    <p>Application Begin</p>
                    <li className="text-gray-500 ml-auto">
                      {key.applicationbegin || "Notify Soon"}
                    </li>
                  </div>
                  <div className="flex gap-3 items-center">
                    <p>Last Date for Apply</p>
                    <li className="text-gray-500 ml-auto">
                      {key.lastdate || "Notify Soon"}
                    </li>
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
                {/* <div className="border-r-2 sm:border-b-2 border-gray-300"></div> */}
                <div className="gap-5">
                  <div className="flex gap-3 items-center">
                    <p>General / OBC / EWS Fees</p>
                    <li className="text-gray-500 ml-auto">
                      {key.goefees || "₹0/-"}
                    </li>
                  </div>
                  <div className="flex gap-3 items-center">
                    <p>SC / ST / PH</p>
                    <li className="text-gray-500 ml-auto">
                      {" "}
                      {key.scstphfees || "₹0/-"}
                    </li>
                  </div>
                  <div className="flex gap-3 items-center">
                    <p>Qualification</p>
                    <li className="text-gray-500 ml-auto">
                      {key.qualification || "Minimum 8th Pass"}
                    </li>
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-center items-center mt-10">
                <a href={key.joburl} target="_blank" rel="noopener noreferrer">
                  <button className="border-primary text-primary hover:text-white border-2 px-5 rounded-md py-2 hover:bg-primary text-sm">
                    Apply Now
                  </button>
                </a>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </>
  );
};

export default SarkariJob;
