import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CookieBanner from "./components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Time To Drive - Vente, Reprise et Dépôt-vente de véhicules",
    template: "%s | Time To Drive",
  },
  description:
    "Time To Drive — Vente, reprise et dépôt-vente de véhicules. Estimation rapide, paiement sécurisé et accompagnement personnalisé.",
  metadataBase: new URL("https://time-to-drive.com"),
  openGraph: {
    title: "Time To Drive - Vente, Reprise et Dépôt-vente de véhicules",
    description:
      "Time To Drive — Estimation, reprise et vente de véhicules. Paiement rapide et démarches prises en charge.",
    url: "https://time-to-drive.com",
    siteName: "Time To Drive",
    images: ["/img/depotVenteHeader.jpg"],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Time To Drive",
    description:
      "Vente et reprise de véhicules - estimation rapide, paiement sécurisé.",
    images: ["/img/depotVenteHeader.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    name: "Time To Drive",
    url: "https://time-to-drive.com",
    logo: "https://time-to-drive.com/img/depotVenteHeader.jpg",
    telephone: "+33 6 17 92 66 66",
    address: {
      "@type": "PostalAddress",
      streetAddress: "18 rue Denis Papin",
      addressLocality: "Beauchamp",
      postalCode: "95250",
      addressCountry: "FR",
    },
    sameAs: [
      "https://www.instagram.com/timetodrive95/",
      "https://www.tiktok.com/@timetodrive95"
    ]
  };

  return (
    <html lang="fr">
      <head>
        {/* Favicons and webmanifest placed in /public/favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <CookieBanner />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
