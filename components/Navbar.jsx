"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { TbHexagonLetterQ } from "react-icons/tb";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { BsFilePersonFill } from "react-icons/bs";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  const { activeSection, setActiveSection } = useActiveSectionContext();

  const handleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <motion.div
      className={
        hasShadow
          ? "fixed w-full h-20 shadow-md z-[999] bg-stone-50 bg-opacity-95 ease-in-out duration-300"
          : "fixed w-full h-20 z-[999] bg-stone-50 bg-opacity-95"
      }
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className="flex justify-between items-center w-full h-full px-8 2xl:px-16 ">
        {/* Logo */}
        <div>
          <Link href="/">
            <TbHexagonLetterQ className="text-primary" size={35} />
          </Link>
        </div>
        <div>
          <ul className="hidden md:flex ">
            <Link href="/">
              <li
                className={clsx(
                  "ml-10 text-sm uppercase hover:text-primary-light hover:scale-105 ease-in duration-300",
                  {
                    "border-b-2": activeSection === "home",
                    "border-red-200": activeSection === "home",
                  }
                )}
                onClick={() => setActiveSection("home")}
              >
                Home
              </li>
            </Link>

            <Link href="/#about">
              <li
                className={clsx(
                  "ml-10 text-sm uppercase  hover:text-primary-light hover:scale-105 ease-in duration-300",
                  {
                    "border-b-2": activeSection === "about",
                    "border-red-200": activeSection === "about",
                  }
                )}
                onClick={() => setActiveSection("about")}
              >
                About
              </li>
            </Link>

            <Link href="/#skills">
              <li
                className={clsx(
                  "ml-10 text-sm uppercase hover:text-primary-light hover:scale-105 ease-in duration-300",
                  {
                    "border-b-2": activeSection === "skills",
                    "border-red-200": activeSection === "skills",
                  }
                )}
                onClick={() => setActiveSection("skills")}
              >
                Skills
              </li>
            </Link>

            <Link href="/#projects">
              <li
                className={clsx(
                  "ml-10 text-sm uppercase hover:text-primary-light hover:scale-105 ease-in duration-300",
                  {
                    "border-b-2": activeSection === "projects",
                    "border-red-200": activeSection === "projects",
                  }
                )}
                onClick={() => setActiveSection("projects")}
              >
                Projects
              </li>
            </Link>

            <Link href="/#contact">
              <li
                className={clsx(
                  "ml-10 text-sm uppercase hover:text-primary-light hover:scale-105 ease-in duration-300",
                  {
                    "border-b-2": activeSection === "contact",
                    "border-red-200": activeSection === "contact",
                  }
                )}
                onClick={() => setActiveSection("contact")}
              >
                Contact
              </li>
            </Link>
          </ul>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <RxHamburgerMenu size={25} onClick={() => handleNav()} />
          </div>
        </div>

        {/* Mobile Menu */}
        {/* Overlay */}
        {isNavOpen && (
          <div
            className={
              isNavOpen
                ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
                : ""
            }
          >
            {/* Side Drawer Menu */}
            <div
              className={
                isNavOpen
                  ? "fixed top-0 left-0  w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-7 ease-in duration-500"
                  : "fixed left-[-100%] top-0 p-7 ease-in duration-500"
              }
            >
              <div className="flex w-full items-center justify-between border-b border-gray-200 pb-5">
                <Link href="/">
                  <TbHexagonLetterQ className="text-primary" size={30} />
                </Link>

                <div
                  className="cursor-pointer hover:text-gray-600"
                  onClick={() => handleNav()}
                >
                  <RxCross1 size={25} />
                </div>
              </div>
              <div className="py-4 flex flex-col">
                <ul className="uppercase">
                  <Link href="/">
                    <li
                      onClick={() => setIsNavOpen(false)}
                      className="py-4 text-sm hover:text-primary-light hover:scale-y-110 ease-in duration-300"
                    >
                      Home
                    </li>
                  </Link>

                  <Link href="/#about">
                    <li
                      onClick={() => setIsNavOpen(false)}
                      className="py-4 text-sm hover:text-primary-light hover:scale-y-110 ease-in duration-300"
                    >
                      About
                    </li>
                  </Link>

                  <Link href="/#skills">
                    <li
                      onClick={() => setIsNavOpen(false)}
                      className="py-4 text-sm hover:text-primary-light hover:scale-y-110 ease-in duration-300"
                    >
                      skills
                    </li>
                  </Link>

                  <Link href="/#projects">
                    <li
                      onClick={() => setIsNavOpen(false)}
                      className="py-4 text-sm hover:text-primary-light hover:scale-y-110 ease-in duration-300"
                    >
                      Projects
                    </li>
                  </Link>

                  <Link href="/#contact">
                    <li
                      onClick={() => setIsNavOpen(false)}
                      className="py-4 text-sm hover:text-primary-light hover:scale-y-110 ease-in duration-300"
                    >
                      Contact
                    </li>
                  </Link>
                </ul>

                <div className="pt-32 flex items-center justify-between my-4 w-full sm:w-[80%] ">
                  <a
                    href="https://www.linkedin.com/in/quanxuuu"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="text-2xl text-gray-700 hover:text-primary-light cursor-pointer hover:scale-105 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>

                  <a
                    href="https://github.com/quanxuuu"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="text-2xl text-gray-700 hover:text-primary-light cursor-pointer hover:scale-105 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>

                  <Link href="/#contact">
                    <div
                      onClick={() => setIsNavOpen(!isNavOpen)}
                      className="text-2xl text-gray-700 hover:text-primary-light cursor-pointer hover:scale-105 ease-in duration-300"
                    >
                      <MdOutlineMarkEmailUnread />
                    </div>
                  </Link>

                  <Link href="/#resume">
                    <div
                      onClick={() => setIsNavOpen(!isNavOpen)}
                      className="text-2xl text-gray-700 hover:text-primary-light cursor-pointer hover:scale-105 ease-in duration-300"
                    >
                      <BsFilePersonFill />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;
