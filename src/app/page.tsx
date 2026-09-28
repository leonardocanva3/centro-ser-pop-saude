import LandingPage from "@/components/LandingPage";

const siteUrl = "https://centro-ser-pop-saude.vercel.app";
const instagram = "https://www.instagram.com/centro_ser_espaco_neuroafetivo/";

const services = [
  "Psicoterapia para Adultos",
  "Psicoterapia Online para Adultos",
  "Terapia Cognitivo-Comportamental",
  "Atendimento Online",
  "Atendimento Presencial",
  "Atendimento Domiciliar Humanizado",
  "Atendimento para Pessoas com Mobilidade Reduzida",
  "Atendimento para Pessoas com Deficiência",
];

const faqs = [
  {
    question: "O atendimento psicológico online é para adultos?",
    answer:
      "Sim. A psicoterapia online é voltada ao atendimento psicológico individual de adultos.",
  },
  {
    question: "Qual abordagem é utilizada na psicoterapia?",
    answer:
      "A atuação clínica utiliza princípios da Terapia Cognitivo-Comportamental (TCC), com escuta qualificada e acompanhamento individualizado.",
  },
  {
    question: "O Centro SER oferece atendimento online?",
    answer:
      "Sim. O atendimento online é a modalidade principal, realizado por videochamada em horário previamente agendado.",
  },
  {
    question: "O que é o IntegraVida?",
    answer:
      "O IntegraVida é uma frente de atendimento domiciliar humanizado voltada principalmente para idosos, pessoas com mobilidade reduzida e pessoas com deficiência.",
  },
  {
    question: "Também há atendimento presencial?",
    answer:
      "Sim. Além da psicoterapia online, o Centro SER mantém atendimento presencial em ambiente preparado para privacidade, conforto e acolhimento.",
  },
  {
    question: "Como agendar um atendimento?",
    answer: "O agendamento pode ser feito diretamente pelo WhatsApp: (19) 99604-4947.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "MedicalBusiness", "ProfessionalService"],
      "@id": `${siteUrl}/#centro-ser`,
      name: "Centro SER - Espaco NeuroAfetivo & IntegraVida",
      alternateName: "Centro SER Piracicaba",
      url: siteUrl,
      image: [`${siteUrl}/images/logo-centro-ser.png`, `${siteUrl}/images/fachada.jpg`],
      logo: `${siteUrl}/images/logo-centro-ser.png`,
      description:
        "Centro SER - Espaco NeuroAfetivo & IntegraVida. Psicoterapia online para adultos, Terapia Cognitivo-Comportamental, atendimento presencial e atendimento domiciliar humanizado.",
      telephone: "+55 19 99604-4947",
      email: "psi.silviatamborim@gmail.com",
      sameAs: [instagram],
      areaServed: {
        "@type": "City",
        name: "Piracicaba",
        containedInPlace: {
          "@type": "State",
          name: "SP",
        },
      },
      medicalSpecialty: ["Psychology", "MentalHealth"],
      makesOffer: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service,
        },
      })),
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#silvia-tamborim`,
      name: "Sílvia Helena Tamborim",
      jobTitle: "Psicologa Clinica e Especialista em Terapia Cognitivo-Comportamental",
      affiliation: {
        "@id": `${siteUrl}/#centro-ser`,
      },
      telephone: "+55 19 99604-4947",
      email: "psi.silviatamborim@gmail.com",
      knowsAbout: [
        "Terapia Cognitivo-Comportamental",
        "Psicoterapia para adultos",
        "Atendimento psicologico online",
        "Educacao Inclusiva",
        "Neurodivergencias na vida adulta",
        "Atendimento domiciliar",
      ],
      identifier: "CRP 06/213394",
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Centro SER - Espaco NeuroAfetivo & IntegraVida",
      url: siteUrl,
      publisher: {
        "@id": `${siteUrl}/#centro-ser`,
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <LandingPage faqs={faqs} />
    </>
  );
}
