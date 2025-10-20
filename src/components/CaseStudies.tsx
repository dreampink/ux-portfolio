import { useState, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion, MotionConfig } from "framer-motion";
import {
  ChevronRight,
  CircleDashed,
  Compass,
  Beaker,
  Lightbulb,
  Rocket,
  GraduationCap,
  MousePointer2,
} from "lucide-react";

const STAGES = [
  { key: "problem", label: "Problem", icon: CircleDashed },
  { key: "research", label: "Research", icon: Beaker },
  { key: "tension", label: "Tension", icon: Compass },
  { key: "approach", label: "Approach", icon: Lightbulb },
  { key: "design", label: "Design Output", icon: MousePointer2 },
  { key: "outcome", label: "Outcome / Success", icon: Rocket },
  { key: "learning", label: "Learning", icon: GraduationCap },
] as const;

type StageKey = typeof STAGES[number]["key"];

type PhaseKey = "discover" | "define" | "develop" | "deliver" | "grow";

const PHASES: Record<PhaseKey, { name: string; hint: string }> = {
  discover: { name: "Discover", hint: "Understand people & problems" },
  define: { name: "Define", hint: "Frame tensions & bets" },
  develop: { name: "Develop", hint: "Make & test" },
  deliver: { name: "Deliver", hint: "Ship outcomes" },
  grow: { name: "Grow", hint: "Learn & feed the next cycle" },
};

const STAGE_PHASE: Record<StageKey, PhaseKey> = {
  problem: "discover",
  research: "discover",
  tension: "define",
  approach: "define",
  design: "develop",
  outcome: "deliver",
  learning: "grow",
};

// Minimal copy per stage (you can overwrite in-place per case study)
const COPY: Record<StageKey, { title: string; summary: string }> = {
  problem: {
    title: "Problem",
    summary: "Frame the opportunity with constraints, metrics, and user impact.",
  },
  research: {
    title: "Research",
    summary: "Triangulate qualitative and quantitative signals to map realities.",
  },
  tension: {
    title: "Tension",
    summary: "Surface trade-offs, constraints, and opposing forces.",
  },
  approach: {
    title: "Approach",
    summary: "Define guiding principles and success criteria.",
  },
  design: {
    title: "Design Output",
    summary: "Translate intent into prototypes and final designs.",
  },
  outcome: {
    title: "Outcome / Success",
    summary: "Measure impact; compare before/after.",
  },
  learning: {
    title: "Learning",
    summary: "Capture insights and feed the next cycle.",
  },
};

export default function NonlinearProcessPortfolio() {
  const [active, setActive] = useState<StageKey>(STAGES[0].key);
  const reduceMotion = useReducedMotion();
  const contentRef = useRef<HTMLElement>(null);

  // Keyboard navigation J/K / Arrow Up-Down
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const idx = STAGES.findIndex((s) => s.key === active);
      if (["ArrowDown", "j", "J"].includes(e.key)) {
        e.preventDefault();
        setActive(STAGES[Math.min(idx + 1, STAGES.length - 1)].key);
      }
      if (["ArrowUp", "k", "K"].includes(e.key)) {
        e.preventDefault();
        setActive(STAGES[Math.max(idx - 1, 0)].key);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  const handleStageChange = (stageKey: StageKey) => {
    setActive(stageKey);
    // Scroll to top of content when stage changes
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <MotionConfig reducedMotion={reduceMotion ? "always" : "never"}>
      <div className="w-full h-screen grid grid-cols-1 lg:grid-cols-12 gap-12">
        <aside className="lg:col-span-3">
          <div className="sticky top-0 h-screen overflow-y-auto space-y-8 py-6 lg:py-10">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Process</h2>
            <IndexNav active={active} setActive={handleStageChange} />
          </div>
        </aside>

        <section ref={contentRef} className="lg:col-span-9 space-y-10 h-screen overflow-y-auto pr-0 lg:pr-2 py-6 lg:py-10">
          {/* Phase definitions above the diagram */}
          <PhaseDescriptions active={active} />
          {/* Loop diagram (compact) */}
          <LoopView active={active} setActive={handleStageChange} />
          {/* Per-stage content back in */}
          <StagePanels active={active} />
        </section>
      </div>
    </MotionConfig>
  );
}

function IndexNav({ active, setActive }: { active: StageKey; setActive: (k: StageKey) => void }) {
  return (
    <nav aria-label="Process index" className="flex flex-col gap-3">
      {STAGES.map((s, i) => (
        <motion.button
          key={s.key}
          onClick={() => setActive(s.key)}
          className={`group text-left py-3.5 px-5 rounded-2xl transition-colors ${
            active === s.key ? "bg-zinc-900 text-black" : "hover:bg-zinc-100"
          }`}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.18, delay: i * 0.04 }}
        >
          <span className="inline-flex items-center gap-3.5">
            <s.icon className="h-5 w-5" />
            <span className="font-medium text-sm md:text-base leading-relaxed">
              {i + 1}. {s.label}
            </span>
          </span>
        </motion.button>
      ))}
    </nav>
  );
}

