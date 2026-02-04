import React from "react";

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="w-full bg-black flex justify-center py-4">
      <input
        type="text"
        placeholder="Search articles..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-3/4 md:w-1/2 px-4 py-2 rounded-md bg-gray-900 text-white placeholder-gray-400 border border-gray-600 focus:outline-none"
      />
    </div>
  );
}
