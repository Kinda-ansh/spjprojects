import React from "react";
import NewsList from "../components/latestNews/NewsList";
import newsAds from "../assets/newsAds.gif";

const LatestNews = () => {
  return <>
   
  <div className="my-8">
  <img src={newsAds} alt="news page ads" />
      <h1 className='text-lg font-semibold text-primary'>Trending Jobs News</h1>
  </div>

  

  <div className='w-full flex gap-5'>
 {/* data portion */}     
  <div className='lg:w-3/4'>
  
   <NewsList/>
   <NewsList/>
   <NewsList/>
   <NewsList/>
  </div>






  {/* advertisement partion.. hidden on small screen */}
  <div className='hidden lg:flex border-2 w-1/4'>
     {/* <img src={iconpvt} alt="" /> */}
     <div className="w-full gap-10">
     <div className="border-2 w-full mb-2" style={{ height: "200px"}}></div>
     <div className="border-2 w-full mb-2" style={{ height: "200px"}}></div>
     <div className="border-2 w-full mb-2" style={{ height: "200px"}}></div>
  </div>
  </div>

  </div>
  </>;
};

export default LatestNews;