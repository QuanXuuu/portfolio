"use client";

import React from "react";
import Image from "next/image";
import { FaCode } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";

const ProjectItem = ({
  title,
  backgroundImg,
  technologies,
  projectPageUrl,
  projectCodeUrl,
}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 dark:shadow-gray-800 rounded-xl p-4 group hover:bg-gradient-to-r from-red-100 to-red-300">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-gray-600 tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-gray-500 text-center">{technologies}</p>

        <div className="flex justify-evenly items-center">
          <a href={projectPageUrl} target="_blank" rel="noreferrer">
            <div className="text-2xl text-gray-600  hover:text-primary-light cursor-pointer">
              <FaRegEye />
            </div>
          </a>
          <a href={projectCodeUrl} target="_blank" rel="noreferrer">
            <div className="text-2xl text-gray-600  hover:text-primary-light cursor-pointer">
              <FaCode />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
