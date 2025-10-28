import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Image from "next/image"

export const metadata = {
  title: "Dépôt-vente — Time To Drive",
  description: "Déposez votre véhicule en dépôt-vente chez Time To Drive : inspection, mise en ligne, gestion des ventes et paiement sécurisé.",
};

export default function depotVente() {
    return (
        <div>
                <div className="flex flex-col h-full">
                  <Navbar />
                    <section className="flex flex-col items-center  h-full w-full bg-black p-8 mt-24">
            <div className="flex items-center justify-center flex-col w-full max-w-4xl h-48 md:h-96 bg-cover bg-center bg-[url('/img/depotVenteHeader.jpg')] rounded-xl">
              <h1 className="text-3xl md:text-6xl text-white font-bold p-4">Dépot Vente</h1>
            </div>
                    </section>
            

                  <section className="flex flex-col items-center w-full bg-black p-8">
          <div className="flex flex-col items-center justify-center w-full px-4 md:px-8">

            <h2 className="text-2xl md:text-4xl text-white mb-4">Comment ça marche ?</h2>
            <p className="text-sm md:text-lg text-center max-w-4xl text-white">
              Le dépôt-vente est un service qui vous permet de vendre vos véhicules d'occasion sans les tracas de la vente directe. Voici comment cela fonctionne :
            </p>
                        
            <div className="mt-6 space-y-6 max-w-4xl text-white">
              <div>
                <h3 className="text-lg md:text-2xl mb-2">1. Dépôt du véhicule</h3>
                <p className="text-sm md:text-base">
                  Vous apportez votre véhicule à notre centre de dépôt-vente où il sera inspecté et évalué par nos experts.
                </p>
              </div>
              <div>
                <h3 className="text-lg md:text-2xl mb-2">2. Mise en vente</h3>
                <p className="text-sm md:text-base">
                  Une fois évalué, votre véhicule sera mis en vente sur notre plateforme avec une description détaillée et des photos professionnelles.
                </p>
              </div>
              <div>
                <h3 className="text-lg md:text-2xl mb-2">3. Vente et paiement</h3>
                <p className="text-sm md:text-base">
                  Lorsqu'un acheteur est intéressé, nous gérons la transaction pour vous. Une fois la vente conclue, vous recevrez le paiement, déduction faite de nos frais de service.
                </p>
              </div>
            </div>
          </div>
                  </section>


                  <section>
                    <div className="flex flex-col items-center w-full bg-black p-8">
            <h2 className="text-2xl md:text-4xl mb-4 text-white">Pourquoi choisir notre service de dépôt-vente ?</h2>
            <p className="text-sm md:text-lg text-center max-w-4xl text-white">
              Notre service de dépôt-vente offre une solution simple et efficace pour vendre votre véhicule d'occasion. Nous nous occupons de tout, de l'évaluation à la vente, vous permettant ainsi de gagner du temps et d'éviter les complications liées à la vente directe.
            </p>
                    </div>
                  </section>




                  <section>
                    <div className="flex flex-col items-center w-full gap-10 bg-black p-8">
            <h2 className="text-2xl md:text-4xl mb-4 text-white">Contactez-nous</h2>
            <p className="text-sm md:text-lg text-center max-w-4xl text-white">
              Prêt à vendre votre véhicule via notre service de dépôt-vente ? Contactez-nous dès aujourd'hui pour plus d'informations ou pour prendre rendez-vous.
            </p>
            <a href="/contact" className="px-6 md:px-20 py-3 md:py-5 text-sm md:text-xl bg-white rounded-xl text-black">Contactez nous !</a>
                    </div>
                  </section>



                  <section className="flex flex-col w-full h-auto">
                    <div className="flex flex-col items-center w-full bg-black p-4 md:p-8">
                        <h2 className="text-2xl md:text-4xl text-white">Nos depot deja vendu :</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6 px-4 md:px-8">
                           <div className="relative w-full h-48 md:h-40">
                              <Image src="/img/depot1.jpg" alt="Renault Clio 2015" fill className="object-cover rounded-lg" />
                              <h3 className="text-lg md:text-xl mt-2 text-white">Renault Clio 2015</h3>
                           </div>
                            <div className="relative w-full h-48 md:h-40">
                              <Image src="/img/depot2.jpg" alt="Peugeot 208 2018" fill className="object-cover rounded-lg" />
                              <h3 className="text-lg md:text-xl mt-2 text-white">Peugeot 208 2018</h3>
                            </div>

                            <div className="relative w-full h-48 md:h-40">
                              <Image src="/img/alpineVert.jpg" alt="Citroën C3 2017" fill className="object-cover rounded-lg" />
                              <h3 className="text-lg md:text-xl mt-2 text-white">Citroën C3 2017</h3>
                            </div>

                            <div className="relative w-full h-48 md:h-40">
                              <Image src="/img/depot4.jpg" alt="Ford Fiesta 2016" fill className="object-cover rounded-lg" />
                              <h3 className="text-lg md:text-xl mt-2 text-white">Ford Fiesta 2016</h3>
                            </div>

                        </div>
                    </div>
                  </section>






                  {/* Footer */}
                  <Footer />
            
                </div>
        </div>
    )}