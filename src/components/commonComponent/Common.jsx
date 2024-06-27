import React from "react";
import iconpvt from "../../assets/iconpvt.svg";
import Loading from "../loading/Loading";

const Common = ({ data }) => {
  if (!data || data.length === 0) {
    return <Loading />; // Replace with your loading component
  }

  return (
    <>
      {data.map((key, index) => (
        <div
          key={index}
          className="w-full flex justify-between items-center hover:bg-blue-100 hover:rounded-md p-2 cursor-pointer"
        >
          <div className="flex gap-7 items-center">
            <div style={{ width: "50px", height: "50px" }}>
              <img
                src={iconpvt}
                alt="sarkariprivatejobs-icon"
                width="45px"
                height="45px"
              />
            </div>
            <div>
              <h2 className="w-full text-xl font-bold">
                {key.jobtitle.substring(0, 90)}
                {key.jobtitle.length > 90 && "..."}
              </h2>
              <div className="flex gap-5">
                <p>Posted date</p>
                <li className="text-gray-500">12/06/2024</li>
              </div>
            </div>
          </div>
          <div className="flex justify-self-end">
            <button className="bg-sarkaribg text-lg text-sarkari px-4 py-2 hover:bg-[#05CFC3] hover:text-white rounded-md">
              <a href={key.joburl} target="_blank" rel="noopener noreferrer">
                View
              </a>
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Common;
