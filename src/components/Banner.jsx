import { CurrencyRupee } from "@mui/icons-material";
import React from "react";

function Banner() {
  return (
    <div className="bg-[#1e3932] px-5 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#cbbcd9] p-5 rounded-lg flex items-center relative">
          <img
            src="./images/banner.png"
            alt="banner-img"
            className="h-52 object-contain"
          />

          <div className="ml-10 space-y-3">
            <h3 className="font-medium">Shower Blooms</h3>
            <h2 className="text-xl font-medium">Spring Merchandise</h2>
            <p>
              Fall in love with this simple yet magical lavender spring mug.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-4">
                <h6 className="">For</h6>
                <h3 className="text-lg font-semibold flex items-center">
                  <CurrencyRupee /> 1400
                </h3>
              </div>

              <a
                href="!#"
                className="bg-[#1e3932] w-48 h-10 flex items-center justify-center text-white rounded-full md:absolute md:right-5 md:bottom-4 hover:bg-white hover:text-[#1e3932] duration-200 shadow-md"
              >
                Order Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
