import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import WhatsAppButton from './WhatsAppButton'

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Preise', href: '#preise' },
    { name: 'Über mich', href: '#ueber-mich' },
    { name: 'Kontakt', href: '#kontakt' },
    { name: 'Kundenbereich', href: '/client-zone' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-custom shadow-lg' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="container-custom">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <span className={`text-2xl font-bold font-serif transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Chris Mario Ciobanu
              </span>
              <span className={`text-sm font-light transition-colors ${
                isScrolled ? 'text-gray-600' : 'text-white/80'
              }`}>
                Hochzeitsfotografie
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                    isScrolled ? 'text-gray-700' : 'text-white/90'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-200"
            >
              <div className="container-custom py-4 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block py-2 text-gray-700 hover:text-primary-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <h3 className="text-xl font-serif font-semibold mb-4">
                Chris Mario Ciobanu
              </h3>
              <p className="text-gray-300 mb-4">
                Hochzeitsfotograf in Baden-Württemberg. Ich halte die schönsten 
                Momente Ihres besonderen Tages fest - authentisch, emotional und 
                zeitlos schön.
              </p>
              <p className="text-gray-400 text-sm">
                📍 Baden-Württemberg, Deutschland
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
                <li><a href="#portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#preise" className="text-gray-300 hover:text-white transition-colors">Preise</a></li>
                <li><Link to="/client-zone" className="text-gray-300 hover:text-white transition-colors">Kundenbereich</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-4">Rechtliches</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/impressum" className="text-gray-300 hover:text-white transition-colors">Impressum</Link></li>
                <li><Link to="/datenschutz" className="text-gray-300 hover:text-white transition-colors">Datenschutz</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Chris Mario Ciobanu Hochzeitsfotografie. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  )
}

export default Layout