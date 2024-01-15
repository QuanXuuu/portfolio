"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { links } from "@/lib/data";
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
          ? "fixed w-full h-20 shadow-md z-[999] bg-stone-50 ease-in-out duration-300 dark:bg-gray-900 dark:text-gray-50 px-5"
          : "fixed w-full h-20 z-[999] bg-stone-50 dark:bg-gray-900 dark:text-gray-50 px-5"
      }
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className="flex justify-between items-center w-full h-full px-8 2xl:px-16 ">
        {/* Logo */}
        <div>
          <Link href="/">
            <TbHexagonLetterQ
              className="text-primary dark:text-primary-light"
              size={35}
            />
          </Link>
        </div>
        <div>
          <ul className="hidden md:flex ">
            {links.map((link) => (
              <li key={link.hash}>
                <Link
                  href={link.hash}
                  className={clsx(
                    "ml-10 text-sm py-1 uppercase hover:text-primary-light hover:scale-105 ease-in duration-300",
                    {
                      "border-b-2": activeSection === link.name,
                      "border-red-200": activeSection === link.name,
                      "dark:border-gray-50": activeSection === link.name,
                    }
                  )}
                  onClick={() => setActiveSection(link.name)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
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
                  ? "fixed top-0 left-0  w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-7 ease-in duration-500 dark:bg-gray-950 dark:text-gray-50"
                  : "fixed left-[-100%] top-0 p-7 ease-in duration-500"
              }
            >
              <div className="flex w-full items-center justify-between border-b border-gray-200 dark:boder-gray-50 pb-5">
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
                  {links.map((link) => (
                    <li key={link.hash} className="py-4">
                      <Link
                        href={link.hash}
                        onClick={() => setIsNavOpen(false)}
                        className="py-10 text-md hover:text-primary-light hover:scale-y-110 ease-in duration-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="pt-32 flex items-center justify-between my-4 w-full sm:w-[80%] ">
                  <a
                    href="https://www.linkedin.com/in/quanxuuu"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="text-2xl hover:text-primary-light cursor-pointer hover:scale-105 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>

                  <a
                    href="https://github.com/quanxuuu"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="text-2xl hover:text-primary-light cursor-pointer hover:scale-105 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>

                  <Link href="/#contact">
                    <div
                      onClick={() => setIsNavOpen(!isNavOpen)}
                      className="text-2xl hover:text-primary-light cursor-pointer hover:scale-105 ease-in duration-300"
                    >
                      <MdOutlineMarkEmailUnread />
                    </div>
                  </Link>

                  <Link href="/#resume">
                    <div
                      onClick={() => setIsNavOpen(!isNavOpen)}
                      className="text-2xl hover:text-primary-light cursor-pointer hover:scale-105 ease-in duration-300"
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
