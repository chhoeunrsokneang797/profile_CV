import React from 'react'

const SkillCircle = ({ percentage, title}) => {
    const circleStyle = {
    background: `conic-gradient(#3b82f6 ${percentage}%, #bfdbfe ${percentage}%)`, // Tailwind blue-500 and blue-200
  };
  return (
   <div className="flex flex-col items-center p-4">    
      {/* Circle Container */}
      <div
        className="relative w-32 h-32 rounded-full flex items-center justify-center mb-4"
        style={circleStyle}
      >
        {/* Inner White Circle to create the 'stroke' effect */}
        <div className="absolute w-28 h-28 rounded-full bg-white flex items-center justify-center">
          <span className="text-xl font-bold text-gray-800">{percentage}%</span>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
    </div>
  )
}

export default SkillCircle
