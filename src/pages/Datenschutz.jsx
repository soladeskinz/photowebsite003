import React from 'react'
import { motion } from 'framer-motion'

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h1 className="text-3xl font-serif font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>

          <div className="prose prose-gray max-w-none">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Datenschutz auf einen Blick</h2>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Allgemeine Hinweise</h3>
            <p className="mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. 
              Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem 
              Text aufgeführten Datenschutzerklärung.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">Datenerfassung auf dieser Website</h3>
            <h4 className="font-semibold text-gray-900 mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
            <p className="mb-4">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
              Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" 
              in dieser Datenschutzerklärung entnehmen.
            </p>

            <h4 className="font-semibold text-gray-900 mb-2">Wie erfassen wir Ihre Daten?</h4>
            <p className="mb-4">
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann 
              es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
            </p>
            <p className="mb-4">
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website 
              durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, 
              Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt 
              automatisch, sobald Sie diese Website betreten.
            </p>

            <h4 className="font-semibold text-gray-900 mb-2">Wofür nutzen wir Ihre Daten?</h4>
            <p className="mb-4">
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu 
              gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>

            <h4 className="font-semibold text-gray-900 mb-2">Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
            <p className="mb-8">
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck 
              Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, 
              die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung 
              zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die 
              Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die 
              Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren 
              steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Hosting</h2>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Cloudflare Pages</h3>
            <p className="mb-4">
              Wir hosten unsere Website bei Cloudflare Pages. Anbieter ist die Cloudflare Inc., 
              101 Townsend St, San Francisco, CA 94107, USA (nachfolgend „Cloudflare").
            </p>
            <p className="mb-4">
              Cloudflare ist Empfänger Ihrer personenbezogenen Daten und fungiert als Auftragsverarbeiter 
              für uns. Dies entspricht unserem berechtigten Interesse im Sinne des Art. 6 Abs. 1 lit. f 
              DSGVO, selbst keinen Server in unseren Räumlichkeiten vorhalten zu müssen.
            </p>
            <p className="mb-8">
              Details entnehmen Sie der Datenschutzerklärung von Cloudflare: 
              <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 ml-1">
                https://www.cloudflare.com/privacypolicy/
              </a>
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Datenschutz</h3>
            <p className="mb-4">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. 
              Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen 
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p className="mb-4">
              Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. 
              Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. 
              Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir 
              sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">Hinweis zur verantwortlichen Stelle</h3>
            <p className="mb-2">Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
            <div className="mb-4 bg-gray-50 p-4 rounded-lg">
              <p className="mb-2"><strong>Chris Mario Ciobanu</strong></p>
              <p className="mb-2">Musterstraße 123</p>
              <p className="mb-2">70000 Stuttgart</p>
              <p className="mb-2">Deutschland</p>
              <p className="mb-2">Telefon: +49 (0) 123 456 7890</p>
              <p className="mb-2">E-Mail: info@chrismario-foto.de</p>
            </div>
            <p className="mb-8">
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder 
              gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen 
              Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">Speicherdauer</h3>
            <p className="mb-8">
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt 
              wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die 
              Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen 
              oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, 
              sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer 
              personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); 
              im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
            <p className="mb-8">
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. 
              Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit 
              der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
            <p className="mb-8">
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei 
              einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, 
              ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht 
              besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Datenerfassung auf dieser Website</h2>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Server-Log-Dateien</h3>
            <p className="mb-4">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten 
              Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="mb-4 list-disc list-inside space-y-1">
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="mb-8">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. 
              Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. 
              Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien 
              Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">Kontaktformular</h3>
            <p className="mb-4">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus 
              dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks 
              Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. 
              Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="mb-4">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, 
              sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung 
              vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die 
              Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an 
              uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung 
              (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
            </p>
            <p className="mb-8">
              Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns 
              zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck 
              für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). 
              Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">Kundenbereich (Client Zone)</h3>
            <p className="mb-4">
              Für den Zugang zum passwortgeschützten Kundenbereich speichern wir folgende Daten:
            </p>
            <ul className="mb-4 list-disc list-inside space-y-1">
              <li>Kunden-ID</li>
              <li>Passwort (verschlüsselt)</li>
              <li>Name des Brautpaars</li>
              <li>Hochzeitsdatum und -ort</li>
              <li>Vertragsdaten</li>
              <li>Hochzeitsbilder</li>
            </ul>
            <p className="mb-8">
              Diese Daten werden ausschließlich zur Erfüllung des Fotografievertrags und zur 
              Bereitstellung Ihrer Hochzeitsbilder verwendet. Die Rechtsgrundlage ist Art. 6 Abs. 1 
              lit. b DSGVO (Vertragserfüllung).
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Ihre Rechte</h2>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Auskunftsrecht</h3>
            <p className="mb-4">
              Sie haben das Recht, jederzeit unentgeltlich Auskunft über die zu Ihrer Person 
              gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck 
              der Datenverarbeitung zu erhalten.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">Berichtigung, Löschung und Einschränkung</h3>
            <p className="mb-4">
              Sie haben das Recht auf Berichtigung unrichtiger personenbezogener Daten und auf 
              Löschung oder Einschränkung der Verarbeitung Ihrer personenbezogenen Daten.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">Datenportabilität</h3>
            <p className="mb-4">
              Sie haben das Recht, dass wir Ihnen die personenbezogenen Daten, die Sie uns 
              bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren 
              Format übermitteln.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">Widerspruchsrecht</h3>
            <p className="mb-8">
              Sie haben das Recht, der Verarbeitung Ihrer personenbezogenen Daten zu widersprechen, 
              wenn diese auf Grundlage von berechtigten Interessen (Art. 6 Abs. 1 lit. f DSGVO) erfolgt.
            </p>

            <div className="mt-12 pt-8 border-t border-gray-200 text-sm text-gray-600">
              <p>Stand: {new Date().toLocaleDateString('de-DE')}</p>
              <p className="mt-2">
                Bei Fragen zum Datenschutz kontaktieren Sie uns unter: 
                <a href="mailto:info@chrismario-foto.de" className="text-primary-600 hover:text-primary-700 ml-1">
                  info@chrismario-foto.de
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Datenschutz