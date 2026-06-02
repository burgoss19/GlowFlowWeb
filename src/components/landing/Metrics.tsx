import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { Reveal } from "./Section";
import { useT } from "@/i18n";

const stats = [
  { v: 38, p: "+", suffix: "%" },
  { v: 62, p: "+", suffix: "%" },
  { v: 45, p: "−", suffix: "%" },
  { v: 27, p: "+", suffix: "%" },
];

function Counter({ to, prefix, suffix }: { to: number; prefix: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1400;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref} className="text-violet-gradient text-5xl font-semibold tracking-[-0.04em] sm:text-7xl">
      {prefix}{n}{suffix}
    </span>
  );
}

export function Metrics() {
  const { t } = useT();
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="text-center">
                <Counter to={s.v} prefix={s.p} suffix={s.suffix} />
                <p className="mt-3 text-sm text-muted-foreground">{t.metrics[i].l}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
