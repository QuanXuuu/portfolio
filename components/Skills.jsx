"use client";

import React, { useEffect } from "react";
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
import { LuMessagesSquare } from "react-icons/lu";
import { RiEmpathizeLine } from "react-icons/ri";
import { MdLanguage } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { RiArrowLeftRightFill } from "react-icons/ri";
import { IoTimerOutline } from "react-icons/io5";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { FaRegLightbulb } from "react-icons/fa";

import CodeSkillCard from "./CodeSkillCard";
import SoftSkillCard from "./SoftSkillCard";
// import { useSectionsInView } from "@/lib/hooks";

const Skills = () => {
  // const { ref } = useSectionsInView("Skills");

  const { ref, inView } = useInView({
    threshold: 0.7,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Skills");
    }
  }, [inView, setActiveSection]);

  return (
    <section
      ref={ref}
      id="skills"
      className="w-full lg:h-screen p-3 scroll-mt-36 snap-center mt-36"
    >
      <div className="max-w-[1240px] mx-auto h-full flex flex-col justify-center">
        <h2 className="uppercase font-bold text-3xl tracking-widest text-primary-light mb-12 lg:text-4xl lg:mb-16">
          Skills
        </h2>
        {/* Soft Skills */}
        <h3 className="uppercase font-bold text-xl tracking-widest text-primary-light mb-6 lg:text-2xl lg:mb-10">
          Soft Skills
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <SoftSkillCard
            softSkillIcon={<LuMessagesSquare />}
            title="Communication"
          />
          <SoftSkillCard softSkillIcon={<RiEmpathizeLine />} title="Empathy" />

          <SoftSkillCard
            softSkillIcon={<MdLanguage />}
            title="Cultural Intelligence"
          />

          <SoftSkillCard
            softSkillIcon={<FaPeopleGroup />}
            title="Collaboration"
          />

          <SoftSkillCard
            softSkillIcon={<RiArrowLeftRightFill />}
            title="Adaptability"
          />

          <SoftSkillCard
            softSkillIcon={<IoTimerOutline />}
            title="Time Management"
          />

          <SoftSkillCard
            softSkillIcon={<IoExtensionPuzzleOutline />}
            title="Problem Solving"
          />

          <SoftSkillCard
            softSkillIcon={<FaRegLightbulb />}
            title="Creativity"
          />
        </div>

        {/* Coding Skills */}
        <h3 className="uppercase font-bold text-xl tracking-widest text-primary-light mb-6 lg:text-2xl lg:mb-10">
          Coding Skills
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <CodeSkillCard imageUrl={html} altText={"html"} title="HTML" />
          <CodeSkillCard imageUrl={css} altText={"css"} title="CSS" />
          <CodeSkillCard
            imageUrl={tailwind}
            altText={"tailwind"}
            title="Tailwind CSS"
          />
          <CodeSkillCard imageUrl={sass} altText={"sass"} title="Sass" />
          <CodeSkillCard
            imageUrl={javascript}
            altText={"javascript"}
            title="JavaScript"
          />
          <CodeSkillCard imageUrl={node} altText={"node"} title="Node.js" />
          <CodeSkillCard imageUrl={react} altText={"react"} title="React" />
          <CodeSkillCard imageUrl={nextjs} altText={"nextjs"} title="Next.js" />
          <CodeSkillCard
            imageUrl={expressjs}
            altText={"expressjs"}
            title="Express.js"
          />
          <CodeSkillCard imageUrl={mongo} altText={"mongo"} title="MongoDB" />
          <CodeSkillCard
            imageUrl={postman}
            altText={"postman"}
            title="Postman"
          />
          <CodeSkillCard imageUrl={github} altText={"github"} title="GitHub" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
