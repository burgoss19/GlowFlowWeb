import { motion } from "motion/react";
import { Flower2, Languages } from "lucide-react";
import { useT } from "@/i18n";

export function Nav() {
  const { lang, t, setLang } = useT();
  const links = [
    { k: "features", l: t.nav.links.features },
    { k: "solutions", l: t.nav.links.solutions },
    { k: "integrations", l: t.nav.links.integrations },
    { k: "pricing", l: t.nav.links.pricing },
    { k: "resources", l: t.nav.links.resources },
  ];
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 left-1/2 z-50 w-[min(1200px,calc(100%-2rem))] -translate-x-1/2"
    >
      <div className="glass-strong flex items-center justify-between rounded-2xl px-5 py-3">
        <a href="#" className="flex items-center gap-2">
          <div className="relative grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-[oklch(0.72_0.21_12)] to-[oklch(0.78_0.16_50)] shadow-[0_6px_20px_-6px_oklch(0.65_0.22_15/0.55)]">
            <Flower2 className="h-4 w-4 text-white" strokeWidth={2.5} />
          </div>
          <span className="text-[15px] font-semibold tracking-tight">Glowflow</span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.k}
              href={`#${l.k}`}
              className="rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-black/[0.04] hover:text-foreground"
            >
              {l.l}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="glass inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Toggle language"
          >
            <Languages className="h-3.5 w-3.5" />
            <span className="uppercase">{lang}</span>
          </button>
          <a
            href="#cta"
            className="group relative inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-b from-violet-glow to-violet-deep px-3.5 py-1.5 text-sm font-medium text-white glow-violet transition-all hover:scale-[1.02]"
          >
            {t.nav.startTrial}
            <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        </div>
      </div>
    </motion.header>
  );
}
