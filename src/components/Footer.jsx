import React from "react";
import { appData, footData, smData } from "../data/footerData";

function Footer() {
  return (
    <footer className="bg-[#0e382c] px-5 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10">
          <div>
            <img
              src="./images/starbucks-logo.png"
              alt="footer-logo"
              className="w-16 h-16 object-contain"
            />
          </div>

          {footData.map((list) => (
            <div className="text-white space-y-4">
              <h3 className="text-xl font-semibold">{list.name}</h3>
              <ul className="space-y-4">
                <li>
                  <a href="/" className="hover:text-gray-400 duration-200">
                    {list.list1}
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-gray-400 duration-200">
                    {list.list2}
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-gray-400 duration-200">
                    {list.list3}
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-gray-400 duration-200">
                    {list.list4}
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-gray-400 duration-200">
                    {list.list5}
                  </a>
                </li>
              </ul>
            </div>
          ))}

          {/* Social Media */}
          <div className="text-white space-y-4">
            <h3 className="text-xl font-semibold">Socil Media</h3>
            <div className="space-x-4">
              {smData.map((sm) => (
                <span>{sm.app}</span>
              ))}
            </div>
          </div>

          {/* Apps */}
          <div className="space-y-4">
            {appData.map((app) => (
              <img
                src={app.appImg}
                alt="app-img"
                className="w-48 object-contain cursor-pointer"
              />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mt-10">
          <div className="flex items-center space-x-4">
            <img
              src="./images/starbucks-logo.png"
              alt="logo-footer"
              className="h-10 w-10 object-contain"
            />
            <a href="/" className="text-white text-lg">
              Starbucks Clone
            </a>
          </div>

          <div className="space-x-4 text-white">
            {smData.map((sm) => (
              <span>{sm.app}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
