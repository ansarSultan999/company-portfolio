import React from 'react'
import { motion } from 'framer-motion'

const steps = [
  {
    id: 1,
    title: 'Discover',
    description: 'We start by understanding your brand, target audience, and design preferences through a detailed questionnaire.',
    icon: '01'
  },
  {
    id: 2,
    title: 'Design Concepts',
    description: 'Our designers create multiple unique concepts based on your requirements and brand values.',
    icon: '02'
  },
  {
    id: 3,
    title: 'Revisions',
    description: 'We refine your preferred concept with unlimited revisions until you are completely satisfied.',
    icon: '03'
  },
  {
    id: 4,
    title: 'Finalize',
    description: 'Once approved, we finalize your design and deliver all the file formats you need for any application.',
    icon: '04'
  }
]

const ProcessSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="section-title">Our Design <span className="text-primary-600">Process</span></h2>
          <p className="section-subtitle">
            We follow a structured design process to ensure high-quality results that exceed your expectations.
          </p>
        </motion.div>
        
        <div className="mt-16 relative">
          {/* Process Line */}
          <div className="hidden lg:block absolute top-1/4 left-0 right-0 h-1 bg-gray-200 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative z-10"
              >
                <div className="bg-white rounded-lg shadow-custom p-6 h-full">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary-600 text-white flex items-center justify-center text-2xl font-bold mb-6">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-center">{step.title}</h3>
                  <p className="text-gray-600 text-center">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection