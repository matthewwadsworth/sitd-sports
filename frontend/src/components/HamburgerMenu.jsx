import React from "react";

export default function HamburgerMenu({ isOpen, onClose }) {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-black text-white shadow-lg
      transform transition-transform duration-300 z-50
      ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      {/* Close Button */}
      <div className="p-4 border-b border-gray-700 flex justify-between items-center">
        <h2 className="text-lg font-bold">Menu</h2>
        <button onClick={onClose} className="text-2xl">
          ✖
        </button>
      </div>

      {/* Category Links */}
      <nav className="p-4 space-y-4 text-lg">
        <a href="/category/MLB" onClick={onClose} className="block hover:text-yellow-400">MLB</a>
        <a href="/category/NFL" onClick={onClose} className="block hover:text-yellow-400">NFL</a>
        <a href="/category/NHL" onClick={onClose} className="block hover:text-yellow-400">NHL</a>
        <a href="/category/CFB" onClick={onClose} className="block hover:text-yellow-400">CFB</a>
        <a href="/category/Reviews" onClick={onClose} className="block hover:text-yellow-400">
          Live Game Reviews
        </a>
      </nav>
    </div>
  );
}
