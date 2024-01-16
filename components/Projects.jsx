"use client";

import React, { useEffect } from "react";
import ProjectItem from "./ProjectItem";
import TCGMON from "@/public/assets/projects/TCGMON.png";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
// import { useSectionsInView } from "@/lib/hooks";

const Projects = () => {
  // const { ref } = useSectionsIn4iew("Projects");
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Projects");
    }
  }, [inView, setActiveSection]);

  return (
    <section
      ref={ref}
      id="projects"
      className="w-full p-2 scroll-mt-24 mb-44 px-10 snap-start"
    >
      <div className="max-w-[1240px] mx-auto">
        <h2 className="uppercase font-bold text-3xl tracking-widest text-primary-light mb-10 lg:text-4xl lg:mb-12">
          Projects
        </h2>
        <div className="grid md:grid-cols-1 gap-8">
          <ProjectItem
            title="TCGMON"
            backgroundImg={TCGMON}
            technologies="React | SASS | MongoDB"
            projectPageUrl="https://tcgmon-temd.onrender.com/"
            projectCodeUrl="https://github.com/QuanXuuu/DCI-TCGMON-project"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
