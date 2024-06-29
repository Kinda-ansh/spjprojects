import React, { lazy } from "react";
import { Link } from "react-router-dom";
import NavTop from "../../assets/navAdsbot.png";
// import NavBtm from "../../assets/navAdsbot.png";

const NavBtmAdv = () => {
  return (
    <>
      <a href="/page-not-exist" target="_blank" className="p-1">
        <img src={NavTop} className="w-full" />
      </a>
    </>
  );
};

export default NavBtmAdv;
