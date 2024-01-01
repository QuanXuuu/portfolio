"use client";

import { TbHexagonLetterQ } from "react-icons/tb";
import { MdDarkMode } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <TbHexagonLetterQ className="text-4xl text-teal-600" />
            <ul className="flex items-center">
              <li>
                <MdDarkMode
                  className="cursor-pointer text-2xl dark:text-white"
                  onClick={() => setDarkMode(!darkMode)}
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-4 py-2 rounded-md ml-8"
                  herf="#"
                >
                  Resume
                </a>
              </li>
              {/* <li>About</li>
              <li>Projects</li>
              <li>Contact</li> */}
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Quan Xu
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Web Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">
              a dedicated and enthusiastic web developer with a fervor for
              crafting innovative and user-centric digital experiences.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white">
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
