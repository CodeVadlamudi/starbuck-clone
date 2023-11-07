import React from "react";
import {appData, footData, smData} from "../data";

function Footer() {
  return (
    <footer className="bg-[#0e382c] px-5 py-10">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10">
          <div>
            <img
              src="./images/starbucks-logo.png"
              alt="footer-logo"
              className="w-16 h-16 object-contain"
            />
          </div>

          {footData.map((list) => (
            <div key={list.id} className="text-white space-y-4">
              <h3 className="text-xl font-semibold">{list.name}</h3>
              <ul className="space-y-3 sm:space-y-4">
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
            <div className="flex items-center space-x-2">
              {smData.map((sm) => (
                <img
                  key={sm.id}
                  src={sm.app}
                  alt={sm.smAlt}
                  className="w-5 h-5 object-contain"
                />
              ))}
            </div>
          </div>

          {/* Apps */}
          <div className="space-y-4">
            {appData.map((app) => (
              <img
                key={app.id}
                src={app.appImg}
                alt="app-img"
                className="w-48 object-contain cursor-pointer"
              />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mt-10">
          <div className="flex items-center space-x-2">
            <img
              src="./images/starbucks-logo.png"
              alt="logo-footer"
              className="h-10 w-10 object-contain"
            />
            <a href="/" className="text-white text-lg hidden sm:block">
              Starbucks Clone
            </a>
          </div>

          <a
            href="https://github.com/CodeVadlamudi"
            target="_blank"
            className="flex items-center space-x-2 sm:space-x-3 hover:underline text-white"
          >
            <img
              src="./images/github.png"
              alt="GitHub Image"
              className="w-5 h-5 object-contain"
            />
            <h3 className="text-sm">Code Vadlamudi</h3>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
