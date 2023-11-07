import React from "react";
import {baristaImg} from "../data";

function Barista() {
  return (
    <section className="bg-[#edebe9] px-5 py-20">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {baristaImg.map((details) => (
            <div
              key={details.id}
              className="w-full bg-white p-5 rounded-lg border border-gray-300 shadow-md space-y-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={details.img}
                  alt="img"
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="space-y-1">
                  <h3 className="font-bold">{details.title}</h3>
                  <h5 className="uppercase text-[14px] font-medium text-gray-400">
                    {details.headingH5}
                  </h5>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-start">
                  <span className="text-sm">{details.rupeeIcon}</span>
                  <h6 className="font-medium">{details.rupee}</h6>
                </div>
                <h3 className="bg-[#00754a] text-white px-4 py-1 rounded-full duration-200 cursor-pointer hover:bg-[#1e3932] text-sm">
                  {details.btn}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Barista;
