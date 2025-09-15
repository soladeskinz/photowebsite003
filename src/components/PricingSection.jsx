import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckIcon } from '@heroicons/react/24/solid'

const PricingSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const [activeTab, setActiveTab] = useState('photo') // 'photo' or 'photo-video'

  const packages = {
    photo: {
      basic: {
        name: 'Basis Paket',
        price: '1.200',
        description: 'Perfekt für intime Hochzeiten',
        features: [
          'Bis zu 6 Stunden Fotografie',
          'Hochzeitsreportage',
          '300+ bearbeitete Bilder',
          'Online-Galerie',
          'Druck-Release',
          'USB-Stick mit allen Bildern'
        ],
        popular: false
      },
      standard: {
        name: 'Standard Paket',
        price: '1.800',
        description: 'Unser beliebtestes Paket',
        features: [
          'Ganztägige Fotografie (12h)',
          'Brautpaar-Shooting',
          'Hochzeitsreportage',
          '500+ bearbeitete Bilder',
          'Online-Galerie für Gäste',
          'Druck-Release',
          'USB-Stick + edles Fotoalbum (30x30cm)'
        ],
        popular: true
      },
      premium: {
        name: 'Premium Paket',
        price: '2.500',
        description: 'Das Rundum-sorglos-Paket',
        features: [
          'Ganztägige Fotografie + Second Shooter',
          'Verlobungs-Shooting inklusive',
          'Brautpaar-Shooting',
          'Hochzeitsreportage',
          '800+ bearbeitete Bilder',
          'Online-Galerie für Gäste',
          'Druck-Release',
          'USB-Stick + Premium Fotoalbum (40x30cm)',
          'Eltern-Alben (20x20cm) - 2 Stück'
        ],
        popular: false
      }
    },
    'photo-video': {
      basic: {
        name: 'Foto + Video Basis',
        price: '2.200',
        description: 'Foto und Video für Ihren Tag',
        features: [
          'Bis zu 6 Stunden Foto + Video',
          'Hochzeitsreportage',
          '300+ bearbeitete Bilder',
          'Highlight-Video (3-5 Min.)',
          'Online-Galerie',
          'Druck-Release',
          'USB-Stick mit Bildern und Videos'
        ],
        popular: false
      },
      standard: {
        name: 'Foto + Video Standard',
        price: '3.200',
        description: 'Komplette Dokumentation',
        features: [
          'Ganztägige Foto + Video (12h)',
          'Brautpaar-Shooting',
          'Hochzeitsreportage',
          '500+ bearbeitete Bilder',
          'Highlight-Video (5-8 Min.)',
          'Zeremonie-Video (komplett)',
          'Online-Galerie für Gäste',
          'USB-Stick + Fotoalbum (30x30cm)'
        ],
        popular: true
      },
      premium: {
        name: 'Foto + Video Premium',
        price: '4.500',
        description: 'Die Vollausstattung',
        features: [
          'Ganztägige Foto + Video + Second Shooter',
          'Verlobungs-Shooting mit Video',
          'Brautpaar-Shooting',
          'Hochzeitsreportage',
          '800+ bearbeitete Bilder',
          'Cinematic Hochzeitsfilm (15-20 Min.)',
          'Highlight-Video (5-8 Min.)',
          'Zeremonie + Reden (komplett)',
          'Online-Galerie für Gäste',
          'USB-Stick + Premium Album + Eltern-Alben'
        ],
        popular: false
      }
    }
  }

  const currentPackages = packages[activeTab]

  return (
    <section id="preise" className="section-padding bg-gray-50">
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
            Pakete & Preise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Wählen Sie das passende Paket für Ihren besonderen Tag. Alle Preise 
            verstehen sich inklusive Mehrwertsteuer und Anfahrt in Baden-Württemberg.
          </p>

          {/* Toggle */}
          <div className="inline-flex bg-white rounded-full p-1 shadow-lg">
            <button
              onClick={() => setActiveTab('photo')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'photo'
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              Nur Fotografie
            </button>
            <button
              onClick={() => setActiveTab('photo-video')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'photo-video'
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              Fotografie + Video
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {Object.entries(currentPackages).map(([key, pkg], index) => (
            <motion.div
              key={`${activeTab}-${key}`}
              initial={{ y: 100, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${
                pkg.popular ? 'ring-2 ring-primary-600 scale-105' : ''
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white px-4 py-2 rounded-b-lg font-medium text-sm">
                  Beliebtestes Paket
                </div>
              )}

              <div className="p-8">
                {/* Package Header */}
                <div className="text-center mb-8">
                  <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {pkg.description}
                  </p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold font-serif text-gray-900">
                      €{pkg.price}
                    </span>
                    <span className="text-gray-600 ml-2">inkl. MwSt.</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckIcon className="w-5 h-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button 
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                    pkg.popular
                      ? 'bg-primary-600 text-white hover:bg-primary-700 hover:scale-105'
                      : 'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white'
                  }`}
                >
                  Jetzt anfragen
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4">
              Zusätzliche Informationen
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600">
              <div>
                <p className="mb-2"><strong>Anfahrt:</strong> Kostenlos in Baden-Württemberg</p>
                <p className="mb-2"><strong>Bearbeitungszeit:</strong> 4-6 Wochen</p>
                <p className="mb-2"><strong>Anzahlung:</strong> 30% bei Buchung</p>
              </div>
              <div>
                <p className="mb-2"><strong>Zusätzliche Stunden:</strong> €150/Stunde</p>
                <p className="mb-2"><strong>Extra Alben:</strong> Ab €120</p>
                <p className="mb-2"><strong>Individuelle Pakete:</strong> Gerne möglich</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PricingSection