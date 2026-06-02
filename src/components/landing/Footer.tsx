import { Flower2, Linkedin, Instagram } from "lucide-react";
import { useT } from "@/i18n";

export function Footer() {
  const { t } = useT();
  return (
    <footer className="border-t border-black/5 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-[oklch(0.72_0.21_12)] to-[oklch(0.78_0.16_50)] shadow-[0_6px_20px_-6px_oklch(0.65_0.22_15/0.55)]">
                <Flower2 className="h-4 w-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-semibold tracking-tight">Glowflow</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">{t.footer.tagline}</p>
            <div className="mt-6 flex gap-2">
              <a href="#" className="glass grid h-9 w-9 place-items-center rounded-lg transition-colors hover:bg-black/[0.04]">
                <Linkedin className="h-4 w-4 text-muted-foreground" />
              </a>
              <a href="#" className="glass grid h-9 w-9 place-items-center rounded-lg transition-colors hover:bg-black/[0.04]">
                <Instagram className="h-4 w-4 text-muted-foreground" />
              </a>
            </div>
          </div>
          {t.footer.cols.map((c) => (
            <div key={c.h}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{c.h}</h4>
              <ul className="mt-4 space-y-2.5">
                {c.l.map((i) => (
                  <li key={i}>
                    <a href="#" className="text-sm text-foreground/80 transition-colors hover:text-foreground">
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-black/5 pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} GlowFlow. {t.footer.rights}</p>
          <p>{t.footer.crafted}</p>
        </div>
      </div>
    </footer>
  );
}
