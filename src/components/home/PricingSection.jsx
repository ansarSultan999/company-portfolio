import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaCheck } from 'react-icons/fa'

const pricingPlans = [
  {
    id: 1,
    name: 'Basic',
    price: 299,
    description: 'Perfect for startups and small businesses',
    features: [
      '3 Logo Concepts',
      'Up to 3 Revisions',
      'Logo Files in JPG & PNG',
      'Basic Brand Guidelines',
      '3 Day Delivery',
      '30-Day Support'
    ],
    isPopular: false,
    btnText: 'Get Started'
  },
  {
    id: 2,
    name: 'Professional',
    price: 499,
    description: 'Ideal for growing businesses and brands',
    features: [
      '5 Logo Concepts',
      'Unlimited Revisions',
      'All File Formats (AI, EPS, PDF, PNG, JPG)',
      'Comprehensive Brand Guidelines',
      'Business Card Design',
      'Social Media Kit',
      '5 Day Delivery',
      '60-Day Support'
    ],
    isPopular: true,
    btnText: 'Get Started'
  },
  {
    id: 3,
    name: 'Premium',
    price: 899,
    description: 'For established businesses needing full branding',
    features: [
      '8 Logo Concepts',
      'Unlimited Revisions',
      'All File Formats (AI, EPS, PDF, PNG, JPG)',
      'Comprehensive Brand Guidelines',
      'Business Card & Stationery Design',
      'Social Media Kit',
      'Website Favicon',
      'Brand Merchandise Mockups',
      '7 Day Delivery',
      '90-Day Priority Support'
    ],
    isPopular: false,
    btnText: 'Get Started'
  }
]

const PricingSection = () => {
  return (
    <section className="section-padding" id="pricing">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Our <span className="text-primary-600">Pricing Plans</span></h2>
          <p className="section-subtitle">
            Choose the perfect plan for your business needs. All plans include high-quality logo designs.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className={`price-card h-full flex flex-col ${plan.isPopular ? 'border-primary-500 shadow-lg' : ''}`}>
                {plan.isPopular && (
                  <div className="absolute top-0 right-0 bg-primary-600 text-white text-sm font-semibold py-1 px-3 rounded-bl-lg rounded-tr-lg">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-end mb-2">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-gray-500 ml-1">one-time</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <FaCheck className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/contact" 
                  className={`${plan.isPopular ? 'btn-primary' : 'btn-secondary'} w-full text-center mt-auto`}
                >
                  {plan.btnText}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12 bg-gray-50 p-6 rounded-lg">
          <p className="text-lg mb-4">Need a custom package tailored to your specific requirements?</p>
          <Link to="/contact" className="btn-primary">
            Contact Us for Custom Pricing
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PricingSection