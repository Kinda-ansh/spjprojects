import React, { lazy } from "react";
import { Link } from "react-router-dom";
// const NavTop = lazy(() => import("../../assets/navtpo.png"));
import NavBtm from "../../assets/navbtm.png";

const NavBtmAdv = () => {
  return (
    <>
      <Link className="p-1">
        <img src={NavBtm} className="w-full" />
      </Link>
    </>
  );
};

export default NavBtmAdv;
