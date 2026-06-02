import { Reveal, SectionHeading } from "./Section";
import { useT } from "@/i18n";

const integrations = [
  "WhatsApp", "Google Calendar", "Stripe", "Meta", "Gmail", "HubSpot", "Zapier", "Instagram",
];

export function Integrations() {
  const { t } = useT();
  return (
    <section id="integrations" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow={t.integrations.eyebrow}
          title={<>{t.integrations.title1} <span className="text-violet-gradient">{t.integrations.titleHighlight}</span></>}
          subtitle={t.integrations.subtitle}
        />
        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {integrations.map((name, i) => (
            <Reveal key={name} delay={i * 0.04}>
              <div className="glass group flex h-24 items-center justify-center gap-2 rounded-2xl transition-all hover:-translate-y-1 hover:bg-black/[0.025]">
                <span className="h-2 w-2 rounded-full bg-violet-deep shadow-[0_0_12px_var(--violet-glow)]" />
                <span className="text-sm font-medium tracking-tight text-foreground/90 group-hover:text-foreground">
                  {name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