function PhaseDescriptions({ active }: { active: StageKey }) {
  const activePhase: PhaseKey = STAGE_PHASE[active];
  return (
    <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
      {(Object.keys(PHASES) as PhaseKey[]).map((key) => {
        const highlighted = key === activePhase;
        return (
          <div
            key={key}
            className="transition-colors"
          >
            <div className={`text-lg font-bold mb-2 transition-colors ${
              highlighted 
                ? "text-blue-600" 
                : "text-zinc-400"
            }`}>
              {PHASES[key].name}
            </div>
            <div className={`text-sm leading-relaxed ${
              highlighted 
                ? "text-zinc-700 font-medium" 
                : "text-zinc-500"
            }`}>
              {PHASES[key].hint}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function StagePanels({ active }: { active: StageKey }) {
  return (
    <AnimatePresence mode="wait">
      {STAGES.map((s) =>
        s.key === active ? (
          <motion.div
            key={s.key}
            className="rounded-3xl border border-zinc-200 p-6 md:p-10 bg-white/60"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            <StagePanelContent stage={s.key} />
          </motion.div>
        ) : null
      )}
    </AnimatePresence>
  );
}

function StagePanelContent({ stage }: { stage: StageKey }) {
  const data = COPY[stage];
  const Icon = STAGES.find((s) => s.key === stage)?.icon ?? ChevronRight;
  const phaseKey = STAGE_PHASE[stage];
  const phase = PHASES[phaseKey];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14">
      {/* Left: Free-form content header + slot */}
      <div className="lg:col-span-5 xl:col-span-4 space-y-6">
        <div className="flex items-center gap-3">
          <Icon className="h-6 w-6" />
          <h3 className="text-2xl font-semibold tracking-tight">{data.title}</h3>
        </div>
        <p className="text-[15px] md:text-base text-zinc-700 leading-relaxed md:leading-7 max-w-prose">
          {data.summary}
        </p>

        <div className="rounded-2xl border border-dashed border-zinc-300 p-5 text-zinc-500">
          <p className="text-sm md:text-base text-center italic">Add your stage content here (text, images, embeds).</p>
        </div>
        <div className="text-xs md:text-sm text-zinc-500">
          <span className="font-medium">Phase:</span> {phase.name} — {phase.hint}
        </div>
        
        {/* Additional content sections for scroll testing */}
        <div className="space-y-6">
          <h4 className="text-lg font-semibold text-zinc-800">Key Insights</h4>
          <div className="space-y-3">
            <div className="p-4 bg-zinc-50 rounded-lg">
              <p className="text-sm text-zinc-700">This is a sample insight that demonstrates the scroll functionality. You can add multiple insights here to test the scrolling behavior.</p>
            </div>
            <div className="p-4 bg-zinc-50 rounded-lg">
              <p className="text-sm text-zinc-700">Another insight that shows how content flows in the scrollable area. This helps visualize the layout when you have more content.</p>
            </div>
            <div className="p-4 bg-zinc-50 rounded-lg">
              <p className="text-sm text-zinc-700">A third insight to further demonstrate the scrolling capability and content organization within the stage panels.</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-zinc-800">Methodology</h4>
          <p className="text-sm text-zinc-600 leading-relaxed">
            This section demonstrates how additional content can be added to test the scroll functionality. 
            You can include research methods, user interviews, data analysis techniques, and other relevant information here.
          </p>
          <ul className="space-y-2 text-sm text-zinc-600">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-zinc-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>User interviews with 15 participants</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-zinc-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>Competitive analysis of 8 similar products</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-zinc-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>Usability testing with 3 rounds of iterations</span>
            </li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-zinc-800">Challenges & Solutions</h4>
          <div className="space-y-3">
            <div className="p-4 border-l-4 border-red-200 bg-red-50">
              <h5 className="font-medium text-red-800 mb-2">Challenge</h5>
              <p className="text-sm text-red-700">Users were dropping off during the checkout process due to complex form validation.</p>
            </div>
            <div className="p-4 border-l-4 border-green-200 bg-green-50">
              <h5 className="font-medium text-green-800 mb-2">Solution</h5>
              <p className="text-sm text-green-700">Implemented progressive disclosure and real-time validation feedback to guide users through the process.</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-zinc-800">Results & Metrics</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-600">23%</div>
              <div className="text-sm text-blue-800">Reduction in drop-off</div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg text-center">
              <div className="text-2xl font-bold text-green-600">4.2s</div>
              <div className="text-sm text-green-800">Average completion time</div>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-zinc-800">Next Steps</h4>
          <div className="space-y-2 text-sm text-zinc-600">
            <p>• Conduct follow-up user testing to validate improvements</p>
            <p>• Implement A/B testing for different validation approaches</p>
            <p>• Monitor conversion metrics over the next quarter</p>
            <p>• Gather additional feedback from customer support team</p>
          </div>
        </div>
      </div>
    
      <div className="lg:col-span-7 xl:col-span-8">
        <div className="aspect-[16/9] rounded-3xl border border-dashed border-zinc-300 grid place-items-center text-zinc-500">
          <p>Drop mockups/video/gallery here.</p>
        </div>
      </div>
    </div>
  );
}


function LoopView({ active, setActive }: { active: StageKey; setActive: (k: StageKey) => void }) {
  const width = 420;
  const height = 360;
  const cx = width / 2;
  const cy = height / 2;
  const a = 130;

  const activePhase: PhaseKey = STAGE_PHASE[active];

  const samples = 260;
  const points = useMemo(() => {
    const arr: Array<{ x: number; y: number }> = [];
    for (let i = 0; i <= samples; i++) {
      const t = (i / samples) * Math.PI * 2;
      const x = cx + a * Math.sin(t);
      const y = cy + (a * 0.62) * Math.sin(t) * Math.cos(t);
      arr.push({ x, y });
    }
    return arr;
  }, [a, cx, cy]);

  const d = useMemo(
    () => points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(2)} ${p.y.toFixed(2)}`).join(" "),
    [points]
  );

  const nodes = useMemo(
    () =>
      STAGES.map((s, i) => {
        const t = (i / STAGES.length) * Math.PI * 2;
        const x = cx + a * Math.sin(t);
        const y = cy + (a * 0.62) * Math.sin(t) * Math.cos(t);
        return { key: s.key, label: s.label, x, y, index: i } as const;
      }),
    [a, cx, cy]
  );

  const pathLength = 3000;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-[360px] md:h-[420px]">
      <motion.path
        d={d}
        className="fill-none stroke-zinc-300"
        strokeWidth={1.6}
        strokeDasharray={pathLength}
        initial={{ strokeDashoffset: pathLength, opacity: 0.75 }}
        animate={{ strokeDashoffset: 0, opacity: 1 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      />

      {nodes.map((n) => {
        const s = STAGES[n.index];
        const isActive = n.key === active;
        const isSamePhase = STAGE_PHASE[n.key] === activePhase;
        return (
          <g key={n.key} onClick={() => setActive(n.key)} className="cursor-pointer" aria-label={s.label}>
            <motion.circle
              cx={n.x}
              cy={n.y}
              r={isActive ? 20 : 14}
              className={
                isSamePhase
                  ? "fill-white stroke-zinc-900"
                  : "fill-white stroke-zinc-300"
              }
              strokeWidth={1.2}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.22, delay: 0.05 * n.index }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            />
            <text x={n.x} y={n.y + 4} fontSize="11" textAnchor="middle" className="pointer-events-none fill-zinc-600">
              {n.index + 1}
            </text>
            <foreignObject x={n.x - 80} y={n.y + 24} width={160} height={36}>
              <div className="text-center text-[11px] md:text-[13px] leading-relaxed opacity-90">{s.label}</div>
            </foreignObject>
          </g>
        );
      })}

      <motion.circle
        cx={cx}
        cy={cy}
        r={2}
        className="fill-zinc-400"
        animate={{ r: [2, 5, 2], opacity: [0.8, 0.2, 0.8] }}
        transition={{ duration: 2.2, repeat: Infinity }}
      />
    </svg>
  );
}
