"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import profilePic from "@/public/assets/profilePic.jpg";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
// import { useSectionsInView } from "@/lib/hooks";

const About = () => {
  // const { ref } = useSectionsInView("About");
  // console.log("ref", ref);

  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("About");
    }
  }, [inView, setActiveSection]);

  return (
    <section
      ref={ref}
      id="about"
      className="w-full md:h-screen p-3 flex items-center leading-10 py-16"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h2 className="uppercase font-bold text-3xl tracking-widest text-primary-light mb-6 lg:text-4xl lg:mb-12">
            About
          </h2>
          <p className="py-2 text-lg text-justify leading-8">
            Hey! I&apos;m Quan Xu, an enthusiastic
            <span className="font-semibold dark:text-primary-light">
              {" "}
              Full-Stack Developer{" "}
            </span>
            based in
            <span className="font-semibold dark:text-primary-light">
              {" "}
              Northern Germany
            </span>
            . I have a good background in web development and enjoy creating
            user-friendly and well-designed applications. I am actively keeping
            up with the latest technologies and trends.
          </p>
          <p className="py-2 text-lg text-justify leading-8">
            My background is in
            <span className="font-semibold dark:text-primary-light">
              {" "}
              linguistics{" "}
            </span>
            and hold a Master&apos;s in Literature. Learning to code is like
            discovering a language that lets me create things in the digital
            world.
          </p>
          <p className="py-2 text-lg text-justify leading-8">
            Please feel free to explore my portfolio to see examples of my work.
            If you have any questions or would like to collaborate, please
            don&apos;t hesitate to reach out.
          </p>
        </div>
        <div className="w-full m-auto h-auto dark:shadow-gray-900 rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-300 p-4 mt-5">
          <Image src={profilePic} alt="Profile Pic" className="rounded-xl" />
        </div>
      </div>
    </section>
  );
};

export default About;
