import React from 'react'
import allData from '../data/allData'
import { useNavigate } from 'react-router-dom'

const Result = ({ query }) => {

   const navigate = useNavigate()
   const filtered = allData.filter(item => {
    return (
      item.title?.toLowerCase().includes(query) ||
      item.description?.toLowerCase().includes(query) ||
      item.category?.toLowerCase().includes(query)
    )
  })
  return (
    <div className="ml-15 mt-6 max-w-2xl">

      <p className="text-sm text-gray-600 mb-4">
        About {filtered.length} results for "{query}"
      </p>

      {filtered.length > 0 ? (
        filtered.map((item, index) => (
          <div key={index} className="mb-8 animate-in fade-in slide-in-from-bottom-2 duration-500" style={{ animationDelay: `${index * 100}ms` }}>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-[10px]">
                {item.category?.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="text-[12px] text-gray-900 leading-tight">{item.name || "Jayesh Sharma"}</p>
                <p className="text-[12px] text-gray-500 leading-tight">{item.url}</p>
              </div>
            </div>

            <h2
              className="text-blue-700 text-xl font-normal hover:underline cursor-pointer mb-1"
              onClick={() => navigate(item.url)}
            >
              {item.title}
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))
      ) : (
        <div className="mt-10">
          <p className="text-lg text-gray-800">Your search - <span className="font-bold">{query}</span> - did not match any documents.</p>
          <ul className="mt-4 list-disc ml-8 text-gray-600 space-y-1">
            <li>Make sure that all words are spelled correctly.</li>
            <li>Try different keywords.</li>
            <li>Try more general keywords.</li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Result