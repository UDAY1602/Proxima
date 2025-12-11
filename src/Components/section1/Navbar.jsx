import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // You can tweak the 50 value if you want it to shrink earlier/later
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${isScrolled ? "bg-white/90 shadow-md backdrop-blur-sm py-2" : "bg-white py-4 shadow-none"}
    `}
    >
      <nav className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-black" />
          <span
            className={`font-semibold tracking-tight transition-all duration-300
            ${isScrolled ? "text-lg" : "text-2xl"}
          `}
          >
            ProximaTech
          </span>
        </div>

        {/* Nav Links */}
        <ul
          className={`flex items-center gap-6 font-medium transition-all duration-300
          ${isScrolled ? "text-sm" : "text-base"}
        `}
        >
          <li>
            <a href="#home" className="hover:text-blue-600">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-600">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-blue-600">
              Services
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-600">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
