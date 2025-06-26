import React, { useState } from 'react'
import { motion } from 'framer-motion'
import CtaSection from '../components/home/CtaSection'

const categories = [
  { id: 'all', name: 'All' },
  { id: 'modern', name: 'Modern' },
  { id: 'minimalist', name: 'Minimalist' },
  { id: 'vintage', name: 'Vintage' },
  { id: 'corporate', name: 'Corporate' },
  { id: 'creative', name: 'Creative' }
]

const portfolioItems = [
  {
    id: 1,
    title: 'Aqua Fresh',
    category: 'modern',
    client: 'Water Purification Company',
    description: 'A clean, modern logo design for a water purification company that conveys purity and freshness.',
    image: 'https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    title: 'Leaf Studio',
    category: 'minimalist',
    client: 'Environmental Design Agency',
    description: 'Minimalist logo design for an eco-friendly design studio focusing on sustainability.',
    image: 'https://images.pexels.com/photos/5849487/pexels-photo-5849487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    title: 'Vintage Cafe',
    category: 'vintage',
    client: 'Specialty Coffee Shop',
    description: 'A nostalgic, vintage-inspired logo design for a specialty coffee shop with a retro ambiance.',
    image: 'https://images.pexels.com/photos/5849505/pexels-photo-5849505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    title: 'Global Finance',
    category: 'corporate',
    client: 'Investment Firm',
    description: 'Professional corporate logo design for an international investment and financial services firm.',
    image: 'https://images.pexels.com/photos/5849491/pexels-photo-5849491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 5,
    title: 'Tech Innovate',
    category: 'modern',
    client: 'Tech Startup',
    description: 'Dynamic, modern logo design for a technology startup focusing on innovation.',
    image: 'https://images.pexels.com/photos/5849579/pexels-photo-5849579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 6,
    title: 'Pure Essence',
    category: 'minimalist',
    client: 'Organic Skincare Brand',
    description: 'Clean, minimalist logo design for a natural and organic skincare product line.',
    image: 'https://images.pexels.com/photos/5849512/pexels-photo-5849512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 7,
    title: 'Artisan Bakery',
    category: 'vintage',
    client: 'Traditional Bakery',
    description: 'Handcrafted, vintage logo design for an artisanal bakery specializing in traditional methods.',
    image: 'https://images.pexels.com/photos/5849575/pexels-photo-5849575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 8,
    title: 'Nova Financial',
    category: 'corporate',
    client: 'Financial Consultancy',
    description: 'Professional logo design for a financial consultancy firm with a modern corporate feel.',
    image: 'https://images.pexels.com/photos/5849578/pexels-photo-5849578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 9,
    title: 'Pixel Perfect',
    category: 'creative',
    client: 'Digital Art Studio',
    description: 'Creative and playful logo design for a digital art and design studio.',
    image: 'https://images.pexels.com/photos/5849566/pexels-photo-5849566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 10,
    title: 'Mountain Gear',
    category: 'modern',
    client: 'Outdoor Equipment Company',
    description: 'Bold, modern logo design for an outdoor equipment and adventure gear company.',
    image: 'https://images.pexels.com/photos/5849567/pexels-photo-5849567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 11,
    title: 'Zen Wellness',
    category: 'minimalist',
    client: 'Wellness Center',
    description: 'Serene, minimalist logo design for a holistic wellness and meditation center.',
    image: 'https://images.pexels.com/photos/5849563/pexels-photo-5849563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 12,
    title: 'Creative Minds',
    category: 'creative',
    client: 'Creative Agency',
    description: 'Vibrant and imaginative logo design for a full-service creative agency.',
    image: 'https://images.pexels.com/photos/5849565/pexels-photo-5849565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
]

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedItem, setSelectedItem] = useState(null)
  
  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory)
  
  const openDetails = (item) => {
    setSelectedItem(item)
  }
  
  const closeDetails = () => {
    setSelectedItem(null)
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our <span className="text-primary-600">Portfolio</span></h1>
            <p className="text-lg text-gray-700 mb-8">
              Explore our collection of logo designs and branding projects. Each design is custom-made to reflect our clients' unique brand identity.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section className="py-16">
        <div className="container">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => openDetails(item)}
              >
                <div className="group cursor-pointer relative overflow-hidden rounded-lg shadow-custom">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-300 capitalize">{item.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Portfolio Item Details Modal */}
          {selectedItem && (
            <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={closeDetails}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg max-w-4xl w-full overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div>
                    <img 
                      src={selectedItem.image} 
                      alt={selectedItem.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="text-2xl font-bold mb-2">{selectedItem.title}</h3>
                    <p className="text-primary-600 capitalize mb-4">{selectedItem.category}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-500">CLIENT</h4>
                      <p className="text-gray-900">{selectedItem.client}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-500">ABOUT THE PROJECT</h4>
                      <p className="text-gray-700">{selectedItem.description}</p>
                    </div>
                    
                    <button 
                      onClick={closeDetails}
                      className="btn-primary w-full"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </section>
      
      <CtaSection />
    </>
  )
}

export default PortfolioPage