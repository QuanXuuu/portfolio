import React from "react";
import Image from "next/image";
import Link from "next/link";
import TCGMON from "@/public/assets/projects/TCGMON.png";

const Projects = () => {
  return (
    <div className="w-full p-2 py-8">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase font-bold text-xl tracking-widest text-primary-light mb-6">
          Projects
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-red-300 to-primary-light">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={TCGMON}
              alt="TCGMON"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                TCGMON
              </h3>
              <p className="pb-4 pt-2 text-white text-center">React JS</p>
              <Link href="https://tcgmon-temd.onrender.com/">
                <p className="text-center py-3 rounded-lg bg-white text-gray-400 font-bold text-lg cursor-pointer">
                  More Info
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
