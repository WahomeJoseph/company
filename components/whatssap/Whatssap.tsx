"use client"
import { MessageCircle } from 'lucide-react'
import React from 'react'

function Whatssap() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center space-x-3">
     
      <span className="bg-green-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-600 transition-colors text-sm font-medium">
        <a
        href="https://wa.me/254728930152"
        target="_blank"
        rel="noopener noreferrer"
      >
        Chat On WhatsApp
      </a>
      </span>
    </div>
  )
}

export default Whatssap