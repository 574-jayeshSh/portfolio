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

      {filtered.map((item, index) => (
        <div key={index} className="mb-8">

          <p className="text-xs text-gray-500">{item.url}</p>

          <h2
            className="text-blue-700 text-xl font-medium hover:underline cursor-pointer"
            onClick={() => navigate(item.url)}
          >
            {item.title}
          </h2>

          <p className="text-gray-700 text-sm mt-1 leading-6">
            {item.description}
          </p>

        </div>
      ))}
    </div>
  )
}

export default Result