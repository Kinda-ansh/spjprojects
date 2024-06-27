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
      <div className="flex items-center gap-10 flex-wrap lg:flex-nowrap">
        <p className="text-start ">
          Great platform for the job seeker that passionate about startups. Find
          your dream job easier.Great platform for the job seeker that
          passionate about startups. Find your dream job easier.Great platform
          for the job seeker that passionate about startups. Find your dream job
          easier. Great platform for the job seeker that passionate about
          startups. Find your dream job easier. Great platform for the job
          seeker that passionate about startups. Find your dream job
          easier.Great platform for the job seeker that passionate about
          startups. Find your dream job easier.Great platform for the job seeker
          that passionate about startups. Find your dream job easier. Great
          platform for the job seeker that passionate about startups. Find your
          dream job easier.Great platform for the job seeker that passionate
          about startups. Find your dream job easier.Great platform for the job
          seeker that passionate about startups. Find your dream job
          easier.Great platform for the job seeker that passionate about
          startups. Find your dream job easier. Great platform for the job
          seeker that passionate about startups. Find your dream job
          easier.Great platform for the job seeker that passionate about
          startups. Find your dream job easier.Great platform for the job seeker
          that passionate about startups. Find your dream job easier.Great
          platform for the job seeker that passionate about startups. Find your
          dream job easier. Great platform for the job seeker that passionate
          about startups. Find your dream job easier.
        </p>

        <img src={man} alt="" className=" " />
      </div>
    </div>
  );
};

export default AboutHome;
