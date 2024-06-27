import React, { lazy } from "react";
import { Link } from "react-router-dom";
// const NavTop = lazy(() => import("../../assets/navtop.jpg"));
import NavTop from "../../assets/NavTop.png";

const NavTopAdv = () => {
  return (
    <>
      <Link className="p-1">
        <img src={`${NavTop}`} className="w-full" />
      </Link>
    </>
  );
};

export default NavTopAdv;
