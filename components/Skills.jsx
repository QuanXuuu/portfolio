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
import SkillCard from "./SkillCard";
// import { useSectionsInView } from "@/lib/hooks";

const Skills = ({ imageUrl, altText, title }) => {
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
          <SkillCard imageUrl={html} altText={"html"} title="HTML" />

          {/* CSS */}
          <SkillCard imageUrl={css} altText={"css"} title="CSS" />

          {/* tailwind */}
          <SkillCard
            imageUrl={tailwind}
            altText={"tailwind"}
            title="Tailwind CSS"
          />

          {/* sass */}
          <SkillCard imageUrl={sass} altText={"sass"} title="Sass" />

          {/* JS */}
          <SkillCard
            imageUrl={javascript}
            altText={"javascript"}
            title="JavaScript"
          />

          {/* node */}
          <SkillCard imageUrl={node} altText={"node"} title="Node.js" />

          {/* React */}
          <SkillCard imageUrl={react} altText={"react"} title="React" />

          {/* Nextjs */}
          <SkillCard imageUrl={nextjs} altText={"nextjs"} title="Next.js" />

          {/* ExpressJS */}
          <SkillCard
            imageUrl={expressjs}
            altText={"expressjs"}
            title="Express.js"
          />

          {/* Mongo */}
          <SkillCard imageUrl={mongo} altText={"mongo"} title="MongoDB" />

          {/* Postman */}
          <SkillCard imageUrl={postman} altText={"postman"} title="Postman" />

          {/* Github */}
          <SkillCard imageUrl={github} altText={"github"} title="GitHub" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
