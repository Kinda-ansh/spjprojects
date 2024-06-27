import React from "react";
import logo from "../../../assets/spjlogo.png";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
const FooterMiddle = () => {
  return (
    <footer className="">
      <hr />
      <div className="pt-4">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <a className="inline-flex items-center">
              <img src={logo} alt="logo" className="h-90 w-50" />
            </a>
            <div className="mt-6 lg:max-w-xl">
              <p className="text-lg text-gray-800">
                Sarkari Private Jobs is a career platform connecting employers
                and candidates. We make no particular recommendations for any
                job or employer. We do not charge any fees or guarantee job
                placements and do not give any references. We reserve the right
                to take strict action for any wrongful activity conducted by any
                person.
              </p>
              <br />
            </div>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <div className="flex flex-col">
              <p className="text-base gap-3 font-bold tracking-wide text-gray-900">
                Useful Links
              </p>
              <Link
                to="/sarkari-jobs"
                className="text-lg mt-1 text-gray-500 hover:text-divyang"
              >
                Jobs
              </Link>
              <Link to="/faqs" className="text-lg mt-1 text-gray-500 hover:text-divyang">
                FAQ
              </Link>
              <Link
                to="/contact-page"
                className="text-lg mt-1 text-gray-500 hover:text-divyang"
              >
                Contact us
              </Link>
             
              <Link to="/privacy-policy" className="text-lg mt-1 text-gray-500 hover:text-divyang">
                Privacy Policy
              </Link>
            </div>
          </div>

          <div>
            <div className="flex  flex-col  gap-1 px-2">
              <p className="text-base font-bold tracking-wide text-gray-900">
                Connect
              </p>
              <div className="flex gap-3 text-xl text-gray-500 hover:text-divyang">
                <FaLinkedin />
                <Link>Linkedin</Link>
              </div>
              <div className="flex gap-3 text-xl text-gray-500 hover:text-divyang">
                <FiTwitter />
                <Link>Twitter</Link>
              </div>
              <div className="flex gap-3 text-xl text-gray-500 hover:text-divyang">
                <FaFacebook />
                <Link>Facebook</Link>
              </div>
              <div className="flex gap-3 text-xl text-gray-500 hover:text-divyang">
                <FaInstagram />
                <Link>Instagram</Link>
              </div>
              <div className="flex gap-3 text-xl text-gray-500 hover:text-divyang">
                <CiYoutube />
                <Link>Youtube</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default FooterMiddle;
