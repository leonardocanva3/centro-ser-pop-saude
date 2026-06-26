import LandingPage from "@/components/LandingPage";

const siteUrl = "https://centro-ser-pop-saude.vercel.app";
const instagram = "https://www.instagram.com/centro_ser_espaco_neuroafetivo/";
const maps =
  "https://www.google.com/maps/place/Centro+SER+-+Espa%C3%A7o+NeuroAfetivo+%7C+Psicologia/@-22.7258325,-47.6405004,17z/data=!4m15!1m8!3m7!1s0x94c631bb05bfb8b7:0xcbe8c4189de56a26!2sCentro+SER+-+Espa%C3%A7o+NeuroAfetivo+%7C+Psicologia!8m2!3d-22.7258872!4d-47.6403628!10e5!16s%2Fg%2F11zbcyk3bx!3m5!1s0x94c631bb05bfb8b7:0xcbe8c4189de56a26!8m2!3d-22.7258872!4d-47.6403628!16s%2Fg%2F11zbcyk3bx?authuser=0&entry=ttu&g_ep=EgoyMDI2MDYyMi4wIKXMDSoASAFQAw%3D%3D";

const services = [
  "Psicoterapia Infantil",
  "Psicoterapia para Adolescentes",
  "Psicoterapia para Adultos",
  "Psicoterapia para Idosos",
  "Terapia Cognitivo-Comportamental",
  "Reforço Escolar Especializado",
  "Apoio Psicopedagógico",
  "Atendimento a Crianças Neurodivergentes",
  "Avaliação Neuropsicológica",
  "Atendimento Online",
  "Atendimento Domiciliar Humanizado",
  "Atendimento para Idosos",
  "Atendimento para Pessoas com Mobilidade Reduzida",
  "Atendimento para Pessoas com Deficiência",
];

const faqs = [
  {
    question: "O Centro SER atende crianças?",
    answer:
      "Sim. O Centro SER realiza atendimento infantil com olhar acolhedor, recursos lúdicos e abordagem voltada ao desenvolvimento emocional, social e familiar.",
  },
  {
    question: "Há atendimento para adolescentes e adultos?",
    answer:
      "Sim. São realizados atendimentos para adolescentes, adultos e idosos, com psicoterapia baseada na Terapia Cognitivo-Comportamental (TCC).",
  },
  {
    question: "O Centro SER oferece atendimento online?",
    answer:
      "Sim. Além dos atendimentos presenciais, também há possibilidade de atendimento online conforme a necessidade de cada caso.",
  },
  {
    question: "O que é o IntegraVida?",
    answer:
      "O IntegraVida é uma frente de atendimento domiciliar humanizado voltada principalmente para idosos, pessoas com mobilidade reduzida e pessoas com deficiência.",
  },
  {
    question: "O Centro SER atende crianças neurodivergentes?",
    answer:
      "Sim. O Centro SER oferece acolhimento e suporte especializado a crianças neurodivergentes, integrando Psicologia, Educação Inclusiva e orientação familiar.",
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
        "Centro SER - Espaco NeuroAfetivo & IntegraVida em Piracicaba/SP. Psicologia TCC, educacao inclusiva e atendimento domiciliar humanizado.",
      telephone: "+55 19 99604-4947",
      email: "psi.silviatamborim@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rua Alfredo Guedes, 615 - Bairro Alto",
        addressLocality: "Piracicaba",
        addressRegion: "SP",
        addressCountry: "BR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -22.7258872,
        longitude: -47.6403628,
      },
      hasMap: maps,
      sameAs: [instagram],
      areaServed: "Piracicaba/SP",
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
      name: "Silvia Helena Tamborim",
      jobTitle: "Psicologa TCC, Pedagoga e Especialista em Educacao Inclusiva",
      affiliation: {
        "@id": `${siteUrl}/#centro-ser`,
      },
      telephone: "+55 19 99604-4947",
      email: "psi.silviatamborim@gmail.com",
      knowsAbout: [
        "Terapia Cognitivo-Comportamental",
        "Educacao Inclusiva",
        "TEA",
        "Neurodivergencias",
        "Atendimento domiciliar",
        "Orientacao familiar",
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
