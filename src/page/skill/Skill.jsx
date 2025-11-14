import React from "react";
import SkillCircle from "./SkillCircle";

const Skill = () => {
  const skillsData = [
    {
      percentage: 85,
      title: "HTML5",
    },
    {
      percentage: 80,
      title: "CSS3",
    },
    {
      percentage: 60,
      title: "JAVASCRIPT",
    },
    {
      percentage: 40,
      title: "PHP / MYSQL",
    },
    {
      percentage: 70,
      title: "TAILWINDCSS",
    },
    {
      percentage: 50,
      title: "TYPESCRIPT",
    },
    {
      percentage: 30,
      title: "NEXTJS",
    },
    {
      percentage: 60,
      title: "REACTJS",
    },
  ];
  return (
    <div className="container mx-auto p-8 bg-gray-100 min-h-screen">
      <div className="flex justify-center items-center py-5">
        <h2 className="text-2xl sm:text-xs lg:text-4xl uppercase font-medium">
          Skills
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((skill, index) => (
          <SkillCircle
            key={index}
            percentage={skill.percentage}
            title={skill.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Skill;
