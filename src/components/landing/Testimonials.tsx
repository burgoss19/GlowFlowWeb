import { Reveal, SectionHeading } from "./Section";
import { Star } from "lucide-react";
import { useT } from "@/i18n";

export function Testimonials() {
  const { t } = useT();
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow={t.testimonials.eyebrow}
          title={<>{t.testimonials.title1} <span className="text-violet-gradient">{t.testimonials.titleHighlight}</span></>}
        />
        <div className="mt-16 grid gap-3 md:grid-cols-3">
          {t.testimonials.items.map((it, i) => (
            <Reveal key={it.n} delay={i * 0.08}>
              <figure className="glass flex h-full flex-col rounded-2xl p-6">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, k) => (
                    <Star key={k} className="h-3.5 w-3.5 fill-violet-deep text-violet-deep" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-foreground/90">
                  “{it.q}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-black/5 pt-4">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-violet-glow to-violet-deep text-sm font-semibold text-white">
                    {it.n[0]}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{it.n}</p>
                    <p className="text-xs text-muted-foreground">{it.r}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
