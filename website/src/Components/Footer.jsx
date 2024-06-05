import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div
      className="bg-[#EE6800] p-4 md:px-14 max-w-screen-3xl mx-auto text-white"
      id="footer"
    >
      <div className="my-12 flex flex-col  md:flex-row gap-8">
        <div className="md:w-1/2  space-y-8">
          <a
            href="/"
            className="text-3xl font-semibold flex items-center space-x-3 text-black-700"
          >
            <img
              src={logo}
              alt="Kutumba Tech Logo"
              className="w-10 inline-block"
            />
            <span className="text-white">Kutumba Tech</span>
          </a>
          <p className="md:w-1/2 text-balance">
            Kutumba Tech is a software company specializing in developing
            technological solutions tailored to meet the needs of businesses and
            individuals.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              className="bg-white text-black py-2 px-4 rounded-md focus:outline-none mb-2 sm:mb-0 sm:mr-2"
            />
            <input
              type="submit"
              value="Subscribe"
              className="px-4 py-2 bg-red-600 rounded-md cursor-pointer hover:bg-green-600 transition duration-300"
            />
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="md:w-1/2  flex  md:flex-row flex-wrap justify-between gap-8">
          <div className="space-y-4">
            <h4 className="text-xl">Platform</h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="block hover:text-gray-300">
                  Overview
                </a>
              </li>
              <li>
                <a href="/" className="block hover:text-gray-300">
                  Features
                </a>
              </li>
              <li>
                <a href="/" className="block hover:text-gray-300">
                  About
                </a>
              </li>
              <li>
                <a href="/" className="block hover:text-gray-300">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4 ">
            <h4 className="text-xl">Help</h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="block hover:text-gray-300">
                  How does it work?
                </a>
              </li>
              <li>
                <a href="/" className="block hover:text-gray-300">
                  Where to ask Questions?
                </a>
              </li>
              <li>
                <a href="/" className="block hover:text-gray-300">
                  How to join?
                </a>
              </li>
              <li>
                <a href="/" className="block hover:text-gray-300">
                  Requirements
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4 ">
            <h4 className="text-xl">Contacts</h4>
            <ul className="space-y-3">
              <li>
                <p className="block hover:text-gray-300">+977-9865212813</p>
              </li>
              <li>
                <p className="block hover:text-gray-300">Gongabu, Kathmandu</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="border-gray-600" />
      <div className="text-center py-4">
        <p>&copy; 2024 Kutumba Tech @ Hetauda-branch. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
