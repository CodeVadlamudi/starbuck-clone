import React from "react";
import {
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

function Header() {
  const Links = [
    { name: "Home", link: "/" },
    { name: "Gift", link: "/gift" },
    { name: "Order", link: "/order" },
    { name: "Pay", link: "/pay" },
    { name: "Store", link: "/store" },
  ];
  return (
    <header className="shadow-md p-4 duration-300 sticky top-0 bg-white z-10">
      <div className="max-w-5xl lg:max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between space-y-5 lg:space-y-0">
        <div className="flex items-center flex-col lg:flex-row justify-start space-x-0 lg:space-x-16 space-y-5 lg:space-y-0">
          <a href="/" className="w-10 h-10">
            <img
              className="w-full h-full object-contain cursor-pointer"
              src="./images/starbucks-logo.png"
              alt=""
            />
          </a>

          <nav className="space-x-6">
            {Links.map((link) => (
              <a
                href={link.link}
                className="hover:bg-[#00754a] duration-200 hover:text-white px-4 py-2 rounded-md"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center justify-end space-x-12">
          <div className="flex items-center w-72 h-9 px-4 py-1 border-2 rounded-full shadow-sm">
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
