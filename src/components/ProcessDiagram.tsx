import React, { useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion, MotionConfig } from "framer-motion";
import { Link } from "react-router-dom";
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
  prevCaseStudy?: {
    slug: string;
    title: string;
  } | null;
  nextCaseStudy?: {
    slug: string;
    title: string;
  } | null;
}

export default function ProcessDiagram({ active, onStageChange, caseStudyData, prevCaseStudy, nextCaseStudy }: ProcessDiagramProps) {
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
      <div className="w-full">
        {/* Mobile: Combined Navigation */}
        <div className="lg:hidden mb-8">
          {/* Case Study Navigation */}
          <div className="mb-6">
            <CaseStudyNavigation prevCaseStudy={prevCaseStudy || null} nextCaseStudy={nextCaseStudy || null} />
          </div>
          
          {/* Process Navigation - Compact Horizontal */}
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-zinc-900 mb-4">Process</h2>
            <MobileProcessNav active={active} setActive={handleStageChange} />
          </div>
        </div>

        {/* Desktop: Full layout with sidebar */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-12 h-screen">
          <aside className="lg:col-span-3">
            <div className="sticky top-0 h-screen overflow-y-auto scrollbar-hide space-y-8 py-6 lg:py-10">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">Process</h2>
              <IndexNav active={active} setActive={handleStageChange} />
              
              {/* Case Study Navigation */}
              <CaseStudyNavigation prevCaseStudy={prevCaseStudy || null} nextCaseStudy={nextCaseStudy || null} />
            </div>
          </aside>

          <section ref={contentRef} className="lg:col-span-9 space-y-10 h-screen overflow-y-auto scrollbar-hide pr-0 lg:pr-2 py-6 lg:py-10">
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

        {/* Mobile: Compact process diagram + content */}
        <div className="lg:hidden">
          {/* Mobile Process Diagram */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold tracking-tight text-zinc-900 mb-4">Process</h2>
            <MobileProcessDiagram active={active} setActive={handleStageChange} />
          </div>
          
          {/* Mobile Content */}
          <StagePanels active={active} caseStudyData={caseStudyData} />
        </div>
      </div>
    </MotionConfig>
  );
}

function MobileProcessDiagram({ active, setActive }: { active: StageKey; setActive: (k: StageKey) => void }) {
  const width = 600;
  const height = 500;
  const cx = width / 2;
  const cy = height / 2;
  const a = 200;

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

  const pathLength = 1200;

  return (
    <div className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[550px] mx-auto rounded-2xl border border-zinc-200 p-4 sm:p-6 bg-white/70 relative">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-[400px] sm:h-[450px] md:h-[500px]">
        <motion.path
          d={d}
          className="fill-none stroke-zinc-300"
          strokeWidth={3}
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
                r={isActive ? 30 : 20}
                className={
                  isActive
                    ? "fill-pink-500 stroke-pink-600"
                    : isSamePhase
                    ? "fill-pink-100 stroke-pink-400"
                    : "fill-white stroke-zinc-300"
                }
                strokeWidth={isActive ? 3.5 : 2.5}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.22, delay: 0.05 * n.index }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              />
              <text 
                x={n.x} 
                y={n.y + 5} 
                fontSize="14" 
                textAnchor="middle" 
                className={`pointer-events-none ${
                  isActive 
                    ? "fill-white font-bold" 
                    : isSamePhase 
                    ? "fill-pink-700 font-semibold" 
                    : "fill-zinc-600"
                }`}
              >
                {n.index + 1}
              </text>
              <foreignObject x={n.x - 100} y={n.y + 35} width={200} height={40}>
                <div className={`text-center text-[14px] leading-tight ${
                  isActive 
                    ? "text-pink-600 font-bold" 
                    : isSamePhase 
                    ? "text-pink-500 font-semibold" 
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
          r={12}
          className="fill-zinc-400"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
        />
      </svg>
    </div>
  );
}

function MobileProcessNav({ active, setActive }: { active: StageKey; setActive: (k: StageKey) => void }) {
  return (
    <nav aria-label="Process index" className="flex flex-wrap gap-2 sm:gap-3">
      {STAGES.map((s, i) => (
        <motion.button
          key={s.key}
          onClick={() => setActive(s.key)}
          className={`group flex items-center gap-1 sm:gap-2 py-2 px-2 sm:py-3 sm:px-4 rounded-lg sm:rounded-xl border-2 transition-all duration-200 shadow-sm hover:shadow-md text-xs sm:text-sm ${
            active === s.key 
              ? "bg-pink-500 border-pink-500 text-white shadow-lg" 
              : "bg-white border-zinc-300 hover:border-pink-400 hover:bg-pink-50 text-zinc-700 hover:text-pink-700"
          }`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, delay: i * 0.05 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <s.icon className="h-3 w-3 sm:h-4 sm:w-4" />
          <span className="font-medium text-xs sm:text-sm whitespace-nowrap">
            {s.label}
          </span>
        </motion.button>
      ))}
    </nav>
  );
}

function IndexNav({ active, setActive }: { active: StageKey; setActive: (k: StageKey) => void }) {
  return (
    <nav aria-label="Process index" className="flex flex-col gap-3">
      {STAGES.map((s, i) => (
        <motion.button
          key={s.key}
          onClick={() => setActive(s.key)}
          className={`group text-left py-4 px-6 rounded-2xl border-2 transition-all duration-200 shadow-sm hover:shadow-md ${
            active === s.key 
              ? "bg-pink-500 border-pink-500 text-white shadow-lg" 
              : "bg-white border-zinc-300 hover:border-pink-400 hover:bg-pink-50 text-zinc-900 hover:text-pink-700"
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
  const width = 1000;
  const height = 900;
  const cx = width / 2;
  const cy = height / 2;
  const a = 320;

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
    <div className="w-full max-w-[1100px] mx-auto rounded-3xl border border-zinc-200 p-10 md:p-12 bg-white/70 relative">
      {/* Quote explaining the diagram */}
      <div className="absolute top-8 left-8 right-8 z-10">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl px-8 py-5 border border-zinc-200/50/50">
          <p className="text-lg text-zinc-700 italic text-center">
            "A nonlinear design process that adapts to each project's unique challenges and constraints"
          </p>
        </div>
      </div>
      
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-[900px] md:h-[1000px]">
        <motion.path
          d={d}
          className="fill-none stroke-zinc-300"
          strokeWidth={2.5}
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
                r={isActive ? 36 : 26}
                className={
                  isActive
                    ? "fill-pink-500 stroke-pink-600"
                    : isSamePhase
                    ? "fill-pink-100 stroke-pink-400"
                    : "fill-white stroke-zinc-300"
                }
                strokeWidth={isActive ? 4 : 2.5}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.22, delay: 0.05 * n.index }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              />
              <text 
                x={n.x} 
                y={n.y + 6} 
                fontSize="18" 
                textAnchor="middle" 
                className={`pointer-events-none ${
                  isActive 
                    ? "fill-white font-bold" 
                    : isSamePhase 
                    ? "fill-pink-700 font-semibold" 
                    : "fill-zinc-600"
                }`}
              >
                {n.index + 1}
              </text>
              <foreignObject x={n.x - 120} y={n.y + 40} width={240} height={50}>
                <div className={`text-center text-[15px] md:text-[17px] leading-relaxed ${
                  isActive 
                    ? "text-pink-600 font-bold" 
                    : isSamePhase 
                    ? "text-pink-500 font-semibold" 
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

function CaseStudyNavigation({ 
  prevCaseStudy, 
  nextCaseStudy 
}: { 
  prevCaseStudy: { slug: string; title: string } | null;
  nextCaseStudy: { slug: string; title: string } | null;
}) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-zinc-900">Case Studies</h3>
      
      <div className="space-y-3">
        {/* Previous Case Study */}
        {prevCaseStudy && (
          <Link
            to={`/case/${prevCaseStudy.slug}`}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group block p-4 rounded-xl border border-zinc-200 hover:border-green-300 hover:bg-green-50 transition-all duration-200"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-zinc-100 group-hover:bg-green-100 flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 text-zinc-600 group-hover:text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-zinc-500 font-medium mb-1">Previous</p>
                <p className="text-sm font-medium text-zinc-900 group-hover:text-green-700 truncate">
                  {prevCaseStudy.title}
                </p>
              </div>
            </div>
          </Link>
        )}

        {/* Next Case Study */}
        {nextCaseStudy && (
          <Link
            to={`/case/${nextCaseStudy.slug}`}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group block p-4 rounded-xl border border-zinc-200 hover:border-yellow-300 hover:bg-yellow-50 transition-all duration-200"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-zinc-100 group-hover:bg-yellow-100 flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 text-zinc-600 group-hover:text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-zinc-500 font-medium mb-1">Next</p>
                <p className="text-sm font-medium text-zinc-900 group-hover:text-yellow-700 truncate">
                  {nextCaseStudy.title}
                </p>
              </div>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
