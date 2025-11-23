import React, { useEffect } from "react";
import Logoaemtava from "../../assets/ametava logo.png";
import Logoporfile from "../../assets/porfile logo.png";
import Logosolar from "../../assets/solar logo.png";
import Logohotel from "../../assets/hotel logo.png";
import Logophp from "../../assets/php-coding-computer-css-data-digital-function-concept.jpg";
import Logotailwindcss from "../../assets/tailwindcss.webp"; 
import "aos/dist/aos.css";
import Aos from "aos";
import SkillProfile from "../portfolio/SkillProfile";

const Portfolio = () => {
  const skillsData = [
    {
      image: Logoaemtava,
      title: "ametava",
      description: (
        <a
          href="https://www.ametava.com/"
          target="_blank" // Recommended: Opens the link in a new tab
          rel="noopener noreferrer" // Recommended: Security measure for target="_blank"
        >
          Live Demo
        </a>
      ),
    },
    {
      image: Logoporfile,
      title: "Portfolio",
      description: (
        <a
          href="http://localhost:5173/"
          target="_blank" // Recommended: Opens the link in a new tab
          rel="noopener noreferrer" // Recommended: Security measure for target="_blank"
        >
          Live Demo
        </a>
      ),
    },
    {
      image: Logosolar,
      title: "Solar",
      description: (
        <a
          href="https://solar.ametava.com/"
          target="_blank" // Recommended: Opens the link in a new tab
          rel="noopener noreferrer" // Recommended: Security measure for target="_blank"
        >
          Live Demo
        </a>
      ),
    },
    {
      image: Logohotel,
      title: "Hotel",
      description: (
        <a
          href="http://localhost:5174/"
          target="_blank" // Recommended: Opens the link in a new tab
          rel="noopener noreferrer" // Recommended: Security measure for target="_blank"
        >
          Live Demo
        </a>
      ),
    },
    {
      image: Logophp,
      title: "PHP / MYSQL",
      description: "Live Demo",
    },
    {
      image: Logotailwindcss,
      title: "TAILWINDCSS",
      description: "Live Demo",
    }, 
  ];

  useEffect(() => {
    // Fix 1: Initialize AOS here
    Aos.init({ duration: 1000 });
  }, []); // Empty array runs it once on mount
  return (
    <div
      className="container mx-auto p-8 bg-gray-100 min-h-screen"
      data-aos="fade-up"
    >
      <div className="flex justify-center items-center py-2">
        <h2 className="text-2xl sm:text-xs lg:text-4xl uppercase font-medium">
          Portfolio
        </h2>
      </div>
      <p className="flex justify-center p-10 text-xl">
        Project that I build Done
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((skill, index) => (
          <SkillProfile
            key={index}
            image={skill.image}
            title={skill.title}
            description={skill.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
