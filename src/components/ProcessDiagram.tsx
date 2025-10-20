import React, { useState, useMemo, useEffect, useRef } from "react";
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

interface ProcessDiagramProps {
  active: StageKey;
  onStageChange: (stage: StageKey) => void;
  caseStudyData?: {
    [key: string]: {
      title: string;
      summary: string;
      content?: React.ReactNode;
      media?: React.ReactNode;
    };
  };
}

export default function ProcessDiagram({ active, onStageChange, caseStudyData }: ProcessDiagramProps) {
  const reduceMotion = useReducedMotion();
  const contentRef = useRef<HTMLElement>(null);

  // Keyboard navigation J/K / Arrow Up-Down
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const idx = STAGES.findIndex((s) => s.key === active);
      if (["ArrowDown", "j", "J"].includes(e.key)) {
        e.preventDefault();
        onStageChange(STAGES[Math.min(idx + 1, STAGES.length - 1)].key);
      }
      if (["ArrowUp", "k", "K"].includes(e.key)) {
        e.preventDefault();
        onStageChange(STAGES[Math.max(idx - 1, 0)].key);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, onStageChange]);

  const handleStageChange = (stageKey: StageKey) => {
    onStageChange(stageKey);
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
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">Process</h2>
            <IndexNav active={active} setActive={handleStageChange} />
          </div>
        </aside>

        <section ref={contentRef} className="lg:col-span-9 space-y-10 h-screen overflow-y-auto pr-0 lg:pr-2 py-6 lg:py-10">
          {/* Phase definitions above the diagram */}
          <PhaseDescriptions active={active} />
          {/* Loop diagram (compact) */}
          <LoopView active={active} setActive={handleStageChange} />
          
          {/* Scroll indicator */}
          <div className="flex justify-center py-4">
            <motion.div
              className="flex flex-col items-center gap-2 text-zinc-400"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <span className="text-sm font-medium">Scroll for more content</span>
              <motion.div
                className="w-6 h-6 border-2 border-zinc-400 rounded-full flex items-center justify-center"
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.div
                  className="w-1 h-1 bg-zinc-400 rounded-full"
                  animate={{ y: [0, 2, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </motion.div>
          </div>
          
          {/* Per-stage content back in */}
          <StagePanels active={active} caseStudyData={caseStudyData} />
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
            active === s.key 
              ? "bg-pink-100 text-pink-600" 
              : "hover:bg-zinc-100 text-zinc-900"
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
                ? "text-pink-600" 
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

function StagePanels({ active, caseStudyData }: { active: StageKey; caseStudyData?: any }) {
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
            <StagePanelContent stage={s.key} caseStudyData={caseStudyData} />
          </motion.div>
        ) : null
      )}
    </AnimatePresence>
  );
}

function StagePanelContent({ stage, caseStudyData }: { stage: StageKey; caseStudyData?: any }) {
  const stageData = caseStudyData?.[stage] || {
    title: STAGES.find((s) => s.key === stage)?.label || "Stage",
    summary: "Add your stage content here.",
  };
  
  const Icon = STAGES.find((s) => s.key === stage)?.icon ?? ChevronRight;
  const phaseKey = STAGE_PHASE[stage];
  const phase = PHASES[phaseKey];
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14">
      {/* Left: Free-form content header + slot */}
      <div className="lg:col-span-5 xl:col-span-4 space-y-6">
        <div className="flex items-center gap-3">
          <Icon className="h-6 w-6" />
          <h3 className="text-2xl font-semibold tracking-tight">{stageData.title}</h3>
        </div>
        <p className="text-[15px] md:text-base text-zinc-700 leading-relaxed md:leading-7 max-w-prose">
          {stageData.summary}
        </p>

        {/* Custom content from case study data */}
        {stageData.content && (
          <div className="space-y-4">
            {stageData.content}
          </div>
        )}

        <div className="text-xs md:text-sm text-zinc-500">
          <span className="font-medium">Phase:</span> {phase.name} — {phase.hint}
        </div>
      </div>
      
      {/* Right: optional media well */}
      <div className="lg:col-span-7 xl:col-span-8">
        {stageData.media ? (
          stageData.media
        ) : (
          <div className="aspect-[16/9] rounded-3xl border border-dashed border-zinc-300 grid place-items-center text-zinc-500">
            <p>Drop mockups/video/gallery here.</p>
          </div>
        )}
      </div>
    </div>
  );
}

function LoopView({ active, setActive }: { active: StageKey; setActive: (k: StageKey) => void }) {
  const width = 620;
  const height = 560;
  const cx = width / 2;
  const cy = height / 2;
  const a = 190;

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

  const pathLength = 2000;

  return (
    <div className="w-full max-w-[720px] mx-auto rounded-3xl border border-zinc-200 p-6 md:p-8 bg-white/70 relative">
      {/* Quote explaining the diagram */}
      <div className="absolute top-4 left-4 right-4 z-10">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 border border-zinc-200/50/50">
          <p className="text-sm text-zinc-700 italic text-center">
            "A nonlinear design process that adapts to each project's unique challenges and constraints"
          </p>
        </div>
      </div>
      
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-[560px] md:h-[620px]">
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
                  isActive
                    ? "fill-pink-500 stroke-pink-600"
                    : isSamePhase
                    ? "fill-pink-100 stroke-pink-400"
                    : "fill-white stroke-zinc-300"
                }
                strokeWidth={isActive ? 2 : 1.2}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.22, delay: 0.05 * n.index }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              />
              <text 
                x={n.x} 
                y={n.y + 4} 
                fontSize="11" 
                textAnchor="middle" 
                className={`pointer-events-none ${
                  isActive 
                    ? "fill-white font-semibold" 
                    : isSamePhase 
                    ? "fill-pink-700 font-medium" 
                    : "fill-zinc-600"
                }`}
              >
                {n.index + 1}
              </text>
              <foreignObject x={n.x - 80} y={n.y + 24} width={160} height={36}>
                <div className={`text-center text-[11px] md:text-[13px] leading-relaxed ${
                  isActive 
                    ? "text-pink-600 font-semibold" 
                    : isSamePhase 
                    ? "text-pink-500 font-medium" 
                    : "text-zinc-500"
                }`}>
                  {s.label}
                </div>
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
    </div>
  );
}
