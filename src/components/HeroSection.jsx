import React, { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const HeroSection = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, 300])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  const scrollToNext = () => {
    const nextSection = document.getElementById('ueber-mich')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1920"
        >
          {/* Pexels wedding video - replace with actual Pexels video URL */}
          <source
            src="https://player.vimeo.com/external/291648067.hd.mp4?s=94998971682c6a3c6538e1e1c36d7a336f4a0c8a&profile_id=175"
            type="video/mp4"
          />
          {/* Fallback for browsers that don't support video */}
        </video>
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 flex items-center justify-center h-full text-white text-center"
      >
        <div className="container-custom">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-shadow-lg"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Chris Mario Ciobanu
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-4 font-light text-shadow"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Hochzeitsfotografie
            </motion.p>
            
            <motion.p 
              className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto text-shadow"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              Ich halte die schönsten und emotionalsten Momente Ihres besonderen 
              Tages fest. Authentisch, zeitlos und voller Liebe.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <button className="btn-primary px-8 py-4 text-lg font-medium hover:scale-105 transition-transform">
                Portfolio ansehen
              </button>
              <button className="btn-secondary bg-white/10 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-medium hover:scale-105 transition-all">
                Jetzt anfragen
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        style={{ opacity }}
        onClick={scrollToNext}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5, repeat: Infinity, repeatType: 'reverse', repeatDelay: 1 }}
      >
        <ChevronDownIcon className="w-8 h-8 text-white animate-bounce" />
      </motion.div>
    </section>
  )
}

export default HeroSection