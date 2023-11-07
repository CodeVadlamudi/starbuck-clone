import React from "react";

function Banner() {
  return (
    <section className="bg-[#1e3932] px-5 py-10">
      <div className="max-w-screen-xl mx-auto">
        <div className="bg-[#cbbcd9] p-10 rounded-lg flex items-center flex-col md:flex-row relative">
          <img
            src="./images/banner.png"
            alt="banner-img"
            className="h-52 object-contain"
          />

          <div className="md:ml-10 space-y-3">
            <h3 className="font-medium">Shower Blooms</h3>
            <h2 className="text-xl font-medium">Spring Merchandise</h2>
            <p>
              Fall in love with this simple yet magical lavender spring mug.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <h6 className="">For</h6>
                <h3 className="text-lg font-semibold flex items-center">
                  ₹ 1400
                </h3>
              </div>

              <a
                href="!#"
                className="bg-[#1e3932] sm:w-48 h-10 flex items-center justify-center text-white rounded-full md:absolute md:right-5 md:bottom-4 hover:bg-white hover:text-[#1e3932] duration-200 shadow-md"
              >
                Order Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
