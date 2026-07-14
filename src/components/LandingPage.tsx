"use client";

import { motion } from "framer-motion";
import {
  Baby,
  Brain,
  Check,
  GraduationCap,
  HeartHandshake,
  Home,
  Mail,
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

const nav = [
  ["Início", "#inicio"],
  ["Centro SER", "#centro"],
  ["Atendimentos", "#atendimentos"],
  ["IntegraVida", "#integravida"],
  ["Profissional Responsável", "#silvia"],
] as const;

const services = [
  { title: "Psicoterapia Infantil", text: "Escuta lúdica, acolhimento e vínculo.", icon: Baby },
  { title: "Adolescentes", text: "Apoio emocional e orientação familiar.", icon: UsersRound },
  { title: "Adultos", text: "TCC, autoconhecimento e regulação emocional.", icon: Brain },
  { title: "Idosos", text: "Cuidado sensível, história e autonomia.", icon: HeartHandshake },
  { title: "TCC", text: "Prática clínica baseada em evidências.", icon: Stethoscope },
  { title: "Reforço especializado", text: "Apoio pedagógico com olhar inclusivo.", icon: GraduationCap },
  { title: "Neurodivergências", text: "Suporte a crianças, famílias e educadores.", icon: Sparkles },
  {
    title: "Avaliação Neuropsicológica",
    text: "Investigação cognitiva, emocional e comportamental com neuropsicólogo parceiro.",
    icon: Brain,
  },
  { title: "Domiciliar", text: "Atendimento humanizado no ambiente familiar.", icon: Home },
];

function whatsappLink(message = "Olá, vim pelo site do Centro SER e gostaria de agendar um atendimento.") {
  return `${whatsappBase}?text=${encodeURIComponent(message)}`;
}

function PremiumButton({
  children,
  href = whatsappLink(),
  variant = "primary",
  large = false,
}: {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  large?: boolean;
}) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full whitespace-nowrap font-extrabold leading-none transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#2f6f73] focus:ring-offset-2";
  const size = large ? "min-h-14 px-8 py-4 text-base" : "min-h-12 px-6 py-3 text-sm";
  const style =
    variant === "primary"
      ? "bg-[#2f6f73] text-white shadow-[0_18px_42px_rgba(47,111,115,0.25)] hover:bg-[#285f62]"
      : "border border-[#c9ad69] bg-white/82 text-[#2f4746] shadow-[0_12px_30px_rgba(92,74,37,0.08)] hover:bg-[#fffaf0]";

  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.985 }}>
      <Link className={`${base} ${size} ${style}`} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
        {variant === "primary" ? <FaWhatsapp aria-hidden="true" className="relative z-10 text-lg" /> : null}
        <span className="relative z-10">{children}</span>
        <span className="absolute inset-y-0 left-[-45%] w-1/3 rotate-12 bg-white/20 blur-md transition duration-700 group-hover:left-[120%]" />
      </Link>
    </motion.div>
  );
}

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <span
      className={`inline-flex rounded-full border px-4 py-2 text-[0.7rem] font-extrabold uppercase tracking-[0.24em] ${
        light ? "border-white/20 bg-white/10 text-[#dec987]" : "border-[#c9ad69]/45 bg-[#fffdf8]/82 text-[#9b7a33]"
      }`}
    >
      {children}
    </span>
  );
}

function Bullet({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3 text-sm font-bold leading-6 text-[#4b463d]">
      <Check className="mt-1 shrink-0 text-[#b28b3d]" size={16} />
      <span>{children}</span>
    </li>
  );
}

function EditorialImage({
  src,
  alt,
  className = "",
  imageClassName = "object-cover",
  innerClassName = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  innerClassName?: string;
  priority?: boolean;
}) {
  return (
    <div className={`group relative flex overflow-hidden rounded-[2rem] border border-[#eadfcd] bg-white p-3 shadow-[0_30px_90px_rgba(47,111,115,0.13)] ${className}`}>
      <div className={`relative min-h-[320px] flex-1 overflow-hidden rounded-[1.55rem] ${innerClassName}`}>
        <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 48vw, 92vw" className={`${imageClassName} transition duration-700 group-hover:scale-[1.025]`} priority={priority} />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(32,61,61,0.02),rgba(32,61,61,0.18))]" />
      </div>
    </div>
  );
}

function FramedPhoto({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  children,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  children?: ReactNode;
}) {
  return (
    <div className={`group relative rounded-[2rem] border border-[#eadfcd] bg-white p-3 shadow-[0_30px_90px_rgba(47,111,115,0.13)] ${className}`}>
      <div className="relative overflow-hidden rounded-[1.55rem] bg-[#f6efe5]">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(min-width: 1024px) 48vw, 92vw"
          className="h-auto w-full object-contain object-top transition duration-700 group-hover:scale-[1.018]"
          priority={priority}
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(32,61,61,0.02),rgba(32,61,61,0.16))]" />
      </div>
      {children}
    </div>
  );
}

