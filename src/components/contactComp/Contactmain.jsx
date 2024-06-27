import React from 'react'
import ContactAddress from './ContactAddress'
import ContactFrom from './ContactFrom'

const Contactmain = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-full  ">
        <h1 className="text-center text-3xl font-bold py-5 text-primary">Contact Us</h1>
        <p className="text-center text-base font-bold text-slate-500 ">Have a question or need more information?
          Just drop us a line!</p>
      </div>
      <div className='w-full ' >
        {/* <ContactAddress /> */}
        <ContactFrom />
      </div>

    </>

  )
}

export default Contactmain
