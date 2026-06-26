"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Baby,
  Brain,
  Check,
  GraduationCap,
  HeartHandshake,
  Home,
  Mail,
  MapPin,
  Menu,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

type Faq = {
  question: string;
  answer: string;
};

type LandingPageProps = {
  faqs: Faq[];
};

const whatsappBase = "https://wa.me/5519996044947";
const instagram = "https://www.instagram.com/centro_ser_espaco_neuroafetivo/";
const maps =
  "https://www.google.com/maps/place/Centro+SER+-+Espa%C3%A7o+NeuroAfetivo+%7C+Psicologia/@-22.7258325,-47.6405004,17z/data=!4m15!1m8!3m7!1s0x94c631bb05bfb8b7:0xcbe8c4189de56a26!2sCentro+SER+-+Espa%C3%A7o+NeuroAfetivo+%7C+Psicologia!8m2!3d-22.7258872!4d-47.6403628!10e5!16s%2Fg%2F11zbcyk3bx!3m5!1s0x94c631bb05bfb8b7:0xcbe8c4189de56a26!8m2!3d-22.7258872!4d-47.6403628!16s%2Fg%2F11zbcyk3bx?authuser=0&entry=ttu&g_ep=EgoyMDI2MDYyMi4wIKXMDSoASAFQAw%3D%3D";

const nav = [
  ["Início", "#inicio"],
  ["O Centro SER", "#centro"],
  ["Atendimentos", "#atendimentos"],
  ["Silvia", "#silvia"],
  ["Ambiente", "#ambiente"],
  ["Localização", "#localizacao"],
] as const;

const credentials = ["CRP 06/213394", "Atendimento presencial, online e domiciliar", "Piracicaba/SP"];

const carePillars = [
  {
    title: "Acolhimento",
    text: "Escuta qualificada, presença e respeito à história de cada paciente.",
    icon: HeartHandshake,
  },
  {
    title: "Ética",
    text: "Cuidado profissional, sigiloso e conduzido com responsabilidade.",
    icon: ShieldCheck,
  },
  {
    title: "Singularidade",
    text: "Um olhar individualizado para necessidades emocionais, familiares e pedagógicas.",
    icon: Sparkles,
  },
];

const serviceCards = [
  { title: "Psicoterapia Infantil", text: "Acolhimento lúdico e sensível para crianças.", icon: Baby },
  { title: "Psicoterapia para Adolescentes", text: "Escuta, vínculo e orientação familiar.", icon: UsersRound },
  { title: "Psicoterapia para Adultos", text: "Autoconhecimento, saúde emocional e TCC.", icon: Brain },
  { title: "Psicoterapia para Idosos", text: "Cuidado respeitoso com história e autonomia.", icon: HeartHandshake },
  { title: "TCC", text: "Terapia Cognitivo-Comportamental baseada em evidências.", icon: Stethoscope },
  { title: "Reforço Escolar Especializado", text: "Apoio pedagógico com olhar inclusivo.", icon: GraduationCap },
  { title: "Neurodivergências", text: "Suporte a crianças neurodivergentes e famílias.", icon: Sparkles },
  { title: "Atendimento Domiciliar", text: "Cuidado humanizado no ambiente familiar.", icon: Home },
];

function whatsappLink(message = "Olá, vim pelo site do Centro SER e gostaria de agendar um atendimento.") {
  return `${whatsappBase}?text=${encodeURIComponent(message)}`;
}

