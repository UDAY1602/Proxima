import React from 'react'

const Servicecard = ({ icon, title, description }) => {
  return (
    <div
      className="
        w-[320px] h-[200px]
        bg-gray-100
        rounded-2xl
        shadow-lg
        p-6
        overflow-hidden
        transition-transform duration-300
        hover:-translate-y-2
      ">
      
      {/* Icon */}
      <div className="
        w-12 h-12 mb-4
        bg-black
        rounded-full    
        flex items-center justify-center
        overflow-hidden
      ">
        <img 
          src={icon}    
          alt="icon"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Heading */}
      <h1 className="text-lg font-semibold mb-2">
        {title}
      </h1>

      {/* Text */}
      <p className="text-sm opacity-90">
        {description}
      </p>

    </div>
  )
}

export default Servicecard
