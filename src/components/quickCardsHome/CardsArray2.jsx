import axiosInstance from "@/src/utils/axiosConfig";
import React, { useEffect, useState } from "react";
import Loading from "../loading/Loading";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const CardsArray2 = () => {
  const [data, setData] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  const fetchHilight = async () => {
    try {
      const response = await axiosInstance.get("/highlight", {
        headers: {
          "x-spj-host": "spj.sarkariprivatejobs.com",
          "x-spj-key": "dwff230a1ad4msh4243dsd2s1bd075jsn11c95bb6bsdf33",
        },
      });

      setData(response.data.data.HighlightsData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchHilight();
  }, []);

  const limitedData = data.slice(0, 4);

  return (
    <div className=" flex gap-5 p-3 0  min-w-fit ">
      {limitedData?.map((key) => (
        <div
          key={key.id}
          className={
            "card border hover:bg-gray-200 border-gray-300 rounded-lg p-4 text-center shadow-lg w-full overflow-hidden flex flex-col justify-between transition-transform duration-300 ease-in-out hover:shadow-2xl hover:scale-105"
          }
        >
          <h3 className="text-xl font-bold mb-2 ">
            {" "}
            {key.title.substring(0, 20)}
            {key.title.length > 20 && "..."}
          </h3>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="border-primary text-primary hover:text-primary  text-white border-2 bg-primary text-sm"
              >
                View
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <div className="py-3">
                <h2 className="text-primary text-2xl">{key.title}</h2>
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
                  <span className="text-gray-500 ml-auto">10th pass</span>
                </div>
              </div>
              <div className="w-full flex justify-center items-center mt-5">
                <button className="border-primary text-primary hover:text-white border-2 px-5 rounded-md py-2 hover:bg-primary text-sm">
                  <a href={key.url} target="_blank" rel="noopener noreferrer">
                    Apply Job
                  </a>
                </button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      ))}
    </div>
  );
};

export default CardsArray2;
