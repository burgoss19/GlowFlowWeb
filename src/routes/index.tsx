import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { Features } from "@/components/landing/Features";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Integrations } from "@/components/landing/Integrations";
import { Metrics } from "@/components/landing/Metrics";
import { Testimonials } from "@/components/landing/Testimonials";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";
import { LanguageProvider } from "@/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GlowFlow — Automatización con IA para clínicas estéticas" },
      {
        name: "description",
        content:
          "GlowFlow ayuda a las clínicas estéticas a escalar en piloto automático: capta leads, responde al instante por WhatsApp, reserva más citas y automatiza todo el viaje del paciente con IA.",
      },
      { property: "og:title", content: "GlowFlow — Escala tu clínica estética en piloto automático" },
      {
        property: "og:description",
        content:
          "Recepcionista IA, automatización WhatsApp, agenda inteligente y analítica de ingresos para clínicas estéticas modernas.",
      },
      { name: "language", content: "es" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LanguageProvider>
      <main className="relative overflow-x-clip">
        <Nav />
        <Hero />
        <Problem />
        <Features />
        <HowItWorks />
        <Integrations />
        <Metrics />
        <Testimonials />
        <CTA />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