export default function LandingPage({ faqs }: LandingPageProps) {
  void faqs;

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fbf8f1] text-[#2f2c27]">
      <header className="sticky top-0 z-50 border-b border-[#eadfcd]/80 bg-[#fffdf8]/88 shadow-[0_12px_42px_rgba(47,111,115,0.06)] backdrop-blur-2xl">
        <div className="mx-auto flex min-h-[88px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:min-h-[96px] lg:px-8">
          <Link href="#inicio" className="relative h-16 w-48 shrink-0 sm:h-20 sm:w-60 xl:h-[4.75rem] xl:w-64" aria-label="Ir para o início">
            <Image src="/images/marca-dagua.png" alt="Logo Centro SER Espaço NeuroAfetivo" fill sizes="(min-width: 1024px) 288px, (min-width: 640px) 240px, 192px" className="object-contain object-left" priority />
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-5 xl:flex" aria-label="Navegação principal">
            {nav.map(([label, href]) => (
              <Link key={label} href={href} className="group relative inline-flex h-12 items-center whitespace-nowrap px-1 text-center text-[0.74rem] font-extrabold leading-none text-[#2f6f73] transition duration-300 hover:text-[#245d61]">
                {label}
                <span className="absolute inset-x-0 bottom-1 h-px origin-left scale-x-0 bg-[#c9ad69] transition duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center gap-3 lg:flex">
            <Link href={instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram do Centro SER" className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#e1d6c3] bg-white/82 text-[#2f6f73] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#c9ad69] hover:text-[#9b7a33]">
              <FaInstagram />
            </Link>
            <PremiumButton>Agendar pelo WhatsApp</PremiumButton>
          </div>

          <details className="relative lg:hidden">
            <summary className="inline-flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-[#e1d6c3] bg-white text-[#2f6f73] marker:hidden" aria-label="Abrir menu">
              <Menu size={20} />
            </summary>
            <div className="absolute right-0 top-14 w-[min(86vw,320px)] rounded-[1.5rem] border border-[#eadfcd] bg-[#fffdf8] p-4 shadow-2xl">
              <div className="grid gap-1">
                {nav.map(([label, href]) => (
                  <Link key={label} href={href} className="rounded-2xl px-4 py-3 text-sm font-bold text-[#2f6f73] hover:bg-[#f5efe4]">
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
        <section id="inicio" className="relative isolate overflow-hidden bg-[#fffdf8]">
          <div className="pointer-events-none absolute left-[-9rem] top-10 h-80 w-80 rounded-full bg-[#8bbac1]/18 blur-3xl" />
          <div className="pointer-events-none absolute right-[-8rem] top-20 h-96 w-96 rounded-full bg-[#c9ad69]/16 blur-3xl" />
          <div className="pointer-events-none absolute left-[7%] top-36 hidden h-px w-52 bg-[#c9ad69]/45 lg:block" />
          <div className="pointer-events-none absolute bottom-16 right-[42%] hidden h-24 w-24 rounded-full border border-[#c9ad69]/30 lg:block" />

          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-10 sm:px-6 lg:min-h-[calc(100vh-104px)] lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-14 xl:gap-16">
            <div className="relative z-10">
              <Eyebrow>Psicologia • Educação Inclusiva • IntegraVida</Eyebrow>
              <h1 className="mt-6 max-w-3xl font-serif text-[2.2rem] font-semibold leading-[1.1] tracking-normal text-[#2f6f73] sm:text-[2.9rem] lg:text-[3.1rem] xl:text-[3.35rem]">
                Centro SER: cuidado integral para cada fase da vida
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f594f] sm:text-xl">
                Psicologia TCC, desenvolvimento humano, apoio psicopedagógico e atendimento domiciliar humanizado em Piracicaba.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <PremiumButton large>Agendar pelo WhatsApp</PremiumButton>
                <PremiumButton href="#atendimentos" variant="secondary" large>
                  Conhecer atendimentos
                </PremiumButton>
              </div>

              <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {["CRP 06/213394", "Atendimento Presencial", "Atendimento Online", "Atendimento Domiciliar"].map((item) => (
                  <div key={item} className="border-l border-[#d8c79a] pl-4">
                    <p className="text-sm font-extrabold leading-6 text-[#344947]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10">
              <div className="group relative rounded-[2.2rem] border border-[#eadfcd] bg-white p-3 shadow-[0_34px_100px_rgba(47,111,115,0.18)]">
                <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full border border-[#c9ad69]/35" />
                <div className="relative min-h-[380px] overflow-hidden rounded-[1.7rem] sm:min-h-[560px]">
                  <Image src="/images/fachada.jpg" alt="Fachada do Centro SER em Piracicaba" fill sizes="(min-width: 1024px) 48vw, 92vw" className="object-cover transition duration-700 group-hover:scale-[1.035]" priority />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(32,61,61,0.02),rgba(32,61,61,0.34))]" />
                  <div className="absolute bottom-5 left-5 right-5 rounded-[1.35rem] border border-white/40 bg-white/90 p-4 shadow-[0_18px_50px_rgba(32,61,61,0.18)] backdrop-blur-md sm:left-6 sm:right-auto sm:w-[21rem]">
                    <p className="text-sm font-extrabold text-[#2f6f73]">Atendimento Presencial</p>
                    <p className="mt-2 text-sm font-bold text-[#5f594f]">Online • Domiciliar</p>
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
              <div className="mt-10 grid gap-6 sm:grid-cols-3">
                {[
                  { title: "Acolhimento", text: "Escuta qualificada e presença.", icon: HeartHandshake },
                  { title: "Ética", text: "Cuidado profissional e sigiloso.", icon: ShieldCheck },
                  { title: "Singularidade", text: "Um olhar para cada história.", icon: Sparkles },
                ].map(({ title, text, icon: Icon }) => (
                  <div key={title} className="border-t border-[#d9c58b] pt-5">
                    <Icon className="text-[#2f6f73]" size={24} />
                    <h3 className="mt-4 font-serif text-2xl text-[#292620]">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#676157]">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <EditorialImage
              src="/images/consultorio-1.jpg"
              alt="Consultório acolhedor do Centro SER"
              className="min-h-[420px] lg:min-h-[560px]"
              imageClassName="object-cover object-center"
              innerClassName="min-h-[420px] lg:min-h-[536px]"
            />
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#fbf8f1]">
          <div className="pointer-events-none absolute left-0 top-20 h-64 w-64 rounded-full bg-[#8bbac1]/12 blur-3xl" />
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="max-w-3xl">
              <Eyebrow>Duas frentes de cuidado</Eyebrow>
              <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-[#292620] sm:text-5xl">
                Dois pilares fortes, um mesmo olhar integral
              </h2>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <article className="rounded-[2rem] border border-[#dbe8e6] bg-[#edf5f3] p-7 shadow-[0_22px_60px_rgba(45,63,61,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_75px_rgba(47,111,115,0.13)] sm:p-9">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#2f6f73]">
                  <Brain size={24} />
                </div>
                <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.22em] text-[#9b7a33]">Espaço NeuroAfetivo</p>
                <h3 className="mt-2 font-serif text-3xl text-[#283f3f]">Psicoterapia TCC com olhar neuroafetivo</h3>
                <p className="mt-4 leading-7 text-[#56615e]">
                  Atendimento para crianças, adolescentes, adultos e idosos, integrando saúde emocional, aprendizagem e vínculos familiares.
                </p>
                <div className="mt-6 rounded-[1.35rem] border border-[#d8c078]/70 bg-white/82 p-4 shadow-[0_16px_42px_rgba(47,111,115,0.08)]">
                  <span className="inline-flex rounded-full bg-[#2f6f73] px-3 py-1 text-[0.66rem] font-extrabold uppercase tracking-[0.2em] text-white">
                    NOVO
                  </span>
                  <p className="mt-3 font-serif text-2xl leading-8 text-[#283f3f]">Avaliação Neuropsicológica</p>
                  <p className="mt-1 text-sm font-bold leading-6 text-[#56615e]">Realizada por Neuropsicólogo Parceiro.</p>
                </div>
                <ul className="mt-7 grid gap-3">
                  {["Psicoterapia infantil e infanto-juvenil", "Ansiedade, depressão, luto e regulação emocional", "Autoconhecimento e saúde mental", "Apoio psicopedagógico e reforço especializado", "Orientação familiar e neurodivergências"].map((item) => (
                    <Bullet key={item}>{item}</Bullet>
                  ))}
                </ul>
              </article>

              <article id="integravida" className="rounded-[2rem] border border-[#eadbb9] bg-[#f8efe1] p-7 shadow-[0_22px_60px_rgba(92,74,37,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_75px_rgba(154,122,51,0.13)] sm:p-9">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#9b7a33]">
                  <Home size={24} />
                </div>
                <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.22em] text-[#2f6f73]">IntegraVida</p>
                <h3 className="mt-2 font-serif text-3xl text-[#4a3c23]">Cuidado domiciliar, autonomia e bem-estar</h3>
                <p className="mt-4 leading-7 text-[#625848]">
                  Uma frente humana para idosos, pessoas com mobilidade reduzida e pessoas com deficiência, respeitando rotina e família.
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
              <PremiumButton>Agendar uma conversa</PremiumButton>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {services.map(({ title, text, icon: Icon }) => (
                <article key={title} className="rounded-[1.5rem] border border-[#eadfcd] bg-[#fffdf8] p-6 shadow-[0_14px_40px_rgba(45,63,61,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#d8c078] hover:shadow-[0_22px_58px_rgba(47,111,115,0.11)]">
                  <Icon className="text-[#2f6f73] transition duration-300" size={22} />
                  <h3 className="mt-5 text-lg font-extrabold text-[#302d27]">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#676157]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="silvia" className="bg-[#fbf8f1]">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.92fr_1fr] lg:px-8 lg:py-28">
            <div className="relative">
              <div className="absolute -left-5 top-10 hidden h-28 w-28 rounded-full border border-[#d8c078]/35 lg:block" />
              <FramedPhoto
                src="/images/silvia-retrato-principal.jpeg"
                alt="Retrato profissional de Silvia Helena Tamborim"
                width={718}
                height={710}
                priority
              >
                <div className="absolute bottom-6 left-6 right-6 rounded-[1.45rem] border border-[#dbc487] bg-[#fffdf8]/92 p-5 shadow-[0_20px_55px_rgba(92,74,37,0.16)] backdrop-blur">
                  <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#9b7a33]">Profissional responsável</p>
                  <p className="mt-2 font-serif text-2xl leading-8 text-[#2f6f73]">CRP 06/213394</p>
                </div>
              </FramedPhoto>
            </div>

            <div>
              <Eyebrow>Profissional Responsável</Eyebrow>
              <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-[#292620] sm:text-5xl">
                Silvia Helena Tamborim
              </h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Psicóloga Clínica",
                  "CRP 06/213394",
                  "Especialista em Terapia Cognitivo-Comportamental",
                  "Pedagoga",
                  "Especialista em Educação Inclusiva",
                  "Mais de 25 anos de experiência",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-[#eadfcd] bg-white px-5 py-4 text-sm font-extrabold leading-6 text-[#3d3932] shadow-[0_12px_32px_rgba(45,63,61,0.05)]">
                    {item}
                  </div>
                ))}
              </div>
              <p className="mt-8 text-lg leading-8 text-[#625d54]">
                Silvia conduz um trabalho clínico marcado por escuta, ética e precisão técnica. Sua trajetória integra Psicologia, Terapia Cognitivo-Comportamental, Pedagogia e Educação Inclusiva para construir planos de cuidado sensíveis à história, ao contexto familiar e às necessidades de cada pessoa.
              </p>
              <p className="mt-5 text-lg leading-8 text-[#625d54]">
                No Centro SER, sua atuação une acolhimento e método, oferecendo um acompanhamento humanizado para desenvolvimento emocional, aprendizagem, autonomia e qualidade de vida.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
            <div className="relative overflow-hidden rounded-[2rem] border border-[#e7dac4] bg-[#fffdf8] px-5 py-9 shadow-[0_28px_80px_rgba(47,111,115,0.09)] sm:px-8 sm:py-11 lg:rounded-[2.5rem] lg:px-12 lg:py-14">
              <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#c9ad69]/12 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-28 left-1/3 h-56 w-56 rounded-full bg-[#2f6f73]/8 blur-3xl" />

              <div className="relative">
                <Eyebrow>Formação e Experiência</Eyebrow>
                <div className="mt-5 grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:gap-12">
                  <h2 className="max-w-3xl font-serif text-4xl font-semibold leading-tight text-[#292620] sm:text-5xl lg:text-[3.35rem]">
                    Formação sólida para um cuidado completo e confiável
                  </h2>
                  <p className="text-lg leading-8 text-[#625d54] lg:border-l lg:border-[#d8c078]/45 lg:pl-9">
                    Uma atuação construída na interseção entre saúde mental, educação e inclusão, com repertório para acolher demandas clínicas, familiares, escolares e domiciliares com segurança, clareza e responsabilidade.
                  </p>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-12">
                  {[
                    "Psicóloga Clínica",
                    "Pedagoga",
                    "Especialista em Educação Inclusiva",
                    "Terapia Cognitivo-Comportamental",
                    "Atendimento Presencial",
                    "Atendimento Online",
                    "Atendimento Domiciliar",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className={`group flex min-h-24 items-center gap-4 rounded-[1.35rem] border border-[#eadfcd] bg-white/90 px-5 py-5 text-sm font-extrabold leading-6 text-[#3d3932] shadow-[0_14px_38px_rgba(45,63,61,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#d8c078] hover:shadow-[0_20px_48px_rgba(47,111,115,0.1)] lg:px-6 ${index < 3 ? "lg:col-span-4" : "lg:col-span-3"} ${index === 6 ? "sm:col-span-2 lg:col-span-3" : ""}`}
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d8c078]/45 bg-[#fbf8f1] transition duration-300 group-hover:bg-[#f5eedc]">
                        <Check className="text-[#b28b3d]" size={18} />
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
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

            <div className="mt-12 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
              <EditorialImage src="/images/consultorio-1.jpg" alt="Sala de atendimento do Centro SER" className="min-h-[440px]" />
              <div className="grid gap-5">
                <EditorialImage src="/images/fachada.jpg" alt="Fachada do Centro SER" className="min-h-[260px]" />
                <div className="rounded-[2rem] border border-[#eadfcd] bg-[#fbf8f1] p-7 shadow-[0_20px_60px_rgba(47,111,115,0.08)]">
                  <p className="font-serif text-2xl leading-8 text-[#2f6f73]">Arquitetura simples, privacidade e detalhes pensados para um cuidado tranquilo.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.2rem] bg-[#203d3d] px-6 py-16 text-center shadow-[0_30px_90px_rgba(32,61,61,0.26)] sm:px-10 lg:px-16">
            <div className="pointer-events-none absolute left-[-4rem] top-[-4rem] h-56 w-56 rounded-full bg-[#8bbac1]/14 blur-3xl" />
            <div className="pointer-events-none absolute bottom-6 right-10 hidden h-28 w-28 rounded-full border border-[#d8c078]/35 lg:block" />
            <Eyebrow light>Centro SER</Eyebrow>
            <h2 className="mx-auto mt-5 max-w-3xl font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Cuidar é integrar corpo, mente e afeto.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#edf5f3]">
              Agende uma conversa e conheça um espaço dedicado ao acolhimento, ao desenvolvimento humano e à saúde emocional.
            </p>
            <div className="mt-8 flex justify-center">
              <PremiumButton large>Falar pelo WhatsApp</PremiumButton>
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

            <div className="grid gap-4">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#9b7a33]">Contato</p>
              <Link href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-sm font-semibold text-[#4d4942] transition hover:text-[#2f6f73]">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#edf5f3] text-[#25D366] transition group-hover:scale-105"><FaWhatsapp /></span>
                WhatsApp: (19) 99604-4947
              </Link>
              <Link href="mailto:psi.silviatamborim@gmail.com" className="group flex items-center gap-3 text-sm font-semibold text-[#4d4942] transition hover:text-[#2f6f73]">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#edf5f3] text-[#2f6f73] transition group-hover:scale-105"><Mail size={17} /></span>
                psi.silviatamborim@gmail.com
              </Link>
            </div>

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
