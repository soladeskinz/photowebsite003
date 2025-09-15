import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const AboutSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  return (
    <section id="ueber-mich" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ y: 100, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <motion.h2 
              className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6"
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Über mich
            </motion.h2>
            
            <motion.div 
              className="space-y-6 text-gray-700 text-lg leading-relaxed"
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p>
                Hallo! Ich bin Chris Mario Ciobanu, ein leidenschaftlicher 
                Hochzeitsfotograf aus Baden-Württemberg. Seit über 8 Jahren 
                begleite ich Paare an ihrem schönsten Tag und halte die 
                wertvollsten Momente für die Ewigkeit fest.
              </p>
              
              <p>
                Meine Fotografie zeichnet sich durch einen natürlichen, 
                emotionalen Stil aus. Ich glaube daran, dass die schönsten 
                Bilder entstehen, wenn Menschen sie selbst sein können. 
                Daher arbeite ich diskret und unaufdringlich, um authentische 
                Emotionen einzufangen.
              </p>
              
              <p>
                Jede Hochzeit ist einzigartig, und genau so behandle ich sie auch. 
                Von der ersten Beratung bis zur Übergabe Ihrer fertigen Bilder 
                begleite ich Sie mit Professionalität, Kreativität und viel Herz.
              </p>
            </motion.div>

            <motion.div 
              className="mt-8 grid grid-cols-2 gap-6"
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 font-serif">150+</div>
                <div className="text-gray-600">Hochzeiten</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 font-serif">8+</div>
                <div className="text-gray-600">Jahre Erfahrung</div>
              </div>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ x: 100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3014019/pexels-photo-3014019.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Chris Mario Ciobanu - Hochzeitsfotograf"
                className="w-full h-[600px] object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection