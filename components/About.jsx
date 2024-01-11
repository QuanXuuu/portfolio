"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import profilePic from "@/public/assets/profilePic.jpg";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("about");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <section
      ref={ref}
      id="about"
      className="w-full flex items-center leading-10 sm:mb-40 scroll-mt-28"
    >
      <div className="max-w-[1240px] m-auto lg:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h2 className="uppercase font-bold text-2xl tracking-widest text-primary-light mb-6">
            About Me
          </h2>
          <p className="py-2 text-lg text-gray-600">
            Hey! I&apos;m Quan Xu, an enthusiastic and creative
            <span className="font-semibold"> Full-stack Developer</span> based
            in Krempe, <span className="font-semibold">Germany</span>. With a
            solid background in web development and profound appreciation for
            design, I am dedicated to crafting user-friendly and visually
            appealing web experiences. These experiences have enabled me to
            refine my skills and stay current with the latest technologies and
            trends.
          </p>

          <p className="py-2 text-lg text-gray-600">
            Additionally, I hold a{" "}
            <span className="font-semibold">master&apos;s degree</span> in
            <span className="font-semibold"> Linguistics</span>. Learning to
            code feels like decoding a different kind of language, one
            that&apos;s all about making things happen in the digital realm.
          </p>

          <p className="py-2 text-lg text-gray-600">
            Please feel free to explore my portfolio to see examples of my work.
            If you have any questions or would like to collaborate, please
            don&apos;t hesitate to reach out.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-md shadow-gray-200 rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-300 sm:mt-8 p-2">
          <Image src={profilePic} alt="Profile Pic" className="rounded-xl" />
        </div>
      </div>
    </section>
  );
};

export default About;
