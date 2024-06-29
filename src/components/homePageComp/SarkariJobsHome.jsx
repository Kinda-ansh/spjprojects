// import React from "react";
// import sarkari from "../../assets/sarkari.svg";
// import { IoArrowForwardOutline } from "react-icons/io5";
// import { Link } from "react-router-dom";
// import Loading from "../loading/Loading";
// import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";

// const SarkariJobsHome = ({ data }) => {
//   if (!data || data.length === 0) {
//     return <Loading />;
//   }

//   // Limit data to the first 10 items
//   const limitedData = data.slice(0, 10);

//   return (
//     <>
//       <div className="">
//         <h1 className="text-2xl font-bold">
//           Sarkari <span className="text-primary">Jobs</span>
//         </h1>
//         {limitedData.map((key, index) => (
//           <div className="mt-5" key={index}>
//             <div className="w-full flex gap-5">
//               <div className="w-full flex justify-between items-center">
//                 <div className="flex gap-5 items-top">
//                   <div style={{ width: "full" }}>
//                     <img src={sarkari} alt="" width="50px" height="50px" />
//                   </div>
//                   <div>
//                     <h2 className="w-full text-lg text-bold">
//                       {key.jobtitle.substring(0, 40)}
//                       {key.jobtitle.length > 40 && "..."}
//                     </h2>
//                     <div className="flex gap-3">
//                       <p className="text-gray-500">Last Date</p>
//                       <span className="text-gray-500">05/07/2024</span>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex justify-end ml-10">
//                   <Dialog>
//                     <DialogTrigger asChild>
//                       <Button
//                         variant="outline"
//                         className="border-primary text-primary hover:text-white border-2 hover:bg-primary text-sm"
//                       >
//                         View
//                       </Button>
//                     </DialogTrigger>
//                     <DialogContent className="sm:max-w-[425px]">
//                       <div className="py-3">
//                         <h2 className="text-primary text-2xl">
//                           {key.jobtitle}
//                         </h2>
//                       </div>
//                       <div className="w-full items-start gap-5">
//                         <div className="flex gap-3 items-center">
//                           <p>Application Begin</p>
//                           <span className="text-gray-500 ml-auto">
//                             {key.applicationbegin || "Notify Soon"}
//                           </span>
//                         </div>
//                         <div className="flex gap-3 items-center">
//                           <p>Last Date for Apply</p>
//                           <span className="text-gray-500 ml-auto">
//                             {key.lastdate || "Notify Soon"}
//                           </span>
//                         </div>
//                         <div className="flex gap-3 items-center">
//                           <p>Exam / Merit List</p>
//                           <span className="text-gray-500 ml-auto">
//                             {key.examdate || "Notify Soon"}
//                           </span>
//                         </div>
//                         <div className="flex gap-3 items-center">
//                           <p>Age Eligibility</p>
//                           <span className="text-gray-500 ml-auto">
//                             {key.ageeligibility || "Notify Soon"}
//                           </span>
//                         </div>
//                         <div className="flex gap-3 items-center">
//                           <p>General / OBC / EWS Fees</p>
//                           <span className="text-gray-500 ml-auto">
//                             {key.goefees}₹/-
//                           </span>
//                         </div>
//                         <div className="flex gap-3 items-center">
//                           <p>SC / ST / PH</p>
//                           <span className="text-gray-500 ml-auto">
//                             {key.scstphfees}₹/-
//                           </span>
//                         </div>
//                         <div className="flex gap-3 items-center">
//                           <p>Education</p>
//                           <span className="text-gray-500 ml-auto">
//                             10th pass
//                           </span>
//                         </div>
//                       </div>
//                       <div className="w-full flex justify-center items-center mt-5">
//                         <button className="border-primary text-primary hover:text-white border-2 px-5 rounded-md py-2 hover:bg-primary text-sm">
//                           <a
//                             href={key.joburl}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                           >
//                             Apply Job
//                           </a>
//                         </button>
//                       </div>
//                     </DialogContent>
//                   </Dialog>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//         <div>
//           <Link to="/sarkari-jobs">
//             <p className="flex items-center gap-2 mt-5 text-sarkari text-base font-medium">
//               Show all jobs <IoArrowForwardOutline />
//             </p>
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SarkariJobsHome;

import React, { useEffect, useState } from "react";
import sarkari from "../../assets/sarkari.svg";
import { IoArrowForwardOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Loading from "../loading/Loading";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const SarkariJobsHome = ({ data }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!data || data.length === 0) {
    return <Loading />;
  }

  const limitedData = data.slice(0, 10);

  return (
    <>
      <div className="">
        <h1 className="text-2xl font-bold">
          Sarkari <span className="text-primary">Jobs</span>
        </h1>
        {limitedData.map((key, index) => (
          <div className="mt-5" key={index}>
            <div className="w-full flex gap-5">
              <div className="w-full flex justify-between items-center">
                <div className="flex gap-5 items-top">
                  <div style={{ width: "full" }}>
                    <img src={sarkari} alt="" width="50px" height="50px" />
                  </div>
                  <div>
                    <h2 className="w-full text-lg text-bold">
                      {key.jobtitle.substring(0, isMobile ? 10 : 40)}
                      {key.jobtitle.length > (isMobile ? 10 : 40) && "..."}
                    </h2>
                    <div className="flex gap-3">
                      <p className="text-gray-500">Last Date</p>
                      <span className="text-gray-500">05/07/2024</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end ml-10">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="border-primary text-primary hover:text-white border-2 hover:bg-primary text-sm"
                      >
                        View
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <div className="py-3">
                        <h2 className="text-primary text-2xl">
                          {key.jobtitle}
                        </h2>
                      </div>
                      <div className="w-full items-start gap-5">
                        <div className="flex gap-3 items-center">
                          <p>Application Begin</p>
                          <span className="text-gray-500 ml-auto">
                            {key.applicationbegin || "Notify Soon"}
                          </span>
                        </div>
                        <div className="flex gap-3 items-center">
                          <p>Last Date for Apply</p>
                          <span className="text-gray-500 ml-auto">
                            {key.lastdate || "Notify Soon"}
                          </span>
                        </div>
                        <div className="flex gap-3 items-center">
                          <p>Exam / Merit List</p>
                          <span className="text-gray-500 ml-auto">
                            {key.examdate || "Notify Soon"}
                          </span>
                        </div>
                        <div className="flex gap-3 items-center">
                          <p>Age Eligibility</p>
                          <span className="text-gray-500 ml-auto">
                            {key.ageeligibility || "Notify Soon"}
                          </span>
                        </div>
                        <div className="flex gap-3 items-center">
                          <p>General / OBC / EWS Fees</p>
                          <span className="text-gray-500 ml-auto">
                            {key.goefees}₹/-
                          </span>
                        </div>
                        <div className="flex gap-3 items-center">
                          <p>SC / ST / PH</p>
                          <span className="text-gray-500 ml-auto">
                            {key.scstphfees}₹/-
                          </span>
                        </div>
                        <div className="flex gap-3 items-center">
                          <p>Education</p>
                          <span className="text-gray-500 ml-auto">
                            10th pass
                          </span>
                        </div>
                      </div>
                      <div className="w-full flex justify-center items-center mt-5">
                        <button className="border-primary text-primary hover:text-white border-2 px-5 rounded-md py-2 hover:bg-primary text-sm">
                          <a
                            href={key.joburl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Apply Job
                          </a>
                        </button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div>
          <Link to="/sarkari-jobs">
            <p className="flex items-center gap-2 mt-5 text-sarkari text-base font-medium">
              Show all jobs <IoArrowForwardOutline />
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SarkariJobsHome;
