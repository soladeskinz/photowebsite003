import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const Gallery = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Sample wedding gallery data - replace with actual images
  const weddings = [
    {
      id: 1,
      title: 'Anna & Michael',
      location: 'Schloss Heidelberg',
      date: 'September 2024',
      coverImage: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
      images: [
        'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1616953/pexels-photo-1616953.jpeg?auto=compress&cs=tinysrgb&w=1200'
      ]
    },
    {
      id: 2,
      title: 'Sarah & David',
      location: 'Weingut Stuttgart',
      date: 'August 2024',
      coverImage: 'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=800',
      images: [
        'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1616953/pexels-photo-1616953.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1200'
      ]
    },
    {
      id: 3,
      title: 'Lisa & Thomas',
      location: 'Kloster Maulbronn',
      date: 'Juli 2024',
      coverImage: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
      images: [
        'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1616953/pexels-photo-1616953.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=1200'
      ]
    }
  ]

  const openLightbox = (wedding, imageIndex = 0) => {
    setSelectedImage(wedding)
    setCurrentIndex(imageIndex)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    setCurrentIndex(0)
  }

  const nextImage = () => {
    if (selectedImage) {
      setCurrentIndex((prev) => 
        prev === selectedImage.images.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    if (selectedImage) {
      setCurrentIndex((prev) => 
        prev === 0 ? selectedImage.images.length - 1 : prev - 1
      )
    }
  }

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div 
          ref={ref}
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Aktuelle Hochzeiten
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Entdecken Sie einige meiner neuesten Arbeiten und lassen Sie sich 
            von der Schönheit und Emotion jeder einzigartigen Hochzeit inspirieren.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {weddings.map((wedding, index) => (
            <motion.div
              key={wedding.id}
              initial={{ y: 100, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group cursor-pointer"
              onClick={() => openLightbox(wedding)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={wedding.coverImage}
                  alt={`${wedding.title} Hochzeit`}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                
                {/* Wedding Info */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-xl font-serif font-semibold mb-1 text-shadow">
                    {wedding.title}
                  </h3>
                  <p className="text-sm text-white/90 text-shadow">
                    {wedding.location} • {wedding.date}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 rounded-full p-4 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button className="btn-primary px-8 py-4 text-lg font-medium hover:scale-105 transition-transform">
            Gesamtes Portfolio ansehen
          </button>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white transition-colors"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>

              {/* Image */}
              <img
                src={selectedImage.images[currentIndex]}
                alt={`${selectedImage.title} - Bild ${currentIndex + 1}`}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />

              {/* Navigation */}
              {selectedImage.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 text-white transition-colors"
                  >
                    <ChevronLeftIcon className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 text-white transition-colors"
                  >
                    <ChevronRightIcon className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 rounded-full px-4 py-2 text-white text-sm">
                {currentIndex + 1} / {selectedImage.images.length}
              </div>

              {/* Wedding Info */}
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-serif font-semibold text-shadow">
                  {selectedImage.title}
                </h3>
                <p className="text-sm text-white/90 text-shadow">
                  {selectedImage.location} • {selectedImage.date}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery