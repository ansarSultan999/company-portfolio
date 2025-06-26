import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  FaPalette, 
  FaLaptopCode, 
  FaFileAlt, 
  FaBoxOpen, 
  FaIdCard, 
  FaBullhorn 
} from 'react-icons/fa'

const services = [
  {
    id: 1,
    title: 'Logo Design',
    description: 'Professional custom logo design that represents your brand identity and makes you stand out from the competition.',
    icon: <FaPalette className="text-3xl text-primary-600" />,
    link: '/services#logo-design'
  },
  {
    id: 2,
    title: 'Brand Identity',
    description: 'Complete brand identity packages including logo, color schemes, typography, and brand guidelines.',
    icon: <FaLaptopCode className="text-3xl text-primary-600" />,
    link: '/services#brand-identity'
  },
  {
    id: 3,
    title: 'Stationery Design',
    description: 'Custom stationery designs including letterheads, envelopes, and other corporate materials.',
    icon: <FaFileAlt className="text-3xl text-primary-600" />,
    link: '/services#stationery-design'
  },
  {
    id: 4,
    title: 'Packaging Design',
    description: 'Eye-catching packaging designs that enhance product appeal and boost sales.',
    icon: <FaBoxOpen className="text-3xl text-primary-600" />,
    link: '/services#packaging-design'
  },
  {
    id: 5,
    title: 'Business Cards',
    description: 'Unique business card designs that leave a lasting impression and effectively represent your brand.',
    icon: <FaIdCard className="text-3xl text-primary-600" />,
    link: '/services#business-cards'
  },
  {
    id: 6,
    title: 'Social Media Kit',
    description: 'Custom social media graphics and templates that maintain brand consistency across platforms.',
    icon: <FaBullhorn className="text-3xl text-primary-600" />,
    link: '/services#social-media-kit'
  }
]

const ServicesSection = () => {
  return (
    <section className="section-padding bg-white" id="services">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Our <span className="text-primary-600">Services</span></h2>
          <p className="section-subtitle">
            We offer a wide range of professional design services to help your business stand out from the competition.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={service.link} className="service-card block h-full">
                <div className="mb-4 p-3 bg-primary-50 rounded-full w-14 h-14 flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection