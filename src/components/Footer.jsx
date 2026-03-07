import React from 'react'

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-[#f2f2f2] border-t border-gray-300 text-gray-600 text-sm">
      <div className="flex justify-between items-center px-6 py-2">
        <p>Ajmer, Rajasthan, India</p>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Settings</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
