import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const faqs = [
  {
    id: 1,
    question: 'How does the logo design process work?',
    answer: 'Our logo design process starts with understanding your business, target audience, and design preferences through a detailed questionnaire. Our designers then create multiple concepts based on this information. You can review the concepts and request revisions until you are completely satisfied with the final design.'
  },
  {
    id: 2,
    question: 'How many revisions do I get with my logo design?',
    answer: 'The number of revisions depends on the package you choose. Our Basic package includes up to 3 revisions, while our Professional and Premium packages offer unlimited revisions until you are completely satisfied with your logo design.'
  },
  {
    id: 3,
    question: 'What file formats will I receive for my logo?',
    answer: 'For the Basic package, you will receive JPG and PNG files. For Professional and Premium packages, you will receive all industry-standard file formats including AI, EPS, PDF, PNG, and JPG, making your logo suitable for any application from print to digital.'
  },
  {
    id: 4,
    question: 'How long does it take to complete a logo design?',
    answer: 'Delivery times vary based on the package you select. The Basic package takes approximately 3 days, Professional package takes around 5 days, and the Premium package takes about 7 days. These timeframes begin after we receive your completed design brief.'
  },
  {
    id: 5,
    question: 'Do you offer refunds if I\'m not satisfied?',
    answer: 'We are committed to your satisfaction and will work with you until you are happy with your design. However, due to the custom nature of design work, we do not offer refunds once the design process has begun. Instead, we offer extensive revisions to ensure your complete satisfaction.'
  },
  {
    id: 6,
    question: 'Do I own the copyright to my logo design?',
    answer: 'Yes, once the project is complete and final payment is made, you will own full copyright to your logo design. We transfer all rights to you, allowing you to use your logo however you wish.'
  }
]

const FaqItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium">{faq.question}</h3>
        {isOpen ? <FaChevronUp className="text-primary-600" /> : <FaChevronDown className="text-primary-600" />}
      </button>
      
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="mt-2 text-gray-600"
        >
          <p>{faq.answer}</p>
        </motion.div>
      )}
    </div>
  )
}

const FaqSection = () => {
  return (
    <section className="section-padding bg-gray-50" id="faq">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Frequently Asked <span className="text-primary-600">Questions</span></h2>
          <p className="section-subtitle">
            Find answers to common questions about our logo design services.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto mt-12 bg-white rounded-lg shadow-custom p-6 md:p-8">
          {faqs.map(faq => (
            <FaqItem key={faq.id} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FaqSection