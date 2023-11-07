import React from "react";
import {anytimeData} from "../data";

function Anytime() {
  return (
    <section className="max-w-screen-xl mx-auto px-5 my-10">
      <h2 className="text-3xl font-semibold border-b-2 pb-5 border-black">
        Anytime
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-5">
        {anytimeData.map((any) => (
          <div
            key={any.id}
            className="bg-gray-100 p-5 rounded-lg space-y-3 border shadow-lg"
          >
            <img
              src={any.img}
              alt="img"
              className="w-40 h-28 border rounded-lg overflow-hidden shadow-lg object-cover"
            />
            <div className="space-y-2">
              <h3 className="text-xl font-medium">{any.heading}</h3>
              <p>{any.desc}</p>
              <a
                href="!#"
                className="bg-[#1e3932] text-white w-full h-10 rounded-md flex items-center justify-center hover:bg-white hover:text-[#1e3932] font-medium duration-200 hover:border hover:shadow-sm"
              >
                {any.item}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Anytime;
