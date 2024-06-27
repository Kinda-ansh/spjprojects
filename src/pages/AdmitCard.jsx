import React, { useEffect, useState } from "react";
import Common from "../components/commonComponent/Common";
import axiosInstance from "../utils/axiosConfig";

const AdmitCard = () => {
  const [data, setData] = useState([]);

  const fetchAnswerKeys = async () => {
    try {
      const response = await axiosInstance.get("/gov/admitcard");
      setData(response.data.data.GovAdmitcards);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAnswerKeys();
  }, []);

  return (
    <>
      <div className="h-full">
        <div className="my-8">
          <h1 className="text-3xl text-center font-semibold">
            All <span className="text-sarkari">Admit Card</span>
          </h1>
          <p className="text-lg text-center">
            Here is the latest top Admit Card, these Admit Card coming from
            sarkari result website.
          </p>
        </div>

        <div className="w-full flex gap-5">
          {/* data portion */}

          <div className="lg:w-3/4">
            <Common data={data} />
          </div>
          {/* advertisement partion.. hidden on small screen */}
          <div className="hidden lg:flex border-2 w-1/4 h-100">advs</div>
        </div>
      </div>
    </>
  );
};

export default AdmitCard;
