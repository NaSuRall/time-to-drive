export default function Navbar() {

    return (
        <nav className="w-full h-24 bg-black flex items-center px-4 justify-around border-b-5 border-green-500 fixed z-3">
            <div className="flex items-center">
                <img className="h-26" src="/img/logo.png" alt="" />
                <h1 className="text-white text-xl font-bold">TIME TO DRIVE</h1>
            </div>
            <div className="flex flex-row align-center justify-between text-xl text-white gap-8">
                <a href="/" className="text-gray-300 hover:text-white mx-2">Accueil</a>
                <a href="/repriseVehicule" className="text-gray-300 hover:text-white mx-2">Reprise de véhicule</a>
                <a href="https://pros.lacentrale.fr/C055989" className="text-gray-300 hover:text-white mx-2">Nos véhicules d'occasion</a>
                <a href="/depotVente" className="text-gray-300 hover:text-white mx-2">Dépot Vente</a>
                <a href="/nosServices" className="text-gray-300 hover:text-white mx-2">Nos Services</a>
                <a href="/contact" className="text-gray-300 hover:text-white mx-2">Nous Contacter</a>
            </div>
        </nav>
    );
}