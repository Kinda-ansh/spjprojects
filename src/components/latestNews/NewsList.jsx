import React from "react";
import newsimg from "../../assets/newsimg.svg";
import Loading from "../loading/Loading";

const NewsList = ({ data }) => {
  if (!data || data.length === 0) {
    return <Loading />; // Replace with your loading component
  }

  return (
    <>
      {data?.map((key, index) => (
        <div
          key={index}
          className="w-full mb-5  flex flex-wrap-reverse lg:flex-nowrap hover:bg-blue-100 rounded-md p-4 shadow-md cursor-pointer"
        >
          <div className="flex gap-5 flex-col">
            <p className="text-primary">{key.postdate}</p>
            <h2 className="w-full text-2xl text-bold text-primary">
              {key.title}
            </h2>
            <p>
              {key.description.substring(0, 250)}
              {key.description.length > 250 && "..."}{" "}
              <a
                href={key.url}
                className="text-primary hover:text-bold hover:text-gray-900"
                target="_main"
              >
                read more
              </a>
            </p>

            <div className="flex flex-wrap gap-3">
              <li className="text-primary">{key.readtime}</li>
            </div>
          </div>

          <div className="flex">
            <img src={newsimg} alt="" width="full" height="full" />
          </div>
        </div>
      ))}
    </>
  );
};

export default NewsList;
