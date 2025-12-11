import React from "react";

const Usecard = ({ logo, title, description }) => {
  return (
    <div
      className="
        w-[280px] h-[220px]
        bg-white
        rounded-xl
        shadow-lg
        p-6
        flex flex-col items-center text-center
        transition-all duration-300
        hover:bg-blue-400 hover:text-white hover:scale-105
        cursor-pointer
      "
    >
      {/* Logo */}
      <div
        className="
          w-12 h-12 mb-4
          bg-black
          rounded-full
          flex items-center justify-center
          overflow-hidden
        "
      >
        <img
          src={logo}    
          alt="logo"
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
  );
};

export default Usecard;
    