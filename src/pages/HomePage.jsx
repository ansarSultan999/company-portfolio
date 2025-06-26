import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaCheck, FaArrowRight } from 'react-icons/fa'
import HeroSection from '../components/home/HeroSection'
import ServicesSection from '../components/home/ServicesSection'
import ProcessSection from '../components/home/ProcessSection'
import PortfolioSection from '../components/home/PortfolioSection'
import TestimonialsSection from '../components/home/TestimonialsSection'
import StatsSection from '../components/home/StatsSection'
import PricingSection from '../components/home/PricingSection'
import CtaSection from '../components/home/CtaSection'
import FaqSection from '../components/home/FaqSection'

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <TestimonialsSection />
      <StatsSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
    </>
  )
}

export default HomePage