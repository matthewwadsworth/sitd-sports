import React from "react";

export default function HamburgerMenu({ isOpen, onClose }) {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-black text-white shadow-lg transform transition-transform duration-300 z-50 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Close area */}
      <div className="p-4 border-b border-gray-700 flex justify-between items-center">
        <h2 className="text-lg font-bold text-yellow-400">Menu</h2>
        <button onClick={onClose} className="text-white text-2xl">
          ✕
        </button>
      </div>

      {/* Menu links */}
      <nav className="flex flex-col p-4 space-y-4 text-lg">
        <a href="/" className="hover:text-yellow-400">Home</a>
        <a href="/category/MLB" className="hover:text-yellow-400">MLB</a>
        <a href="/category/NFL" className="hover:text-yellow-400">NFL</a>
        <a href="/category/NHL" className="hover:text-yellow-400">NHL</a>
        <a href="/category/CFB" className="hover:text-yellow-400">CFB</a>
        <a href="/category/Live Game Reviews" className="hover:text-yellow-400">Live Game Reviews</a>
      </nav>
    </div>
  );
}
