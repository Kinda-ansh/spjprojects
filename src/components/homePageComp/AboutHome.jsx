import React from "react";
import man from "../../assets/man.png";
import { Link } from "react-router-dom";
import { IoArrowForwardOutline } from "react-icons/io5";

const AboutHome = () => {
  return (
    <div className="flex flex-col pt-20 pb-20">
      <div className="my-8">
        <h1 className="text-3xl text-center font-semibold">
          Read <span className="text-sarkari">About Us</span>
        </h1>
        <p className="text-lg text-center">
          Here is the about us part, these results coming from sarkari result
          website.
        </p>
      </div>
      <div className="flex items-center gap-10 ">
        <div className="text-start text-xl">
          <p>
            Welcome to Sarkari Private Jobs, your one-stop destination for the
            latest updates on government and private job opportunities. Our
            mission is to bridge the gap between job seekers and employers by
            providing accurate and timely information about job openings, admit
            card releases, exam results, and other related news.
          </p>
          <br />
          <h3 className="font-bold text-2xl text-primary">Who We Are</h3> <br />
          Sarkari Private Jobs is a dedicated platform created by a team of
          professionals with extensive experience in the recruitment industry.
          We understand the challenges job seekers face in finding the right
          opportunities and the importance of having access to reliable
          information. Our goal is to make the job search process easier and
          more efficient for everyone.
          <br />
          At Sarkari Private Jobs, we believe in empowering job seekers with the
          knowledge and tools they need to succeed. Our vision is to become the
          most trusted and comprehensive job portal, known for our commitment to
          accuracy, reliability, and user satisfaction.
        </div>
        <div className="w-full">
          <img src={man} alt="" className=" " />
        </div>
      </div>
      <div>
        <Link to="/about-us">
          <p className="flex items-center gap-2 mt-5 text-primary font-medium text-2xl">
            Read More About Us <IoArrowForwardOutline />
          </p>
        </Link>
      </div>
    </div>
  );
};

export default AboutHome;
