import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { CarFront, MapPinPlusInside, BadgeDollarSign, ArrowDownUp } from "lucide-react"


export default function nosServices(){
    return(
        <div>
                <div className="flex flex-col h-full bg-black gap-30 ">
                  <Navbar />
                    <section className="flex flex-col items-center  h-full w-full bg-black p-8 mt-24">
                        <div className=" flex items-center justify-center flex-col w-[80%] h-96 bg-cover bg-center bg-[url('/img/alpineVert.jpg')] rounded-xl">
                            <h1 className="text-6xl">Nos Services</h1>
                        </div>
                    </section>


                    <section className="flex h-full w-full bg-black ">
                        <div className="grid grid-cols-2 gap-4 w-full p-5">

                            <div className=" p-8 flex flex-col gap-10 justify-center items-center gap-6">
                                    <h2 className="text-white text-7xl">Nos Services proposés</h2>
                                    <p className="text-xl w-[80%]  text-center text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quasi dolore autem minima quis animi sed maxime tempore et cupiditate voluptas, corrupti cum incidunt accusamus voluptatem quas corporis facilis omnis!</p>

                                    <div className="grid grid-cols-3 gap-4">  
                                        <div className="flex flex-col gap-2 px-10 py-5 bg-gray-800 text-2xl items-center justify-center text-white rounded-xl hover:bg-gray-700 transition-transform duration-300">Covering / PPF <CarFront size={30} /></div>   
                                        <div className="flex flex-col gap-2 px-10 py-5 bg-gray-800 text-2xl items-center justify-center text-white rounded-xl hover:bg-gray-700 transition-transform duration-300">Importation <MapPinPlusInside size={30} /></div>
                                        <div className="flex flex-col gap-2 px-10 py-5 bg-gray-800 text-2xl items-center justify-center text-white rounded-xl hover:bg-gray-700 transition-transform duration-300">Vente <BadgeDollarSign size={30} /></div>
                                        <div className="flex flex-col gap-2 px-10 py-5 bg-gray-800 text-2xl items-center justify-center text-white rounded-xl hover:bg-gray-700 transition-transform duration-300">Depot vente <ArrowDownUp size={30} /></div>
                                        <div className="flex flex-col gap-2 px-10 py-5 bg-gray-800 text-2xl items-center justify-center text-white rounded-xl hover:bg-gray-700 transition-transform duration-300">Reprise <ArrowDownUp size={30} /></div>
                                        <div className="flex flex-col gap-2 px-10 py-5 bg-gray-800 text-2xl items-center justify-center text-white text-center rounded-xl hover:bg-gray-700 transition-transform duration-300">Recherche Personnalisée <ArrowDownUp size={30} /></div>
                                    
                                    </div>
                            </div>

                            <div className="flex gap-6 justify-center items-center h-full bg-black p-6">

                                <div className="relative w-full h-[550px] overflow-hidden transform  bg-gray-900 rounded-xl shadow-lg">
                                    <img src="/img/miniVert.jpg" alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                                </div>

                            </div>
                        </div>
                    </section>



                    <section className=" flex flex-col w-full h-full p-20 bg-black">
                        <div className="grid grid-cols-2 gap-4 w-full p-5">
                            
                        
                            <div className="flex gap-6 justify-center items-center h-full bg-black p-6">
                                <div className="relative w-full h-[550px] overflow-hidden transform-gpu  bg-gray-900 rounded-xl shadow-lg ">
                                    <img src="/img/alpineVert.jpg" alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                                </div>
                            </div>
                            <div className=" p-8 flex flex-col  justify-center items-center gap-6">
                                <h2 className="text-white text-7xl">Reprise / sans obligation d’achat</h2>
                                <p className="text-xl text-white w-full">
                                   Chez Time To Drive, vous pouvez revendre votre voiture en toute simplicité et Sans Obligation d’achat !
                                    Nous vous proposons une estimation précise et transparente, fondée sur l’état réel de votre véhicule et l’évolution du marché.
                                    Notre objectif : vous offrir une reprise rapide, sécurisée et avantageuse, sans perte de temps ni démarches compliquées.
                                    Vous bénéficiez d’un accompagnement professionnel, d’un paiement immédiat et de toutes les formalités gérées sur place.
                                    Que vous changiez de projet ou souhaitiez simplement vendre, Time To Drive vous garantit une expérience fluide, claire et sans engagement.
                                </p>
                            </div>

                            <div className=" p-8 flex flex-col  justify-center items-center gap-6">
                                <h2 className="text-white text-7xl">Vente</h2>
                                <p className="text-xl text-white w-full">
                                    Découvrez notre sélection de voitures soigneusement choisies, contrôlées et prêtes à partir.
                                    Chaque modèle est rigoureusement sélectionné.
                                    Nous privilégions les véhicules fiables, entretenus et transparents, afin de vous garantir un achat en toute confiance.
                                    Essai, financement, carte grise, garantie… tout est pensé pour une expérience d’achat simple et sereine.
                                    Acheter votre prochaine voiture n’a jamais été aussi agréable.
                                </p>
                            </div>

                            <div className="flex gap-6 justify-center items-center h-full bg-black p-6">
                                <div className="relative w-full h-[550px] overflow-hidden transform-gpu  bg-gray-900 rounded-xl shadow-lg ">
                                    <img src="/img/alpineVert.jpg" alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                                </div>
                            </div>

                            
                            <div className="flex gap-6 justify-center items-center h-full bg-black p-6">

                                <div className="relative w-full h-[550px] overflow-hidden transform-gpu  bg-gray-900 rounded-xl shadow-lg ">
                                    <img src="/img/alpineVert.jpg" alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                                </div>

                            </div>
                            <div className=" p-8 flex flex-col  justify-center items-center gap-6">
                                <h2 className="text-white text-7xl">Recherche Personnalisée</h2>
                                <p className="text-xl text-white w-full">
                                        vous cherchez une voiture précise, un modèle rare ou la meilleure configuration possible ?
                                        Grâce à notre service de recherche personnalisée, nous trouvons pour vous le véhicule idéal, en France comme à l’étranger.
                                        Nous sélectionnons uniquement des voitures fiables, vérifiées et au juste prix, selon vos critères et votre budget.
                                        Vous gagnez du temps, évitez les mauvaises surprises et profitez d’un accompagnement professionnel jusqu’à la livraison.
                                </p>
                            </div>



                            <div className=" p-8 flex flex-col  justify-center items-center gap-6">
                                <h2 className="text-white text-7xl">Covering / PPF</h2>
                                <p className="text-xl text-white w-full">
                                    Envie de donner un nouveau look à votre voiture ou de protéger sa carrosserie ?
                                    Notre partenaire CoverStyle vous propose des coverings haut de gamme, réalisés avec précision et des matériaux de qualité.
                                    Finition mate, brillante, satinée ou carbone — personnalisez votre véhicule selon vos envies, avec un résultat professionnel et durable.
                                    Contactez-nous pour être mis en relation avec CoverStyle et profitez d’un accompagnement sur mesure.
                                </p>
                            </div>
                            <div className="flex gap-6 justify-center items-center h-full bg-black p-6">

                                <div className="relative w-full h-[550px] overflow-hidden transform-gpu  bg-gray-900 rounded-xl shadow-lg ">
                                    <img src="/img/alpineVert.jpg" alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
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