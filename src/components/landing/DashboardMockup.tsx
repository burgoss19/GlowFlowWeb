import { motion } from "motion/react";
import {
  LayoutGrid, Calendar, Users, Zap, Megaphone, CreditCard,
  Search, Bell, MessageCircle, Plus, ChevronRight, ArrowUp, ArrowDown,
  Phone, CheckCircle2, Flower2, ChevronDown,
} from "lucide-react";
import { useT } from "@/i18n";

const sidebarIcons = [LayoutGrid, Calendar, Users, Zap, Megaphone, CreditCard];

// Spark line sample data
const SPARKS = [
  "M0,18 L8,16 L16,17 L24,12 L32,14 L40,8 L48,10 L56,4",  // up
  "M0,16 L10,14 L20,15 L30,9 L40,11 L50,5 L56,6",          // up
  "M0,15 L10,13 L20,14 L30,10 L40,11 L50,7 L56,8",          // up
  "M0,8 L10,12 L20,9 L30,14 L40,11 L50,16 L56,15",         // down
];

const DONUT_SEGMENTS = [
  { v: 28, c: "oklch(0.62 0.22 300)" },   // purple - Botox
  { v: 21, c: "oklch(0.74 0.14 290)" },   // lavender - Radiofrec
  { v: 17, c: "oklch(0.70 0.22 340)" },   // pink-magenta - Microblading
  { v: 16, c: "oklch(0.58 0.24 4)" },     // deep rose - Limpieza
  { v: 11, c: "oklch(0.78 0.16 30)" },    // coral - Depilación
  { v: 7,  c: "oklch(0.86 0.08 22)" },    // blush - Otros
];

