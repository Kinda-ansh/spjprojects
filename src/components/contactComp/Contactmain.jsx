import React from "react";
import ContactAddress from "./ContactAddress";
import ContactFrom from "./ContactFrom";
import contact from "../../assets/contact.jpg";

const Contactmain = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex flex-col items-center justify-center h-full  w-full">
        <h1 className="text-center text-3xl font-bold py-5 text-primary">
          Contact Us
        </h1>
        <p className="text-center text-base font-bold text-slate-500 ">
          Have a question or need more information? Just drop us a line!
        </p>
      </div>
      <div className="w-full flex items-center justify-center gap-10 flex-wrap lg:flex-nowrap">
        {/* <ContactAddress /> */}
        <div className="w-[40%]">
          <img src={contact} alt="" />
        </div>
        <div className="w-[60%]">
          <ContactFrom />
        </div>
      </div>
    </div>
  );
};

export default Contactmain;
