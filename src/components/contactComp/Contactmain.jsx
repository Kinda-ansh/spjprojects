import React from 'react'
import ContactAddress from './ContactAddress'
import ContactFrom from './ContactFrom'

const Contactmain = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-full mt-32 ">
        <h1 className="text-center text-4xl font-bold ">Contact Us</h1>
        <p className="text-center text-base font-bold text-slate-500 ">Have a question or need more information? <br />
          Just drop us a line!</p>
      </div>
      <div className='flex flex-wrap lg:flex-nowrap justify-center  lg:justify-center p-5 gap-x-96 gap-y-10 ' >
        <ContactAddress />
        <ContactFrom />
      </div>

    </>

  )
}

export default Contactmain
