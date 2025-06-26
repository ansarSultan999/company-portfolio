import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowRight, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa'
<link rel="stylesheet" href="./styles.css" /> 
// Slides data
const slides = [
  {
    banner: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    heading: ["Professional ", "Logo Design", " That Makes an Impact"],
    description: "Stand out from the competition with custom logo designs that perfectly represent your brand's values and vision. Our expert designers create logos that leave a lasting impression.",
    heroImg: "https://images.pexels.com/photos/5849559/pexels-photo-5849559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    textVariant: {
      hidden: { opacity: 0, x: -60 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
      exit: { opacity: 0, x: 60, transition: { duration: 0.5 } }
    },
    imgVariant: {
      hidden: { opacity: 0, scale: 0.8, rotate: -8 },
      visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.8, ease: "easeOut" } },
      exit: { opacity: 0, scale: 0.8, rotate: 8, transition: { duration: 0.5 } }
    }
  },
  {
    banner: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80",
    heading: ["Creative ", "Brand Identity", " For Your Business"],
    description: "We craft unique brand identities that connect with your audience and set you apart. Let us help you build a memorable brand.",
    heroImg: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&fit=crop&w=800&q=80",
    textVariant: {
      hidden: { opacity: 0, y: 60 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
      exit: { opacity: 0, y: -60, transition: { duration: 0.5 } }
    },
    imgVariant: {
      hidden: { opacity: 0, scale: 0.8, y: 40 },
      visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
      exit: { opacity: 0, scale: 0.8, y: -40, transition: { duration: 0.5 } }
    }
  },
  {
    banner: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80",
    heading: ["Modern ", "Web Graphics", " That Inspire"],
    description: "Elevate your online presence with stunning web graphics and visuals. Our team delivers modern designs tailored to your needs.",
    heroImg: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&fit=crop&w=800&q=80",
    textVariant: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
      exit: { opacity: 0, scale: 0.8, transition: { duration: 0.5 } }
    },
    imgVariant: {
      hidden: { opacity: 0, x: 60, scale: 0.8 },
      visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
      exit: { opacity: 0, x: -60, scale: 0.8, transition: { duration: 0.5 } }
    }
  }
]

