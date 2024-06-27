import React, { useEffect, useState } from "react";
import NavBtmAdv from "../components/advertisements/NavBottomAdv";
import JobMarquee from "../components/quickLinks/JobMarquee";
import NewsMarquee from "../components/quickLinks/NewsMarquee";
import PrivateJobsHome from "../components/homePageComp/PrivateJobsHome";
import SarkariJobsHome from "../components/homePageComp/SarkariJobsHome";
import TopResultsHome from "../components/homePageComp/TopResultsHome";
import HomePageFullScreenAds from "../components/advertisements/HomePageFullScreenAds";
import AboutHome from "../components/homePageComp/AboutHome";
import axiosInstance from "../utils/axiosConfig";

const HomePage = () => {
  const [data, setData] = useState([]);

  const fetchAnswerKeys = async () => {
    try {
      const response = await axiosInstance.get("/home/web");
      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAnswerKeys();
  }, []);
  // console.log(data);
  const govData = data.Governmentjobs;
  const pvtData = data.Privatejobs;
  const NewsMarque = data.LatestNewsMarque;
  const govMarque = data.GovernmentjobsMarque;
  const results = data.JobResults;

  return (
    <div>
      <JobMarquee data={govMarque} />
      <NavBtmAdv />
      <NewsMarquee data={NewsMarque} />
      {/* <div className="flex justify-between items-center">
        
        ################### Ads Section ###################
        <div>
        <div className="hidden lg:flex border-2 w-1/4">Ads Section</div>
        </div>
        ################### Ads Section ###################
        </div> */}

      <div className="w-full flex gap-5 mt-10">
        <div className="w-full flex justify-between items-start p-2 gap-10 flex-wrap lg:flex-nowrap">
          <SarkariJobsHome data={govData} />
          <PrivateJobsHome data={pvtData} />
        </div>

        <div className="hidden lg:flex border-2 w-1/4">Advertisement</div>
      </div>
      <TopResultsHome />

      <HomePageFullScreenAds />
      <AboutHome />
    </div>
  );
};

export default HomePage;
