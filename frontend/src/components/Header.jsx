import React, { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-black text-yellow-400 p-4 flex items-center justify-between">
        
        {/* Hamburger Icon */}
        <button
          className="text-yellow-400 text-3xl md:hidden"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>

        {/* Website Title */}
        <h1 className="text-xl font-bold mx-auto md:mx-0">
          Shots In The Dark - Sports Takes & Updates
        </h1>

        {/* Empty space on right to balance layout */}
        <div className="w-8"></div>
      </header>

      {/* Sliding Menu */}
      <HamburgerMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
