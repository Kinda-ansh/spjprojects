import React from "react";
import SarkariJob from "../components/sarkariJobs/sarkarijob";


const SarkariJobs = () => {
  return <>
  <div className="my-8">
  <h1 className='text-3xl text-center font-semibold'>All <span className='text-sarkari'>SarkariJobs</span></h1>
      <p className='text-lg text-center'>Here is the latest top SarkariJobs, these SarkariJobs coming from sarkari result website.</p>
    
  </div>

  <div className='w-full flex gap-5'>
 {/* data portion */}
      
 <div className='lg:w-3/4'>
 <SarkariJob/>
 <SarkariJob/>
 <SarkariJob/>
 <SarkariJob/>
 <SarkariJob/>
 <SarkariJob/>
 <SarkariJob/>
 <SarkariJob/>
  </div>
  {/* advertisement partion.. hidden on small screen */}
  <div className='hidden lg:flex border-2 w-1/4 h-100'>
  </div>

  </div>
  </>;
};

export default SarkariJobs;
