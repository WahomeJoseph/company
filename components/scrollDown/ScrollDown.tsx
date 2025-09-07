import React from 'react'

function ScrollDown() {
  return (
    <div className="mt-10 flex justify-center">
  <a href="#pricing-cards" className="flex flex-col items-center group">
    <span className="text-gray-400 text-sm mb-1">Scroll Down</span>
    <svg
      className="w-6 h-6 text-emerald-500 animate-bounce group-hover:text-emerald-600 transition-colors duration-200"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </a>
</div>

  )
}

export default ScrollDown