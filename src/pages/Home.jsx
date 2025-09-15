import React, { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import HeroSection from '../components/HeroSection'
import Gallery from '../components/Gallery'
import PricingSection from '../components/PricingSection'
import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'

const Home = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, -200])

  return (
    <div className="relative">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Gallery Section */}
      <Gallery />

      {/* Pricing Section */}
      <PricingSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}

export default Home