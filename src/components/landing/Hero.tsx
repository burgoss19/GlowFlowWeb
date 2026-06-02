import { motion } from "motion/react";
import { Play, ArrowRight, Star } from "lucide-react";
import { DashboardMockup } from "./DashboardMockup";
import { useT } from "@/i18n";

export function Hero() {
  const { t } = useT();
  return (
    <section className="relative isolate overflow-hidden pt-40 pb-24 sm:pt-48">
      {/* Orb */}
      <div className="pointer-events-none absolute left-1/2 top-[10%] -z-10 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.82_0.12_22/0.55),oklch(0.88_0.08_50/0.25)_40%,transparent_70%)] blur-3xl animate-orb" />
      <div className="pointer-events-none absolute left-1/2 top-[12%] -z-10 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.90_0.08_25/0.7),transparent_70%)] blur-2xl" />

      {/* Grid */}
      <div className="pointer-events-none absolute inset-0 -z-20 grid-bg" />

      {/* Particles */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="absolute block h-1 w-1 rounded-full bg-violet-glow/60"
            style={{
              left: `${(i * 53) % 100}%`,
              animation: `particle ${14 + (i % 7) * 2}s linear ${i * 0.7}s infinite`,
              filter: "blur(0.5px)",
            }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-6xl px-6 text-center">
        <motion.a
          href="#cta"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="glass mx-auto mb-8 inline-flex items-center gap-2 rounded-full py-1.5 pl-1.5 pr-4 text-xs text-muted-foreground"
        >
          <span className="rounded-full bg-gradient-to-r from-violet-glow to-violet-deep px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-white uppercase">
            {t.hero.badge.new}
          </span>
          {t.hero.badge.text}
          <ArrowRight className="h-3 w-3" />
        </motion.a>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-gradient mx-auto max-w-4xl text-balance text-5xl font-semibold tracking-[-0.04em] sm:text-7xl"
        >
          {t.hero.title1}{" "}
          <span className="text-violet-gradient">{t.hero.title2}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground sm:text-xl"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#cta"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-b from-violet-glow to-violet-deep px-6 py-3 text-sm font-medium text-white glow-violet transition-transform hover:scale-[1.03]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent bg-[length:200%_100%] animate-shimmer" />
            <span className="relative">{t.hero.ctaPrimary}</span>
            <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#features"
            className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-black/[0.04]"
          >
            <Play className="h-3.5 w-3.5 fill-current" />
            {t.hero.ctaSecondary}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 flex flex-col items-center gap-4"
        >
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground/70">
            {t.hero.socialLabel}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-violet-deep text-violet-deep" />
              ))}
              <span className="ml-1.5 text-foreground">{t.hero.rating}</span>
              <span>{t.hero.clinics}</span>
            </div>
            <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
            <span>{t.hero.compliance}</span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
            <span>{t.hero.uptime}</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto mt-20 max-w-6xl px-6"
      >
        <DashboardMockup />
      </motion.div>
    </section>
  );
}
