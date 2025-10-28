import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { CarFront, MapPinPlusInside, BadgeDollarSign, ArrowDownUp } from "lucide-react"


export default function nosServices(){
    return(
        <div className="min-h-screen bg-black text-white">
                <div className="flex flex-col h-full gap-8">
                  <Navbar />

                    <section className="flex flex-col items-center w-full p-6 mt-20">
                        <div className="flex items-center justify-center flex-col w-full max-w-5xl h-56 md:h-96 bg-cover bg-center bg-[url('/img/depot4.jpg')] rounded-xl">
                            <h1 className="text-3xl md:text-6xl font-bold">Nos Services</h1>
                        </div>
                    </section>


                    <section className="w-full">
                        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 w-full p-5">

                            <div className="p-6 flex flex-col gap-6 justify-center items-center">
                                    <h2 className="text-white text-2xl md:text-5xl font-semibold">Nos Services proposés</h2>
                                    <p className="text-base md:text-lg w-full md:w-4/5 text-center text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quasi dolore autem minima quis animi sed maxime tempore et cupiditate voluptas, corrupti cum incidunt accusamus voluptatem quas corporis facilis omnis!</p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">  
                                        <div className="flex flex-col gap-2 px-6 py-4 bg-gray-800 text-lg md:text-2xl items-center justify-center text-white rounded-xl hover:bg-gray-700 transition-transform duration-300">Covering / PPF <CarFront size={24} /></div>   
                                        <div className="flex flex-col gap-2 px-6 py-4 bg-gray-800 text-lg md:text-2xl items-center justify-center text-white rounded-xl hover:bg-gray-700 transition-transform duration-300">Importation <MapPinPlusInside size={24} /></div>
                                        <div className="flex flex-col gap-2 px-6 py-4 bg-gray-800 text-lg md:text-2xl items-center justify-center text-white rounded-xl hover:bg-gray-700 transition-transform duration-300">Vente <BadgeDollarSign size={24} /></div>
                                        <div className="flex flex-col gap-2 px-6 py-4 bg-gray-800 text-lg md:text-2xl items-center justify-center text-white rounded-xl hover:bg-gray-700 transition-transform duration-300">Depot vente <ArrowDownUp size={24} /></div>
                                        <div className="flex flex-col gap-2 px-6 py-4 bg-gray-800 text-lg md:text-2xl items-center justify-center text-white rounded-xl hover:bg-gray-700 transition-transform duration-300">Reprise <ArrowDownUp size={24} /></div>
                                        <div className="flex flex-col gap-2 px-6 py-4 bg-gray-800 text-lg md:text-2xl items-center justify-center text-white text-center rounded-xl hover:bg-gray-700 transition-transform duration-300">Recherche Personnalisée <ArrowDownUp size={24} /></div>
                                    </div>
                            </div>

                            <div className="flex gap-6 justify-center items-center p-2">
                                <div className="relative w-full h-40 md:h-[420px] overflow-hidden bg-gray-900 rounded-xl shadow-lg">
                                    <img src="/img/miniVert.jpg" alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                                </div>
                            </div>
                        </div>
                    </section>



                    <section className="w-full py-8 bg-black">
                        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 w-full p-5">
                            
                            <div className="flex gap-6 justify-center items-center p-2">
                                <div className="relative w-full h-40 md:h-[420px] overflow-hidden bg-gray-900 rounded-xl shadow-lg">
                                    <img src="/img/alpineVert.jpg" alt="alpine" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                                </div>
                            </div>
                            <div className="p-6 flex flex-col justify-center items-start gap-4">
                                <h2 className="text-white text-2xl md:text-4xl font-semibold">Reprise / sans obligation d’achat</h2>
                                <p className="text-sm md:text-base text-white w-full">
                                   Chez Time To Drive, vous pouvez revendre votre voiture en toute simplicité et Sans Obligation d’achat !
                                    Nous vous proposons une estimation précise et transparente, fondée sur l’état réel de votre véhicule et l’évolution du marché.
                                    Notre objectif : vous offrir une reprise rapide, sécurisée et avantageuse, sans perte de temps ni démarches compliquées.
                                    Vous bénéficiez d’un accompagnement professionnel, d’un paiement immédiat et de toutes les formalités gérées sur place.
                                    Que vous changiez de projet ou souhaitiez simplement vendre, Time To Drive vous garantit une expérience fluide, claire et sans engagement.
                                </p>
                            </div>

                            <div className="p-6 flex flex-col justify-center items-start gap-4">
                                <h2 className="text-white text-2xl md:text-4xl font-semibold">Vente</h2>
                                <p className="text-sm md:text-base text-white w-full">
                                    Découvrez notre sélection de voitures soigneusement choisies, contrôlées et prêtes à partir.
                                    Chaque modèle est rigoureusement sélectionné.
                                    Nous privilégions les véhicules fiables, entretenus et transparents, afin de vous garantir un achat en toute confiance.
                                    Essai, financement, carte grise, garantie… tout est pensé pour une expérience d’achat simple et sereine.
                                    Acheter votre prochaine voiture n’a jamais été aussi agréable.
                                </p>
                            </div>

                            <div className="flex gap-6 justify-center items-center p-2">
                                <div className="relative w-full h-40 md:h-[420px] overflow-hidden bg-gray-900 rounded-xl shadow-lg">
                                    <img src="/img/depot1.jpg" alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                                </div>
                            </div>

                            <div className="flex gap-6 justify-center items-center p-2">
                                <div className="relative w-full h-40 md:h-[420px] overflow-hidden bg-gray-900 rounded-xl shadow-lg">
                                    <img src="/img/miniVert.jpg" alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                                </div>
                            </div>
                            <div className="p-6 flex flex-col justify-center items-start gap-4">
                                <h2 className="text-white text-2xl md:text-4xl font-semibold">Recherche Personnalisée</h2>
                                <p className="text-sm md:text-base text-white w-full">
                                        vous cherchez une voiture précise, un modèle rare ou la meilleure configuration possible ?
                                        Grâce à notre service de recherche personnalisée, nous trouvons pour vous le véhicule idéal, en France comme à l’étranger.
                                        Nous sélectionnons uniquement des voitures fiables, vérifiées et au juste prix, selon vos critères et votre budget.
                                        Vous gagnez du temps, évitez les mauvaises surprises et profitez d’un accompagnement professionnel jusqu’à la livraison.
                                </p>
                            </div>


                            <div className="p-6 flex flex-col justify-center items-start gap-4">
                                <h2 className="text-white text-2xl md:text-4xl font-semibold">Covering / PPF</h2>
                                <p className="text-sm md:text-base text-white w-full">
                                    Envie de donner un nouveau look à votre voiture ou de protéger sa carrosserie ?
                                    Notre partenaire CoverStyle vous propose des coverings haut de gamme, réalisés avec précision et des matériaux de qualité.
                                    Finition mate, brillante, satinée ou carbone — personnalisez votre véhicule selon vos envies, avec un résultat professionnel et durable.
                                    Contactez-nous pour être mis en relation avec CoverStyle et profitez d’un accompagnement sur mesure.
                                </p>
                            </div>
                            <div className="flex gap-6 justify-center items-center p-2">
                                <div className="relative w-full h-40 md:h-[420px] overflow-hidden bg-gray-900 rounded-xl shadow-lg">
                                    <img src="/img/depotVenteHeader.jpg" alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                                </div>
                            </div>

                        </div>
                    </section>

                  {/* Footer */}
                  <Footer />
                </div>
        </div>
    )
}