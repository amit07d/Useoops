import React from "react";

export default function Search({ search, setSearch, handleSearch }) {
  return (
    <div className="flex justify-center items-center mt-6">
      <div className="flex gap-3 w-full max-w-md">
        <input
          type="text"
          placeholder="Enter city name..."
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition bg-white/70 backdrop-blur-md"
        />
        <button
          onClick={handleSearch}
          className="px-5 py-2 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition shadow-md"
        >
          Search
        </button>
      </div>
    </div>
  );
}
