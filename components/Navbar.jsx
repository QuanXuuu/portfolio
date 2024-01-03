import React, { useState } from "react";
import Link from "next/link";
import { TbHexagonLetterQ } from "react-icons/tb";
import { MdDarkMode } from "react-icons/md";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed left-0 top-0 w-full ease-in duration-300">
      <nav className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-gray-600">
        <div>
          <Link href="/">
            <TbHexagonLetterQ className="text-3xl text-teal-600" alt="logo" />
          </Link>
        </div>

        <ul className="dark:text-white hidden sm:flex">
          <li className="p-4">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4">
            <Link href="/about">About</Link>
          </li>
          <li className="p-4">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="p-4">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <div onClick={() => handleNav()} className="block sm:hidden  z-10">
          {nav ? <RxCross1 size={24} /> : <RxHamburgerMenu size={24} />}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-gray-100 text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-gray-100 text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={() => handleNav()}
              className="p-4 text-2xl hover:text-gray-600"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={() => handleNav()}
              className="p-4 text-2xl hover:text-gray-600"
            >
              <Link href="/about">About</Link>
            </li>
            <li
              onClick={() => handleNav()}
              className="p-4 text-2xl hover:text-gray-600"
            >
              <Link href="/projects">Projects</Link>
            </li>
            <li
              onClick={() => handleNav()}
              className="p-4 text-2xl hover:text-gray-600"
            >
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