function Donut() {
  const cx = 60, cy = 60, r = 42, sw = 16;
  const C = 2 * Math.PI * r;
  let acc = 0;
  return (
    <svg viewBox="0 0 120 120" className="h-[120px] w-[120px] -rotate-90">
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="oklch(0.94 0.01 30)" strokeWidth={sw} />
      {DONUT_SEGMENTS.map((s, i) => {
        const len = (s.v / 100) * C;
        const off = (acc / 100) * C;
        acc += s.v;
        return (
          <motion.circle
            key={i}
            cx={cx} cy={cy} r={r} fill="none"
            stroke={s.c} strokeWidth={sw} strokeLinecap="butt"
            initial={{ strokeDasharray: `0 ${C}` }}
            whileInView={{ strokeDasharray: `${len} ${C - len}` }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            strokeDashoffset={-off}
          />
        );
      })}
    </svg>
  );
}

function RainbowTop() {
  return (
    <div
      className="absolute inset-x-0 top-0 h-[3px] rounded-t-xl"
      style={{
        background: "linear-gradient(90deg, oklch(0.62 0.22 300), oklch(0.70 0.22 340), oklch(0.65 0.24 12), oklch(0.78 0.16 50))",
      }}
    />
  );
}

export function DashboardMockup() {
  const { t } = useT();
  const d = t.dashboard;

  return (
    <div className="relative">
      {/* Glow */}
      <div className="absolute inset-x-10 -inset-y-10 -z-10 rounded-[3rem] bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,oklch(0.78_0.18_15/0.30),transparent_70%)] blur-3xl" />

      <div className="glass-strong relative overflow-hidden rounded-2xl ring-violet">
        <div className="flex">
          {/* Sidebar */}
          <aside className="hidden w-[210px] shrink-0 border-r border-black/[0.06] bg-white/40 px-3 py-4 md:block">
            <div className="flex items-center gap-2 px-2 pb-5">
              <div className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-[oklch(0.72_0.21_12)] to-[oklch(0.78_0.16_50)] shadow-[0_6px_20px_-6px_oklch(0.65_0.22_15/0.6)]">
                <Flower2 className="h-4 w-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-[15px] font-semibold tracking-tight">Glowflow</span>
            </div>
            <nav className="space-y-0.5">
              {d.sidebar.map((item, i) => {
                const Icon = sidebarIcons[i];
                const active = "active" in item && item.active;
                return (
                  <div
                    key={item.l}
                    className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[12px] ${
                      active
                        ? "bg-gradient-to-r from-[oklch(0.95_0.06_15)] to-transparent font-medium text-[oklch(0.45_0.22_8)]"
                        : "text-muted-foreground"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    <span className="flex-1">{item.l}</span>
                    {"badge" in item && item.badge != null && (
                      <span className="grid h-4 min-w-4 place-items-center rounded-full bg-[oklch(0.72_0.21_12)] px-1 text-[9px] font-semibold text-white">
                        {item.badge}
                      </span>
                    )}
                  </div>
                );
              })}
            </nav>
            <div className="mt-6 border-t border-black/[0.06] pt-3">
              <div className="flex items-center gap-2 rounded-lg px-2 py-2">
                <div className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-[oklch(0.72_0.21_12)] to-[oklch(0.62_0.22_300)] text-[10px] font-semibold text-white">
                  MF
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[11px] font-semibold">{d.workspace}</p>
                  <p className="truncate text-[10px] text-muted-foreground">{d.workspaceUser}</p>
                </div>
                <ChevronDown className="h-3 w-3 text-muted-foreground" />
              </div>
            </div>
          </aside>

          {/* Main */}
          <div className="min-w-0 flex-1">
            {/* Topbar */}
            <div className="flex items-center justify-between gap-3 border-b border-black/[0.06] px-4 py-2.5">
              <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                <span>{d.breadcrumb[0]}</span>
                <ChevronRight className="h-3 w-3" />
                <span className="text-foreground">{d.breadcrumb[1]}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="hidden items-center gap-1.5 rounded-lg bg-black/[0.03] px-2.5 py-1.5 text-[11px] text-muted-foreground sm:flex">
                  <Search className="h-3 w-3" />
                  <span>{d.searchPh}</span>
                </div>
                <div className="grid h-7 w-7 place-items-center rounded-lg bg-black/[0.03] text-muted-foreground">
                  <MessageCircle className="h-3.5 w-3.5" />
                </div>
                <div className="grid h-7 w-7 place-items-center rounded-lg bg-black/[0.03] text-muted-foreground">
                  <Bell className="h-3.5 w-3.5" />
                </div>
              </div>
            </div>

            <div className="space-y-3 p-4">
              {/* Greeting */}
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <h3 className="flex items-center gap-1.5 text-lg font-semibold tracking-tight">
                    {d.greetingTitle} <span className="text-[oklch(0.72_0.21_12)]">🌸</span>
                  </h3>
                  <p className="text-[11px] text-muted-foreground">{d.greetingSub}</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-0.5 rounded-lg border border-black/[0.06] bg-white/60 p-0.5">
                    {d.ranges.map((r, i) => (
                      <button
                        key={r}
                        className={`rounded-md px-2 py-1 text-[10px] font-medium ${
                          i === 1 ? "bg-black/[0.06] text-foreground" : "text-muted-foreground"
                        }`}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                  <button className="inline-flex items-center gap-1 rounded-lg bg-gradient-to-r from-[oklch(0.72_0.21_12)] to-[oklch(0.58_0.24_4)] px-2.5 py-1.5 text-[11px] font-semibold text-white shadow-[0_6px_20px_-6px_oklch(0.62_0.22_8/0.5)]">
                    <Plus className="h-3 w-3" /> {d.newAppointment}
                  </button>
                </div>
              </div>

              {/* KPIs */}
              <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
                {d.kpis.map((k, i) => (
                  <div key={k.l} className="relative overflow-hidden rounded-xl border border-black/[0.06] bg-white/70 p-3">
                    <RainbowTop />
                    <p className="text-[10px] text-muted-foreground">{k.l}</p>
                    <div className="mt-1 flex items-end justify-between gap-2">
                      <p className="text-[18px] font-semibold tracking-tight">{k.v}</p>
                      <svg viewBox="0 0 56 22" className="h-5 w-14 shrink-0">
                        <path
                          d={SPARKS[i]}
                          fill="none"
                          stroke={k.up ? "oklch(0.62 0.22 300)" : "oklch(0.65 0.22 12)"}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <p className={`mt-1 inline-flex items-center gap-0.5 text-[10px] font-medium ${k.up ? "text-emerald-600" : "text-[oklch(0.58_0.24_4)]"}`}>
                      {k.up ? <ArrowUp className="h-2.5 w-2.5" /> : <ArrowDown className="h-2.5 w-2.5" />}
                      {k.d}
                    </p>
                  </div>
                ))}
              </div>

              {/* Charts row */}
              <div className="grid gap-2 lg:grid-cols-5">
                {/* Revenue area */}
                <div className="relative overflow-hidden rounded-xl border border-black/[0.06] bg-white/70 p-3 lg:col-span-3">
                  <RainbowTop />
                  <div className="mb-2 flex items-center justify-between">
                    <div>
                      <h4 className="text-[12px] font-semibold">{d.revenueTitle}</h4>
                      <p className="text-[10px] text-muted-foreground">{d.revenueSub}</p>
                    </div>
                    <span className="inline-flex items-center gap-0.5 text-[10px] font-medium text-emerald-600">
                      <ArrowUp className="h-2.5 w-2.5" /> {d.revenueChange}
                    </span>
                  </div>
                  <svg viewBox="0 0 300 110" className="h-[120px] w-full">
                    <defs>
                      <linearGradient id="rev-g" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="oklch(0.70 0.22 340)" stopOpacity="0.45" />
                        <stop offset="100%" stopColor="oklch(0.70 0.22 340)" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    {[20, 45, 70, 95].map((y) => (
                      <line key={y} x1="0" x2="300" y1={y} y2={y} stroke="oklch(0.20 0.02 285 / 0.06)" />
                    ))}
                    <motion.path
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                      d="M0,80 C25,72 40,75 65,70 C90,65 100,68 125,55 C150,45 165,55 185,48 C210,40 225,30 250,28 C270,26 285,22 300,18"
                      stroke="oklch(0.58 0.24 4)"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <motion.path
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6, duration: 0.6 }}
                      d="M0,80 C25,72 40,75 65,70 C90,65 100,68 125,55 C150,45 165,55 185,48 C210,40 225,30 250,28 C270,26 285,22 300,18 L300,110 L0,110 Z"
                      fill="url(#rev-g)"
                    />
                    {["E","F","M","A","M","J","J","A","S","O","N","D"].map((m, i) => (
                      <text
                        key={m + i} x={i * 27 + 5} y="108"
                        fontSize="7" fill="oklch(0.48 0.015 285)"
                        textAnchor="middle"
                      >{m}</text>
                    ))}
                  </svg>
                </div>

                {/* Service mix donut */}
                <div className="relative overflow-hidden rounded-xl border border-black/[0.06] bg-white/70 p-3 lg:col-span-2">
                  <RainbowTop />
                  <div className="mb-2">
                    <h4 className="text-[12px] font-semibold">{d.mixTitle}</h4>
                    <p className="text-[10px] text-muted-foreground">{d.mixSub}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="shrink-0">
                      <Donut />
                    </div>
                    <ul className="min-w-0 flex-1 space-y-0.5 text-[10px]">
                      {d.mix.map((s, i) => (
                        <li key={s.l} className="flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: DONUT_SEGMENTS[i].c }} />
                          <span className="flex-1 truncate text-muted-foreground">{s.l}</span>
                          <span className="font-medium tabular-nums">{s.v}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Próximas citas */}
              <div className="relative overflow-hidden rounded-xl border border-black/[0.06] bg-white/70 p-3">
                <RainbowTop />
                <div className="mb-2 flex items-center justify-between">
                  <div>
                    <h4 className="text-[12px] font-semibold">{d.upcomingTitle}</h4>
                    <p className="text-[10px] text-muted-foreground">{d.upcomingSub}</p>
                  </div>
                  <button className="inline-flex items-center gap-0.5 text-[10px] font-medium text-[oklch(0.55_0.20_8)]">
                    {d.viewAgenda} <ChevronRight className="h-3 w-3" />
                  </button>
                </div>
                <div className="grid gap-1.5 sm:grid-cols-3">
                  {d.appointments.map((a) => (
                    <div key={a.n} className="flex items-center gap-2 rounded-lg border border-black/[0.05] bg-white/80 px-2 py-1.5">
                      <span className="h-7 w-1 rounded-full bg-gradient-to-b from-[oklch(0.72_0.21_12)] to-[oklch(0.58_0.24_4)]" />
                      <div className="grid h-7 w-7 place-items-center rounded-md bg-[oklch(0.95_0.04_20)] text-[9px] font-semibold text-[oklch(0.45_0.22_8)]">
                        {a.n.split(" ").map(p => p[0]).join("").slice(0, 2)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[11px] font-medium">{a.n}</p>
                        <p className="truncate text-[9px] text-muted-foreground">{a.s}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] font-semibold tabular-nums">{a.t}</p>
                        <span className={`mt-0.5 inline-block rounded-full px-1.5 py-0.5 text-[8px] font-medium ${
                          a.color === "ok"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-amber-100 text-amber-700"
                        }`}>
                          {a.st}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating glass cards */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="glass-strong absolute -left-6 top-1/3 hidden rounded-2xl p-3 ring-violet lg:flex lg:items-center lg:gap-3"
      >
        <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[oklch(0.72_0.21_12)] to-[oklch(0.58_0.24_4)]">
          <Phone className="h-4 w-4 text-white" />
        </div>
        <div>
          <p className="text-[11px] text-muted-foreground">{d.floating1.l}</p>
          <p className="text-xs font-semibold">{d.floating1.v}</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="glass-strong absolute -right-6 top-2/3 hidden rounded-2xl p-3 ring-violet lg:flex lg:items-center lg:gap-3"
      >
        <div className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-500/20">
          <CheckCircle2 className="h-4 w-4 text-emerald-600" />
        </div>
        <div>
          <p className="text-[11px] text-muted-foreground">{d.floating2.l}</p>
          <p className="text-xs font-semibold">{d.floating2.v}</p>
        </div>
      </motion.div>
    </div>
  );
}
