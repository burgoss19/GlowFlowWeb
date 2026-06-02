import { Reveal, SectionHeading } from "./Section";
import { useT } from "@/i18n";

export function HowItWorks() {
  const { t } = useT();
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow={t.how.eyebrow}
          title={<>{t.how.title1} <span className="text-violet-gradient">{t.how.titleHighlight}</span></>}
        />
        <div className="mt-16 grid gap-3 md:grid-cols-3">
          {t.how.steps.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.1}>
              <div className="glass relative h-full overflow-hidden rounded-2xl p-8">
                <span className="block text-[7rem] font-semibold leading-none tracking-tighter text-violet-gradient opacity-90">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-xl font-semibold tracking-tight">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
