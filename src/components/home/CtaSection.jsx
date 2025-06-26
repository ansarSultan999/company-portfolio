import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

const CtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started with Your Logo Design?</h2>
            <p className="text-lg mb-8 text-blue-100">
              Take the first step towards building a strong brand identity. Our team of expert designers is ready to create the perfect logo for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get a Free Quote <FaArrowRight />
              </Link>
              <Link 
                to="/portfolio" 
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-md font-medium transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CtaSection