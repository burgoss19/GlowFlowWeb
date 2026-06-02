import { Reveal } from "./Section";
import { ArrowRight, Play } from "lucide-react";
import { useT } from "@/i18n";

export function CTA() {
  const { t } = useT();
  return (
    <section id="cta" className="relative isolate overflow-hidden py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,oklch(0.82_0.12_22/0.45),oklch(0.88_0.08_50/0.22)_40%,transparent_70%)] blur-3xl" />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-20 grid-bg opacity-40" />

      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <h2 className="text-gradient text-balance text-5xl font-semibold tracking-[-0.04em] sm:text-7xl">
            {t.cta.title1} <span className="text-violet-gradient">{t.cta.titleHighlight}</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground">
            {t.cta.subtitle}
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-b from-violet-glow to-violet-deep px-6 py-3.5 text-sm font-medium text-white glow-violet transition-transform hover:scale-[1.03]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent bg-[length:200%_100%] animate-shimmer" />
              <span className="relative">{t.cta.ctaPrimary}</span>
              <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#"
              className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3.5 text-sm font-medium transition-colors hover:bg-black/[0.04]"
            >
              <Play className="h-3.5 w-3.5 fill-current" />
              {t.cta.ctaSecondary}
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mt-6 text-xs text-muted-foreground">{t.cta.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
