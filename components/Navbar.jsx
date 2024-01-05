import React, { useState } from "react";
import Link from "next/link";
import { TbHexagonLetterQ } from "react-icons/tb";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { BsFilePersonFill } from "react-icons/bs";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNav = () => {
    console.log("test");
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="fixed w-full h-20 z-[100] ease-in-out duration-500 bg-white">
      <div
        className={
          isNavOpen
            ? "flex justify-between items-center w-full h-full px-8 2xl:px-16 border-b border-gray-200"
            : "flex justify-between items-center w-full h-full px-8 2xl:px-16 border-b border-gray-200"
        }
      >
        {/* Logo */}
        <div>
          <Link href="/">
            <TbHexagonLetterQ className="text-primary" size={30} />
          </Link>
        </div>
        <div>
          <ul className="hidden md:flex ">
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/">Home</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/about">About</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/skills">Skills</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <RxHamburgerMenu size={25} onClick={() => handleNav()} />
          </div>
        </div>

        {/* Mobile Menu */}
        {isNavOpen && (
          <div
            className={
              isNavOpen
                ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
                : ""
            }
          >
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
                  <li
                    onClick={() => setIsNavOpen(false)}
                    className="py-4 text-base hover:text-gray-600"
                  >
                    <Link href="/">Home</Link>
                  </li>
                  <li
                    onClick={() => setIsNavOpen(false)}
                    className="py-4 text-base hover:text-gray-600"
                  >
                    <Link href="/about">About</Link>
                  </li>
                  <li
                    onClick={() => setIsNavOpen(false)}
                    className="py-4 text-base hover:text-gray-600"
                  >
                    <Link href="/skills">skills</Link>
                  </li>
                  <li
                    onClick={() => setIsNavOpen(false)}
                    className="py-4 text-base hover:text-gray-600"
                  >
                    <Link href="/projects">Projects</Link>
                  </li>
                  <li
                    onClick={() => setIsNavOpen(false)}
                    className="py-4 text-base hover:text-gray-600"
                  >
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>

                <div className="pt-32 flex items-center justify-between my-4 w-full sm:w-[80%] ">
                  <a
                    href="https://www.linkedin.com/in/quanxuuu"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="text-2xl text-gray-800 hover:text-gray-600 cursor-pointer hover: scale-105 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>

                  <a
                    href="https://github.com/quanxuuu"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="text-2xl text-gray-800 hover:text-gray-600 cursor-pointer hover: scale-105 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>

                  <Link href="/contact">
                    <div
                      onClick={() => setIsNavOpen(!isNavOpen)}
                      className="text-2xl text-gray-800 hover:text-gray-600 cursor-pointer hover: scale-105 ease-in duration-300"
                    >
                      <MdOutlineMarkEmailUnread />
                    </div>
                  </Link>

                  <Link href="/resume">
                    <div
                      onClick={() => setIsNavOpen(!isNavOpen)}
                      className="text-2xl text-gray-800 hover:text-gray-600 cursor-pointer hover: scale-105 ease-in duration-300"
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
    </div>
  );
};

export default Navbar;
