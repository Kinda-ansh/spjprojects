import React from "react";
import newsimg from "../../assets/newsimg.svg";

const NewsList = () => {
  return (
    <div className="w-full my-5  flex flex-wrap-reverse lg:flex-nowrap hover:bg-blue-100 rounded-md p-4 shadow-md cursor-pointer">
      <div className="flex gap-5 flex-col">
        <p className="text-primary">Mar 1</p>
        <h2 className="w-full text-2xl text-bold text-primary">
          Rajasthan Board Result || Rajsthan Board Class 10th Result 2024 ||
          Class 10th Result 2024
        </h2>
        <p>
          I’m always trying to think of new and interesting business ideas. I
          generally try to come up with ideas by thinking of what I would want
          to do or see in the world. Then, I try to find reasons why it wouldn’t
          work...
        </p>

        <div className="flex flex-wrap gap-3">
          <div className="flex">
            <img src="" alt="" />
            <p className="text-primary">By Sarkari Private Jobs</p>
          </div>

          <li className="text-primary">7 min read</li>
        </div>
      </div>

      <div className="flex">
        <img src={newsimg} alt="" width="full" height="full" />
      </div>
    </div>
  );
};

export default NewsList;
