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
      className="w-full scroll-mt-28 flex items-center leading-10 mb-40"
    >
      <div className="max-w-[1240px] m-auto lg:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h2 className="uppercase font-bold text-2xl tracking-widest text-primary-light dark:text-primary mb-6">
            About Me
          </h2>
          <p className="py-2 text-lg">
            Hey! I&apos;m Quan Xu, an enthusiastic and creative
            <span className="font-semibold underline">
              {" "}
              Full-stack Developer
            </span>{" "}
            based in Krempe,{" "}
            <span className="font-semibold underline">Germany</span>. With a
            solid background in web development and profound appreciation for
            design, I am dedicated to crafting user-friendly and visually
            appealing web experiences. These experiences have enabled me to
            refine my skills and stay current with the latest technologies and
            trends.
          </p>

          <p className="py-2 text-lg ">
            Additionally, I hold a{" "}
            <span className="font-semibold underline">
              master&apos;s degree
            </span>{" "}
            in
            <span className="font-semibold underline"> Linguistics</span>.
            Learning to code feels like decoding a different kind of language,
            one that&apos;s all about making things happen in the digital realm.
          </p>

          <p className="py-2 text-lg">
            Please feel free to explore my portfolio to see examples of my work.
            If you have any questions or would like to collaborate, please
            don&apos;t hesitate to reach out.
          </p>
        </div>
        <div className="w-full h-auto m-auto  dark:shadow-gray-900 rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-300 sm:mt-8 p-2">
          <Image src={profilePic} alt="Profile Pic" className="rounded-xl" />
        </div>
      </div>
    </section>
  );
};

export default About;
