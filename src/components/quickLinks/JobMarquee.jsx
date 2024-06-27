import React from "react";

const JobMarquee = ({ data }) => {
  return (
    <div className="pt-5">
      <marquee className="flex">
        {data?.map((key, index) => (
          <a
            key={index}
            href={key.joburl}
            target="_main"
            className="text-primary mx-4"
          >
            {key.jobtitle} ||
          </a>
        ))}
      </marquee>
    </div>
  );
};

export default JobMarquee;
