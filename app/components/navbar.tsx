"use client";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full bg-black fixed top-0 left-0 z-50 border-b border-green-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <a href="/" className="flex items-center">
                            <img className="h-10 md:h-14" src="/img/logo.png" alt="Time to Drive" />
                            <span className="text-white text-lg font-bold ms-3 hidden sm:inline">TIME TO DRIVE</span>
                        </a>
                    </div>

                    {/* Desktop links */}
                    <div className="hidden md:flex items-center space-x-6 text-white text-lg">
                        <a href="/" className="text-gray-300 hover:text-white">Accueil</a>
                        <a href="/repriseVehicule" className="text-gray-300 hover:text-white">Reprise</a>
                        <a href="https://pros.lacentrale.fr/C055989" className="text-gray-300 hover:text-white">Nos véhicules</a>
                        <a href="/depotVente" className="text-gray-300 hover:text-white">Dépot Vente</a>
                        <a href="/nosServices" className="text-gray-300 hover:text-white">Nos Services</a>
                        <a href="/contact" className="text-gray-300 hover:text-white">Contact</a>
                    </div>

                    {/* Right side: phone on desktop, burger on mobile */}
                    <div className="flex items-center gap-4">
                        <div className="hidden md:block">
                            <a href="tel:+33617926666" className="text-white font-semibold">06 17 92 66 66</a>
                        </div>

                        {/* Burger button */}
                        <button
                            aria-label="Open menu"
                            aria-expanded={open}
                            onClick={() => setOpen((v) => !v)}
                            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {open ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu overlay */}
            <div className={`md:hidden ${open ? "block" : "hidden"}`}>
                <div className="pt-2 pb-6 bg-black/95 border-t border-green-500">
                    <div className="px-4 space-y-4">
                        <a href="/" onClick={() => setOpen(false)} className="block text-white py-2 px-2 rounded hover:bg-white/5">Accueil</a>
                        <a href="/repriseVehicule" onClick={() => setOpen(false)} className="block text-white py-2 px-2 rounded hover:bg-white/5">Reprise</a>
                        <a href="https://pros.lacentrale.fr/C055989" onClick={() => setOpen(false)} className="block text-white py-2 px-2 rounded hover:bg-white/5">Nos véhicules</a>
                        <a href="/depotVente" onClick={() => setOpen(false)} className="block text-white py-2 px-2 rounded hover:bg-white/5">Dépot Vente</a>
                        <a href="/nosServices" onClick={() => setOpen(false)} className="block text-white py-2 px-2 rounded hover:bg-white/5">Nos Services</a>
                        <a href="/contact" onClick={() => setOpen(false)} className="block text-white py-2 px-2 rounded hover:bg-white/5">Contact</a>

                        <div className="pt-4 border-t border-gray-800">
                            <a href="tel:+33617926666" className="block text-white font-semibold">06 17 92 66 66</a>
                            <a href="mailto:contact@time-to-drive.com" className="block text-gray-300 mt-2">contact@time-to-drive.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}