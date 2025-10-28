import Image from "next/image";
import Navbar from "./components/navbar";
import Footer from "./components/footer";


export default function Home() {
  return (
    <div className="flex flex-col h-full bg-white">
      <Navbar />
      <header className="min-h-screen flex items-center justify-center p-6 md:p-8 bg-[url('/img/alpineVert.jpg')] bg-cover bg-center">

        <div className="bg-black/50 p-6 md:p-10 rounded-lg text-center backdrop-blur-sm">
          <h1 className="text-3xl md:text-8xl font-bold text-white mb-4 md:mb-6">Bienvenue chez Time to Drive</h1>
          <p className="text-base md:text-2xl text-white mb-4 md:mb-6">Votre partenaire de confiance pour la location et la vente de véhicules d'exception.</p>
          <a href="https://pros.lacentrale.fr/C055989" className="bg-green-500 text-white text-base md:text-2xl py-2 md:py-3 px-4 md:px-6 rounded-lg hover:bg-green-600 transition-colors">
            Découvrez nos offres
          </a>
        </div>
      
      </header>

      <section className="flex flex-col w-full h-full p-6 md:p-20 bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full p-2 md:p-5">
          <div className="flex gap-6 justify-center items-center bg-black p-2 md:p-6">

            <div className="relative w-full h-64 md:h-[550px] overflow-hidden transform-gpu bg-gray-900 rounded-xl shadow-lg">
              <img src="/img/trophy-R.jpg" alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
            </div>

          </div>
          <div className="p-4 md:p-8 flex flex-col justify-center items-center gap-4 md:gap-6">
            <h2 className="text-white text-2xl md:text-7xl text-center">Reprise / sans obligation d’achat</h2>
            <p className="text-base md:text-xl text-white w-full">
              Chez Time To Drive, vous pouvez revendre votre voiture en toute simplicité et Sans Obligation d’achat !
              Nous vous proposons une estimation précise et transparente, fondée sur l’état réel de votre véhicule et l’évolution du marché.
              Notre objectif : vous offrir une reprise rapide, sécurisée et avantageuse, sans perte de temps ni démarches compliquées.
              Vous bénéficiez d’un accompagnement professionnel, d’un paiement immédiat et de toutes les formalités gérées sur place.
              Que vous changiez de projet ou souhaitiez simplement vendre, Time To Drive vous garantit une expérience fluide, claire et sans engagement.
            </p>
            <a href="https://pros.lacentrale.fr/C055989" className="bg-white text-black py-2 px-4 rounded">
              Nos Voitures en Stock
            </a>
          </div>



          <div className="p-4 md:p-8 flex flex-col justify-center items-center gap-4 md:gap-6">
            <h2 className="text-white text-2xl md:text-7xl">Vente</h2>
            <p className="text-base md:text-xl text-white w-full">
              Découvrez notre sélection de voitures soigneusement choisies, contrôlées et prêtes à partir.
              Chaque modèle est rigoureusement sélectionné.
              Nous privilégions les véhicules fiables, entretenus et transparents, afin de vous garantir un achat en toute confiance.
              Essai, financement, carte grise, garantie… tout est pensé pour une expérience d’achat simple et sereine.
              Acheter votre prochaine voiture n’a jamais été aussi agréable.
            </p>
            <button className="bg-white text-black py-2 px-4 rounded">
              Nos Voitures en Stock
            </button>
          </div>

          <div className="flex gap-6 justify-center items-center bg-black p-2 md:p-6">
            <div className="relative w-full h-64 md:h-[550px] overflow-hidden transform-gpu bg-gray-900 rounded-xl shadow-lg">
              <img src="/img/depotVenteHeader.jpg" alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
            </div>
          </div>

        </div>
      </section>


      <section>
        <div className="flex flex-col w-full h-full bg-black px-4 py-8 md:py-12">
          <h2 className="text-white text-2xl md:text-7xl text-center">Ils nous ont fait confiance</h2>
          <div className="flex flex-col justify-center items-center gap-4 mt-6">

            <div className="flex flex-col gap-4 w-full p-2 md:p-5">
              <div className="p-4 md:p-8 flex flex-col w-full gap-6 justify-center items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-4">

                  <div className="flex flex-col gap-2 w-full h-40 bg-gray-800 text-2xl items-center justify-center text-white rounded-xl hover:bg-gray-700 transition-transform duration-300 bg-cover bg-[url('/img/avis1.webp')]" />
                  <div className="flex flex-col gap-2 w-full h-40 bg-gray-800 text-2xl items-center justify-center text-white rounded-xl hover:bg-gray-700 transition-transform duration-300 bg-cover bg-[url('/img/avis2.webp')]" />
                  <div className="flex flex-col gap-2 w-full h-40 bg-gray-800 text-2xl items-center justify-center text-white rounded-xl hover:bg-gray-700 transition-transform duration-300 bg-cover bg-[url('/img/avis3.webp')]" />
                  <div className="flex flex-col gap-2 w-full h-40 bg-gray-800 text-2xl items-center justify-center text-white rounded-xl hover:bg-gray-700 transition-transform duration-300 bg-cover bg-[url('/img/avis4.webp')]" />

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-black flex flex-col items-center justify-center p-6 md:p-10">
        <h2 className="text-white text-2xl md:text-7xl mb-6">Où nous trouver ?</h2>
        <div className="w-full max-w-4xl">
          <div className="w-full aspect-video rounded-xl overflow-hidden">
            <iframe className="w-full h-full border-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317.95528449534424!2d2.178667543495038!3d49.01815479535799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6615f458e2a3f%3A0xb1390e9c22a951e6!2sTime%20To%20Drive!5e0!3m2!1sfr!2sfr!4v1761658563695!5m2!1sfr!2sfr" loading="lazy" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-8 mt-6 w-full max-w-4xl">
          <div className="flex flex-col p-4 md:p-10 w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl text-white">Informations Utiles</h2>
            <p className="text-white text-base md:text-xl mt-4">Adresse : 18 rue Denis Papin, 95250 Beauchamp, France</p>
            <p className="text-white text-base md:text-xl mt-4">Téléphone : +33 6 17 92 66 66</p>
            <p className="text-white text-base md:text-xl mt-4">Email : Contact@time-to-drive.com</p>
          </div>
          <div className="w-full md:w-1/2 p-4 md:p-10">
            <h2 className="text-2xl md:text-3xl text-white">Nos Horaires</h2>
            <p className="text-white text-base md:text-xl mt-4">Lundi - Vendredi : 10h00 - 18h00</p>
            <p className="text-white text-base md:text-xl mt-4">Samedi : 10h00 - 16h00</p>
            <p className="text-white text-base md:text-xl mt-4">Dimanche : Fermé</p>
          </div>
        </div>

      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
}
