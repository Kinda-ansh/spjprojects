import React from 'react'
import iconpvt from '../../assets/iconpvt.svg'
const Result = () => {
  return (
    <>
           
      <div className='w-full flex justify-between items-center hover:bg-blue-100 hover:rounded-md p-2 cursor-pointer'>
        <div className='flex gap-7 items-center'>
          <div> <img src={iconpvt} alt="" /></div>
         <div >
          <h2 className='w-full text-xl text-bold'>Rajasthan Board Class 10th Result 2024</h2>
          <div className='flex gap-5'>
            <li className='text-gray-500'>Update</li>
            <li className='text-gray-500'>Latest</li>
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

export default Result
