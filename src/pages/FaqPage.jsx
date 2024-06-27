import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import React, { useState } from "react";
import LayoutWraper from "../layout/LayoutWraper";

const FaqPage = () => {

  return (
    <>

    <LayoutWraper>
    {/* {data.map((key, index) => ( */}
      <Accordion
        // key={index}
        type="single"
        collapsible
        className="w-full hover:bg-gray-50 rounded-lg px-5 py-5"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
          
            
                <h2 className="w-full text-xl text-start text-bold">
                What is Sarkari Private Jobs <span className="text-primary">?</span>
                </h2>
              
             
            
          </AccordionTrigger>
          <AccordionContent>
            <p className="w-full text-lg">
            Sarkari Private Jobs is a platform that provides the latest updates on government and private job openings, admit card releases, exam results, and other related news.
            </p>
           
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion
        // key={index}
        type="single"
        collapsible
        className="w-full hover:bg-gray-50 rounded-lg px-5 py-5"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
          
            
                <h2 className="w-full text-xl text-start text-bold">
                How is Sarkari Private Jobs different from other platforms <span className="text-primary">?</span>
                </h2>
              
             
            
          </AccordionTrigger>
          <AccordionContent>
            <p className="w-full text-lg">
            Sarkari Private Jobs offers a comprehensive and verified list of both government and private job opportunities. We ensure timely updates and provide a user-friendly interface for a seamless experience.
            </p>
           
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion
        // key={index}
        type="single"
        collapsible
        className="w-full hover:bg-gray-50 rounded-lg px-5 py-5"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
          
            
                <h2 className="w-full text-xl text-start text-bold">
                Do I need to create an account to use Sarkari Private Jobs <span className="text-primary">?</span>
                </h2>
              
             
            
          </AccordionTrigger>
          <AccordionContent>
            <p className="w-full text-lg">
            No, you can browse job listings without an account.
            </p>
           
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion
        // key={index}
        type="single"
        collapsible
        className="w-full hover:bg-gray-50 rounded-lg px-5 py-5"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
          
            
                <h2 className="w-full text-xl text-start text-bold">
                Where can I provide feedback or suggestions <span className="text-primary">?</span>
                </h2>
              
             
            
          </AccordionTrigger>
          <AccordionContent>
            <p className="w-full text-lg">
            We welcome your feedback and suggestions. Please use the feedback form available on our website or email us directly at mailto: <b>feedback@sarkariprivatejobs.com </b>.(add appropriate e-mail)
            </p>
           
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion
        // key={index}
        type="single"
        collapsible
        className="w-full hover:bg-gray-50 rounded-lg px-5 py-5"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
          
            
                <h2 className="w-full text-xl text-start text-bold">
                How can I apply for jobs on Sarkari Private Jobs <span className="text-primary">?</span>
                </h2>
              
             
            
          </AccordionTrigger>
          <AccordionContent>
            <p className="w-full text-lg">
  
Each job listing includes a link or instructions on how to apply. Follow the provided steps to submit your application.

            </p>
           
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion
        // key={index}
        type="single"
        collapsible
        className="w-full hover:bg-gray-50 rounded-lg px-5 py-5"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
          
            
                <h2 className="w-full text-xl text-start text-bold">
                Can I still apply to a job if I am not registered on Sarkari Private Jobs <span className="text-primary">?</span>
                </h2>
              
             
            
          </AccordionTrigger>
          <AccordionContent>
            <p className="w-full text-lg">
  
            Yes, you can apply to jobs without registering. 
            </p>
           
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion
        // key={index}
        type="single"
        collapsible
        className="w-full hover:bg-gray-50 rounded-lg px-5 py-5"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
          
            
                <h2 className="w-full text-xl text-start text-bold">
                Can I apply to more than one job at a time <span className="text-primary">?</span>
                </h2>
              
             
            
          </AccordionTrigger>
          <AccordionContent>
            <p className="w-full text-lg">
            Yes, you can apply to multiple jobs simultaneously as long as you meet the qualifications for each position.
            </p>
           
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion
        // key={index}
        type="single"
        collapsible
        className="w-full hover:bg-gray-50 rounded-lg px-5 py-5"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
          
            
                <h2 className="w-full text-xl text-start text-bold">
                Do I need to pay to apply to a job or get an interview call <span className="text-primary">?</span> <br /> Recruiters are asking me to pay to schedule an interview for a job <span className="text-primary">?</span>
                </h2>
              
             
            
          </AccordionTrigger>
          <AccordionContent>
            <p className="w-full text-lg">
            No, you should never have to pay to apply for a job or to get an interview call. If any recruiter asks for payment, please report it to us immediately as it may be a scam.
            </p>
           
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion
        // key={index}
        type="single"
        collapsible
        className="w-full hover:bg-gray-50 rounded-lg px-5 py-5"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
          
            
                <h2 className="w-full text-xl text-start text-bold">
                I searched for jobs on Sarkari Private Jobs but I could not find one matching my profile. What should I do <span className="text-primary">?</span>
                </h2>
              
             
            
          </AccordionTrigger>
          <AccordionContent>
            <p className="w-full text-lg">
            If you cannot find a job matching your profile check back regularly as we update our listings frequently. You can also refine your search criteria or broaden your search parameters.
            </p>
           
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    {/* ))} */}
    </LayoutWraper>
  </>
  )
}

export default FaqPage




