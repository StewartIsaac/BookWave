import React, { useState } from "react";


const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query) {
      onSearch(query);
    }
  };

  const clearSearch = () => {
    setQuery("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-4 flex flex-row space-x-2 items-center justify-center mx-auto gap-2"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for books..."
        className="w-[40%] px-4 py-2 border shadow-lg border-green-300 rounded-lg focus:outline-none sm:w-[30%]"
        aria-label="Search for books"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-gradient-to-tr from-green-500 to-green-800 hover:from-green-800 hover:to-green-500 text-white rounded-lg shadow-lg border-green-300 hover:shadow-lg md:px-8"
        aria-label="Submit search"
      >
        Search
      </button>
      <button
        type="button"
        onClick={clearSearch}
        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg shadow-lg hover:bg-gray-300"
        aria-label="Clear search"
      >
        Clear
      </button>
    </form>
  );
};

export default SearchBar;
