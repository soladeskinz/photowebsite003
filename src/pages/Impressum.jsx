import React from 'react'
import { motion } from 'framer-motion'

const Impressum = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h1 className="text-3xl font-serif font-bold text-gray-900 mb-8">Impressum</h1>

          <div className="prose prose-gray max-w-none">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Angaben gemäß § 5 TMG</h2>
            
            <div className="mb-8">
              <p className="mb-2"><strong>Chris Mario Ciobanu</strong></p>
              <p className="mb-2">Hochzeitsfotografie</p>
              <p className="mb-2">Musterstraße 123</p>
              <p className="mb-2">70000 Stuttgart</p>
              <p className="mb-2">Deutschland</p>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">Kontakt</h3>
            <div className="mb-8">
              <p className="mb-2">Telefon: +49 (0) 123 456 7890</p>
              <p className="mb-2">E-Mail: info@chrismario-foto.de</p>
              <p className="mb-2">Website: www.chrismario-foto.de</p>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">Umsatzsteuer-ID</h3>
            <div className="mb-8">
              <p className="mb-2">Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
              <p className="mb-2">DE123456789</p>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">Berufsbezeichnung und berufsrechtliche Regelungen</h3>
            <div className="mb-8">
              <p className="mb-2">Berufsbezeichnung: Fotograf</p>
              <p className="mb-2">Verliehen in: Deutschland</p>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">Redaktionell verantwortlich</h3>
            <div className="mb-8">
              <p className="mb-2">Chris Mario Ciobanu</p>
              <p className="mb-2">Musterstraße 123</p>
              <p className="mb-2">70000 Stuttgart</p>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">EU-Streitschlichtung</h3>
            <div className="mb-8">
              <p className="mb-4">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 ml-1">
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="mb-2">Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">Verbraucher­streit­beilegung/Universal­schlichtungs­stelle</h3>
            <div className="mb-8">
              <p className="mb-4">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">Haftung für Inhalte</h2>
            <div className="mb-8">
              <p className="mb-4">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte 
                fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine 
                rechtswidrige Tätigkeit hinweisen.
              </p>
              <p className="mb-4">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den 
                allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch 
                erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei 
                Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            </div>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">Haftung für Links</h2>
            <div className="mb-8">
              <p className="mb-4">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
                Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf 
                mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der 
                Verlinkung nicht erkennbar.
              </p>
              <p className="mb-4">
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete 
                Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen 
                werden wir derartige Links umgehend entfernen.
              </p>
            </div>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">Urheberrecht</h2>
            <div className="mb-8">
              <p className="mb-4">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
                der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
                Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind 
                nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
              <p className="mb-4">
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die 
                Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche 
                gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, 
                bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen 
                werden wir derartige Inhalte umgehend entfernen.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200 text-sm text-gray-600">
              <p>Stand: {new Date().toLocaleDateString('de-DE')}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Impressum