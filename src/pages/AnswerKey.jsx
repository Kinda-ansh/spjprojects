import React from "react";
import Result from "../components/results/Result";
import iconpvt from '.././assets/navbtm.png'

const AnswerKey = () => {
  return <>
  <div className="my-8">
  <h1 className='text-3xl text-center font-semibold'>All <span className='text-sarkari'>Answer Key</span></h1>
      <p className='text-lg text-center'>Here is the latest top Answer Key, these Answer Key coming from sarkari result website.</p>
    
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
  <div className='hidden lg:flex border-2 w-1/4'>
  <img src={iconpvt} alt="" />
  </div>

  </div>
  </>;
};

export default AnswerKey;
