"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { BsFilePersonFill } from "react-icons/bs";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { Cursor, useTypewriter } from "react-simple-typewriter";
// import { useSectionsInView } from "@/lib/hooks";

const Hero = () => {
  // const { ref } = useSectionsInView("Home");

  const [text, count] = useTypewriter({
    words: ["Full-Stack Developer"],
    delaySpeed: 1500,
  });

  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Home");
    }
  }, [inView, setActiveSection]);

  return (
    <section
      ref={ref}
      id="home"
      className="w-full h-screen text-center snap-start"
    >
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="dark:text-gray-50">
          <motion.div
            initial={{ y: -100, opacity: 0, scale: 0.5 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="dark:text-gray-50"
          >
            {/* Heading */}
            <h1 className="py-4 tracking-widest">
              Hi, I&apos;m <span className="text-primary-light ">Quan</span>
            </h1>
            <h2 className="py-4 tracking-widest">{text}</h2>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0, scale: 0.5 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <p className="py-4 text-lg leading-8 lg:text-xl lg:py-6 lg:leading-10 max-w-[70%] m-auto tracking-wider">
              I build responsive websites and applications using frontend and
              backend technologies. My focus is
              <span className="font-bold"> React</span>.
            </p>

            {/* Icons */}

            <div className="flex items-center justify-between max-w-[375px] m-auto py-4">
              <a
                href="https://www.linkedin.com/in/quanxuuu"
                target="_blank"
                rel="noreferrer"
              >
                <div className="p-6 text-3xl  hover:text-primary-light cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
              </a>

              <a
                href="https://github.com/quanxuuu"
                target="_blank"
                rel="noreferrer"
              >
                <div className="p-6 text-3xl  hover:text-primary-light cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaGithub />
                </div>
              </a>

              <Link href="/#contact">
                <div className="p-6 text-3xl hover:text-primary-light cursor-pointer hover:scale-110 ease-in duration-300">
                  <MdOutlineMarkEmailUnread />
                </div>
              </Link>

              <a
                href="/QuanXU-CV.pdf"
                target="_blank"
                rel="noreferrer"
                download={true}
              >
                <div className="p-6 text-3xl hover:text-primary-light cursor-pointer hover:scale-110 ease-in duration-300">
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
