import React from 'react'

const SkillProfile = ({image, title,description}) => {
  return (
<div className="flex flex-col items-center p-4 border border-gray-200 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
      
      {/* Inner container for the "project" look */}
      {/* max-w-sm on small screens, adjusts to larger sizes on md and lg */}
      <div className="w-full max-w-sm md:max-w-md bg-white rounded-2xl border border-teal-400 p-4 shadow-sm relative">
        
        {/* Image wrapper */}
        <div className="relative rounded-xl overflow-hidden mb-4">           
          <img 
            className="w-full h-48 md:h-64 object-cover rounded-xl" 
            src={image} 
            alt={title || "Skill Profile Image"} // Use title for alt text, or a generic fallback
          />
          
          {/* 'completed' badge */}
          <div className="absolute top-4 right-4 bg-indigo-700 text-white text-xs md:text-sm font-medium px-3 py-1 rounded-full">
            completed
          </div>
        </div>

        {/* Content area below the image */}
        <div className="mt-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            {title}
          </h2>
          
          {/* Button for description/action */}
          <div className="flex justify-end mt-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 md:px-6 rounded-lg transition-colors duration-300 text-sm md:text-base">
              {description}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillProfile



 