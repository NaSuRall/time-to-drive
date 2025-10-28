import ContactForm from "../components/contactFrom"
import Navbar from "../components/navbar"
import Footer from "../components/footer"


export default function contact(){
    return(
        <div>
                <div className="flex flex-col h-full ">
                  <Navbar />
            
                    <section className="flex flex-col items-center  h-full w-full bg-black p-8 mt-24">
                        <div className="flex items-center justify-center flex-col w-full max-w-4xl md:w-[80%] h-48 md:h-96 bg-cover bg-center bg-[url('/img/alpineVert.jpg')] rounded-xl">
                            <h1 className="text-3xl md:text-6xl text-white font-bold p-4">Nous Contacter</h1>
                        </div>
                    </section>


                    <section className="flex flex-col w-full min-h-screen bg-black items-center justify-center p-8">
                        <div className="w-full flex items-start justify-center px-4">
                          <div className="w-full max-w-4xl">
                            <ContactForm />
                          </div>
                        </div>
                    </section>



                  {/* Footer */}
                  <Footer />
            
                </div>
        </div>
    )
}