import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import allData from "../data/allData";
import { FaSearch } from "react-icons/fa";

export default function SearchBox({ isResults }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  // Handle clicking outside to close results
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Simple Search Logic
  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const filtered = allData.filter((item) => {
      const titleMatch = item.title && item.title.toLowerCase().includes(lowerQuery);
      const categoryMatch = item.category && item.category.toLowerCase().includes(lowerQuery);
      return titleMatch || categoryMatch;
    });

    setResults(filtered.slice(0, 8)); // Limit to 8 results
  }, [query]);

  // UI STARTS HERE
  // --------------------------------------
  return (
    <div ref={searchRef} className={`flex flex-col ${isResults ? "items-start" : "items-center mt-5"} w-full font-outfit`}>
      <div className={`relative ${isResults ? "w-[600px]" : "w-[500px]"}`}>
        <input
          type="text"
          className={`border w-full h-11 p-4 rounded-full transition-all duration-300 
          border-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-400/50 focus:border-transparent focus:shadow-md 
          ${isFocused && results.length > 0 ? "rounded-b-none border-b-0 shadow-md" : ""}`
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
          border-gray-200 rounded-b-3xl shadow-lg overflow-hidden z-50 max-h-60 overflow-y-auto">
            
            {results.length > 0 ? (
              results.map((item, index) => (
                <li
                  key={index}
                  onClick={() => {
                    navigate(item.url);
                    setIsFocused(false);
                  }}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100 group transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-blue-400 opacity-60 group-hover:opacity-100 transition-opacity">
                      <FaSearch />
                    </span>
                    <span className="text-gray-700">{item.title}</span>
                  </div>
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-gray-400 italic text-sm">Press Enter to search for "{query}"</li>
            )}

          </ul>
        )}
      </div>
    </div>
  );
}
