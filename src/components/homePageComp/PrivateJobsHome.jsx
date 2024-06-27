import React from "react";
import ptvIcon from "../../assets/pvt.svg";
import { IoArrowForwardOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Loading from "../loading/Loading";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

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
                <div className="flex justify-end ml-10 ">
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
                      
                        <p className="text-md">{key.jobdescription}</p>
                      </div>

                      <div className="w-full items-start  gap-5">
                        <div className="flex gap-3 items-center">
                          <p>Location</p>
                          <span className="text-gray-500 ml-auto">
                          {key.joblocation}
                          </span>
                        </div>
                        <div className="flex gap-3 items-center">
                          <p>salary</p>
                          <span className="text-gray-500 ml-auto">
                            {key.salary}
                          </span>
                        </div>
                        <div className="flex gap-3 items-center">
                          <p>Post-date</p>
                          <span className="text-gray-500 ml-auto">
                            {key.postdate}
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
