import contactForm from "../components/contactFrom"
import Navbar from "../components/navbar"
import Footer from "../components/footer"


export default function contact(){
    return(
        <div>
                <div className="flex flex-col h-full bg-white ">
                  <Navbar />
            
                    <section className="flex flex-col items-center  h-full w-full bg-black p-8 mt-24">
                        <div className=" flex items-center justify-center flex-col w-[80%] h-96 bg-cover bg-center bg-[url('/img/alpineVert.jpg')] rounded-xl">
                            <h1 className="text-6xl">Nous Contacter</h1>
                        </div>
                    </section>


                    <section className="flex flex-col w-full h-screen bg-black items-center justify-center">
                  
                    </section>



                  {/* Footer */}
                  <Footer />
            
                </div>
        </div>
    )
}