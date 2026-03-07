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
      <div className="flex justify-between items-center px-6 pt-6 pb-3 ">
        <div className="flex items-center gap-6">
          <Name small />
          <SearchBox isResults />
        </div>
        <Navbar />
      </div>
      <div className="px-6 mt-2 flex gap-6 text-sm text-gray-600 border-b">
        <button className="pb-2 font-medium text-blue-600 border-b-2 border-blue-600">
          All
        </button>

        <button className="pb-2 hover:text-blue-600">Images</button>
        <button className="pb-2 hover:text-blue-600">Posts</button>
      </div>
      <div className="w-full h-0.5 border-black bg-gray-200 rounded-full"></div>
      <Result query={query} />
    </div>
  );
};

export default Results;
