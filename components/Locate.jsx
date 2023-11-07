import React from "react";
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";

function Locate() {
  return (
    <section className="h-96 grid place-items-center p-5 sm:px-10">
      <div className="max-w-screen-xl w-full mx-auto bg-[#0e382c] p-5 md:p-8 rounded-md">
        <div className="flex items-center bg-white h-10 space-x-4 rounded-md px-4 py-2 overflow-hidden">
          <MagnifyingGlassIcon className="w-8 h-8 object-cover" />
          <input
            type="search"
            className="w-full h-full outline-none border-none"
            placeholder="Find a store near you"
          />
        </div>
      </div>
    </section>
  );
}

export default Locate;
