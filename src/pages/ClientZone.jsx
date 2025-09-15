import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { EyeIcon, EyeSlashIcon, UserIcon } from '@heroicons/react/24/outline'

const ClientZone = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()

  // Demo clients for development - in production this would come from a backend
  const demoClients = {
    'anna-michael-2024': { 
      password: 'hochzeit123', 
      name: 'Anna & Michael',
      weddingDate: '2024-09-15',
      location: 'Schloss Heidelberg'
    },
    'sarah-david-2024': { 
      password: 'love2024', 
      name: 'Sarah & David',
      weddingDate: '2024-08-20',
      location: 'Weingut Stuttgart'
    }
  }

  const onSubmit = async (data) => {
    setIsLoading(true)
    setError('')

    // Simulate API call
    setTimeout(() => {
      const client = demoClients[data.clientId.toLowerCase()]
      
      if (client && client.password === data.password) {
        // In a real app, you'd set authentication state/token
        localStorage.setItem('clientAuth', JSON.stringify({
          clientId: data.clientId,
          clientName: client.name,
          authenticated: true,
          loginTime: new Date().toISOString()
        }))
        navigate(`/client-login/${data.clientId}`)
      } else {
        setError('Ungültige Kunden-ID oder Passwort. Bitte überprüfen Sie Ihre Eingaben.')
      }
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-16">
      <div className="container-custom max-w-md">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <UserIcon className="w-8 h-8 text-primary-600" />
            </div>
            <h1 className="text-2xl font-serif font-bold text-gray-900 mb-2">
              Kundenbereich
            </h1>
            <p className="text-gray-600">
              Melden Sie sich an, um Ihre Hochzeitsbilder und weitere 
              Informationen zu Ihrem besonderen Tag einzusehen.
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Kunden-ID *
              </label>
              <input
                type="text"
                {...register('clientId', { required: 'Kunden-ID ist erforderlich' })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-colors"
                placeholder="z.B. anna-michael-2024"
              />
              {errors.clientId && (
                <p className="mt-1 text-sm text-red-600">{errors.clientId.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Passwort *
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  {...register('password', { required: 'Passwort ist erforderlich' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-colors pr-12"
                  placeholder="Ihr Passwort"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <EyeSlashIcon className="w-5 h-5" />
                  ) : (
                    <EyeIcon className="w-5 h-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
              )}
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 border border-red-200 rounded-lg p-4"
              >
                <p className="text-sm text-red-600">{error}</p>
              </motion.div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full btn-primary py-3 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Wird angemeldet...
                </div>
              ) : (
                'Anmelden'
              )}
            </button>
          </form>

          {/* Help Section */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="font-medium text-gray-900 mb-3">Hilfe benötigt?</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>• Ihre Kunden-ID finden Sie in Ihrer Bestätigungs-E-Mail</p>
              <p>• Das Passwort wurde Ihnen separat mitgeteilt</p>
              <p>• Bei Problemen kontaktieren Sie mich gerne unter:</p>
            </div>
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:info@chrismario-foto.de"
                className="text-primary-600 hover:text-primary-700 text-sm font-medium"
              >
                info@chrismario-foto.de
              </a>
              <a
                href="tel:+491234567890"
                className="text-primary-600 hover:text-primary-700 text-sm font-medium"
              >
                +49 (0) 123 456 7890
              </a>
            </div>
          </div>

          {/* Demo Info */}
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="text-sm font-medium text-blue-900 mb-2">Demo-Zugang:</h4>
            <div className="text-xs text-blue-700 space-y-1">
              <p>Kunden-ID: <code className="bg-blue-100 px-1 rounded">anna-michael-2024</code></p>
              <p>Passwort: <code className="bg-blue-100 px-1 rounded">hochzeit123</code></p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ClientZone