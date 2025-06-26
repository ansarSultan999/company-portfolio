import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaCheck, FaTimes } from 'react-icons/fa'
import CtaSection from '../components/home/CtaSection'

const pricingPlans = [
  {
    id: 1,
    name: 'Basic',
    price: 299,
    description: 'Perfect for startups and small businesses',
    features: [
      { text: '3 Logo Concepts', included: true },
      { text: 'Up to 3 Revisions', included: true },
      { text: 'Logo Files in JPG & PNG', included: true },
      { text: 'Basic Brand Guidelines', included: true },
      { text: '3 Day Delivery', included: true },
      { text: '30-Day Support', included: true },
      { text: 'Business Card Design', included: false },
      { text: 'Social Media Kit', included: false },
      { text: 'Website Favicon', included: false },
      { text: 'Brand Merchandise Mockups', included: false }
    ],
    isPopular: false,
    btnText: 'Choose Basic'
  },
  {
    id: 2,
    name: 'Professional',
    price: 499,
    description: 'Ideal for growing businesses and brands',
    features: [
      { text: '5 Logo Concepts', included: true },
      { text: 'Unlimited Revisions', included: true },
      { text: 'All File Formats (AI, EPS, PDF, PNG, JPG)', included: true },
      { text: 'Comprehensive Brand Guidelines', included: true },
      { text: 'Business Card Design', included: true },
      { text: 'Social Media Kit', included: true },
      { text: '5 Day Delivery', included: true },
      { text: '60-Day Support', included: true },
      { text: 'Website Favicon', included: true },
      { text: 'Brand Merchandise Mockups', included: false }
    ],
    isPopular: true,
    btnText: 'Choose Professional'
  },
  {
    id: 3,
    name: 'Premium',
    price: 899,
    description: 'For established businesses needing full branding',
    features: [
      { text: '8 Logo Concepts', included: true },
      { text: 'Unlimited Revisions', included: true },
      { text: 'All File Formats (AI, EPS, PDF, PNG, JPG)', included: true },
      { text: 'Comprehensive Brand Guidelines', included: true },
      { text: 'Business Card & Stationery Design', included: true },
      { text: 'Social Media Kit', included: true },
      { text: 'Website Favicon', included: true },
      { text: 'Brand Merchandise Mockups', included: true },
      { text: '7 Day Delivery', included: true },
      { text: '90-Day Priority Support', included: true }
    ],
    isPopular: false,
    btnText: 'Choose Premium'
  }
]

const additionalServices = [
  {
    id: 1,
    name: 'Business Card Design',
    price: 99,
    description: 'Professional business card design (front & back)'
  },
  {
    id: 2,
    name: 'Social Media Kit',
    price: 149,
    description: 'Profile images and templates for all major platforms'
  },
  {
    id: 3,
    name: 'Stationery Design',
    price: 199,
    description: 'Letterhead, envelope, and compliment slip designs'
  },
  {
    id: 4,
    name: 'Rush Delivery',
    price: 99,
    description: 'Get your designs in 48 hours instead of standard delivery'
  }
]

const PricingPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our <span className="text-primary-600">Pricing Plans</span></h1>
            <p className="text-lg text-gray-700 mb-8">
              Choose the perfect logo design package that fits your business needs and budget.
              All plans include high-quality designs with satisfaction guaranteed.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Pricing Table Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                        {feature.included ? (
                          <FaCheck className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                        ) : (
                          <FaTimes className="text-gray-400 mt-1 mr-2 flex-shrink-0" />
                        )}
                        <span className={feature.included ? 'text-gray-800' : 'text-gray-400'}>{feature.text}</span>
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
          
          {/* Satisfaction Guarantee */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4">100% Satisfaction Guarantee</h3>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We're committed to your complete satisfaction. If you're not happy with your logo design, 
              we'll work with you until you are. With unlimited revisions on our Professional and Premium plans, 
              we ensure you get exactly what you need.
            </p>
          </div>
        </div>
      </section>
      
      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Additional <span className="text-primary-600">Services</span></h2>
            <p className="section-subtitle">
              Enhance your branding with these additional services that can be added to any package.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white p-6 rounded-lg shadow-custom h-full flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary-600">${service.price}</span>
                    <Link to="/contact" className="text-primary-600 font-medium hover:text-primary-700 transition-colors">
                      Add to Package
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section Specific to Pricing */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Frequently Asked <span className="text-primary-600">Questions</span></h2>
            <p className="section-subtitle">
              Get answers to common questions about our pricing and packages.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto mt-12">
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">What's included in each package?</h3>
                <p className="text-gray-700">
                  Each package includes logo design concepts, revisions, and final files. Higher-tier packages
                  include more concepts, unlimited revisions, additional file formats, and extra services like
                  business card design and social media kits. Full details are listed in the comparison table above.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Can I upgrade my package later?</h3>
                <p className="text-gray-700">
                  Yes, you can upgrade to a higher package at any time during the design process. You'll only pay
                  the difference between your current package and the upgraded one.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Do you offer refunds?</h3>
                <p className="text-gray-700">
                  We don't offer refunds due to the custom nature of design work, but we do offer our 100% satisfaction
                  guarantee. We'll work with you until you're completely satisfied with your logo design.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">How long does the design process take?</h3>
                <p className="text-gray-700">
                  The Basic package takes approximately 3 days, Professional takes 5 days, and Premium takes 7 days.
                  These timeframes begin after we receive your completed design brief. If you need a faster turnaround,
                  you can add our Rush Delivery service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CtaSection />
    </>
  )
}

export default PricingPage