import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import FormulairePersonnalise from "../components/FormulairePersonalise";

export default function RepriseVehicule() {
  return (
    <div className="flex flex-col h-full ">
      <Navbar />

        <section className="flex flex-col items-center  h-full w-full bg-black p-8 mt-24">
          <div className=" flex items-center justify-center flex-col w-[80%] h-96 bg-cover bg-center bg-[url('/img/alpineVert.jpg')] rounded-xl">
          </div>
            <div className="flex flex-col items-center justify-center  gap-20 text-center w-[80%] pt-20">
                <p className="text-white text-2xl w-full h-auto">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati vitae natus accusantium laboriosam libero doloremque quasi neque alias adipisci ullam, ducimus dignissimos maxime sint deserunt mollitia commodi officiis eligendi et.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque itaque possimus consectetur aut iste. Dicta distinctio illo omnis sint laboriosam saepe nobis ipsum, officia atque numquam. Eius ratione deleniti sed.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, nostrum consequatur perferendis voluptas nulla cupiditate sapiente sunt quidem nemo quisquam optio nisi officia illum porro id corporis. Sequi, recusandae quia.
                </p>
            </div>
        </section>

      <section className="flex flex-col items-center justify-center w-full bg-black p-8">
          <FormulairePersonnalise />
      </section>

      <Footer />
    </div>
  )
}
