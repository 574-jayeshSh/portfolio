import React, { useEffect, useRef, useState } from "react";
import allData from "../data/allData";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  const searchRef = useRef(null);
  const navigate = useNavigate();

  // LIVE SEARCH
  useEffect(() => {
    const searchInput = query.toLowerCase().trim();

    if (searchInput === "") {
      setResults([]);
      return;
    }

    const filtered = allData.filter((item) => {
      const titleMatch = item.title.toLowerCase().includes(searchInput);
      const descriptionMatch = item.description.toLowerCase().includes(searchInput);
      const categoryMatch = item.category.toLowerCase().includes(searchInput);

      return titleMatch || descriptionMatch || categoryMatch;
    });

    setResults(filtered);
  }, [query]);

  // CLICK OUTSIDE CLOSE LOGIC
  useEffect(() => {
    const handler = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // --------------------------------------
  // UI STARTS HERE
  // --------------------------------------
  return (
    <div ref={searchRef} className="flex flex-col items-center mt-5 w-full">
      <div className="relative w-[500px]">
        <input
          type="text"
          className={`border w-full h-12 p-4 rounded-full transition-colors duration-300 
          border-gray-200 focus:outline-none focus:shadow-md 
          ${isFocused && results.length > 0 ? "rounded-b-none border-b-0" : ""}`
          }
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && query.trim()) {
              navigate(`/results?q=${query}`);
              setIsFocused(false);
            }
          }}
          value={query}
          placeholder="Search...."
        />

        {isFocused && query.trim() !== "" && (
          <ul className="absolute top-full w-full bg-white border border-t-0 
          border-gray-200 rounded-b-3xl shadow-lg overflow-hidden z-10 max-h-60 overflow-y-auto">
            
            {results.length > 0 ? (
              results.map((item, index) => (
                <li
                  key={index}
                  onClick={() => {
                    navigate(`/results?q=${item.category}`);
                    setIsFocused(false);
                  }}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                >
                  {item.title}
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-gray-500">No results found</li>
            )}

          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchBox;
