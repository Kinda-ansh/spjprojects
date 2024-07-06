import axiosInstance from "@/src/utils/axiosConfig";
import React, { useEffect, useState } from "react";
import Loading from "../loading/Loading";
import CardsArray1 from "./CardsArray1";
import CardsArray2 from "./CardsArray2";

const QuickCards = () => {
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
  const limitedData2 = data.slice(4, 8);

  return (
    <div className=" flex gap-3 p-3 0  min-w-fit flex-col">
      {/* {limitedData?.map((card) => (
        <div
          key={card.id}
          className={
            "border border-gray-300 rounded-lg p-4 text-center shadow-lg w-full overflow-hidden flex flex-col justify-between hover:bg-privatebg "
          }
        >
          <h3 className="text-xl font-bold mb-2 ">
            {" "}
            {card.title.substring(0, 20)}
            {card.title.length > 20 && "..."}
          </h3>
          <button className="border-primary text-primary hover:text-white border-2 px-3 rounded-md py-2 hover:bg-primary text-sm">
            <a
              href={card.url}
              target="_blank"
              // className="text-blue-500 hover:underline border-primary text-primary hover:text-white border-2 px-5 rounded-md py-2 hover:bg-primary text-sm"
            >
              Apply
            </a>
          </button>
        </div>
      ))} */}
      <CardsArray2 />
      <CardsArray1 />
    </div>
  );
};

export default QuickCards;
