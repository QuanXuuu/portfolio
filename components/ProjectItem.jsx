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
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 dark:shadow-gray-800 dark:hover:bg-gray-600 rounded-xl group">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h2 className="sm:text-2xl md:text-3xl tracking-wider text-center ">
          {title}
        </h2>
        <p className="py-8 sm:text-xl md:text-2xl text-center">
          {technologies}
        </p>

        <div className="flex justify-evenly items-center">
          <a href={projectPageUrl} target="_blank" rel="noreferrer">
            <div className="sm:text-2xl md:text-3xl  hover:text-primary-light cursor-pointer">
              <FaRegEye />
            </div>
          </a>
          <a href={projectCodeUrl} target="_blank" rel="noreferrer">
            <div className="sm:text-2xl md:text-3xl hover:text-primary-light cursor-pointer">
              <FaCode />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
