import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaPalette, 
  FaLaptopCode, 
  FaFileAlt, 
  FaBoxOpen, 
  FaIdCard, 
  FaBullhorn,
  FaCheck
} from 'react-icons/fa'
import CtaSection from '../components/home/CtaSection'

const servicesData = [
  {
    id: 'logo-design',
    title: 'Logo Design',
    description: 'Our professional logo design service creates unique, memorable logos that perfectly represent your brand identity. We offer multiple concepts, unlimited revisions, and deliver files in all formats needed for print and digital use.',
    icon: <FaPalette className="text-4xl text-primary-600" />,
    features: [
      'Unique, custom designs',
      'Multiple concepts',
      'Unlimited revisions (on select packages)',
      'All file formats',
      'Quick turnaround',
      'Full copyright ownership'
    ],
    image: 'https://images.pexels.com/photos/5849559/pexels-photo-5849559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'brand-identity',
    title: 'Brand Identity',
    description: 'A comprehensive brand identity package includes logo design, color palette, typography, and brand guidelines. We help establish a consistent visual identity across all touchpoints to build brand recognition and trust.',
    icon: <FaLaptopCode className="text-4xl text-primary-600" />,
    features: [
      'Logo design',
      'Color palette selection',
      'Typography guidelines',
      'Brand style guide',
      'Brand voice & messaging',
      'Visual elements & patterns'
    ],
    image: 'https://images.pexels.com/photos/5849574/pexels-photo-5849574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'stationery-design',
    title: 'Stationery Design',
    description: 'Our stationery design service creates professional business cards, letterheads, envelopes, and other corporate materials that maintain brand consistency and make a lasting impression.',
    icon: <FaFileAlt className="text-4xl text-primary-600" />,
    features: [
      'Business card design',
      'Letterhead design',
      'Envelope design',
      'Compliment slips',
      'Presentation folders',
      'Print-ready files'
    ],
    image: 'https://images.pexels.com/photos/5849561/pexels-photo-5849561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'packaging-design',
    title: 'Packaging Design',
    description: 'Our packaging design service creates attractive, functional packaging that enhances product appeal, communicates brand values, and drives sales. We consider both aesthetics and practicality in our designs.',
    icon: <FaBoxOpen className="text-4xl text-primary-600" />,
    features: [
      'Custom package design',
      'Label design',
      'Structural considerations',
      'Material recommendations',
      'Print-ready files',
      'Mockups for visualization'
    ],
    image: 'https://images.pexels.com/photos/5849560/pexels-photo-5849560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'business-cards',
    title: 'Business Cards',
    description: 'Make a lasting first impression with our professional business card designs. We create unique cards that reflect your brand identity and include all necessary contact information in an organized, attractive layout.',
    icon: <FaIdCard className="text-4xl text-primary-600" />,
    features: [
      'Double-sided designs',
      'Multiple concepts',
      'High-resolution print files',
      'Standard and custom sizes',
      'Special finish options (emboss, foil, etc.)',
      'Paper stock recommendations'
    ],
    image: 'https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'social-media-kit',
    title: 'Social Media Kit',
    description: 'Our social media kit design includes profile pictures, cover images, post templates, and stories templates for all major platforms. Maintain brand consistency across your social media presence.',
    icon: <FaBullhorn className="text-4xl text-primary-600" />,
    features: [
      'Profile pictures',
      'Cover/banner images',
      'Post templates',
      'Story templates',
      'Size optimization for each platform',
      'Editable template files'
    ],
    image: 'https://images.pexels.com/photos/6177612/pexels-photo-6177612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
]

const ServicesPage = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our <span className="text-primary-600">Services</span></h1>
            <p className="text-lg text-gray-700 mb-8">
              We offer a comprehensive range of design services to help your business establish a strong visual identity and stand out from the competition.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16">
        <div className="container">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`py-16 ${index !== servicesData.length - 1 ? 'border-b border-gray-200' : ''}`}
            >
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="mb-4">{service.icon}</div>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-700 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <FaCheck className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="rounded-lg shadow-custom w-full h-auto"
                  />
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <CtaSection />
    </>
  )
}

export default ServicesPage