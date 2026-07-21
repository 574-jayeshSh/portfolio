import React from 'react'

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-[#f2f2f2] border-t border-gray-300 text-gray-600 text-xs md:text-sm z-40">
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 md:px-6 py-2 gap-1">
        <p>Ajmer, Rajasthan, India</p>
        <div className="flex gap-3 md:gap-4">
          <a href="https://github.com/574-jayeshSh" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
          <a href="mailto:0574.jayesh.sharma@gmail.com" className="hover:underline">Email</a>
          <a href="https://linkedin.com/in/jayesh-sharma-574" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
