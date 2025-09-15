import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useForm } from 'react-hook-form'
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  CalendarDaysIcon 
} from '@heroicons/react/24/outline'

const ContactSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const onSubmit = async (data) => {
    // In a real application, you would send this to your backend
    console.log('Form data:', data)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
      reset()
      setTimeout(() => setIsSubmitted(false), 5000)
    }, 1000)
  }

  return (
    <section id="kontakt" className="section-padding">
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
            Kontakt aufnehmen
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lassen Sie uns über Ihren besonderen Tag sprechen. Ich freue mich 
            darauf, Sie kennenzulernen und Ihre Hochzeit zu etwas Unvergesslichem zu machen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-serif font-semibold text-gray-900 mb-6">
                Kontaktinformationen
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <MapPinIcon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Standort</h4>
                    <p className="text-gray-600">Baden-Württemberg, Deutschland</p>
                    <p className="text-sm text-gray-500">Anfahrt kostenlos in ganz BW</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <PhoneIcon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Telefon</h4>
                    <p className="text-gray-600">+49 (0) 123 456 7890</p>
                    <p className="text-sm text-gray-500">Mo-Fr 9:00-18:00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <EnvelopeIcon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">E-Mail</h4>
                    <p className="text-gray-600">info@chrismario-foto.de</p>
                    <p className="text-sm text-gray-500">Antwort innerhalb von 24h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <CalendarDaysIcon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Verfügbarkeit</h4>
                    <p className="text-gray-600">2025 & 2026 buchbar</p>
                    <p className="text-sm text-gray-500">Frühzeitige Buchung empfohlen</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Warum Chris Mario wählen?</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Über 150 erfolgreich dokumentierte Hochzeiten</li>
                <li>✓ Kostenlose Verlobungsshootings bei Premium-Paketen</li>
                <li>✓ Flexible Zahlungsbedingungen</li>
                <li>✓ Versicherungsschutz und Backup-Equipment</li>
                <li>✓ Persönliches Kennenlerngespräch vor der Buchung</li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-serif font-semibold text-gray-900 mb-6">
                Unverbindliche Anfrage
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-8"
                >
                  <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Nachricht gesendet!</h4>
                  <p className="text-gray-600">Vielen Dank für Ihre Anfrage. Ich melde mich innerhalb von 24 Stunden bei Ihnen.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Vorname *
                      </label>
                      <input
                        type="text"
                        {...register('firstName', { required: 'Vorname ist erforderlich' })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-colors"
                        placeholder="Ihr Vorname"
                      />
                      {errors.firstName && (
                        <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nachname *
                      </label>
                      <input
                        type="text"
                        {...register('lastName', { required: 'Nachname ist erforderlich' })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-colors"
                        placeholder="Ihr Nachname"
                      />
                      {errors.lastName && (
                        <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-Mail Adresse *
                    </label>
                    <input
                      type="email"
                      {...register('email', { 
                        required: 'E-Mail ist erforderlich',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Ungültige E-Mail-Adresse'
                        }
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-colors"
                      placeholder="ihre@email.de"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefonnummer
                    </label>
                    <input
                      type="tel"
                      {...register('phone')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-colors"
                      placeholder="+49 123 456 7890"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Hochzeitsdatum
                    </label>
                    <input
                      type="date"
                      {...register('weddingDate')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nachricht *
                    </label>
                    <textarea
                      {...register('message', { required: 'Nachricht ist erforderlich' })}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-colors resize-none"
                      placeholder="Erzählen Sie mir von Ihrer Hochzeit... Wo findet sie statt? Wie viele Gäste erwarten Sie? Welches Paket interessiert Sie?"
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                    )}
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      {...register('privacy', { required: 'Datenschutz muss akzeptiert werden' })}
                      className="mt-1 mr-3"
                    />
                    <label className="text-sm text-gray-600">
                      Ich habe die{' '}
                      <a href="/datenschutz" className="text-primary-600 hover:text-primary-700">
                        Datenschutzerklärung
                      </a>{' '}
                      gelesen und stimme der Verarbeitung meiner Daten zu. *
                    </label>
                  </div>
                  {errors.privacy && (
                    <p className="text-sm text-red-600">{errors.privacy.message}</p>
                  )}

                  <button
                    type="submit"
                    className="w-full btn-primary py-4 text-lg font-medium hover:scale-[1.02] transition-transform"
                  >
                    Anfrage senden
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection