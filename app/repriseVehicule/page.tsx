import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import FormulairePersonnalise from "../components/FormulairePersonalise";

export default function RepriseVehicule() {
  return (
    <div className="flex flex-col h-full ">
      <Navbar />

        <section className="flex flex-col items-center  h-full w-full bg-black p-8 mt-24">
          <div className="flex items-center justify-center flex-col w-full max-w-4xl h-48 md:h-96 bg-cover bg-center bg-[url('/img/depot2.jpg')] rounded-xl">
            <h1 className="text-3xl md:text-6xl text-white font-bold p-4">Reprise véhicule</h1>
          </div>
          <div className="flex flex-col items-center justify-center gap-10 text-center w-full max-w-3xl pt-8 md:pt-20 px-4">
            <p className="text-white text-base md:text-2xl w-full h-auto">

              Chez Time to Drive, nous vous proposons un service simple et rapide de reprise de votre véhicule, quelle que soit sa marque, son modèle ou son état. <br />
              Notre objectif : vous offrir une solution transparente, équitable et sans contrainte pour vendre votre voiture en toute sérénité. <br />
              <br />
              Comment ça marche ?
              <br />
              Estimation gratuite : Vous nous transmettez les informations sur votre véhicule (marque, modèle, kilométrage, année, état général, etc.).

              Offre de reprise personnalisée : Nous évaluons sa valeur selon le marché actuel et vous faisons une proposition claire et sans engagement.

              Prise de rendez-vous : Si notre offre vous convient, nous fixons ensemble une date pour la reprise du véhicule.

              Paiement rapide : Après vérification du véhicule, le paiement est effectué immédiatement, et nous nous occupons de toutes les démarches administratives.
              <br />

              Les avantages Time to Drive :

              Reprise possible sans obligation d’achat

              Gain de temps : aucune annonce à publier ni négociation à gérer

              Paiement sécurisé et rapide

              Accompagnement personnalisé à chaque étape

              Chez Time to Drive, vendre votre voiture n’a jamais été aussi simple !
            </p>
          </div>
        </section>

      <section className="flex flex-col items-center justify-center w-full bg-black p-8">
          <div className="w-full px-4">
            <div className="w-full max-w-4xl mx-auto">
              <FormulairePersonnalise />
            </div>
          </div>
      </section>

      <Footer />
    </div>
  )
}
