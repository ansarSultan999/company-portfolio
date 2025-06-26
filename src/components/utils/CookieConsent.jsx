import React from 'react'
import { motion } from 'framer-motion'

const CookieConsent = ({ onAccept, onDecline }) => {
  return (
    <motion.div 
      className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 p-4 md:p-6"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0 md:mr-8">
          <h3 className="text-lg font-semibold mb-2">We use cookies</h3>
          <p className="text-gray-600 text-sm md:text-base">
            We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic.
          </p>
        </div>
        <div className="flex space-x-4">
          <button 
            onClick={onDecline}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors duration-300"
          >
            Decline
          </button>
          <button 
            onClick={onAccept}
            className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors duration-300"
          >
            Accept
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default CookieConsent