import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "./../components/footer/Footer";
import Navbar from "./../components/header/Navbar";
import LayoutWraper from "./LayoutWraper";
import NavTopAdv from "../components/advertisements/NavTopAdv";

// import SearchSection from "../components/searchBarSection/SearchSection";

const AppLayout = () => {
  return (
    <div className=" min-w-fit px-5 m-auto ">
      <LayoutWraper>
        <NavTopAdv />

        <Navbar />
      </LayoutWraper>

      {/* <Carousel /> */}

      {/* <HeroSection /> */}
      {/* <LayoutWraper> */}
      <Outlet />
      <ScrollRestoration />

      {/* </LayoutWraper> */}
      <LayoutWraper>
        <Footer />
      </LayoutWraper>
    </div>
  );
};

export default AppLayout;
