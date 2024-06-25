import { Button } from '@/components/ui/button';
import React from 'react';

const ContactFrom = () => {
  const handelSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
    
    <div className='flex flex-col max-w-md p-4 rounded-lg min-w-96 '>
        <p className='font-medium text-xl'>Send us a message</p>
        <div className=' bg-gray-50 p-4'>
          <form className='py-6 flex  flex-col leading-3 '>
            <label className='text-xl'>Your name</label> <br />
            <input className='outline-none border-gray-500 rounded-xl focus:border-none  ' type="text" /> <br />
            <label className='text-xl'>Your email</label> <br />
            <input className='outline-none border-gray-500 rounded-xl focus:border-none ' type="email" /> <br />
            <label className='text-xl'>Subject</label> <br />
            <input className='outline-none border-gray-500 rounded-xl focus:border-none ' type="text" /> <br />
            <label className='text-xl '>Your message (optional)</label> <br />
            <textarea className='outline-none border-gray-500 rounded-xl focus:border-none   max-w-96 h-52'></textarea> <br />
            <Button className="w-full mt-6 rounded-3xl bg-divyang hover:bg-divyang  text-white " onClick={handelSubmit}>Submit</Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactFrom;
