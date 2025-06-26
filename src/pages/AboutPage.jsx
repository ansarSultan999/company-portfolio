import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import CtaSection from '../components/home/CtaSection'

const coreValues = [
  {
    title: 'Creativity',
    description: 'We approach each project with fresh perspectives and innovative thinking to create unique designs.',
    icon: '🎨'
  },
  {
    title: 'Excellence',
    description: 'We strive for excellence in every aspect of our work, from concept to final delivery.',
    icon: '🏆'
  },
  {
    title: 'Client Focus',
    description: 'Your satisfaction is our priority. We listen carefully to understand your needs and vision.',
    icon: '👥'
  },
  {
    title: 'Integrity',
    description: 'We operate with honesty, transparency, and ethical practices in all our business dealings.',
    icon: '🤝'
  }
]

const teamMembers = [
  {
    name: 'Alex Johnson',
    position: 'Founder & Creative Director',
    bio: 'With over 15 years of experience in branding and design, Alex founded LogoJeez with a vision to provide businesses with high-quality, custom logo designs that truly represent their brand identity.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    name: 'Sarah Williams',
    position: 'Senior Designer',
    bio: 'Sarah brings 10+ years of experience in graphic design and branding. Her designs have won multiple industry awards and she specializes in creating memorable, impactful logo designs.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    name: 'Michael Chen',
    position: 'Brand Strategist',
    bio: 'Michael helps clients define their brand strategy before the design process begins. His background in marketing and consumer psychology ensures logos that resonate with target audiences.',
    image: 'https://randomuser.me/api/portraits/men/65.jpg'
  },
  {
    name: 'Emily Rodriguez',
    position: 'Design Specialist',
    bio: 'Emily specializes in typography and color theory. Her attention to detail and creative approach result in logos that are not only beautiful but also functional across different applications.',
    image: 'https://randomuser.me/api/portraits/women/28.jpg'
  }
]

const AboutPage = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About <span className="text-primary-600">Us</span></h1>
            <p className="text-lg text-gray-700 mb-8">
              We are a team of passionate designers dedicated to creating memorable logo designs 
              that help businesses establish a strong brand identity.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-6">
                Founded in 2010, LogoJeez began with a simple mission: to provide businesses of all sizes with 
                professional logo designs that capture their unique identity and help them stand out in competitive markets.
              </p>
              <p className="text-gray-700 mb-6">
                What started as a small design studio has grown into a team of dedicated designers, brand strategists, and 
                customer service professionals working together to deliver exceptional logo design services to clients worldwide.
              </p>
              <p className="text-gray-700 mb-6">
                Over the years, we've worked with hundreds of businesses across various industries, from startups to established 
                brands, helping them create visual identities that resonate with their target audiences and support their business goals.
              </p>
              <p className="text-gray-700">
                Our commitment to quality, creativity, and client satisfaction remains at the heart of everything we do.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Our Team" 
                  className="rounded-lg shadow-custom w-full"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-6">
                  <p className="text-lg font-semibold">Over 10 years of design excellence</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Core Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="section-title">Our <span className="text-primary-600">Core Values</span></h2>
            <p className="section-subtitle">
              These principles guide our work and ensure we deliver the best possible service to our clients.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white p-6 rounded-lg shadow-custom h-full">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Process Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="section-title">Our <span className="text-primary-600">Design Process</span></h2>
            <p className="section-subtitle">
              We follow a structured approach to ensure every project delivers results that exceed expectations.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-last md:order-first"
            >
              <img 
                src="https://images.pexels.com/photos/7693242/pexels-photo-7693242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Design Process" 
                className="rounded-lg shadow-custom w-full"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6">
                <div>
                  <div className="flex items-center mb-2">
                    <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</div>
                    <h3 className="text-xl font-semibold">Discovery</h3>
                  </div>
                  <p className="text-gray-700 pl-11">
                    We begin by understanding your business, target audience, and design preferences through a detailed questionnaire.
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center mb-2">
                    <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</div>
                    <h3 className="text-xl font-semibold">Research & Conceptualization</h3>
                  </div>
                  <p className="text-gray-700 pl-11">
                    Our designers research your industry and competitors, then create multiple unique concepts based on your requirements.
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center mb-2">
                    <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</div>
                    <h3 className="text-xl font-semibold">Refinement</h3>
                  </div>
                  <p className="text-gray-700 pl-11">
                    Based on your feedback, we refine your preferred concept with revisions until you are completely satisfied.
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center mb-2">
                    <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</div>
                    <h3 className="text-xl font-semibold">Finalization & Delivery</h3>
                  </div>
                  <p className="text-gray-700 pl-11">
                    Once approved, we finalize your design and deliver all the file formats you need for any application.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Meet the Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="section-title">Meet Our <span className="text-primary-600">Team</span></h2>
            <p className="section-subtitle">
              The talented individuals behind our exceptional logo designs.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-lg shadow-custom overflow-hidden h-full">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover object-center"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary-600 mb-4">{member.position}</p>
                    <p className="text-gray-700">{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
              <p className="text-gray-700 mb-8">
                We combine creativity, technical expertise, and a client-focused approach to deliver exceptional logo designs 
                that help businesses establish a strong brand identity and stand out from the competition.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaCheck className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Experienced Design Team</h3>
                    <p className="text-gray-700">Our designers have years of experience creating logos for various industries.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaCheck className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Custom Designs</h3>
                    <p className="text-gray-700">Every logo is custom-designed to reflect your unique brand identity.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaCheck className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Unlimited Revisions</h3>
                    <p className="text-gray-700">We offer unlimited revisions on select packages to ensure your complete satisfaction.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaCheck className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Quick Turnaround</h3>
                    <p className="text-gray-700">Receive your initial concepts within days, not weeks.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaCheck className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Excellent Support</h3>
                    <p className="text-gray-700">Our team is always available to answer questions and provide assistance.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.pexels.com/photos/5849578/pexels-photo-5849578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Logo Design Example" 
                  className="rounded-lg shadow-custom w-full h-40 object-cover"
                />
                <img 
                  src="https://images.pexels.com/photos/5849567/pexels-photo-5849567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Logo Design Example" 
                  className="rounded-lg shadow-custom w-full h-40 object-cover"
                />
                <img 
                  src="https://images.pexels.com/photos/5849487/pexels-photo-5849487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Logo Design Example" 
                  className="rounded-lg shadow-custom w-full h-40 object-cover"
                />
                <img 
                  src="https://images.pexels.com/photos/5849505/pexels-photo-5849505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Logo Design Example" 
                  className="rounded-lg shadow-custom w-full h-40 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <CtaSection />
    </>
  )
}

export default AboutPage