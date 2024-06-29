import React from "react";
import ptvIcon from "../../assets/pvt.svg";
import Loading from "../loading/Loading";

const PrivateJob = ({ data }) => {
  if (!data || data.length === 0) {
    return <Loading />; // Replace with your loading component
  }

  return (
    <>
      {data.map((key, index) => (
        <div
          key={index}
          className="w-full flex justify-between items-center hover:bg-gray-50 hover:rounded-md p-2 "
        >
          <div className="flex gap-7 items-center">
            <div>
              {" "}
              <img
                src={ptvIcon}
                alt="sarkariprivatejobs-icon"
                style={{ width: "50px", height: "50px" }}
              />
            </div>
            <div>
              <h2 className="w-full text-xl text-bold">
                {key.jobtitle.substring(0, 90)}
                {key.jobtitle.length > 90 && "..."}
              </h2>
              <div className="gap-5">
                <p className="flex gap-3 text-sm">
                  Post Date <li className="text-gray-500">{key.postdate}</li>{" "}
                </p>
                <p className="flex gap-3 text-sm">
                  Salary <li className="text-gray-500">{key.salary}</li>{" "}
                </p>
                <p className="flex gap-3 text-sm">
                  Location <li className="text-gray-500">{key.joblocation}</li>{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-self-end">
            <a href={key.joburl} target="_blank" rel="noopener noreferrer">
              <button className="border-primary text-primary hover:text-white border-2 px-5 rounded-md py-2 hover:bg-primary text-sm">
                Apply Now
              </button>
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default PrivateJob;
