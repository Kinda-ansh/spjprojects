import React, { lazy } from "react";
import { Link } from "react-router-dom";
// const NavTop = lazy(() => import("../../assets/navtpo.png"));
import NavBtm from "../../assets/navbtm.gif";

const NavBtmAdv = () => {
  return (
    <>
      <a href="https://www.flipcart.com" target="_main" className="p-1">
        <img src={NavBtm} className="w-full" />
      </a>
    </>
  );
};

export default NavBtmAdv;
