import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaCloudDownloadAlt } from "react-icons/fa";
import quan from "../public/profile.png";

const Hero = ({ heading, subHeading, message }) => {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
      <div>
        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
            {heading}
          </h2>
          <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-300">
            {subHeading}
          </h3>
          <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-l mx-auto dark:text-gray-300">
            {message}
          </p>
          <a
            className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white py-2 px-4 m-4 rounded-md "
            herf="#"
          >
            Resume
          </a>
        </div>
        <div className="text-4xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white">
          <FaGithub />
          <FaLinkedin />
        </div>
      </div>
    </div>
  );
};

export default Hero;
