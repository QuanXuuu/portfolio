import React from "react";
import ProjectItem from "./ProjectItem";
import TCGMON from "@/public/assets/projects/TCGMON.png";

const Projects = () => {
  return (
    <div className="w-full p-2 py-8">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase font-bold text-xl tracking-widest text-primary-light mb-6">
          Projects
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="TCGMON"
            backgroundImg={TCGMON}
            technologies="React | SASS | MongoDB"
            projectUrl="https://github.com/QuanXuuu/DCI-TCGMON-project"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
