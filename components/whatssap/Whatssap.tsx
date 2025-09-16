"use client"
import { X, Phone } from 'lucide-react'
import { BsWhatsapp } from "react-icons/bs";
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function WhatsApp() {
  const [isHovered, setIsHovered] = useState(false)
  const [isPanelOpen, setIsPanelOpen] = useState(false)

  const phoneNumbers = [
    { number: '+254 728 930152', label: 'Request For Service' },
    { number: '+254 795969757', label: 'Online Support' }
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {/* Hover Text */}
        <AnimatePresence>
          {isHovered && !isPanelOpen && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-16 top-1/2 transform -translate-y-1/2"
            >
              <div className="bg-emerald-800 capitalize text-white px-3 py-2 rounded-lg shadow-lg whitespace-nowrap text-sm font-medium">
                Chat with us online
              </div>
              <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* WhatsApp Panel */}
        <AnimatePresence>
          {isPanelOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-16 bottom-0 bg-white rounded-lg shadow-xl p-4 w-64 border border-gray-200"
            >
              <div className="flex items-center justify-between mb-3">
                <div className='space-y-1'>
                  <span className="text-md font-semibold text-gray-800">We&apos;re here for you</span>
                  <h3 className="text-sm font-light text-gray-800">Chat with us:</h3>
                </div>
                <button
                  onClick={() => setIsPanelOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Close panel"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="space-y-2">
                {phoneNumbers.map((phone, index) => (
                  <motion.a
                    key={index}
                    href={`tel:${phone.number.replace(/\s/g, '')}`}
                    className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-50 transition-colors group"
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.1 }}
                  >
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{phone.number}</p>
                      <p className="text-xs text-gray-500">{phone.label}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100">
                <motion.a
                  href="https://wa.me/254728930152"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors text-sm font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <BsWhatsapp className="h-4 w-4" />
                  <span>Start WhatsApp Chat</span>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* WhatsApp Icon Button */}
        <motion.button
          onClick={() => setIsPanelOpen(!isPanelOpen)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="w-14 h-14 bg-green-500 text-white rounded-full shadow-lg flex items-center justify-center"
          whileHover={{ scale: 1.05, backgroundColor: "#22c55e" }}
          whileTap={{ scale: 0.95 }}
          animate={{
            backgroundColor: isPanelOpen ? "#16a34a" : "#22c55e",
            rotate: isPanelOpen ? 10 : 0
          }}
          transition={{ duration: 0.2 }}
          aria-label={isPanelOpen ? "Close contact panel" : "Open WhatsApp contact panel"}
        >
          <BsWhatsapp className="h-6 w-6" />
        </motion.button>
      </div>
    </div>
  )
}

export default WhatsApp
