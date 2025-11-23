import React, { useEffect } from "react";
import SkillCircle from "./SkillCircle";
import Logohtml from "../../assets/logo html.png";
import Logocss from "../../assets/css.png";
import Logoboostrap from "../../assets/Bootstrap_logo.svg.png";
import Logojavascript from "../../assets/javascript.webp";
import Logophp from "../../assets/php-coding-computer-css-data-digital-function-concept.jpg";
import Logotailwindcss from "../../assets/tailwindcss.webp";
import Logotypescript from "../../assets/Typescript_logo_2020.svg.png";
import Logonextjs from "../../assets/nextjs.png";
import Logoreact from "../../assets/react.webp";
import "aos/dist/aos.css";
import Aos from "aos";
import ToolUse from "./ToolUse";
import Logovscode from "../../assets/visual-studio-code-icon.webp";
import Logointellij from "../../assets/Intellij.jpg";
import Logogitcontrol from "../../assets/git.png";
import Logopostman from "../../assets/postman.png";
import Logoclickup from "../../assets/clickup.png";
import Logotrello from "../../assets/trello.jpg";

const Skill = () => {
  const skillsData = [
    {
      image: Logohtml,
      title: "HTML5",
      description:
        "HTML's primary function is to define the meaning and structure of content. It tells the browser what each piece of content is (e.g., this is a heading, this is a paragraph, this is a link, this is an image).",
    },
    {
      image: Logocss,
      title: "CSS3",
      description:
        "CSS (Cascading Style Sheets) is a style sheet language used to describe the presentation and formatting of a document written in a markup language, such as HTML or XML. It is the language used to style the visual look of content on the web",
    },
    {
      image: Logoboostrap,
      title: "BOOSTRAP",
      description:
        "Bootstrap is the most popular open-source front-end framework for developing responsive, mobile-first websites",
    },
    {
      image: Logojavascript,
      title: "JAVASCRIPT",
      description:
        "JavaScript (JS) is a high-level, interpreted, programming language that is one of the three core technologies of the World Wide Web, alongside HTML and CSS. It is the language that makes web pages interactive and dynamic",
    },
    {
      image: Logophp,
      title: "PHP / MYSQL",
      description:
        "PHP (Hypertext Preprocessor) is a widely-used, open-source, server-side scripting language primarily designed for web development.  SQL (Structured Query Language) is a standard language for managing and manipulating relational databases. It is the essential tool for storing, retrieving, and organizing data",
    },
    {
      image: Logotailwindcss,
      title: "TAILWINDCSS",
      description:
        "Tailwind CSS is an open-source CSS framework that follows a utility-first approach to styling web applications. Unlike traditional frameworks (like Bootstrap) that provide pre-built, large components (like .card or .btn-primary), Tailwind provides thousands of small, single-purpose classes (utilities) that let you build completely custom designs directly in your HTML markup.",
    },
    {
      image: Logotypescript,
      title: "TYPESCRIPT",
      description:
        "TypeScript (TS) is an open-source programming language developed by Microsoft that acts as a superset of JavaScript (JS).",
    },
    {
      image: Logonextjs,
      title: "NEXTJS",
      description:
        "Next.js is a powerful, open-source React Framework that provides structure, production-ready features, and performance optimizations out-of-the-box. It allows developers to build modern, full-stack web applications (handling both front-end and some back-end logic) using React components.",
    },
    {
      image: Logoreact,
      title: "REACTJS",
      description:
        "React.js (often just called React) is a powerful, open-source JavaScript library developed by Facebook (now Meta) for building modern, fast, and interactive user interfaces (UIs), especially for single-page applications (SPAs).",
    },
  ];
    const skillstool = [
    {
      image: Logovscode,
      title: "VSCode",      
    },
    {
      image: Logointellij,
      title: "Intellij Idea",
    },
    {
      image: Logogitcontrol,
      title: "Git Version Control",
      description:
        "GitLab & GitHub",
    },
    {
      image: Logopostman,
      title: "Postman",
    },
    {
      image: Logoclickup,
      title: "ClickUp",
    },
    {
      image: Logotrello,
      title: "Trello",
    },    
     
  ];

  useEffect(() => {
    // Fix 1: Initialize AOS here
    Aos.init({ duration: 1000 });
  }, []); // Empty array runs it once on mount

  return (
    <>
      <div
        className="container mx-auto p-8 bg-gray-100 min-h-screen"
        data-aos="fade-up"
      >
        <div className="flex justify-center items-center py-2">
          <h2 className="text-2xl sm:text-xs lg:text-4xl uppercase font-medium">
            Skills
          </h2>
        </div>
        <p className="flex justify-center p-10 text-xl">
          Passionate Junior Frontend Developer skilled in creating responsive,
          accessible user interfaces using HTML5, CSS3, and React.js. Dedicated
          to optimizing code quality and collaborating on new feature
          development to improve user engagement.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <SkillCircle
              key={index}
              image={skill.image}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </div>
      </div>

    <div
        className="container mx-auto p-8 bg-gray-100 min-h-screen"
        data-aos="fade-up"
      >
        <div className="flex justify-center items-center py-4">
          <h2 className="text-2xl sm:text-xs lg:text-4xl uppercase font-medium">
            tools i use
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillstool.map((skill, index) => (
            <ToolUse
              key={index}
              image={skill.image}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Skill;
