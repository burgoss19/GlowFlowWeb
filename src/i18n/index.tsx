import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "es" | "en";

export const dict = {
  es: {
    nav: {
      links: { features: "Funciones", solutions: "Soluciones", integrations: "Integraciones", pricing: "Precios", resources: "Recursos" },
      bookDemo: "Reservar demo",
      startTrial: "Prueba gratis",
    },
    hero: {
      badge: { new: "Nuevo", text: "Recepcionista IA 2.0 — ya en beta" },
      title1: "Escala tu clínica estética",
      title2: "en piloto automático",
      subtitle: "Capta leads, responde al instante por WhatsApp, reserva más citas y automatiza todo el viaje de la clienta con IA.",
      ctaPrimary: "Reservar demo",
      ctaSecondary: "Ver tour de la plataforma",
      socialLabel: "Confían en GlowFlow clínicas estéticas de toda Europa",
      rating: "4.9/5",
      clinics: "· 320+ clínicas",
      compliance: "RGPD · HIPAA ready",
      uptime: "99.99% uptime",
    },
    problem: {
      eyebrow: "El problema",
      title1: "La mayoría de clínicas pierde ingresos en el",
      titleHighlight: "seguimiento",
      subtitle: "Cada lead sin contestar es dinero que se va. El seguimiento manual no escala — y tu equipo no puede estar online 24/7.",
      items: [
        "Las clientas no reciben contacto",
        "Respuestas lentas",
        "Citas perdidas y no-shows",
        "Horas perdidas en tareas administrativas",
        "Baja retención de clientas",
      ],
      transition1: "GlowFlow automatiza",
      transition2: "cada paso",
      flow: ["Lead", "Cualificación IA", "Seguimiento WhatsApp", "Reserva", "Recordatorio", "Tratamiento", "Reseña"],
    },
    features: {
      eyebrow: "Funciones",
      title1: "Un equipo de crecimiento entero,",
      titleHighlight: "automatizado",
      subtitle: "Todas las herramientas que tu clínica necesita para convertir leads, retener clientas y crecer en ingresos — en una sola plataforma.",
      list: [
        { t: "Recepcionista IA", d: "Responde consultas al instante, 24/7. Suena humana, reserva como una profesional." },
        { t: "Automatización WhatsApp", d: "Engancha cada lead en segundos con conversaciones IA personalizadas." },
        { t: "Agenda inteligente", d: "Llena tu calendario sin esfuerzo manual. Se reorganiza sola." },
        { t: "Recordatorios automáticos", d: "Reduce los no-shows hasta un 45% con recordatorios multicanal." },
        { t: "CRM y pipeline", d: "Sigue el viaje de cada clienta — desde el primer mensaje hasta la cita recurrente." },
        { t: "Dashboard de analítica", d: "Monitoriza ingresos, conversión y rendimiento del equipo en tiempo real." },
      ],
    },
    how: {
      eyebrow: "Cómo funciona",
      title1: "En marcha en",
      titleHighlight: "tres pasos",
      steps: [
        { t: "Conecta tu clínica", d: "Sincroniza WhatsApp, calendario y herramientas existentes en menos de 10 minutos." },
        { t: "Activa las automatizaciones IA", d: "Elige entre playbooks probados o crea los tuyos con el editor visual." },
        { t: "Mira crecer tus ingresos", d: "Más citas reservadas. Respuestas más rápidas. Menos trabajo manual." },
      ],
    },
    integrations: {
      eyebrow: "Integraciones",
      title1: "Encaja con",
      titleHighlight: "tu stack",
      subtitle: "Conexiones nativas y bidireccionales con las herramientas que tu clínica ya usa.",
    },
    metrics: [
      { l: "Más citas reservadas" },
      { l: "Respuesta a leads más rápida" },
      { l: "Carga administrativa" },
      { l: "Retención de clientas" },
    ],
    testimonials: {
      eyebrow: "Querido por founders",
      title1: "La confianza de clínicas estéticas",
      titleHighlight: "en alto crecimiento",
      items: [
        { q: "Reservamos un 38% más de citas en los primeros 60 días. La IA responde en segundos — las clientas lo adoran.", n: "Isabella Moreau", r: "Owner, Lumière Aesthetics" },
        { q: "GlowFlow le devolvió la vida a mi recepción. Se acabó perseguir leads a las 10pm un domingo.", n: "Dr. Mateo Rivas", r: "Médico estético, Skinlab MD" },
        { q: "Nuestra tasa de no-show bajó a la mitad. Honestamente, se pagó solo el primer mes.", n: "Sienna Park", r: "Manager, Glow Med Spa" },
      ],
    },
    cta: {
      title1: "¿Listo para poner tu clínica",
      titleHighlight: "en piloto automático?",
      subtitle: "Súmate a las clínicas estéticas modernas que usan IA para escalar operaciones, aumentar reservas y ofrecer experiencias excepcionales.",
      ctaPrimary: "Reservar demo",
      ctaSecondary: "Empezar prueba gratis",
      note: "Sin tarjeta · 14 días gratis · Cancela cuando quieras",
    },
    footer: {
      tagline: "La plataforma de automatización con IA para clínicas estéticas.",
      cols: [
        { h: "Producto", l: ["Funciones", "Precios", "Integraciones"] },
        { h: "Recursos", l: ["Blog", "Guías", "Soporte"] },
        { h: "Empresa", l: ["Sobre nosotros", "Contacto"] },
        { h: "Legal", l: ["Privacidad", "Términos"] },
      ],
      rights: "Todos los derechos reservados.",
      crafted: "Diseñado para profesionales estéticos en todo el mundo.",
    },
    dashboard: {
      breadcrumb: ["Clínica Aurelia", "Dashboard"],
      searchPh: "Buscar clientas, citas...",
      sidebar: [
        { l: "Dashboard", active: true },
        { l: "Agenda" },
        { l: "Clientas", badge: 3 },
        { l: "Automatizaciones", badge: 7 },
        { l: "Campañas" },
        { l: "Pagos" },
      ],
      workspace: "Clínica Aurelia",
      workspaceUser: "Marta Ferreira",
      greetingTitle: "Buenos días, Marta",
      greetingSub: "Lunes, 1 de junio · Clínica Aurelia tiene 8 citas hoy y 6 automatizaciones activas.",
      ranges: ["7 días", "30 días", "Trimestre"],
      newAppointment: "Nueva cita",
      kpis: [
        { l: "Ingresos del mes", v: "18.420 €", d: "12.4%", up: true },
        { l: "Citas esta semana", v: "146", d: "8.1%", up: true },
        { l: "Ocupación de agenda", v: "82 %", d: "5%", up: true },
        { l: "Clientas nuevas", v: "23", d: "3.2%", up: false },
      ],
      revenueTitle: "Ingresos por mes",
      revenueSub: "Acumulado del año · en miles de €",
      revenueChange: "+12,4%",
      mixTitle: "Ingresos por servicio",
      mixSub: "Mix de facturación · este mes",
      mix: [
        { l: "Botox", v: "28%" },
        { l: "Radiofrecuencia", v: "21%" },
        { l: "Microblading", v: "17%" },
        { l: "Limpieza facial", v: "16%" },
        { l: "Depilación láser", v: "11%" },
        { l: "Otros", v: "7%" },
      ],
      upcomingTitle: "Próximas citas",
      upcomingSub: "Hoy",
      viewAgenda: "Ver agenda",
      appointments: [
        { n: "Irene Lozano", s: "Botox · Diego", t: "11:30", st: "Confirmada", color: "ok" },
        { n: "Paula Ibáñez", s: "Depilación láser · Carla", t: "13:30", st: "Confirmada", color: "ok" },
        { n: "Nuria Gallego", s: "Limpieza facial · Noa", t: "14:30", st: "Pendiente", color: "warn" },
      ],
      floating1: { l: "Nueva reserva", v: "Botox — Sáb 14:00" },
      floating2: { l: "No-show evitado", v: "−45% este mes" },
    },
  },
  en: {
    nav: {
      links: { features: "Features", solutions: "Solutions", integrations: "Integrations", pricing: "Pricing", resources: "Resources" },
      bookDemo: "Book demo",
      startTrial: "Start free trial",
    },
    hero: {
      badge: { new: "New", text: "AI Receptionist 2.0 — now in beta" },
      title1: "Scale your aesthetic clinic",
      title2: "on autopilot",
      subtitle: "Capture leads, follow up instantly on WhatsApp, book more appointments, and automate the entire client journey with AI.",
      ctaPrimary: "Book a demo",
      ctaSecondary: "Watch platform tour",
      socialLabel: "Trusted by growing aesthetic clinics worldwide",
      rating: "4.9/5",
      clinics: "· 320+ clinics",
      compliance: "SOC 2 · HIPAA ready",
      uptime: "99.99% uptime",
    },
    problem: {
      eyebrow: "The problem",
      title1: "Most clinics lose revenue in the",
      titleHighlight: "follow-up",
      subtitle: "Every unanswered lead is money walking out the door. Manual follow-up doesn't scale — and your team can't be online 24/7.",
      items: [
        "Leads never get contacted",
        "Slow response times",
        "Missed appointments & no-shows",
        "Hours wasted on admin work",
        "Poor client retention",
      ],
      transition1: "GlowFlow automates",
      transition2: "every step",
      flow: ["Lead", "AI Qualification", "WhatsApp Follow-Up", "Booking", "Reminder", "Treatment", "Review"],
    },
    features: {
      eyebrow: "Features",
      title1: "An entire growth team,",
      titleHighlight: "automated",
      subtitle: "Every tool your clinic needs to convert leads, retain clients, and grow revenue — in one platform.",
      list: [
        { t: "AI Receptionist", d: "Answers inquiries instantly, 24/7. Sounds human, books like a pro." },
        { t: "WhatsApp Automation", d: "Engage every lead in seconds with personalized AI conversations." },
        { t: "Smart Scheduling", d: "Fill your calendar without manual effort. Reschedules itself." },
        { t: "Automated Reminders", d: "Reduce no-shows by up to 45% with multi-channel reminders." },
        { t: "CRM & Pipeline", d: "Track every client journey — from first message to repeat visit." },
        { t: "Analytics Dashboard", d: "Monitor revenue, conversion, and team performance in real time." },
      ],
    },
    how: {
      eyebrow: "How it works",
      title1: "Live in",
      titleHighlight: "three steps",
      steps: [
        { t: "Connect your clinic", d: "Sync WhatsApp, calendar, and existing tools in under 10 minutes." },
        { t: "Activate AI automations", d: "Pick from proven playbooks or build your own with our visual editor." },
        { t: "Watch revenue grow", d: "More booked appointments. Faster responses. Less manual work." },
      ],
    },
    integrations: {
      eyebrow: "Integrations",
      title1: "Plays nicely with",
      titleHighlight: "your stack",
      subtitle: "Native, two-way connections to the tools your clinic already uses.",
    },
    metrics: [
      { l: "More booked appointments" },
      { l: "Faster lead response" },
      { l: "Administrative workload" },
      { l: "Client retention" },
    ],
    testimonials: {
      eyebrow: "Loved by founders",
      title1: "Trusted by",
      titleHighlight: "high-growth aesthetic clinics",
      items: [
        { q: "We booked 38% more appointments in the first 60 days. The AI replies in seconds — clients love it.", n: "Isabella Moreau", r: "Owner, Lumière Aesthetics" },
        { q: "GlowFlow gave my front desk their life back. No more chasing leads at 10pm on a Sunday.", n: "Dr. Mateo Rivas", r: "Aesthetic Physician, Skinlab MD" },
        { q: "Our no-show rate dropped by half. Honestly, this paid for itself in the first month.", n: "Sienna Park", r: "Manager, Glow Med Spa" },
      ],
    },
    cta: {
      title1: "Ready to put your clinic",
      titleHighlight: "on autopilot?",
      subtitle: "Join modern aesthetic clinics using AI to scale operations, increase bookings, and deliver exceptional client experiences.",
      ctaPrimary: "Book a demo",
      ctaSecondary: "Start free trial",
      note: "No credit card required · 14-day trial · Cancel anytime",
    },
    footer: {
      tagline: "The AI-powered automation platform built for aesthetic clinics.",
      cols: [
        { h: "Product", l: ["Features", "Pricing", "Integrations"] },
        { h: "Resources", l: ["Blog", "Guides", "Support"] },
        { h: "Company", l: ["About", "Contact"] },
        { h: "Legal", l: ["Privacy Policy", "Terms"] },
      ],
      rights: "All rights reserved.",
      crafted: "Crafted for aesthetic professionals worldwide.",
    },
    dashboard: {
      breadcrumb: ["Aurelia Clinic", "Dashboard"],
      searchPh: "Search clients, appointments...",
      sidebar: [
        { l: "Dashboard", active: true },
        { l: "Calendar" },
        { l: "Clients", badge: 3 },
        { l: "Automations", badge: 7 },
        { l: "Campaigns" },
        { l: "Payments" },
      ],
      workspace: "Aurelia Clinic",
      workspaceUser: "Marta Ferreira",
      greetingTitle: "Good morning, Marta",
      greetingSub: "Monday, June 1 · Aurelia Clinic has 8 appointments today and 6 active automations.",
      ranges: ["7 days", "30 days", "Quarter"],
      newAppointment: "New booking",
      kpis: [
        { l: "Monthly revenue", v: "€18,420", d: "12.4%", up: true },
        { l: "Bookings this week", v: "146", d: "8.1%", up: true },
        { l: "Calendar occupancy", v: "82 %", d: "5%", up: true },
        { l: "New clients", v: "23", d: "3.2%", up: false },
      ],
      revenueTitle: "Revenue by month",
      revenueSub: "YTD · in thousands of €",
      revenueChange: "+12.4%",
      mixTitle: "Revenue by service",
      mixSub: "Billing mix · this month",
      mix: [
        { l: "Botox", v: "28%" },
        { l: "Radiofrequency", v: "21%" },
        { l: "Microblading", v: "17%" },
        { l: "Facial cleanse", v: "16%" },
        { l: "Laser hair removal", v: "11%" },
        { l: "Other", v: "7%" },
      ],
      upcomingTitle: "Upcoming appointments",
      upcomingSub: "Today",
      viewAgenda: "View calendar",
      appointments: [
        { n: "Irene Lozano", s: "Botox · Diego", t: "11:30", st: "Confirmed", color: "ok" },
        { n: "Paula Ibáñez", s: "Laser · Carla", t: "13:30", st: "Confirmed", color: "ok" },
        { n: "Nuria Gallego", s: "Facial cleanse · Noa", t: "14:30", st: "Pending", color: "warn" },
      ],
      floating1: { l: "New booking", v: "Botox — Sat 14:00" },
      floating2: { l: "No-show avoided", v: "−45% this month" },
    },
  },
};

const Ctx = createContext<{ lang: Lang; t: typeof dict.es; setLang: (l: Lang) => void }>({
  lang: "es",
  t: dict.es,
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");
  useEffect(() => {
    try {
      const saved = localStorage.getItem("glowflow.lang") as Lang | null;
      if (saved === "es" || saved === "en") setLangState(saved);
    } catch {}
  }, []);
  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("glowflow.lang", l); } catch {}
    if (typeof document !== "undefined") document.documentElement.lang = l;
  };
  return <Ctx.Provider value={{ lang, t: dict[lang], setLang }}>{children}</Ctx.Provider>;
}

export function useT() {
  return useContext(Ctx);
}
