import React from "react";

function SoftSkillCard({ softSkillIcon, title }) {
  return (
    <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 dark:bg-gray-700">
      <div className="grid grid-cols-2 gap-4 justify-center items-center  ">
        <div className="m-auto text-6xl w-[64px] h-[64px] ">
          {softSkillIcon}
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
}

export default SoftSkillCard;
