import React from "react";

const NewsMarquee = ({ data }) => {
  return (
    <>
      <h1 className="text-center text-4xl font-bold">
        Latest <span className="text-primary">Items </span>
      </h1>
      <div className="pt-5">
        <marquee className="flex" loop="6">
          {data?.map((key, index) => (
            <a
              key={index}
              href={key.url}
              target="_blank"
              className="text-primary mx-4"
            >
              {key.title}
              <span className="text-black ml-5 "> || </span>{" "}
            </a>
          ))}
        </marquee>
        <marquee className=" pt-3" direction="right">
          {data?.map((key, index) => (
            <a
              key={index}
              href={key.url}
              target="_blank"
              className="text-primary mx-4"
            >
              {key.title} <span className="text-black ml-5 "> ||</span>{" "}
            </a>
          ))}
        </marquee>
      </div>
    </>
  );
};

export default NewsMarquee;
