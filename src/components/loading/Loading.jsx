import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="flex items-center justify-center m-auto min-h-[100vh] w-full">
      {/* <img
        src={loading}
        alt="sarkariprivatejobs-loading"
        width="200px"
        height="200px"
      /> */}
      <span class="loader"></span>
    </div>
  );
};

export default Loading;
