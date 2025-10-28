import Navbar from "../components/navbar"
import Footer from "../components/footer"

export default function depotVente() {
    return (
        <div>
                <div className="flex flex-col h-full">
                  <Navbar />
                    <section className="flex flex-col items-center  h-full w-full bg-black p-8 mt-24">
                        <div className=" flex items-center justify-center flex-col w-[80%] h-96 bg-cover bg-center bg-[url('/img/depotVenteHeader.jpg')] rounded-xl">
                            <h1 className="text-6xl">Dépot Vente</h1>
                        </div>
                    </section>
            

                  <section className="flex flex-col items-center w-full bg-black p-8">
                    <div className="flex flex-col items-center justify-center w-full p-8">  

                        <h2 className="text-4xl mb-4">Comment ça marche ?</h2>
                        <p className="text-lg text-center max-w-4xl">
                            Le dépôt-vente est un service qui vous permet de vendre vos véhicules d'occasion sans les tracas de la vente directe. Voici comment cela fonctionne :
                        </p>
                        
                        <div className="mt-8 space-y-6 max-w-4xl">
                            <div>
                                <h3 className="text-2xl mb-2">1. Dépôt du véhicule</h3>
                                <p>
                                    Vous apportez votre véhicule à notre centre de dépôt-vente où il sera inspecté et évalué par nos experts.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl mb-2">2. Mise en vente</h3>
                                <p>
                                    Une fois évalué, votre véhicule sera mis en vente sur notre plateforme avec une description détaillée et des photos professionnelles.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl mb-2">3. Vente et paiement</h3>
                                <p>
                                    Lorsqu'un acheteur est intéressé, nous gérons la transaction pour vous. Une fois la vente conclue, vous recevrez le paiement, déduction faite de nos frais de service.
                                </p>
                            </div>
                        </div>
                    </div>  
                  </section>


                  <section>
                    <div className="flex flex-col items-center w-full bg-black p-8">

                        <h2 className="text-4xl mb-4">Pourquoi choisir notre service de dépôt-vente ?</h2>
                        <p className="text-lg text-center max-w-4xl">
                            Notre service de dépôt-vente offre une solution simple et efficace pour vendre votre véhicule d'occasion. Nous nous occupons de tout, de l'évaluation à la vente, vous permettant ainsi de gagner du temps et d'éviter les complications liées à la vente directe.
                        </p>
                    </div>
                  </section>




                  <section>
                    <div className="flex flex-col items-center w-full gap-10 bg-black p-8">
                      
                        <h2 className="text-4xl mb-4">Contactez-nous</h2>
                        <p className="text-lg text-center max-w-4xl">
                            Prêt à vendre votre véhicule via notre service de dépôt-vente ? Contactez-nous dès aujourd'hui pour plus d'informations ou pour prendre rendez-vous.
                        </p>
                        <a href="/contact" className="px-20 py-5 text-xl bg-white rounded-xl text-black">Contactez nous !</a>
                    </div>
                  </section>



                  <section className="flex flex-col w-full h-auto">
                    <div className="flex flex-col items-center w-full bg-black p-8">
                        <h2 className="text-4xl text-white">Nos depot deja vendu :</h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8 p-20">
                           <div>
                              <img src="/img/depot1.jpg" alt="Dépot Vente 1" className="w-full h-auto rounded-lg" />
                              <h3 className="text-xl mt-2">Renault Clio 2015</h3>                            
                           </div>
                            <div>
                              <img src="/img/depot2.jpg" alt="Dépot Vente 2" className="w-full h-auto rounded-lg" />
                              <h3 className="text-xl mt-2">Peugeot 208 2018</h3>
                            </div>

                            <div>
                              <img src="/img/alpineVert.jpg" alt="Dépot Vente 3" className="w-full h-auto rounded-lg" />
                              <h3 className="text-xl mt-2">Citroën C3 2017</h3>
                            </div>

                            <div>
                              <img src="/img/depot4.jpg" alt="Dépot Vente 4" className="w-full h-auto rounded-lg" />
                              <h3 className="text-xl mt-2">Ford Fiesta 2016</h3>
                            </div>

                        </div>
                    </div>
                  </section>






                  {/* Footer */}
                  <Footer />
            
                </div>
        </div>
    )}