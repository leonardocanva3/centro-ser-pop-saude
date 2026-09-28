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
  title: "Psicóloga Online para Adultos | Sílvia Tamborim | Centro SER",
  description:
    "Psicoterapia online para adultos com Sílvia Helena Tamborim, psicóloga clínica e especialista em Terapia Cognitivo-Comportamental. Atendimento online e presencial.",
  keywords: [
    "psicóloga online para adultos",
    "psicoterapia online para adultos",
    "Terapia Cognitivo-Comportamental",
    "psicóloga TCC",
    "psicoterapia adulto",
    "atendimento psicológico online",
    "atendimento psicológico presencial",
    "IntegraVida",
    "atendimento domiciliar humanizado",
    "Centro SER",
    "Sílvia Helena Tamborim",
  ],
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Psicóloga Online para Adultos | Sílvia Tamborim | Centro SER",
    description:
      "Psicoterapia online para adultos com Sílvia Helena Tamborim, psicóloga clínica e especialista em Terapia Cognitivo-Comportamental.",
    url: siteUrl,
    siteName: "Centro SER",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/fachada.jpg",
        width: 1200,
        height: 630,
        alt: "Ambiente acolhedor do Centro SER",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicóloga Online para Adultos | Sílvia Tamborim",
    description:
      "Psicoterapia online para adultos, Terapia Cognitivo-Comportamental e atendimento presencial.",
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
