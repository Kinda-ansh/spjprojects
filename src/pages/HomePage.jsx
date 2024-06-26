import React from "react";
import NavBtmAdv from "../components/advertisements/NavBottomAdv";
import JobMarquee from "../components/quickLinks/JobMarquee";
import NewsMarquee from "../components/quickLinks/NewsMarquee";
import PrivateJobsHome from "../components/homePageComp/PrivateJobsHome";
import SarkariJobsHome from "../components/homePageComp/SarkariJobsHome";
import TopResultsHome from "../components/homePageComp/TopResultsHome";

const HomePage = () => {
  return (
    <div>
      <JobMarquee />
      <NavBtmAdv />
      <NewsMarquee />
      {/* <div className="flex justify-between items-center">
        
        ################### Ads Section ###################
        <div>
        <div className="hidden lg:flex border-2 w-1/4">Ads Section</div>
        </div>
        ################### Ads Section ###################
        </div> */}

      <div className="w-full flex gap-5 mt-10">
        <div className="w-full flex justify-between items-center p-2 gap-10">
          <SarkariJobsHome />
          <PrivateJobsHome />
        </div>

        <div className="hidden lg:flex border-2 w-1/4">advs</div>
      </div>
      <TopResultsHome />
    </div>
  );
};

export default HomePage;
