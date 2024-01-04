import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/assets/logo.png";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { BsFilePersonFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 border-b border-gray-200 z-[100] ease-in-out duration-300">
      <div
        className={
          nav
            ? "flex justify-between items-center w-full h-full px-4 2xl:px-16 border border-red-500"
            : "flex justify-between items-center w-full h-full px-4 2xl:px-16 border border-green-500"
        }
      >
        {/* Logo */}
        <div>
          <Link href="/">
            <Image
              src={logo}
              width={50}
              height={50}
              alt="logo"
              className="rounded-full"
            />
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
          <div onClick={() => handleNav()} className="md:hidden">
            <RxHamburgerMenu size={25} />
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
              : ""
          }
        >
          <div
            className={
              nav
                ? "fixed top-0 left-0  w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-9 ease-in duration-500"
                : "fixed top-0 left-[-100%] p-10 ease-in duration-500"
            }
          >
            <div className="flex w-full items-center justify-between border-b border-gray-100">
              <Link href="/">
                <Image
                  src={logo}
                  width={60}
                  height={60}
                  alt="logo"
                  className="rounded-full"
                />
              </Link>

              <div className="cursor-pointer" onClick={() => handleNav()}>
                <RxCross1 size={25} />
              </div>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase ml-2">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 hover:text-gray-600"
                >
                  <Link href="/">Home</Link>
                </li>
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-md hover:text-gray-600"
                >
                  <Link href="/about">About</Link>
                </li>
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-l hover:text-gray-600"
                >
                  <Link href="/skills">skills</Link>
                </li>
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-l hover:text-gray-600"
                >
                  <Link href="/projects">Projects</Link>
                </li>
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-l hover:text-gray-600"
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
                  <div className="text-2xl pl-3 text-gray-600 cursor-pointer hover: scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>

                <a
                  href="https://github.com/quanxuuu"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="text-2xl text-gray-600 cursor-pointer hover: scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>

                <Link href="/contact">
                  <div
                    onClick={() => setNav(!nav)}
                    className="text-2xl text-gray-600 cursor-pointer hover: scale-105 ease-in duration-300"
                  >
                    <MdOutlineMarkEmailUnread />
                  </div>
                </Link>

                <Link href="/resume">
                  <div
                    onClick={() => setNav(!nav)}
                    className="text-2xl text-gray-600 cursor-pointer hover: scale-105 ease-in duration-300"
                  >
                    <BsFilePersonFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
