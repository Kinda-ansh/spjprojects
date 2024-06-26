import React from 'react'
import ptvIcon from '../../assets/pvt.svg'
const PrivateJob = () => {
  return (
    <>
      
      <div className='w-full flex justify-between items-center hover:bg-blue-100 hover:rounded-md p-2 cursor-pointer'>
        <div className='flex gap-7 items-center'>
          <div> <img src={ptvIcon} alt="" /></div>
         <div >
          <h2 className='w-full text-xl text-bold'>Rajasthan Board Class 10th PrivateJob 2024</h2>
          <div className='gap-5'>
           <p className='flex gap-3 text-sm'>Last Date <li className='text-gray-500'>29/05/2024</li> </p> 
           <p className='flex gap-3 text-sm'>Salary <li className='text-gray-500'>₹15,000 - ₹25,000/Month</li> </p> 
          </div>
          </div>
        </div>
        <div className='flex justify-self-end'>
          <button className='bg-sarkaribg text-lg text-sarkari px-4 py-2 hover:bg-[#05CFC3] hover:text-white rounded-md'>View</button>
        </div>
        
      </div>
    </>
  )
}

export default PrivateJob
