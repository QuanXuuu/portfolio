"use client";

import React, { useEffect } from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.7,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Contact");
    }
  }, [inView, setActiveSection]);

  return (
    <section ref={ref} id="contact" className="w-full p-2">
      <div className="max-w-[1240px] mx-auto">
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
    </section>
  );
};

export default Contact;
