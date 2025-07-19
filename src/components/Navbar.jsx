import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Contact",
    "Blog",
    "Resume",
  ];

  const handleNavigation = (label) => {
    if (label === "Resume") {
      window.open("/kaosisoCv.jsx", "_blank");
    } else if (label === "Blog") {
      window.open("https://medium.com/@kaosisochukwum", "_blank");
    } else {
      navigate(label === "Home" ? "/" : `/${label.toLowerCase()}`);
    }
    setMobileOpen(false); // Close mobile menu after click
  };

  return (
    <>
      {/* Desktop Navbar on Right */}
      <div className="fixed top-[80px] right-0 z-50 hidden sm:flex flex-col items-end gap-4 pr-4">
        {navItems.map((label) => (
          <button
            key={label}
            onClick={() => handleNavigation(label)}
            className="bg-white/10 hover:bg-white/20 text-gray-800 px-4 py-2 rounded-l-full shadow transition-all duration-300 text-sm font-medium
              sm:hover:scale-110 sm:hover:shadow-lg sm:hover:brightness-125"
          >
            {label}
          </button>
        ))}
      </div>

      {/* Mobile Hamburger Button */}
      <div className="sm:hidden fixed top-4 right-4 z-[100]">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="w-10 h-10 flex flex-col justify-center items-center bg-white/10 border border-white/20 rounded-full shadow"
        >
          <span className="w-5 h-[2px] bg-white mb-[3px]" />
          <span className="w-5 h-[2px] bg-white mb-[3px]" />
          <span className="w-5 h-[2px] bg-white" />
        </button>
      </div>

      {/* Fullscreen Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-[#111827]/95 z-40 flex flex-col items-center justify-center gap-6 sm:hidden">
          {navItems.map((label) => (
            <button
              key={label}
              onClick={() => handleNavigation(label)}
              className="bg-white/10 hover:bg-white/20 hover:brightness-125 text-white px-5 py-3 rounded-full shadow-md transition-all duration-300 text-base font-medium w-56 text-center"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
