import React from "react";
import NavBtmAdv from "../components/advertisements/NavBottomAdv";
import JobMarquee from "../components/quickLinks/JobMarquee";
import NewsMarquee from "../components/quickLinks/NewsMarquee";

const HomePage = () => {
  return (
    <div>
      <JobMarquee />
      <NavBtmAdv />
      <NewsMarquee />
      <>Home page</>
    </div>
  );
};

export default HomePage;
