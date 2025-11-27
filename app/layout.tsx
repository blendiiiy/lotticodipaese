import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarSections } from "@/components/21dev/navbar-sections";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { ScrollProgress } from "@/components/scroll-progress";
import { ScrollToTop } from "@/components/scroll-to-top";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "L'Ottico di Paese - Ottico Professionale a Paese Treviso | Esami Vista Gratuiti",
    template: "%s | L'Ottico di Paese",
  },
  description: "L'Ottico di Paese: ottico professionale a Paese, Treviso. Esami della vista gratuiti, lenti progressive, monofocali e anti-luce blu. Contattologia avanzata, riparazione occhiali e consulenza personalizzata. Garanzia 12 mesi. Via Guglielmo Marconi 7, Paese TV.",
  keywords: [
    "ottico Paese",
    "ottico Treviso",
    "occhiali Paese",
    "occhiali Treviso",
    "esame vista gratuito Paese",
    "lenti progressive Paese",
    "lenti monofocali Treviso",
    "lenti anti luce blu",
    "contattologia Paese",
    "riparazione occhiali Treviso",
    "optometrista Paese",
    "oculista Paese",
    "occhiali da vista Paese",
    "montature occhiali Treviso",
    "consulenza occhiali Paese",
    "garanzia occhiali",
    "check up visivo gratuito"
  ],
  authors: [{ name: "L'Ottico di Paese" }],
  creator: "L'Ottico di Paese",
  publisher: "L'Ottico di Paese",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.lotticodipaese.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://www.lotticodipaese.com",
    siteName: "L'Ottico di Paese",
    title: "L'Ottico di Paese - Soluzioni Visive Professionali a Paese, Treviso",
    description: "Servizi professionali di optometria e contattologia a Paese, Treviso. Check-up gratuiti e garanzia 12 mesi. Via Guglielmo Marconi 7.",
    images: [
      {
        url: "https://www.lotticodipaese.com/images/L'Ottico di Paese_files/image00017.jpeg",
        width: 1200,
        height: 630,
        alt: "L'Ottico di Paese - Soluzioni Visive Professionali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "L'Ottico di Paese",
    description: "Soluzioni visive professionali a Paese, Treviso",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "L'Ottico di Paese",
  "url": "https://www.lotticodipaese.com",
  "logo": "https://www.lotticodipaese.com/images/L'Ottico di Paese_files/image00017.jpeg",
  "description": "Ottico professionale a Paese, Treviso. Servizi di optometria, contattologia e riparazione occhiali.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Via Guglielmo Marconi, 7",
    "addressLocality": "Paese",
    "addressRegion": "TV",
    "postalCode": "31038",
    "addressCountry": "IT"
  },
  "telephone": "+390422450568",
  "email": "info@lotticodipaese.com",
  "sameAs": [
    "https://www.facebook.com/lotticodipaese",
    "https://www.instagram.com/lotticodipaese"
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <ScrollProgress />
        <NavbarSections />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <ScrollToTop />
      </body>
    </html>
  );
}

