"use client";

import { TbHexagonLetterQ } from "react-icons/tb";
import { MdDarkMode } from "react-icons/md";
import { FaGithub, FaLinkedin, FaCloudDownloadAlt } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import Image from "next/image";
import quan from "../public/profile.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="px-4 py-4 mb-12 flex justify-between items-center">
            <TbHexagonLetterQ className="text-3xl text-teal-600" alt="logo" />

            <ul className="hidden gap-6 md:mx-auto md:flex md:items-center md:w-auto md:space-x-4 lg:space-x-6 dark:text-white">
              <li>
                <a
                  className="text-base text-gray-400 hover:text-gray-500"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li>
                <a className="text-base text-teal-600 font-bold" href="#">
                  About Me
                </a>
              </li>
              <li>
                <a
                  className="text-base text-gray-400 hover:text-gray-500"
                  href="#"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  className="text-base text-gray-400 hover:text-gray-500"
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className="flex gap-4">
              <MdDarkMode
                className="cursor-pointer text-2xl text-gray-600 dark:text-white"
                onClick={() => setDarkMode(!darkMode)}
              />
              <RxHamburgerMenu className="md:hidden cursor-pointer text-2xl text-gray-600 dark:text-white" />
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
              I'm a Developer based in Krempe, Germany. I enjoy working on every
              aspect of web development, from the user interface to the server
              logic.
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

        {/* <section>
        <div>
          <h3 className="text-3xl py-1">Services I offer</h3>
          <p className="text-md py-2 leading-8 text-gray-800">
            Since the beginning of my journey as a developer, I have done remote
            work for....
          </p>
        </div>
      </section> */}
      </main>
    </div>
  );
}
