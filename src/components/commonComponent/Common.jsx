// import React, { useEffect, useState } from "react";
// import iconpvt from "../../assets/iconpvt.svg";
// import Loading from "../loading/Loading";

// const Common = ({ data }) => {
//   const [isMobile, setIsMobile] = useState(false);

//   if (!data || data.length === 0) {
//     return <Loading />; // Replace with your loading component
//   }

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <>
//       {data.map((key, index) => (
//         <div
//           key={index}
//           className="w-full flex justify-between items-center hover:bg-blue-100 hover:rounded-md p-2 "
//         >
//           <div className="flex gap-7 items-center">
//             <div style={{ width: "50px", height: "50px" }}>
//               <img
//                 src={iconpvt}
//                 alt="sarkariprivatejobs-icon"
//                 width="45px"
//                 height="45px"
//               />
//             </div>
//             <div>
//               <h2 className="w-full text-xl">
//                 {key.jobtitle.substring(0, isMobile ? 10 : 40)}
//                 {key.jobtitle.length > (isMobile ? 10 : 40) && "..."}
//               </h2>
//               <div className="flex gap-5">
//                 <p>Post Date</p>
//                 <li className="text-gray-500">{key.postdate}</li>
//               </div>
//             </div>
//           </div>
//           <div className="flex justify-self-end">
//             <a href={key.joburl} target="_blank" rel="noopener noreferrer">
//               <button className="border-primary text-primary hover:text-white border-2 px-5 rounded-md py-2 hover:bg-primary text-sm">
//                 View
//               </button>
//             </a>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };

// export default Common;

import React, { useEffect, useState } from "react";
import iconpvt from "../../assets/iconpvt.svg";
import Loading from "../loading/Loading";

const Common = ({ data }) => {
  const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 668);
  //   };

  //   handleResize();
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  if (!data || data.length === 0) {
    return <Loading />; // Replace with your loading component
  }

  return (
    <>
      {data.map((key, index) => (
        <div
          key={index}
          className="w-full flex justify-between items-center hover:bg-blue-100 hover:rounded-md p-2 "
        >
          <div className="flex gap-7 items-center ">
            <div style={{ width: "50px", height: "50px" }}>
              <img
                src={iconpvt}
                alt="sarkariprivatejobs-icon"
                width="45px"
                height="45px"
              />
            </div>
            <div>
              <h2 className="w-full text-xl">
                {key.jobtitle.substring(0, isMobile ? 15 : 40)}
                {key.jobtitle.length > (isMobile ? 15 : 40) && "..."}
              </h2>
              <div className="flex gap-5">
                <p>Post Date</p>
                <li className="text-gray-500">{key.postdate}</li>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <a href={key.joburl} target="_blank" rel="noopener noreferrer">
              <button className="border-primary text-primary hover:text-white border-2 px-5 rounded-md py-2 hover:bg-primary text-sm">
                View
              </button>
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default Common;
