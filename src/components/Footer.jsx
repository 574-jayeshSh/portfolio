import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200 text-gray-500 text-xs">
      <div className="flex flex-col sm:flex-row justify-between items-center px-6 py-3 gap-1">
        <p>Ajmer, Rajasthan, India</p>
        <div className="flex gap-5 sm:gap-4">
          <a href="https://github.com/574-jayeshSh" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">GitHub</a>
          <a href="mailto:0574.jayesh.sharma@gmail.com" className="hover:text-gray-900 transition-colors">Email</a>
          <a href="https://linkedin.com/in/jayesh-sharma-geca" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
