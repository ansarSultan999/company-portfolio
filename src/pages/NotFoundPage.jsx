import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const NotFoundPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <h1 className="text-9xl font-bold text-primary-600">404</h1>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Page Not Found</h2>
            <p className="text-lg text-gray-700 mb-8">
              The page you are looking for might have been removed, had its name changed, 
              or is temporarily unavailable.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/" className="btn-primary">
                Back to Home
              </Link>
              <Link to="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-4">You might be interested in:</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/services" className="px-5 py-2 bg-white shadow-sm rounded-full text-gray-700 hover:bg-gray-100 transition-colors">
                  Our Services
                </Link>
                <Link to="/portfolio" className="px-5 py-2 bg-white shadow-sm rounded-full text-gray-700 hover:bg-gray-100 transition-colors">
                  Portfolio
                </Link>
                <Link to="/pricing" className="px-5 py-2 bg-white shadow-sm rounded-full text-gray-700 hover:bg-gray-100 transition-colors">
                  Pricing
                </Link>
                <Link to="/about" className="px-5 py-2 bg-white shadow-sm rounded-full text-gray-700 hover:bg-gray-100 transition-colors">
                  About Us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default NotFoundPage