function WhatsAppButton({
  children,
  href = whatsappLink(),
  large = false,
}: {
  children: ReactNode;
  href?: string;
  large?: boolean;
}) {
  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
      <Link
        className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#2f6f73] font-bold text-white shadow-[0_18px_38px_rgba(47,111,115,0.24)] transition hover:bg-[#285f62] focus:outline-none focus:ring-2 focus:ring-[#2f6f73] focus:ring-offset-2 ${
          large ? "min-h-14 px-8 py-4 text-base" : "min-h-12 px-6 py-3 text-sm"
        }`}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp aria-hidden="true" className="text-lg" />
        {children}
      </Link>
    </motion.div>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-[#c9ad69]/45 bg-[#fbf8f1] px-4 py-2 text-[0.72rem] font-extrabold uppercase tracking-[0.22em] text-[#9b7a33]">
      {children}
    </span>
  );
}

function Bullet({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3 text-sm font-semibold leading-6 text-[#49443c]">
      <Check className="mt-1 shrink-0 text-[#b28b3d]" size={16} />
      <span>{children}</span>
    </li>
  );
}

export default function LandingPage({ faqs }: LandingPageProps) {
  void faqs;

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fbf8f1] text-[#2f2c27]">
      <header className="sticky top-0 z-50 border-b border-[#eadfcd]/80 bg-[#fffdf8]/88 shadow-[0_12px_42px_rgba(47,111,115,0.06)] backdrop-blur-2xl">
        <div className="mx-auto flex min-h-[104px] max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          <Link href="#inicio" className="relative h-20 w-60 shrink-0 sm:h-24 sm:w-72" aria-label="Ir para o início">
            <Image src="/images/marca-dagua.png" alt="Logo Centro SER Espaço NeuroAfetivo" fill sizes="(min-width: 640px) 288px, 240px" className="object-contain object-left" priority />
          </Link>

          <nav className="hidden items-center gap-8 xl:flex" aria-label="Navegação principal">
            {nav.map(([label, href]) => (
              <Link key={label} href={href} className="border-b border-transparent pb-1 text-[0.8rem] font-bold text-[#2f6f73] transition duration-300 hover:border-[#c9ad69] hover:text-[#245d61]">
                {label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link href={instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram do Centro SER" className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#e1d6c3] bg-white/82 text-[#2f6f73] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#c9ad69] hover:text-[#9b7a33]">
              <FaInstagram />
            </Link>
            <WhatsAppButton>Agendar pelo WhatsApp</WhatsAppButton>
          </div>

          <details className="relative lg:hidden">
            <summary className="inline-flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-[#e1d6c3] bg-white text-[#2f6f73] marker:hidden" aria-label="Abrir menu">
              <Menu size={20} />
            </summary>
            <div className="absolute right-0 top-14 w-[min(86vw,320px)] rounded-[1.5rem] border border-[#eadfcd] bg-[#fffdf8] p-4 shadow-2xl">
              <div className="grid gap-1">
                {nav.map(([label, href]) => (
                  <Link key={label} href={href} className="rounded-2xl px-4 py-3 text-sm font-bold text-[#45413a] hover:bg-[#f5efe4]">
                    {label}
                  </Link>
                ))}
                <Link href={instagram} target="_blank" rel="noopener noreferrer" className="mt-2 flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-bold text-[#2f6f73] hover:bg-[#f5efe4]">
                  <FaInstagram /> Instagram
                </Link>
              </div>
            </div>
          </details>
        </div>
      </header>

      <main>
        <section id="inicio" className="relative overflow-hidden bg-[#fffdf8]">
          <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_25%_0%,rgba(140,186,193,0.18),transparent_34%),linear-gradient(180deg,#f5efe4,rgba(245,239,228,0))]" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_0.92fr] lg:px-8 lg:py-16 xl:gap-16">
            <div className="relative z-10">
              <Eyebrow>Psicologia • Educação Inclusiva • IntegraVida</Eyebrow>
              <h1 className="mt-6 max-w-3xl font-serif text-[2.25rem] font-semibold leading-[1.1] tracking-normal text-[#2f6f73] sm:text-[3.15rem] lg:text-[3.4rem] xl:text-[3.75rem]">
                Centro SER: cuidado integral para cada fase da vida
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f594f] sm:text-xl">
                Psicologia TCC, desenvolvimento humano, apoio psicopedagógico e atendimento domiciliar humanizado em Piracicaba.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <WhatsAppButton large>Agendar pelo WhatsApp</WhatsAppButton>
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Link href="#atendimentos" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-[#c9ad69] bg-white px-8 py-4 text-base font-bold text-[#354745] shadow-sm transition hover:bg-[#fbf8f1]">
                    Conhecer atendimentos <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                </motion.div>
              </div>
              <div className="mt-9 grid gap-3 sm:grid-cols-3">
                {credentials.map((item) => (
                  <div key={item} className="border-l border-[#d8c79a] pl-4">
                    <p className="text-sm font-extrabold leading-6 text-[#344947]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10">
              <div className="group rounded-[2rem] border border-[#eadfcd] bg-white p-3 shadow-[0_34px_100px_rgba(47,111,115,0.18)]">
                <div className="relative min-h-[360px] overflow-hidden rounded-[1.55rem] sm:min-h-[520px]">
                  <Image src="/images/fachada.jpg" alt="Fachada do Centro SER em Piracicaba" fill sizes="(min-width: 1024px) 44vw, 92vw" className="object-cover transition duration-700 group-hover:scale-[1.035]" priority />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(32,61,61,0.02),rgba(32,61,61,0.34))]" />
                  <div className="absolute bottom-5 left-5 right-5 rounded-[1.35rem] border border-white/35 bg-white/90 p-4 shadow-[0_18px_50px_rgba(32,61,61,0.18)] backdrop-blur-md sm:left-6 sm:right-auto sm:w-[20rem]">
                    <p className="flex items-center gap-2 text-sm font-extrabold text-[#2f6f73]">
                      <MapPin size={16} /> Piracicaba/SP
                    </p>
                    <div className="mt-3 grid grid-cols-3 gap-2 text-center text-[0.72rem] font-bold uppercase tracking-[0.08em] text-[#5f594f]">
                      <span className="rounded-full bg-[#edf5f3] px-2 py-2">Presencial</span>
                      <span className="rounded-full bg-[#f8efe1] px-2 py-2">Online</span>
                      <span className="rounded-full bg-[#edf5f3] px-2 py-2">Domiciliar</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative ml-auto mr-4 -mt-12 max-w-sm rounded-[1.5rem] border border-[#dbc487] bg-[#fffdf8]/95 p-5 shadow-[0_20px_55px_rgba(92,74,37,0.13)] backdrop-blur">
                <div className="relative h-12 w-36">
                  <Image src="/images/marca-dagua.png" alt="Marca Centro SER" fill sizes="144px" className="object-contain object-left" />
                </div>
                <p className="mt-3 font-serif text-xl leading-7 text-[#8a6a2f]">Cuidar é integrar corpo, mente e afeto.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="centro" className="bg-white">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-28">
            <div>
              <Eyebrow>O Centro SER</Eyebrow>
              <h2 className="mt-5 max-w-2xl font-serif text-4xl font-semibold leading-tight text-[#292620] sm:text-5xl">
                Um espaço para acolher histórias, fortalecer vínculos e desenvolver autonomia
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#625d54]">
                O Centro SER integra Psicologia, Educação Especial e cuidado humanizado para apoiar saúde emocional, aprendizagem, desenvolvimento e qualidade de vida. Cada atendimento é conduzido com delicadeza, ciência e respeito à singularidade de cada pessoa.
              </p>
              <div className="mt-10 grid gap-5 sm:grid-cols-3">
                {carePillars.map(({ title, text, icon: Icon }) => (
                  <div key={title} className="border-t border-[#d9c58b] pt-5">
                    <Icon className="text-[#2f6f73]" size={24} />
                    <h3 className="mt-4 font-serif text-2xl text-[#292620]">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#676157]">{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="group rounded-[2rem] border border-[#eadfcd] bg-[#fbf8f1] p-3 shadow-[0_24px_70px_rgba(45,63,61,0.1)]">
              <div className="relative min-h-[380px] overflow-hidden rounded-[1.55rem] sm:min-h-[520px]">
                <Image src="/images/consultorio-1.jpg" alt="Consultório acolhedor do Centro SER" fill sizes="(min-width: 1024px) 48vw, 92vw" className="object-cover transition duration-700 group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(32,61,61,0),rgba(32,61,61,0.12))]" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#fbf8f1]">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="max-w-3xl">
              <Eyebrow>Duas frentes de cuidado</Eyebrow>
              <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-[#292620] sm:text-5xl">
                Um mesmo propósito: olhar para cada pessoa de forma integral
              </h2>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <article className="rounded-[2rem] border border-[#dbe8e6] bg-[#edf5f3] p-7 shadow-[0_22px_60px_rgba(45,63,61,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_75px_rgba(47,111,115,0.13)] sm:p-9">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#2f6f73]">
                  <Brain size={24} />
                </div>
                <h3 className="mt-6 font-serif text-3xl text-[#283f3f]">Espaço NeuroAfetivo</h3>
                <p className="mt-4 leading-7 text-[#56615e]">
                  Psicoterapia TCC com olhar acolhedor para crianças, adolescentes, adultos e idosos.
                </p>
                <ul className="mt-7 grid gap-3">
                  {["Psicoterapia infantil e infanto-juvenil", "Ansiedade, depressão, luto e regulação emocional", "Autoconhecimento e saúde mental", "Apoio psicopedagógico e reforço especializado", "Orientação familiar e suporte a neurodivergências"].map((item) => (
                    <Bullet key={item}>{item}</Bullet>
                  ))}
                </ul>
              </article>
              <article className="rounded-[2rem] border border-[#eadbb9] bg-[#f8efe1] p-7 shadow-[0_22px_60px_rgba(92,74,37,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_75px_rgba(154,122,51,0.13)] sm:p-9">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#9b7a33]">
                  <Home size={24} />
                </div>
                <h3 className="mt-6 font-serif text-3xl text-[#4a3c23]">IntegraVida</h3>
                <p className="mt-4 leading-7 text-[#625848]">
                  Atendimento domiciliar humanizado para idosos, pessoas com mobilidade reduzida e pessoas com deficiência.
                </p>
                <ul className="mt-7 grid gap-3">
                  {["Cuidado no ambiente familiar", "Apoio à autonomia e ao bem-estar", "Suporte psicomotor", "Prevenção de quedas", "Acolhimento e orientação à família"].map((item) => (
                    <Bullet key={item}>{item}</Bullet>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="atendimentos" className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div className="max-w-3xl">
                <Eyebrow>Atendimentos</Eyebrow>
                <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-[#292620] sm:text-5xl">
                  Cuidado organizado para cada fase da vida
                </h2>
              </div>
              <WhatsAppButton>Agendar uma conversa</WhatsAppButton>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {serviceCards.map(({ title, text, icon: Icon }) => (
                <article key={title} className="rounded-[1.5rem] border border-[#eadfcd] bg-[#fffdf8] p-6 shadow-[0_14px_40px_rgba(45,63,61,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#d8c078] hover:shadow-[0_22px_58px_rgba(47,111,115,0.11)]">
                  <Icon className="text-[#2f6f73]" size={24} />
                  <h3 className="mt-5 text-lg font-extrabold text-[#302d27]">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#676157]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="silvia" className="bg-[#fbf8f1]">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.82fr_1fr] lg:px-8 lg:py-28">
            <div className="rounded-[2rem] border border-[#eadfcd] bg-white p-8 shadow-[0_24px_70px_rgba(45,63,61,0.1)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_82px_rgba(47,111,115,0.12)]">
              <div className="relative mx-auto h-28 w-64 max-w-full">
                <Image src="/images/marca-dagua.png" alt="Marca Centro SER" fill sizes="256px" className="object-contain" />
              </div>
              <div className="mt-8 rounded-[1.5rem] bg-[#edf5f3] p-6">
                <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#9b7a33]">Profissional responsável</p>
                <h3 className="mt-3 font-serif text-3xl text-[#283f3f]">Silvia Helena Tamborim</h3>
                <p className="mt-2 text-[#5f594f]">Psicóloga TCC • Pedagoga • Especialista em Educação Inclusiva</p>
              </div>
            </div>
            <div>
              <Eyebrow>Silvia Tamborim</Eyebrow>
              <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-[#292620] sm:text-5xl">
                Autoridade clínica com escuta humana e trajetória em educação inclusiva
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#625d54]">
                Com mais de 25 anos de experiência nas áreas da educação, educação especial e cuidado humano, Silvia une Psicologia TCC, prática pedagógica e inclusão para oferecer um atendimento sensível, técnico e profundamente respeitoso.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {["Psicóloga TCC", "Pedagoga", "Especialista em Educação Inclusiva", "Mais de 25 anos de experiência", "CRP 06/213394", "Atendimento presencial, online e domiciliar"].map((item) => (
                  <div key={item} className="rounded-2xl border border-[#eadfcd] bg-white px-5 py-4 text-sm font-extrabold text-[#3d3932]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="ambiente" className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="max-w-3xl">
              <Eyebrow>Ambiente</Eyebrow>
              <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-[#292620] sm:text-5xl">
                Um ambiente preparado para acolher
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#625d54]">
                Fotos reais do espaço, pensado para oferecer conforto, tranquilidade e privacidade durante o atendimento.
              </p>
            </div>
            <div className="mt-12 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-[2rem] border border-[#eadfcd] bg-[#fbf8f1] p-3 shadow-[0_24px_70px_rgba(45,63,61,0.1)]">
                <div className="relative min-h-[420px] overflow-hidden rounded-[1.55rem]">
                    <Image src="/images/consultorio-1.jpg" alt="Sala de atendimento do Centro SER" fill sizes="(min-width: 1024px) 58vw, 92vw" className="object-cover transition duration-700 hover:scale-[1.03]" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(32,61,61,0),rgba(32,61,61,0.13))]" />
                </div>
              </div>
              <div className="rounded-[2rem] border border-[#eadfcd] bg-[#fbf8f1] p-3 shadow-[0_24px_70px_rgba(45,63,61,0.1)]">
                <div className="relative min-h-[420px] overflow-hidden rounded-[1.55rem]">
                    <Image src="/images/fachada.jpg" alt="Fachada do Centro SER" fill sizes="(min-width: 1024px) 38vw, 92vw" className="object-cover transition duration-700 hover:scale-[1.03]" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(32,61,61,0),rgba(32,61,61,0.14))]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="localizacao" className="bg-[#fbf8f1]">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.75fr_1fr] lg:px-8 lg:py-28">
            <div>
              <Eyebrow>Localização</Eyebrow>
              <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-[#292620] sm:text-5xl">
                Como chegar ao Centro SER
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#625d54]">
                Estamos localizados em Piracicaba/SP, em um espaço acolhedor e preparado para receber você e sua família.
              </p>
              <div className="mt-8 rounded-[1.5rem] border border-[#eadfcd] bg-white p-6 shadow-[0_14px_40px_rgba(45,63,61,0.06)]">
                <MapPin className="text-[#2f6f73]" />
                <p className="mt-4 text-lg font-extrabold text-[#302d27]">Rua Alfredo Guedes, 615 - Bairro Alto, Piracicaba/SP</p>
              </div>
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="mt-7">
                <Link href={maps} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#c9ad69] bg-white px-6 py-3 text-sm font-bold text-[#354745] shadow-sm transition hover:bg-[#fffdf8]">
                  Abrir no Google Maps <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </motion.div>
            </div>
            <div className="rounded-[2rem] border border-[#eadfcd] bg-white p-3 shadow-[0_24px_70px_rgba(45,63,61,0.1)]">
              <iframe
                title="Mapa do Centro SER em Piracicaba"
                src="https://www.google.com/maps?q=-22.7258872,-47.6403628&z=17&output=embed"
                className="h-[380px] w-full rounded-[1.55rem] border-0 sm:h-[480px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#203d3d] px-6 py-14 text-center shadow-[0_30px_90px_rgba(32,61,61,0.26)] sm:px-10 lg:px-16">
            <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#d8c078]">Centro SER</p>
            <h2 className="mx-auto mt-4 max-w-3xl font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Cuidar é integrar corpo, mente e afeto.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#edf5f3]">
              Agende uma conversa e conheça um espaço dedicado ao acolhimento, ao desenvolvimento humano e à saúde emocional.
            </p>
            <div className="mt-8 flex justify-center">
              <WhatsAppButton large>Falar pelo WhatsApp</WhatsAppButton>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative overflow-hidden border-t border-[#d8c078] bg-[#fffdf8] px-4 py-12 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute right-0 top-0 h-52 w-52 rounded-full bg-[#8bbac1]/14 blur-3xl" />
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 border-b border-[#eadfcd] pb-10 lg:grid-cols-[1.05fr_1fr_0.8fr]">
            <div>
              <div className="relative h-28 w-72 max-w-full">
                <Image src="/images/marca-dagua.png" alt="Logo Centro SER" fill sizes="288px" className="object-contain object-left" />
              </div>
              <p className="mt-5 max-w-sm font-serif text-2xl font-semibold leading-8 text-[#2f6f73]">
                Centro SER - Espaço NeuroAfetivo & IntegraVida
              </p>
              <p className="mt-3 inline-flex rounded-full border border-[#d8c078]/70 px-4 py-2 text-sm font-bold text-[#8a6a2f]">
                CRP 06/213394
              </p>
            </div>

            <address className="grid gap-4 not-italic">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#9b7a33]">Contato</p>
              <Link href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-sm font-semibold text-[#4d4942] transition hover:text-[#2f6f73]">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#edf5f3] text-[#25D366] transition group-hover:scale-105"><FaWhatsapp /></span>
                WhatsApp: (19) 99604-4947
              </Link>
              <Link href="mailto:psi.silviatamborim@gmail.com" className="group flex items-center gap-3 text-sm font-semibold text-[#4d4942] transition hover:text-[#2f6f73]">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#edf5f3] text-[#2f6f73] transition group-hover:scale-105"><Mail size={17} /></span>
                psi.silviatamborim@gmail.com
              </Link>
              <Link href={maps} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3 text-sm font-semibold leading-6 text-[#4d4942] transition hover:text-[#2f6f73]">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#edf5f3] text-[#2f6f73] transition group-hover:scale-105"><MapPin size={17} /></span>
                Rua Alfredo Guedes, 615 - Bairro Alto, Piracicaba/SP
              </Link>
            </address>

            <div className="lg:text-right">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#9b7a33]">Social</p>
              <div className="mt-5 flex gap-3 lg:justify-end">
                <Link href={instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram do Centro SER" className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#d8c078]/70 bg-white text-[#2f6f73] shadow-sm transition hover:-translate-y-0.5 hover:border-[#c9ad69] hover:text-[#9b7a33]">
                  <FaInstagram />
                </Link>
                <Link href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp do Centro SER" className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#d8c078]/70 bg-white text-[#2f6f73] shadow-sm transition hover:-translate-y-0.5 hover:border-[#c9ad69] hover:text-[#25D366]">
                  <FaWhatsapp />
                </Link>
              </div>
              <p className="mt-8 text-sm leading-7 text-[#625d54]">
                Psicologia TCC, educação inclusiva e atendimento domiciliar humanizado em Piracicaba.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-6 text-sm text-[#716b60] sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Centro SER. Todos os direitos reservados.</p>
            <p className="font-semibold text-[#2f6f73]">Cuidar é integrar corpo, mente e afeto.</p>
          </div>
        </div>
      </footer>

      <Link
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com o Centro SER pelo WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-3xl text-white shadow-[0_15px_35px_rgba(37,211,102,0.35)] transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(37,211,102,0.45)] sm:bottom-7 sm:right-7"
      >
        <FaWhatsapp />
      </Link>
    </div>
  );
}
