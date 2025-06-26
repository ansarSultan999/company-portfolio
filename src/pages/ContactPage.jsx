import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

const contactInfo = [
  {
    id: 1,
    title: 'Phone',
    details: '+1 (123) 456-7890',
    icon: <FaPhoneAlt className="text-2xl text-primary-600" />,
    link: 'tel:+11234567890'
  },
  {
    id: 2,
    title: 'Email',
    details: 'info@logojeezclone.com',
    icon: <FaEnvelope className="text-2xl text-primary-600" />,
    link: 'mailto:info@logojeezclone.com'
  },
  {
    id: 3,
    title: 'Location',
    details: '123 Design Street, Creative City, 10001, USA',
    icon: <FaMapMarkerAlt className="text-2xl text-primary-600" />,
    link: 'https://maps.google.com'
  },
  {
    id: 4,
    title: 'Working Hours',
    details: 'Monday - Friday: 9AM - 5PM EST',
    icon: <FaClock className="text-2xl text-primary-600" />,
    link: null
  }
]

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    budget: '',
    serviceType: ''
  })
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  })
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null })
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        error: null
      })
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        budget: '',
        serviceType: ''
      })
    }, 1500)
  }
  
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact <span className="text-primary-600">Us</span></h1>
            <p className="text-lg text-gray-700 mb-8">
              Have a question or ready to start your project? Get in touch with our team and we'll be happy to help.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-gray-50 p-6 rounded-lg text-center h-full flex flex-col items-center">
                  <div className="mb-4 p-3 bg-primary-50 rounded-full w-14 h-14 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  {item.link ? (
                    <a 
                      href={item.link} 
                      className="text-gray-700 hover:text-primary-600 transition-colors"
                      target={item.title === 'Location' ? '_blank' : undefined}
                      rel={item.title === 'Location' ? 'noopener noreferrer' : undefined}
                    >
                      {item.details}
                    </a>
                  ) : (
                    <p className="text-gray-700">{item.details}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Get a Free Quote</h2>
              <p className="text-gray-700 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              
              {formStatus.isSubmitted ? (
                <div className="bg-success-50 border border-success-200 rounded-lg p-6 text-success-800">
                  <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                  <p>Your message has been sent successfully. We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name*</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address*</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Your phone number"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject*</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Subject of your message"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="serviceType" className="block text-gray-700 font-medium mb-2">Service Type*</label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        <option value="logo-design">Logo Design</option>
                        <option value="brand-identity">Brand Identity</option>
                        <option value="stationery-design">Stationery Design</option>
                        <option value="packaging-design">Packaging Design</option>
                        <option value="business-cards">Business Cards</option>
                        <option value="social-media-kit">Social Media Kit</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-gray-700 font-medium mb-2">Budget Range</label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-300">Under $300</option>
                        <option value="300-500">$300 - $500</option>
                        <option value="500-1000">$500 - $1000</option>
                        <option value="above-1000">Above $1000</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message*</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Tell us about your project or inquiry"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={formStatus.isSubmitting}
                    className="btn-primary w-full md:w-auto"
                  >
                    {formStatus.isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </motion.div>
            
            {/* Map or Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-first lg:order-last"
            >
              <div className="bg-white p-4 rounded-lg shadow-custom">
                <img 
                  src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Contact Us" 
                  className="w-full h-auto rounded-lg"
                />
                <div className="mt-6 p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Professional, custom-designed logos</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Unlimited revisions on select packages</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Quick turnaround times</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>100% satisfaction guarantee</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Expert designers with years of experience</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="section-title">Questions? <span className="text-primary-600">We've Got Answers</span></h2>
            <p className="section-subtitle">
              Here are some common questions about our contact and design process.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">How quickly will you respond?</h3>
              <p className="text-gray-700">
                We typically respond to all inquiries within 24 hours during business days.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Do you work with international clients?</h3>
              <p className="text-gray-700">
                Yes! We work with clients worldwide and can communicate via email, phone, or video calls.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">What information should I provide?</h3>
              <p className="text-gray-700">
                The more details you can provide about your business, target audience, and design preferences, the better we can serve you.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">How do revisions work?</h3>
              <p className="text-gray-700">
                After initial concepts, you can request changes. The number of revisions depends on your chosen package.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage