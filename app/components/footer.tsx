export default function Footer() {

    return (
        <footer className="bg-black text-gray-200 py-10 border-t-6 border-green-500">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between gap-10">

            {/* Logo et description */}
            <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-white">Time To Drive</h2>
            <p className="text-gray-400 max-w-xs">
                Découvrez nos produits et services de qualité. Suivez-nous sur nos réseaux pour ne rien manquer.
            </p>
            </div>

            {/* Liens utiles */}
            <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-white mb-2">Liens utiles</h3>
            <a href="#" className="hover:text-white transition-colors">Accueil</a>
            <a href="#" className="hover:text-white transition-colors">Produits</a>
            <a href="#" className="hover:text-white transition-colors">À propos</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>

            {/* Nous Contacter */}
            <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-white transition-colors">Nous Contacter</h3>
                <div className="text-white">Email: Contact@time-to-drive.com</div>
                <div className="text-white">Téléphone: +33 6 17 92 66 66</div>


            </div>


            {/* Réseaux sociaux */}
            <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-white mb-2">Suivez-nous</h3>
            <div className="flex gap-4">
                <a href="#" className="hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 24 24"><path d="M24 4.557a9.832 9.832 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.38 4.482A13.941 13.941 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.523 6.555A4.897 4.897 0 0 1 .964 9.15v.062a4.917 4.917 0 0 0 3.946 4.827 4.902 4.902 0 0 1-2.212.084 4.918 4.918 0 0 0 4.59 3.414 9.867 9.867 0 0 1-6.102 2.104c-.396 0-.788-.023-1.175-.068a13.945 13.945 0 0 0 7.557 2.212c9.054 0 14.002-7.496 14.002-13.986 0-.21-.004-.423-.014-.634A10.025 10.025 0 0 0 24 4.557z"/></svg>
                </a>
                <a href="https://www.tiktok.com/@timetodrive95" className="hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 24 24"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.414c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z"/></svg>
                </a>
                <a href="https://www.instagram.com/timetodrive95/" className="hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.371 0 0 5.372 0 12s5.371 12 12 12 12-5.372 12-12S18.629 0 12 0zm0 5.838a6.162 6.162 0 1 1 0 12.324 6.162 6.162 0 0 1 0-12.324zm0 10.162a3.999 3.999 0 1 0 0-7.998 3.999 3.999 0 0 0 0 7.998zm6.406-11.845a1.44 1.44 0 1 1-2.879 0 1.44 1.44 0 0 1 2.879 0z"/></svg>
                </a>
            </div>
            </div>



        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
            &copy; 2025 Time to drive. Tous droits réservés.
        </div>
        </footer>
    );
}