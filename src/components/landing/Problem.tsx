import { Reveal, SectionHeading } from "./Section";
import { X, ArrowRight, CircleDot } from "lucide-react";
import { useT } from "@/i18n";

export function Problem() {
  const { t } = useT();
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow={t.problem.eyebrow}
          title={<>{t.problem.title1} <span className="text-violet-gradient">{t.problem.titleHighlight}</span></>}
          subtitle={t.problem.subtitle}
        />

        <Reveal>
          <div className="mx-auto mt-14 grid max-w-3xl gap-3 sm:grid-cols-2">
            {t.problem.items.map((p) => (
              <div key={p} className="glass flex items-center gap-3 rounded-xl px-4 py-3">
                <div className="grid h-7 w-7 place-items-center rounded-lg bg-destructive/15">
                  <X className="h-3.5 w-3.5 text-destructive" />
                </div>
                <span className="text-sm text-muted-foreground">{p}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="my-20 flex flex-col items-center gap-4">
          <div className="h-16 w-px bg-gradient-to-b from-transparent via-violet-deep/50 to-transparent" />
          <Reveal>
            <h3 className="text-gradient text-center text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.problem.transition1} <span className="text-violet-gradient">{t.problem.transition2}</span>
            </h3>
          </Reveal>
        </div>

        <Reveal>
          <div className="glass-strong relative overflow-hidden rounded-2xl p-6 sm:p-8">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_70%_at_50%_50%,oklch(0.82_0.12_22/0.20),transparent_70%)]" />
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-1">
              {t.problem.flow.map((step, i) => (
                <div key={step} className="flex items-center gap-2 sm:gap-1">
                  <div className="glass inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-medium sm:text-sm">
                    <CircleDot className="h-3 w-3 text-violet-deep" />
                    {step}
                  </div>
                  {i < t.problem.flow.length - 1 && (
                    <ArrowRight className="h-3.5 w-3.5 text-violet-deep/60" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
