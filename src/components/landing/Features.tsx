import { Reveal, SectionHeading } from "./Section";
import { Bot, MessageCircle, Calendar, BellRing, Users, BarChart3 } from "lucide-react";
import { useT } from "@/i18n";

const icons = [Bot, MessageCircle, Calendar, BellRing, Users, BarChart3];

export function Features() {
  const { t } = useT();
  return (
    <section id="features" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow={t.features.eyebrow}
          title={<>{t.features.title1} <span className="text-violet-gradient">{t.features.titleHighlight}</span></>}
          subtitle={t.features.subtitle}
        />

        <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {t.features.list.map((f, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={f.t} delay={i * 0.06}>
                <div className="group glass relative h-full overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-black/[0.025]">
                  <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-violet-glow/0 blur-2xl transition-all duration-500 group-hover:bg-violet-glow/25" />
                  <div className="relative">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-violet-glow/25 to-violet-deep/15 ring-violet">
                      <Icon className="h-5 w-5 text-violet-deep" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold tracking-tight">{f.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.d}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
