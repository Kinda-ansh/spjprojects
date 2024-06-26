import React from "react";
import iconpvt from '.././assets/navbtm.png'
import PrivateJob from "../components/privateJobs/PrivateJob";

const PrivateJobs = () => {
  return <>
  <div className="my-8">
  <h1 className='text-3xl text-center font-semibold'>All <span className='text-sarkari'>Private Jobs</span></h1>
      <p className='text-lg text-center'>Here is the latest top Private Jobs, these Private Jobs coming from sarkari result website.</p>
    
  </div>

  <div className='w-full flex gap-5'>
 {/* data portion */}
      
 <div className='lg:w-3/4'>
    <PrivateJob/>
    <PrivateJob/>
    <PrivateJob/>
    <PrivateJob/>
    <PrivateJob/>
    <PrivateJob/>
    <PrivateJob/>
    <PrivateJob/>
    <PrivateJob/>
    <PrivateJob/>
  </div>
  {/* advertisement partion.. hidden on small screen */}
  <div className='hidden lg:flex border-2 w-1/4'>
  <img src={iconpvt} alt="" />
  </div>

  </div>
  </>;
};

export default PrivateJobs;
