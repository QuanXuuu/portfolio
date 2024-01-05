import React from "react";
import Image from "next/image";
import html from "@/public/assets/skills/html.png";
import css from "@/public/assets/skills/css.png";
import javascript from "@/public/assets/skills/javascript.png";
import react from "@/public/assets/skills/react.png";
import tailwind from "@/public/assets/skills/tailwind.png";
import node from "@/public/assets/skills/node.png";
import mongo from "@/public/assets/skills/mongo.png";
import github from "@/public/assets/skills/github.png";

const Skills = () => {
  return (
    <div className="w-full lg:h-screen p-2 py-8 mt-28">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full sm:px-10">
        <p className="uppercase font-bold text-xl tracking-widest text-primary-light mb-12">
          Skills
        </p>
        <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* HMTL */}
          <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300">
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
          <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={css} width={64} height={64} alt="css" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          {/* JS */}
          <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300">
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
                <h3>Javascript</h3>
              </div>
            </div>
          </div>

          {/* React */}
          <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={react} width={64} height={64} alt="react" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>

          {/* tailwind */}
          <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={tailwind} width={64} height={64} alt="tailwind" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>

          {/* node */}
          <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={node} width={64} height={64} alt="node" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Node</h3>
              </div>
            </div>
          </div>

          {/* Mongo */}
          <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={mongo} width={64} height={64} alt="Mongo" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>MongoDB</h3>
              </div>
            </div>
          </div>

          {/* Github */}
          <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300">
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
    </div>
  );
};

export default Skills;
