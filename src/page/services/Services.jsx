import React from "react";

const Services = () => {
  return (
  <div className="max-w-6xl mx-auto bg-gray-100 min-h-screen p-4 sm:p-6">
  {/* Section Title */}
  <div className="flex justify-center items-center my-8">
    <h2 className="text-3xl sm:text-4xl lg:text-5xl uppercase font-bold tracking-wider text-gray-800">
      Services
    </h2>
  </div>

  {/* Services Grid (The Responsive Part) */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

    {/* Card 1: Web Development */}
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold text-blue-600 mb-4">
        Web Development
      </h3>
      <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
        Proficient in building and maintaining dynamic, responsive, and
        high-performance websites and web applications. Expertise includes
        front-end technologies (HTML5, CSS3, JavaScript frameworks) and
        back-end development, focusing on scalable architecture, code
        efficiency, and seamless user experience.
      </p>
    </div>

    {/* Card 2: Web Design */}
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold text-blue-600 mb-4">
        Web Design
      </h3>
      <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
        Skilled in creating visually appealing and user-centric digital
        interfaces. Focuses on transforming complex requirements into
        intuitive and engaging designs, covering areas such as UX/UI
        principles, wireframing, prototyping, and ensuring brand
        consistency across all digital platforms.
      </p>
    </div>

    {/* Card 3: Project Management */}
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold text-blue-600 mb-4">
        Project Management
      </h3>
      <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
        Experienced in leading projects from conception through
        completion, adhering to strict timelines and budget constraints.
        Adept at using Agile methodologies (Scrum/Kanban) to organize
        teams, manage stakeholders, mitigate risks, and ensure the
        delivery of high-quality results that meet strategic business
        objectives.
      </p>
    </div>

    {/* Card 4: Management Software */}
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold text-blue-600 mb-4">
        Management Software
      </h3>
      <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
        Deep understanding and practical experience with various
        management and collaboration tools (e.g., CRM, ERP, project
        tracking platforms). Capable of implementing, configuring, and
        optimizing software solutions to streamline workflows, enhance
        team efficiency, and improve data-driven decision-making.
      </p>
    </div>
  </div>
</div>
  );
};

export default Services;
