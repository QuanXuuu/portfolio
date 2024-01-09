import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full sm-px-10">
        <p className="uppercase font-bold text-2xl tracking-widest text-primary-light mb-6">
          Contact
        </p>

        <div className="flex flex-col items-start justify-center">
          <a
            href="https://www.linkedin.com/in/quanxuuu"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex justify-center items-center p-2 text-xl text-gray-600 hover:text-primary-light cursor-pointer hover:scale-y-110 ease-in duration-300">
              <FaLinkedinIn />
              <span className="ml-3">quanxuuu</span>
            </div>
          </a>

          <a
            href="https://github.com/quanxuuu"
            target="_blank"
            rel="noreferrer"
          >
            <div className=" flex justify-center items-center p-2 text-xl text-gray-600 hover:text-primary-light cursor-pointer hover:scale-y-110 ease-in duration-300">
              <FaGithub />
              <p className="ml-3">quanxuuu</p>
            </div>
          </a>

          <div href="/">
            <div className=" flex justify-center items-center p-2 text-xl text-gray-600 hover:text-primary-light cursor-pointer hover:scale-y-110 ease-in duration-300">
              <MdOutlineMarkEmailUnread />
              <p className="ml-3">xuquan69220@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
