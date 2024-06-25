import React from "react";

const LayoutWraper = ({ children }) => {
  return (
    <div className="m-auto max-w-screen-xl px-5 overflow-x-hidden ">
      {children}
    </div>
  );
};

export default LayoutWraper;
