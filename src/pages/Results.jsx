import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";
import Result from "../components/Result";
import { useLocation, useNavigate } from "react-router-dom";
import Name from "../components/Name";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search).get("q")?.toLowerCase();
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="min-h-screen bg-white">
      <div className="flex items-center px-6 py-4 gap-4 md:gap-8 border-b border-gray-100">
        <Name small />
        <div className="flex-1 max-w-2xl">
          <SearchBox isResults />
        </div>
        <div className="hidden md:block">
          <Navbar />
        </div>
      </div>
      <div className="px-6 mt-0 flex gap-6 text-sm text-gray-500 border-b overflow-x-auto whitespace-nowrap">
        {["All", "Images", "Posts"].map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              if (tab === "All") navigate(`/results?q=${query || ""}`);
              else if (tab === "Images") navigate("/pages/projects");
              else if (tab === "Posts") navigate("/pages/about");
            }}
            className={`pb-2 transition-colors ${
              activeTab === tab
                ? "font-medium text-blue-600 border-b-2 border-blue-600"
                : "hover:text-blue-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <Result query={query} />
    </div>
  );
};

export default Results;
