import React from "react";
import {MagnifyingGlassIcon, UserCircleIcon} from "@heroicons/react/24/outline";

function Header() {
  const Links = [
    {id: 1, name: "Gift", link: "/gift"},
    {id: 2, name: "Order", link: "/order"},
    {id: 3, name: "Pay", link: "/pay"},
    {id: 4, name: "Store", link: "/store"},
  ];
  return (
    <header className="shadow-md p-4 duration-300 sticky top-0 bg-white z-10">
      <div className="max-w-screen-lg lg:max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between space-y-5 lg:space-y-0">
        <div className="flex items-center flex-col lg:flex-row justify-start space-x-0 lg:space-x-16 space-y-5 lg:space-y-0">
          <a href="/" className="w-10 h-10">
            <img
              className="w-full h-full object-contain cursor-pointer"
              src="./images/starbucks-logo.png"
              alt=""
            />
          </a>

          <nav className="space-x-4 sm:space-x-10">
            <a
              href="/"
              className="hover:text-[#00754a] duration-200 rounded-md"
            >
              Home
            </a>
            {Links.map((link) => (
              <a
                key={link.id}
                href={link.link}
                className="hover:text-[#00754a] duration-200 rounded-md"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center justify-end space-x-2 sm:space-x-4">
          <div className="flex items-center w-full sm:w-72 h-9 px-4 py-1 border-2 rounded-full shadow-sm">
            <MagnifyingGlassIcon className="w-5 h-5 mr-2" />
            <input
              type="text"
              placeholder="Looking for something specific?"
              className="w-full h-full border-none outline-none placeholder:text-sm"
            />
          </div>
          <UserCircleIcon className="w-10 h-10 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

export default Header;
