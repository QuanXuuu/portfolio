"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { BsFilePersonFill } from "react-icons/bs";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

const Hero = () => {
  const { ref, inView } = useInView({
    threshold: 0.7,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Home");
    }
  }, [inView, setActiveSection]);

  return (
    <section ref={ref} id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            {/* Heading */}
            <h1 className="py-4 text-gray-700">
              Hi, I&apos;m <span className="text-primary-light">Quan</span>
            </h1>
            <h2 className="py-4 text-gray-700">A Full-Stack Developer</h2>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <p className="py-4 text-lg leading-8 lg:text-xl lg:py-6 lg:leading-10 text-gray-600 max-w-[70%] m-auto">
              I enjoy building responsive front-end websites and web
              applications while utilizing back-end technologies. My focus is
              <span className="font-bold"> React</span>.
            </p>

            {/* Icons */}

            <div className="flex items-center justify-between max-w-[375px] m-auto py-4">
              <a
                href="https://www.linkedin.com/in/quanxuuu"
                target="_blank"
                rel="noreferrer"
              >
                <div className="p-6 text-3xl text-gray-600 hover:text-primary-light cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
              </a>

              <a
                href="https://github.com/quanxuuu"
                target="_blank"
                rel="noreferrer"
              >
                <div className="p-6 text-3xl text-gray-600 hover:text-primary-light cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaGithub />
                </div>
              </a>

              <Link href="/#contact">
                <div className="p-6 text-3xl text-gray-600 hover:text-primary-light cursor-pointer hover:scale-110 ease-in duration-300">
                  <MdOutlineMarkEmailUnread />
                </div>
              </Link>

              <a
                href="/QuanXU-CV.pdf"
                target="_blank"
                rel="noreferrer"
                download={true}
              >
                <div className="p-6 text-3xl text-gray-600 hover:text-primary-light cursor-pointer hover:scale-110 ease-in duration-300">
                  <BsFilePersonFill />
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
