import React from "react";
import sarkari from "../../assets/sarkari.svg";
import { IoArrowForwardOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Loading from "../loading/Loading";

const SarkariJobsHome = ({ data }) => {
  if (!data || data.length === 0) {
    return <Loading />; // Replace with your loading component
  }

  return (
    <>
      <div className="">
        <h1 className="text-2xl font-bold ">
          Sarkari <span className="text-primary">Jobs </span>
        </h1>{" "}
        {data?.map((key, index) => (
          <div className="mt-5" key={index}>
            {" "}
            <div className="w-full flex gap-5 cursor-pointer">
              <div className=" w-full flex justify-between items-center">
                <div className="flex gap-5 items-top">
                  <div style={{ width: "50px", height: "50px" }}>
                    {" "}
                    <img src={sarkari} alt="" width="45px" height="45px" />
                  </div>
                  <div>
                    <h2 className="w-full text-lg text-bold ">
                      {key.jobtitle.substring(0, 40)}
                      {key.jobtitle.length > 40 && "..."}
                    </h2>
                    <div className="flex gap-3">
                      <p className="text-gray-500">last date</p>
                      <li className="text-gray-500">29/05/2024</li>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end ml-10">
                  <button className="bg-sarkaribg text-sarkari p-2 rounded-md hover:bg-[#05CFC3] hover:text-white">
                    <a
                      href={key.joburl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View
                    </a>
                  </button>
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
