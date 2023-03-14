import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";
import Footer from "./Footer";

function Locate() {
  return (
    <div>
      <div className="h-96 grid place-items-center p-10">
        <div className="max-w-5xl w-full mx-auto bg-[#0e382c] p-10 rounded-md">
          <div className="flex items-center bg-white h-10 space-x-4 rounded-md px-4 py-2 overflow-hidden">
            <MagnifyingGlassIcon className="w-8 h-8 object-cover" />
            <input
              type="search"
              className="w-full h-full outline-none border-none"
              placeholder="Find a store near you"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Locate;
