import React from 'react'
import Slider from 'react-slick'
import { motion } from 'framer-motion'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'CEO, TechStart',
    content: 'Working with the LogoJeez team was an absolute pleasure. They captured our vision perfectly and delivered a logo that truly represents our brand values. The entire process was smooth and professional.',
    avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'Founder, GreenLeaf',
    content: 'The designers at LogoJeez exceeded our expectations. They took the time to understand our brand and created a logo that has received countless compliments. Their attention to detail is remarkable.',
    avatar: 'https://randomuser.me/api/portraits/men/44.jpg',
    rating: 5
  },
  {
    id: 3,
    name: 'Emma Williams',
    position: 'Marketing Director, Bluewave',
    content: 'I was impressed by the variety of concepts presented to us. The team was responsive to our feedback and made revisions promptly. Our new logo has significantly improved our brand recognition.',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    rating: 4
  },
  {
    id: 4,
    name: 'David Rodriguez',
    position: 'Owner, Café Bella',
    content: 'As a small business owner, I was looking for a logo that would help me stand out. LogoJeez delivered exactly what I needed. Their pricing was fair and the quality was exceptional.',
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    rating: 5
  }
]

const TestimonialsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, index) => (
      <svg 
        key={index} 
        className={`w-5 h-5 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`} 
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }
  
  return (
    <section className="section-padding bg-gray-50" id="testimonials">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">What Our <span className="text-primary-600">Clients Say</span></h2>
          <p className="section-subtitle">
            Don't just take our word for it - hear from some of our satisfied clients about their experience working with us.
          </p>
        </motion.div>
        
        <div className="mt-12">
          <Slider {...settings}>
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="px-4">
                <div className="testimonial-card h-full">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-16 h-16 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                      <p className="text-gray-600">{testimonial.position}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-gray-700">{testimonial.content}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection