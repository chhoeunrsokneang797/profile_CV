import React from 'react'

const ToolUse = ({image, title,description}) => {
  return (
    <div className="flex flex-col items-center p-4 border border-blue-500 bg-white shadow hover:shadow-2xl">    
      {/* Circle Container */}
      <div
        className="relative w-32 h-32 rounded-full flex items-center justify-center mb-4"
         
      >
        {/* Inner White Circle to create the 'stroke' effect */}
        <div>
           <img className='aspect-200/200' src={image} alt="" />
        </div>
       
      </div>

      <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
      <h2>{description}</h2>
    </div>
  )
}

export default ToolUse