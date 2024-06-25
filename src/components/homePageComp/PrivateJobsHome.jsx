import React from "react";
import ptvIcon from "../../assets/pvt.svg";
import { IoArrowForwardOutline } from "react-icons/io5";

const PrivateJobsHome = () => {
  return (
    <>
      <div className="">
        <h1 className="text-2xl font-bold ">
          Private <span className="text-primary">Jobs </span>
        </h1>{" "}
        <div className="mt-5">
          <div className="w-full flex gap-">
            <div className=" w-full flex justify-between items-center ">
              <div className="flex gap-7 items-center">
                <div>
                  {" "}
                  <img src={ptvIcon} alt="" />
                </div>
                <div>
                  <h2 className="w-full text-lg text-bold ">
                    Railway ICF Apprentice Online...{" "}
                  </h2>
                  <div className="flex gap-3">
                    <p className="text-gray-500">last date</p>
                    <li className="text-gray-500">29/05/2024</li>
                  </div>
                </div>
              </div>
              <div className="flex justify-end ml-10">
                <button className="bg-privatebg text-private p-2 rounded-md hover:bg-private hover:text-white">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          {" "}
          <div className="w-full flex gap-">
            <div className=" w-full flex justify-between items-center ">
              <div className="flex gap-7 items-center">
                <div>
                  {" "}
                  <img src={ptvIcon} alt="" />
                </div>
                <div>
                  <h2 className="w-full text-lg text-bold ">
                    Railway ICF Apprentice Online...{" "}
                  </h2>
                  <div className="flex gap-3">
                    <p className="text-gray-500">last date</p>
                    <li className="text-gray-500">29/05/2024</li>
                  </div>
                </div>
              </div>
              <div className="flex justify-end ml-10">
                <button className="bg-privatebg text-private p-2 rounded-md hover:bg-private hover:text-white">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          {" "}
          <div className="w-full flex gap-">
            <div className=" w-full flex justify-between items-center ">
              <div className="flex gap-7 items-center">
                <div>
                  {" "}
                  <img src={ptvIcon} alt="" />
                </div>
                <div>
                  <h2 className="w-full text-lg text-bold ">
                    Railway ICF Apprentice Online...{" "}
                  </h2>
                  <div className="flex gap-3">
                    <p className="text-gray-500">last date</p>
                    <li className="text-gray-500">29/05/2024</li>
                  </div>
                </div>
              </div>
              <div className="flex justify-end ml-10">
                <button className="bg-privatebg text-private p-2 rounded-md hover:bg-private hover:text-white">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="flex items-center gap-2 mt-5 text-sarkari text-base font-medium">
            Show all jobs <IoArrowForwardOutline />
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivateJobsHome;