// Floating animation for hero image
const floatVariants = {
  animate: {
    y: [0, -16, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

// OfferBanner with modal details (styled like logodesignpros.com)
const OfferBanner = ({ onOpen }) => (
  <div className="w-full flex justify-center">
    <motion.div
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full flex justify-center"
      style={{ position: "relative", zIndex: 40 }}
    >
      <div
        className="flex items-center justify-center w-full max-w-4xl bg-[#f7f7f7] border border-primary-600 rounded-b-2xl shadow-lg px-6 py-2 md:py-3 gap-4 mt-0"
        style={{ marginTop: "64px" }}
      >
        <span className="uppercase tracking-widest font-bold text-primary-600 text-base md:text-lg">
          Season Offer!
        </span>
        <span className="text-gray-800 font-semibold text-base md:text-lg">
          Get up to <span className="text-accent-500 font-extrabold">50% OFF</span> on all logo & branding packages
        </span>
        <button
          onClick={onOpen}
          className="ml-2 md:ml-6 bg-gradient-to-r from-yellow-400 via-green-500 to-green-600 text-white font-bold px-6 py-2 rounded-full shadow hover:scale-105 transition-all duration-200 text-base md:text-lg border-2 border-primary-600"
        >
          Click Here
        </button>
      </div>
    </motion.div>
  </div>
);

// OfferModal for details and close
const OfferModal = ({ open, onClose }) => (
  <AnimatePresence>
    {open && (
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full h-full bg-black/40 z-50 flex items-start justify-center pt-24 px-2"
        style={{ backdropFilter: "blur(2px)" }}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white max-w-lg w-full rounded-2xl shadow-2xl p-8 relative"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-primary-600 text-xl"
            aria-label="Close"
          >
            <FaTimes />
          </button>
          <div className="flex flex-col items-center text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary-600 mb-2">Season Offer - 50% OFF</div>
            <div className="text-lg text-gray-700 mb-4">
              Get up to <span className="text-accent-500 font-bold">50% discount</span> on all logo & branding packages. Limited time only!
            </div>
            <ul className="text-left text-gray-600 mb-6 space-y-2">
              <li>✔️ Custom Logo Design</li>
              <li>✔️ Brand Identity Kit</li>
              <li>✔️ Unlimited Revisions</li>
              <li>✔️ Fast Turnaround</li>
              <li>✔️ 100% Satisfaction Guarantee</li>
            </ul>
            <Link
              to="/contact"
              className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-3 rounded-full shadow transition-all duration-200 mb-2"
              onClick={onClose}
            >
              Get My Offer Now
            </Link>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

// Add Award component here
const Award = () => (
  <section className="awards">
    <h2>Our Awards</h2>
    <div className="awards-list">
      <div className="award-item">
        <img src="images/award1.png" alt="Award 1" />
        <p>Best Logo Design 2022</p>
      </div>
      <div className="award-item">
        <img src="images/award2.png" alt="Award 2" />
        <p>Top Creative Agency</p>
      </div>
      <div className="award-item">
        <img src="images/award3.png" alt="Award 3" />
        <p>Customer Choice Award</p>
      </div>
    </div>
  </section>
);

const HeroSection = () => {
  const [slide, setSlide] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setTimeout(() => setSlide((s) => (s + 1) % slides.length), 6000);
    return () => clearTimeout(timer);
  }, [slide]);

  // For typing animation loop key
  const [typingKey, setTypingKey] = useState(0);
  useEffect(() => {
    setTypingKey(slide); // restart typing animation on slide change
  }, [slide]);

  const prevSlide = () => setSlide((slide - 1 + slides.length) % slides.length);
  const nextSlide = () => setSlide((slide + 1) % slides.length);

  const current = slides[slide];
  const [offerOpen, setOfferOpen] = useState(false);

  return (
    <>
      {/* Offer banner just below navbar */}
      <div className="relative z-40">
        <OfferBanner onOpen={() => setOfferOpen(true)} />
      </div>
      <OfferModal open={offerOpen} onClose={() => setOfferOpen(false)} />
      <section className="pt-40 pb-32 md:pt-56 md:pb-44 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        {/* Banner Background with light black shadow */}
        <div className="absolute inset-0 z-0 h-full w-full">
          <AnimatePresence mode="wait">
            <motion.img
              key={current.banner}
              src={current.banner}
              alt="Creative Banner"
              className="w-full h-full object-cover object-center absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              style={{ zIndex: 0 }}
            />
          </AnimatePresence>
          {/* White overlay with less opacity */}
          <div className="absolute inset-0 w-full h-full bg-white" style={{ opacity: 0.58 }}></div>
          {/* Existing gradient overlay, more subtle */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-white/20 to-blue-100/10"></div>
        </div>
        <div className="container relative z-10">
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Arrow - more left, not close to content */}
            <button
              onClick={prevSlide}
              className="hidden lg:flex items-center justify-center absolute -left-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 hover:bg-primary-600 hover:text-white text-primary-600 shadow transition-all duration-200 z-20"
              aria-label="Previous Slide"
              style={{ fontSize: 22 }}
            >
              <FaChevronLeft />
            </button>
            {/* Hero Content */}
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide + "-text"}
                  variants={current.textVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {/* Typing animation for heading, looped with key */}
                  <motion.h1
                    key={typingKey}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 flex flex-wrap"
                    aria-label={current.heading.join("")}
                  >
                    {/* Before highlight */}
                    {current.heading[0].split("").map((char, idx) => (
                      <motion.span
                        key={"b"+idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.04, duration: 0.03 }}
                      >{char}</motion.span>
                    ))}
                    {/* Highlighted part */}
                    <span className="text-primary-600 flex">
                      {current.heading[1].split("").map((char, idx) => (
                        <motion.span
                          key={"h"+idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: (current.heading[0].length + idx) * 0.04, duration: 0.03 }}
                        >{char}</motion.span>
                      ))}
                    </span>
                    {/* After highlight */}
                    {current.heading[2].split("").map((char, idx) => (
                      <motion.span
                        key={"a"+idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: (current.heading[0].length + current.heading[1].length + idx) * 0.04, duration: 0.03 }}
                      >{char}</motion.span>
                    ))}
                  </motion.h1>
                  <motion.p
                    className="text-lg text-gray-700 mb-8 leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.7, ease: "easeOut" }}
                  >
                    {current.description}
                  </motion.p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/contact" className="btn-primary flex items-center justify-center gap-2">
                      Get Started <FaArrowRight className="text-sm" />
                    </Link>
                    <Link to="/portfolio" className="btn-secondary">
                      View Our Work
                    </Link>
                  </div>
                  <div className="mt-10 flex flex-col sm:flex-row items-center gap-6">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((index) => (
                        <img
                          key={index}
                          src={`https://randomuser.me/api/portraits/men/${index + 20}.jpg`}
                          alt="Client"
                          className="w-10 h-10 rounded-full border-2 border-white"
                        />
                      ))}
                      <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center text-xs font-medium border-2 border-white">
                        +50
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center mb-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            className="w-5 h-5 text-yellow-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-sm text-gray-600">Trusted by 500+ clients worldwide</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Hero Image with floating, scroll, hover, and slide animation */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide + "-img"}
                  variants={current.imgVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="relative"
                >
                  <motion.div
                    variants={floatVariants}
                    animate="animate"
                    whileHover={{
                      scale: 1.07,
                      boxShadow: "0 8px 32px 0 rgba(14,165,233,0.25), 0 1.5px 10px 0 rgba(139,92,246,0.18)",
                      rotate: [0, 2, -2, 0], // Add a gentle wiggle effect on hover
                      transition: { type: "spring", stiffness: 300, damping: 20, rotate: { duration: 0.6, repeat: Infinity, repeatType: "reverse" } }
                    }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-white rounded-lg shadow-xl p-4 md:p-6 relative z-10 cursor-pointer"
                  >
                    <motion.img
                      src={current.heroImg}
                      alt="Hero Visual"
                      className="w-full rounded-lg"
                      initial={{ scale: 0.95, opacity: 0, y: 30 }}
                      animate={{ scale: 1, opacity: 1, y: 0, filter: "drop-shadow(0 8px 32px rgba(14,165,233,0.10))" }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      whileHover={{
                        filter: "drop-shadow(0 16px 48px rgba(139,92,246,0.18))"
                      }}
                    />
                    <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-4 rounded-lg shadow-lg">
                      <p className="text-lg font-bold">100% Satisfaction</p>
                      <p className="text-sm">Unlimited Revisions</p>
                    </div>
                  </motion.div>
                  {/* Floating Elements */}
                  <div className="absolute -top-8 -left-8 bg-accent-500 w-16 h-16 rounded-full opacity-20"></div>
                  <div className="absolute -bottom-10 left-20 bg-secondary-500 w-20 h-20 rounded-full opacity-20"></div>
                </motion.div>
              </AnimatePresence>
            </div>
            {/* Right Arrow - more right, not close to image */}
            <button
              onClick={nextSlide}
              className="hidden lg:flex items-center justify-center absolute -right-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 hover:bg-primary-600 hover:text-white text-primary-600 shadow transition-all duration-200 z-20"
              aria-label="Next Slide"
              style={{ fontSize: 22 }}
            >
              <FaChevronRight />
            </button>
          </div>
          {/* Removed slider dots */}
        </div>
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-secondary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>
      </section>
      {/* Award section just below the banner */}
      <Award />
    </>
  )
}

export default HeroSection