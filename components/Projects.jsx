"use client";

import React, { useEffect } from "react";
import ProjectItem from "./ProjectItem";
import TCGMON from "@/public/assets/projects/TCGMON.png";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
// import { useSectionsInView } from "@/lib/hooks";

const Projects = () => {
  // const { ref } = useSectionsInView("Projects");
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
    <section ref={ref} id="projects" className="w-full p-2 scroll-mt-20 mb-40">
      <div className="max-w-[1240px] mx-auto">
        <p className="uppercase font-bold text-2xl tracking-widest text-primary-light mb-8 ">
          Projects
        </p>
        <div className="grid md:grid-cols-2 gap-8">
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
