import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { IoCall, IoLocation } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className=" text-white py-10 px-6 md:px-12 container mx-auto mt-10">
      <div className="flex flex-col xl:flex-row items-start under">
        {/* 1 */}
        <div className="xl:max-w-sm">
          <div className="flex-1">
            <div className="flex items-center mb-4">
              <img src="/name.png" alt="Mona AI Logo" className="" />
            </div>
            <p className="text-sm">
              We harness the power of artificial intelligence to break down language barriers, making worldwide information
              and educational content accessible to all Mongolians. Our suite of AI-powered tools is designed to empower
              Mongolian learners, researchers, and curious minds, opening doors to a world of knowledge previously hindered
              by language constraints.
            </p>
          </div>
        </div>
        {/* 2 */}
        <div className="grid grid-cols-2 xl:grid-cols-3 xl:ml-10 mt-10 xl:mt-0 w-full ">
          <div>
            <h3 className="font-semibold text-xl mb-4">Quick links</h3>
            <ul className="space-y-2 text-xs md:text-sm">
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-300">About us</a></li>
              <li><a href="#" className="hover:text-gray-300">Pricing</a></li>
              <li><a href="#" className="hover:text-gray-300">FAQ</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </div>

          <div className="w-auto">
            <h3 className="font-semibold text-xl mb-4">Tools</h3>
            <ul className="space-y-2 text-xs md:text-sm">
              <li><a href="#" className="hover:text-gray-300">AI Video Subtitles</a></li>
              <li><a href="#" className="hover:text-gray-300">YouTube Translation</a></li>
              <li><a href="#" className="hover:text-gray-300">YouTube Watch</a></li>
              <li><a href="#" className="hover:text-gray-300">Images Generation</a></li>
              <li><a href="#" className="hover:text-gray-300">AI Assistant</a></li>
            </ul>
          </div>

          <div className="w-auto col-span-2 xl:col-span-1 mt-10 xl:mt-0">
            <h3 className="font-semibold text-xl mb-4">Get in touch</h3>
            <ul className="space-y-2 text-xs md:text-sm">
              <li className="flex items-center">
                <span className="mr-2"><IoLocation /></span>
                Times Square Office Building
              </li>
              <li className="flex items-center">
                <span className="mr-2"><FaEnvelope /></span>
                <a href="mailto:info@mona-ai.mn" className="hover:text-gray-300">info@mona-ai.mn</a>
              </li>
              <li className="flex items-center">
                <span className="mr-2"><IoCall /></span>
                <a href="tel:+976" className="hover:text-gray-300">+976</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* 4 */}
      <div className="flex flex-col-reverse xl:flex-row gap-6 justify-between items-center border-t border-gray-700 mt-8 pt-4">
        <div className="">
          <p className="text-sm text-center md:text-left">&copy; 2024 MAZAL.AI. All rights reserved.</p>
        </div>
        <div className="flex mt-4 md:mt-0">
          <img src="/card6.png" alt="Apple Pay" className="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
