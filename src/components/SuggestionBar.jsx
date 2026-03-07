import React from 'react'

const SuggestionBar = () => {
    return (
      <div className='flex flex-row justify-center items-center gap-10 mt-5 w-full'>
        {[
          {icon : "https://img.icons8.com/?size=100&id=M7COJD1KT27d&format=png&color=000000", label: "about"},
          {icon : "https://img.icons8.com/?size=100&id=68762&format=png&color=000000", label: "projects"},
          {icon : "https://img.icons8.com/?size=100&id=118624&format=png&color=000000", label: "skills"}
        ].map((item,index)=>(
          <div key={index} className="flex flex-col justify-center h-25 w-25 items-center p-0.5 transition-all hover:bg-gray-300 hover:rounded-2xl">
            <img src={item.icon} alt={item.label} className="w-15 h-15 rounded-full" />
            <label className="text-sm mt-1 text-gray-700">{item.label}</label>
          </div>
        ))}

      </div>
  )
}

export default SuggestionBar