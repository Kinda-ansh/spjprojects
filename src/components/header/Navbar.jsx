import React from "react";
import logo from "../../assets/spjlogo.png";
import { Button } from "@/components/ui/button";
import NavigationMenuDemo from "./headerComponents/NavigationMenu";
import { Link } from "react-router-dom";
import {
  SheetTrigger,
  Sheet,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <nav className="bg-primary w-full">
      <div className="w-full">
        <div className="flex items-center justify-between h-20 px-5 w-full">
          <div className="flex-shrink-0">
            <Link className="p-5">
              <img src={logo} height={100} width={100} className="py-5" />
            </Link>
          </div>
          {/* for lg screen component and class */}
          <div className="hidden md:block ">
            <NavigationMenuDemo />
          </div>

          {/*  for sm and md screen component and class  */}
          <div className="flex md:hidden ">
            <Sheet className="">
              <SheetTrigger asChild>
                <Button variant="outline">
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-scroll">
                <SheetClose asChild>
                  <Link to="/">
                    <img
                      src={logo}
                      height={100}
                      width={100}
                      className="py-7 ml-3"
                    />
                  </Link>
                </SheetClose>
                <div>
                  <SheetClose asChild>
                    <Link
                      to="/sarkari-jobs"
                      className="bg-white ms-3 text-black hover:text-divyang hover:bg-white text-lg"
                    >
                      Sarkari Jobs
                    </Link>
                  </SheetClose>{" "}
                </div>
                <hr />
                <div>
                  <SheetClose asChild>
                    <Link
                      to="/private-jobs"
                      className="bg-white ms-3 mt-3 text-black hover:text-divyang hover:bg-white text-lg"
                    >
                      Private Jobs
                    </Link>
                  </SheetClose>
                </div>
                <hr />
                <div>
                  <SheetClose asChild>
                    <Link
                      to="/results"
                      className="bg-white ms-3 mt-3 text-black hover:text-divyang hover:bg-white text-lg"
                    >
                      Results
                    </Link>
                  </SheetClose>
                </div>
                <hr />
                <div>
                  <SheetClose asChild>
                    <Link
                      to="/latest-news"
                      className="bg-white ms-3 mt-3 text-black hover:text-divyang hover:bg-white text-lg"
                    >
                      Latest News
                    </Link>
                  </SheetClose>
                </div>
                <hr />
                <div>
                  <SheetClose asChild>
                    <Link
                      to="/answer-key"
                      className="bg-white ms-3 mt-3 text-black hover:text-divyang hover:bg-white text-lg"
                    >
                      Answer Keys
                    </Link>
                  </SheetClose>
                </div>
                <hr />
                <div>
                  <SheetClose asChild>
                    <Link
                      to="/admit-card"
                      className="bg-white ms-3 mt-3 text-black hover:text-divyang hover:bg-white text-lg"
                    >
                      Admit Card
                    </Link>
                  </SheetClose>
                </div>
                <hr />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
