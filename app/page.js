"use client";

import { TbHexagonLetterQ } from "react-icons/tb";
import { MdDarkMode } from "react-icons/md";
import { FaGithub, FaLinkedin, FaCloudDownloadAlt } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";
import Image from "next/image";
import quan from "../public/profile.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [navbar, setNavbar] = useState(false);

  function onToggleMenu(e) {
    console.log("TEST");
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <section
        id="home"
        className="min-h-screen bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900"
      >
        <nav className="px-4 py-4 border-gray-200 mb-12 flex justify-between items-center">
          {/* Logo */}
          <div>
            <TbHexagonLetterQ className="text-3xl text-teal-600" alt="logo" />
          </div>

          <div className="md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex md:items-center px-5">
            <ul className=" dark:text-white flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
              <li>
                <a
                  className="text-base text-gray-500 hover:text-gray-600"
                  onClick={() => handleTextColor()}
                  href="#"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-base text-gray-500 hover:text-gray-600"
                  href="#"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-base text-gray-500 hover:text-gray-600"
                  href="#"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  className="text-base text-gray-500 hover:text-gray-600"
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="flex gap-4">
            {/* Darkmode */}
            <MdDarkMode
              className="cursor-pointer text-2xl text-gray-600 dark:text-white"
              onClick={() => setDarkMode(!darkMode)}
            />

            {/* Hamburger Menu */}
            <RxHamburgerMenu
              className="md:hidden cursor-pointer text-2xl text-gray-600 dark:text-white"
              onClick={() => onToggleMenu()}
            />
          </div>
        </nav>

        <div className="mx-auto w-64 h-64">
          <Image src={quan} alt="profilePic" className="rounded-full" />
        </div>
        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
            Quan Xu
          </h2>
          <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-300">
            Web Developer
          </h3>
          <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-l mx-auto dark:text-gray-300">
            I&apos;m a Developer based in Krempe, Germany. I enjoy working on
            every aspect of web development, from the user interface to the
            server logic.
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
      </section>

      <section id="about"></section>

      <section id="projects"></section>

      <section id="contact"></section>
    </div>
  );
}
