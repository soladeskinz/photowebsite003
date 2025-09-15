import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useParams, useNavigate } from 'react-router-dom'
import { 
  PhotoIcon, 
  DocumentTextIcon, 
  CalendarDaysIcon, 
  MapPinIcon,
  HeartIcon,
  ArrowDownTrayIcon,
  EyeIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline'

const ClientLogin = () => {
  const { clientId } = useParams()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('gallery')
  const [selectedImage, setSelectedImage] = useState(null)

  // Check authentication
  useEffect(() => {
    const auth = localStorage.getItem('clientAuth')
    if (!auth) {
      navigate('/client-zone')
      return
    }

    const authData = JSON.parse(auth)
    if (!authData.authenticated || authData.clientId !== clientId) {
      navigate('/client-zone')
      return
    }
  }, [clientId, navigate])

  // Demo client data
  const clientData = {
    'anna-michael-2024': {
      name: 'Anna & Michael',
      weddingDate: '15. September 2024',
      location: 'Schloss Heidelberg',
      ceremony: '14:30 Uhr',
      reception: '18:00 Uhr',
      guests: 85,
      photographer: 'Chris Mario Ciobanu',
      package: 'Standard Paket',
      status: 'Bilder verfügbar',
      gallery: [
        'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1616953/pexels-photo-1616953.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3014019/pexels-photo-3014019.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1024994/pexels-photo-1024994.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      contract: `
HOCHZEITSFOTOGRAFIE-VERTRAG

Zwischen:
Chris Mario Ciobanu (Fotograf)
Musterstraße 123
70000 Stuttgart

und

Anna Schmidt & Michael Weber (Auftraggeber)
Beispielweg 456
69000 Heidelberg

LEISTUNGSUMFANG:
- Ganztägige Hochzeitsfotografie (12 Stunden)
- Brautpaar-Shooting
- Hochzeitsreportage
- 500+ bearbeitete Bilder in hoher Auflösung
- Online-Galerie für Gäste
- Druck-Release
- USB-Stick + edles Fotoalbum (30x30cm)

TERMIN: 15. September 2024
ORT: Schloss Heidelberg

HONORAR: €1.800,00 (inkl. MwSt.)
ANZAHLUNG: €540,00 (bei Vertragsabschluss)
RESTZAHLUNG: €1.260,00 (am Hochzeitstag)

Die Bilder werden 4-6 Wochen nach der Hochzeit zur Verfügung gestellt.

Stuttgart, 10.06.2024

_________________          _________________
Chris Mario Ciobanu       Anna Schmidt & Michael Weber
      `
    }
  }

  const client = clientData[clientId]

  if (!client) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Client nicht gefunden</h1>
          <button 
            onClick={() => navigate('/client-zone')}
            className="btn-primary"
          >
            Zurück zur Anmeldung
          </button>
        </div>
      </div>
    )
  }

  const logout = () => {
    localStorage.removeItem('clientAuth')
    navigate('/client-zone')
  }

  const downloadAllImages = () => {
    // In a real application, this would create a ZIP file
    alert('Download wird vorbereitet... Sie erhalten eine E-Mail mit dem Download-Link.')
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <button
                onClick={() => navigate('/')}
                className="mr-4 p-2 text-gray-500 hover:text-gray-700 transition-colors"
              >
                <ArrowLeftIcon className="w-5 h-5" />
              </button>
              <div>
                <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">
                  Willkommen, {client.name}!
                </h1>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <CalendarDaysIcon className="w-4 h-4 mr-2" />
                    {client.weddingDate}
                  </div>
                  <div className="flex items-center">
                    <MapPinIcon className="w-4 h-4 mr-2" />
                    {client.location}
                  </div>
                  <div className="flex items-center">
                    <HeartIcon className="w-4 h-4 mr-2 text-red-500" />
                    {client.status}
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={logout}
              className="btn-secondary text-sm"
            >
              Abmelden
            </button>
          </div>
        </motion.div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-white rounded-xl shadow-lg p-2 mb-8">
          {[
            { id: 'gallery', name: 'Bildergalerie', icon: PhotoIcon },
            { id: 'details', name: 'Hochzeitsdetails', icon: CalendarDaysIcon },
            { id: 'contract', name: 'Vertrag', icon: DocumentTextIcon }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'gallery' && (
            <motion.div
              key="gallery"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Gallery Header */}
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div>
                    <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">
                      Ihre Hochzeitsbilder
                    </h2>
                    <p className="text-gray-600">
                      {client.gallery.length} Bilder verfügbar • Hochauflösende Versionen
                    </p>
                  </div>
                  <button
                    onClick={downloadAllImages}
                    className="btn-primary flex items-center space-x-2 mt-4 md:mt-0"
                  >
                    <ArrowDownTrayIcon className="w-5 h-5" />
                    <span>Alle herunterladen</span>
                  </button>
                </div>
              </div>

              {/* Gallery Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {client.gallery.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="relative group cursor-pointer aspect-square"
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image}
                      alt={`Hochzeitsbild ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg flex items-center justify-center">
                      <EyeIcon className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'details' && (
            <motion.div
              key="details"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">
                Hochzeitsdetails
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Brautpaar</h3>
                    <p className="text-gray-600">{client.name}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Hochzeitsdatum</h3>
                    <p className="text-gray-600">{client.weddingDate}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
                    <p className="text-gray-600">{client.location}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Anzahl Gäste</h3>
                    <p className="text-gray-600">{client.guests} Personen</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Trauung</h3>
                    <p className="text-gray-600">{client.ceremony}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Feier</h3>
                    <p className="text-gray-600">{client.reception}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Fotograf</h3>
                    <p className="text-gray-600">{client.photographer}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Gebuchtes Paket</h3>
                    <p className="text-gray-600">{client.package}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'contract' && (
            <motion.div
              key="contract"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-serif font-bold text-gray-900">
                  Ihr Vertrag
                </h2>
                <button className="btn-secondary flex items-center space-x-2">
                  <ArrowDownTrayIcon className="w-5 h-5" />
                  <span>PDF herunterladen</span>
                </button>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 font-mono text-sm leading-relaxed whitespace-pre-line">
                {client.contract}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Image Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.img
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                src={selectedImage}
                alt="Hochzeitsbild"
                className="max-w-full max-h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default ClientLogin