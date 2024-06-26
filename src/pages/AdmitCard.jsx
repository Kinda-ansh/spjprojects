import React from "react";
import Result from "../components/results/Result";


const AdmitCard = () => {
  return <>
  <div className="h-full">
  <div className="my-8">
  <h1 className='text-3xl text-center font-semibold'>All <span className='text-sarkari'>Admit Card</span></h1>
      <p className='text-lg text-center'>Here is the latest top Admit Card, these Admit Card coming from sarkari result website.</p>
    
  </div>

  <div className='w-full flex gap-5'>
 {/* data portion */}
      
 <div className='lg:w-3/4'>
  <Result/>
  <Result/>
  <Result/>
  <Result/>
  <Result/>
  <Result/>
  <Result/>
  </div>
  {/* advertisement partion.. hidden on small screen */}
  <div className='hidden lg:flex border-2 w-1/4 h-100'>advs</div>

  </div>
  </div>
  </>;
};

export default AdmitCard;
