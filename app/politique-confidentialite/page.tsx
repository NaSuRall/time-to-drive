import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function PolitiqueConfidentialite(){
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="max-w-4xl mx-auto p-6 md:p-12 mt-24">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">Politique de confidentialité</h1>

        <section className="mb-6">
          <p className="text-sm md:text-base">Chez Time To Drive, la protection de vos données personnelles est une priorité. Cette politique explique quelles données nous collectons, pourquoi, comment nous les utilisons et les droits dont vous disposez.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Responsable du traitement</h2>
          <p className="text-sm md:text-base">Time To Drive<br/>Contact: Contact@time-to-drive.com</p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Données collectées</h2>
          <p className="text-sm md:text-base">Nous collectons uniquement les données nécessaires pour répondre à vos demandes : nom, email, téléphone, message, et informations de véhicule lorsque vous utilisez nos formulaires (ex. reprise). Nous ne collectons pas de données sensibles sauf si vous nous les communiquez volontairement.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Cookies</h2>
          <p className="text-sm md:text-base">Le site utilise des cookies essentiels pour son fonctionnement. Les cookies non essentiels (analytics, publicité, fonctionnalités optionnelles) ne sont placés qu'avec votre consentement explicite. Vous pouvez accepter ou refuser les cookies via la bannière de consentement. Le consentement est stocké dans un cookie nommé <code className="bg-white/5 px-1 rounded">ttd_cookie_consent</code>.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Finalités et bases légales</h2>
          <p className="text-sm md:text-base">Les données sont utilisées pour : répondre aux demandes de contact, gérer les formulaires de reprise et vente, envoyer des emails de confirmation, et fournir le service demandé. La base légale est le consentement (pour les cookies non essentiels) ou l'exécution d'une demande/contrat pour le traitement lié aux formulaires.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Durée de conservation</h2>
          <p className="text-sm md:text-base">Nous conservons les données personnelles aussi longtemps que nécessaire pour la finalité pour laquelle elles ont été collectées, sauf obligation légale contraire. Les logs et copies d'emails peuvent être conservés pour une période administrative raisonnable.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Vos droits</h2>
          <p className="text-sm md:text-base">Vous avez le droit d'accéder, rectifier, supprimer vos données, de demander la portabilité ou la limitation du traitement, et de retirer votre consentement à tout moment. Pour exercer vos droits, contactez-nous à <a className="underline" href="mailto:Contact@time-to-drive.com">Contact@time-to-drive.com</a>.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Sécurité</h2>
          <p className="text-sm md:text-base">Nous mettons en place des mesures techniques et organisationnelles pour protéger vos données. Toutefois, aucune transmission sur Internet n'est totalement sécurisée ; si vous avez des préoccupations, contactez-nous.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Contact</h2>
          <p className="text-sm md:text-base">Pour toute question sur la confidentialité ou pour exercer vos droits : <a className="underline" href="mailto:Contact@time-to-drive.com">Contact@time-to-drive.com</a>.</p>
        </section>

      </main>
      <Footer />
    </div>
  )
}
