import React from "react";
import Link from "next/link";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { BsFilePersonFill } from "react-icons/bs";

const Hero = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          {/* Heading */}
          <h1 className="py-4 text-gray-700">
            Hi, I&apos;m <span className="text-primary-light">Quan</span>
          </h1>
          <h2 className="py-2 text-gray-700">A Web Developer</h2>
          <p className="py-4 text-lg leading-8 lg:text-xl lg:py-6 lg:leading-10 text-gray-600 max-w-[70%] m-auto">
            I&apos;m focused on building responsive front-end web applications
            while learning back-end technologies.
          </p>

          {/* Icons */}
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/quanxuuu"
              target="_blank"
              rel="noreferrer"
            >
              <div className="p-6 text-2xl text-gray-600 hover:text-primary-light cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>

            <a
              href="https://github.com/quanxuuu"
              target="_blank"
              rel="noreferrer"
            >
              <div className="p-6 text-2xl text-gray-600 hover:text-primary-light cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>

            <Link href="/contact">
              <div className="p-6 text-2xl text-gray-600 hover:text-primary-light cursor-pointer hover:scale-110 ease-in duration-300">
                <MdOutlineMarkEmailUnread />
              </div>
            </Link>

            <Link href="/resume">
              <div className="p-6 text-2xl text-gray-600 hover:text-primary-light cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFilePersonFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
