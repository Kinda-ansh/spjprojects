import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import axiosInstance from "@/src/utils/axiosConfig";

const ContactFrom = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/contact/create", formData);
      if (response.status === 201) {
        toast.success("Message sent successfully!");
        setFormData({
          fullName: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <ToastContainer />
      <div className="flex flex-col w-full rounded-lg ">
        <p className="font-medium text-2xl text-center">Send us a message</p>
        <div className="">
          <form className=" flex flex-col leading-3" onSubmit={handelSubmit}>
            <label className="text-xl">Your name</label> <br />
            <input
              name="fullName"
              required
              className="outline-none border-gray-500 rounded-xl focus:border-none"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
            />{" "}
            <br />
            <label className="text-xl">Your email</label> <br />
            <input
              name="email"
              required
              className="outline-none border-gray-500 rounded-xl focus:border-none"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />{" "}
            <br />
            <label className="text-xl">Subject</label> <br />
            <input
              name="subject"
              required
              className="outline-none border-gray-500 rounded-xl focus:border-none"
              type="text"
              value={formData.subject}
              onChange={handleChange}
            />{" "}
            <br />
            <label className="text-xl ">Your message</label> <br />
            <textarea
              name="message"
              required
              className="outline-none border-gray-500 rounded-xl focus:border-none"
              rows="10"
              value={formData.message}
              onChange={handleChange}
            ></textarea>{" "}
            <br />
            <Button
              type="submit"
              className="border-primary text-white mt-5 hover:text-primary border-2 px-5 rounded-md py-2 hover:bg-white text-sm mb-10"
            >
              Submit Your Message
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactFrom;
