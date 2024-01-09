import React from "react";
import ProjectItem from "./ProjectItem";
import TCGMON from "@/public/assets/projects/TCGMON.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full mt-12">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
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
    </div>
  );
};

export default Projects;
