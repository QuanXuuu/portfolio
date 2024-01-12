"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import html from "@/public/assets/skills/html.png";
import css from "@/public/assets/skills/css.png";
import javascript from "@/public/assets/skills/javascript.png";
import react from "@/public/assets/skills/react.png";
import nextjs from "@/public/assets/skills/nextjs.png";
import tailwind from "@/public/assets/skills/tailwind.png";
import sass from "@/public/assets/skills/sass.png";
import node from "@/public/assets/skills/node.png";
import expressjs from "@/public/assets/skills/expressjs.svg";
import mongo from "@/public/assets/skills/mongo.png";
import postman from "@/public/assets/skills/postman.svg";
import github from "@/public/assets/skills/github.png";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
// import { useSectionsInView } from "@/lib/hooks";

const Skills = () => {
  // const { ref } = useSectionsInView("Skills");

  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Skills");
    }
  }, [inView, setActiveSection]);

  return (
    <section ref={ref} id="skills" className="w-full p-2 mb-40 scroll-mt-28">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center">
        <p className="uppercase font-bold text-2xl tracking-widest text-primary-light mb-10 ">
          Skills
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* HMTL */}
          <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 ">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={html} width={64} height={64} alt="html" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          {/* CSS */}
          <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 ">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto ">
                <Image src={css} width={64} height={64} alt="css" />
              </div>
              <div className="flex flex-col items-center justify-center ">
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          {/* JS */}
          <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 ">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={javascript}
                  width={64}
                  height={64}
                  alt="javascript"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>

          {/* React */}
          <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 ">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={react} width={64} height={64} alt="react" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>

          {/* Nextjs */}
          <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 ">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={nextjs} width={64} height={64} alt="react" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NextJS</h3>
              </div>
            </div>
          </div>

          {/* tailwind */}
          <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 ">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={tailwind} width={64} height={64} alt="tailwind" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>

          {/* sass */}
          <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 ">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={sass} width={64} height={64} alt="sass" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>SASS</h3>
              </div>
            </div>
          </div>

          {/* node */}
          <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 ">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={node} width={64} height={64} alt="node" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Node</h3>
              </div>
            </div>
          </div>

          {/* ExpressJS */}
          <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 ">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={expressjs} width={64} height={64} alt="ExpressJS" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>ExpressJS</h3>
              </div>
            </div>
          </div>

          {/* Mongo */}
          <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 ">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={mongo} width={64} height={64} alt="Mongo" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>MongoDB</h3>
              </div>
            </div>
          </div>

          {/* Postman */}
          <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 ">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={postman} width={64} height={64} alt="Postman" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Postman</h3>
              </div>
            </div>
          </div>

          {/* Github */}
          <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 ">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={github} width={64} height={64} alt="github" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
