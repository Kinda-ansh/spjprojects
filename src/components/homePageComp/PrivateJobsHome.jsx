import React from "react";
import ptvIcon from "../../assets/pvt.svg";
import { IoArrowForwardOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Loading from "../loading/Loading";

const PrivateJobsHome = ({ data }) => {
  if (!data || data.length === 0) {
    return <Loading />; // Replace with your loading component
  }

  return (
    <>
      <div className="">
        <h1 className="text-2xl font-bold ">
          Private <span className="text-primary">Jobs </span>
        </h1>{" "}
        {data?.map((key, index) => (
          <div key={index} className="mt-5">
            <div className="w-full flex gap-5 cursor-pointer">
              <div className=" w-full flex justify-between items-center ">
                <div className="flex gap-7 items-center">
                  <div
                    style={{ width: "50px", height: "50px" }}
                    className="flex justify-start items-center m-auto"
                  >
                    {" "}
                    <img src={ptvIcon} alt="" width="45px" height="45px" />
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
                  <button className="bg-privatebg text-private p-2 rounded-md hover:bg-private hover:text-white">
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
          <Link to="/private-jobs">
            <p className="flex items-center gap-2 mt-5 text-private text-base font-medium">
              Show all jobs <IoArrowForwardOutline />
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PrivateJobsHome;
