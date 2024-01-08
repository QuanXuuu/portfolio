import React from "react";
import Image from "next/image";
import profilePic from "@/public/assets/profilePic.jpg";

const About = () => {
  return (
    <div id="#about" className="w-full md:h-screen p-2 flex items-center py-8 ">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-10 px-12">
        <div className="col-span-2 ">
          <h2 className="uppercase font-bold text-2xl tracking-widest text-primary-light mb-6">
            About Me
          </h2>
          <p className="py-2 text-lg text-gray-600">
            Hey! I&apos;m Quan Xu, an enthusiastic and creative Front-end Web
            Developer based in Krempe, Germany. With a solid background in web
            development and profound appreciation for design, I am dedicated to
            crafting user-friendly and visually appealing web experiences.These
            experiences have enabled me to refine my skills and stay current
            with the latest front-end technologies and trends.
          </p>

          <p className="py-2 text-lg text-gray-600">
            Additionally, I hold a master&apos;s degree in Linguistics. Learning
            to code feels like decoding a different kind of language, one
            that&apos;s all about making things happen in the digital realm.
          </p>

          <p className="py-2 text-lg text-gray-600">
            Please feel free to explore my portfolio to see examples of my work.
            If you have any questions or would like to collaborate, please
            don&apos;t hesitate to reach out.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-md shadow-gray-400 rounded-xl flex items-center justify-center p-2 hover:scale-105 ease-in duration-300">
          <Image src={profilePic} alt="Profile Pic" className="rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default About;
