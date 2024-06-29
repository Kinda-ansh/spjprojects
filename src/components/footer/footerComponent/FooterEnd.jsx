import LayoutWraper from "@/src/layout/LayoutWraper";
import React from "react";

const FooterEnd = () => {
  return (
    <LayoutWraper>
      <div className="py-10 border-t border-gray-300 px-12">
        <div className="text-center sm:flex sm:justify-between sm:text-left">
          <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
            @ 2024 Sarkari Private Jobs. All Right Reserved.
          </p>
          <p className=" text-sm text-gray-500 sm:order-first sm:mt-0">
            Design and Developed by{" "}
            <a
              href="https://kindasolutions.com/"
              className="font-bold text-primary"
              target="_blank"
            >
              {" "}
              Kinda Solutions Pvt Ltd.{" "}
            </a>
          </p>
        </div>
      </div>
    </LayoutWraper>
  );
};

export default FooterEnd;
