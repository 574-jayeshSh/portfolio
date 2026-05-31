import React from "react";
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";
import Result from "../components/Result";
import { useLocation } from "react-router-dom";
import Name from "../components/Name";

const Results = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q")?.toLowerCase();
  return (
    <div>
      <div className="flex items-center px-6 py-4 gap-8 border-b border-gray-100">
        <Name small />
        <div className="flex-1 max-w-2xl">
          <SearchBox isResults />
        </div>
        <Navbar />
      </div>
      <div className="px-6 mt-0 flex gap-6 text-sm text-gray-500 border-b overflow-x-auto whitespace-nowrap">
        <button className="pb-2 font-medium text-blue-600 border-b-2 border-blue-600">
          All
        </button>

        <button className="pb-2 hover:text-blue-600">Images</button>
        <button className="pb-2 hover:text-blue-600">Posts</button>
      </div>

      <Result query={query} />
    </div>
  );
};

export default Results;
