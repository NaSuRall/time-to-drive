"use client"; // Assurez-vous que ce composant est côté client
import { useState } from "react";

export default function FormulairePersonnalise() {
  // État pour stocker les valeurs du formulaire
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    marque: "",
    modele: "",
    finition: "",
    boite: "",
    carburant: "",
    immatriculation: "",
    annee: "",
    kilometrage: "",
    prix: "",
    agreeTerms: false,
  });

  // Gestion des changements dans les champs du formulaire
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  // Gestion de la soumission du formulaire

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });


    if (res.ok) {
      console.log("✅ Email envoyé avec succès");
      setFormData({
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        marque: "",
        modele: "",
        finition: "",
        boite: "",
        carburant: "",
        immatriculation: "",
        annee: "",
        kilometrage: "",
        prix: "",
        agreeTerms: false,
      });
    } else {
          console.log("❌ Erreur lors de l'envoi du message.");
        }
      };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-[40%] pb-20"
    >
      {/* Section : Informations personnelles */}
      <h3 className="flex text-4xl text-white pt-6 pb-6 border-b border-green-500">
        Vos informations personnelles
      </h3>
      <div className="grid gap-6 mb-6 md:grid-cols-2 mt-5">
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
          >
            Nom
          </label>
          <input
            type="text"
            id="first_name"
            value={formData.first_name}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John"
            required
          />
        </div>
        <div>
          <label
            htmlFor="last_name"
            className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
          >
            Prénom
          </label>
          <input
            type="text"
            id="last_name"
            value={formData.last_name}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Doe"
            required
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
          >
            Numéro de téléphone
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="+33 6 00 00 00 00"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="john.doe@example.com"
            required
          />
        </div>
      </div>

      {/* Section : Votre véhicule */}
      <h3 className="flex text-4xl text-white pt-6 pb-6 border-b border-green-500">
        Votre véhicule
      </h3>
      <div className="grid gap-6 mb-6 md:grid-cols-2 mt-5">
        <div>
          <label
            htmlFor="marque"
            className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
          >
            Marque
          </label>
          <input
            type="text"
            id="marque"
            value={formData.marque}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Marque"
            required
          />
        </div>
        <div>
          <label
            htmlFor="modele"
            className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
          >
            Modèle
          </label>
          <input
            type="text"
            id="modele"
            value={formData.modele}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Modèle"
            required
          />
        </div>
        <div>
          <label
            htmlFor="finition"
            className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
          >
            Finition
          </label>
          <input
            type="text"
            id="finition"
            value={formData.finition}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Finition"
            required
          />
        </div>
        <div>
          <label
            htmlFor="boite"
            className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
          >
            Boite
          </label>
          <input
            type="text"
            id="boite"
            value={formData.boite}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Boite"
            required
          />
        </div>
        <div>
          <label
            htmlFor="carburant"
            className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
          >
            Carburant
          </label>
          <input
            type="text"
            id="carburant"
            value={formData.carburant}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Carburant"
            required
          />
        </div>
        <div>
          <label
            htmlFor="immatriculation"
            className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
          >
            Numéro d'immatriculation
          </label>
          <input
            type="text"
            id="immatriculation"
            value={formData.immatriculation}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Immatriculation"
            required
          />
        </div>
        <div>
          <label
            htmlFor="annee"
            className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
          >
            Année
          </label>
          <input
            type="text"
            id="annee"
            value={formData.annee}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Année"
            required
          />
        </div>
        <div>
          <label
            htmlFor="kilometrage"
            className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
          >
            Kilométrage
          </label>
          <input
            type="text"
            id="kilometrage"
            value={formData.kilometrage}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Kilométrage"
            required
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="prix"
          className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
        >
          Prix de rachat espéré
        </label>
        <input
          type="text"
          id="prix"
          value={formData.prix}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Prix"
          required
        />
      </div>

      {/* Case à cocher pour les conditions */}
      <div className="flex items-start mb-6 mt-6">
        <div className="flex items-center h-5">
          <input
            id="agreeTerms"
            type="checkbox"
            checked={formData.agreeTerms}
            onChange={handleChange}
            className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
            required
          />
        </div>
        <label
          htmlFor="agreeTerms"
          className="ms-2 text-xl font-medium text-gray-900 dark:text-gray-300"
        >
          I agree with the{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline dark:text-blue-500"
          >
            terms and conditions
          </a>
          .
        </label>
      </div>

      {/* Bouton de soumission */}
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-blue-800 transition"
      >
        Submit
      </button>
    </form>
  );
}
