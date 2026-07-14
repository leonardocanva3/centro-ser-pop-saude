import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://centro-ser-pop-saude.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Centro SER - Psicologia TCC, Educação Inclusiva e Atendimento Domiciliar em Piracicaba",
  description:
    "Centro SER - Espaço NeuroAfetivo & IntegraVida em Piracicaba, SP. Psicologia TCC para crianças, adolescentes, adultos e idosos, reforço escolar especializado, educação inclusiva, atendimento online e atendimento domiciliar humanizado.",
  keywords: [
    "psicóloga em Piracicaba",
    "psicologia infantil Piracicaba",
    "psicoterapia TCC Piracicaba",
    "psicóloga TCC Piracicaba",
    "atendimento psicológico infantil",
    "psicoterapia adolescente Piracicaba",
    "psicoterapia adulto Piracicaba",
    "psicoterapia idosos Piracicaba",
    "educação inclusiva Piracicaba",
    "reforço escolar especializado Piracicaba",
    "atendimento domiciliar idosos Piracicaba",
    "psicóloga para crianças neurodivergentes",
    "apoio psicopedagógico Piracicaba",
    "Centro SER Piracicaba",
    "Silvia Helena Tamborim",
  ],
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Centro SER - Psicologia TCC, Educação Inclusiva e Atendimento Domiciliar em Piracicaba",
    description:
      "Espaço NeuroAfetivo & IntegraVida em Piracicaba, SP para cuidado emocional, desenvolvimento humano e atendimento domiciliar humanizado.",
    url: siteUrl,
    siteName: "Centro SER",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/fachada.jpg",
        width: 1200,
        height: 630,
        alt: "Fachada do Centro SER em Piracicaba",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Centro SER - Psicologia TCC em Piracicaba",
    description:
      "Psicologia TCC, educação inclusiva, apoio psicopedagógico e atendimento domiciliar humanizado.",
    images: ["/images/fachada.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${manrope.variable} ${playfair.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[#fbf8f1] font-sans">{children}</body>
    </html>
  );
}
