import { Button } from '@/components/ui/button';
import React from 'react';

const ContactFrom = () => {
  const handelSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
    
    <div className='flex flex-col w-full p-4 rounded-lg '>
        <p className='font-medium text-2xl text-center'>Send us a message</p>
        <div className='p-4'>
          <form className='py-3 flex  flex-col leading-3 '>
            <label className='text-xl'>Your name</label> <br />
            <input required="true" className='outline-none border-gray-500 rounded-xl focus:border-none  ' type="text" /> <br />
            <label className='text-xl'>Your email</label> <br />
            <input required="true" className='outline-none border-gray-500 rounded-xl focus:border-none ' type="email" /> <br />
            <label className='text-xl'>Subject</label> <br />
            <input required="true" className='outline-none border-gray-500 rounded-xl focus:border-none ' type="text" /> <br />
            <label className='text-xl '>Your message</label> <br />
            <textarea required="true" className='outline-none border-gray-500 rounded-xl focus:border-none ' rows="10"></textarea> <br />
            <div className="flex justify-self-end">
            <button onClick={handelSubmit} className="border-primary text-primary hover:text-white border-2 px-5 rounded-md py-2 hover:bg-primary text-sm ml-auto">
           
                Submit
           
            </button>
          </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactFrom;
