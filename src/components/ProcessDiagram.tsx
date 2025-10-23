import React, { useMemo, useEffect, useRef, useState } from "react";
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
// Celebration Animation Component
function CelebrationAnimation({ buttonRef }: { buttonRef: React.RefObject<HTMLButtonElement | null> }) {
  const [buttonPosition, setButtonPosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setButtonPosition({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
      });
    }
  }, [buttonRef]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <div 
        className="absolute"
        style={{
          left: buttonPosition.x,
          top: buttonPosition.y,
          transform: 'translate(-50%, -50%)'
        }}
      >
        {/* Confetti particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              backgroundColor: ['#f472b6', '#fb7185', '#fbbf24', '#34d399', '#60a5fa', '#a78bfa'][i % 6],
              left: 0,
              top: 0,
            }}
            initial={{ 
              x: 0, 
              y: 0, 
              scale: 0,
              rotate: 0 
            }}
            animate={{ 
              x: (Math.random() - 0.5) * 300,
              y: (Math.random() - 0.5) * 300,
              scale: [0, 1, 0],
              rotate: 360
            }}
            transition={{ 
              duration: 2,
              delay: i * 0.05,
              ease: "easeOut"
            }}
          />
        ))}
        
        {/* Celebration text */}
        <motion.div
          className="absolute -top-16 left-1/2 transform -translate-x-1/2 text-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="text-2xl font-bold text-pink-600 mb-2">🎉</div>
          <div className="text-sm font-semibold text-pink-600">Congratulations!</div>
          <div className="text-xs text-zinc-600">You've completed the design process!</div>
        </motion.div>
      </div>
    </div>
  );
}

const STAGES = [
  { key: "problem", label: "Problem", icon: CircleDashed },
  { key: "research", label: "Research", icon: Beaker },
  { key: "tension", label: "Tension", icon: Compass },
  { key: "approach", label: "Approach", icon: Lightbulb },
  { key: "design", label: "Design Output", icon: MousePointer2 },
  { key: "outcome", label: "Outcome", icon: Rocket },
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
  verticalLayout?: boolean;
  isCaseStudy?: boolean;
  learningButtonRef?: React.RefObject<HTMLButtonElement | null>;
}

export default function ProcessDiagram({ active, onStageChange, caseStudyData, verticalLayout = false, isCaseStudy = false, learningButtonRef: externalLearningButtonRef }: ProcessDiagramProps) {
  const reduceMotion = useReducedMotion();
  const contentRef = useRef<HTMLElement>(null);
  const internalLearningButtonRef = useRef<HTMLButtonElement>(null);
  const learningButtonRef = externalLearningButtonRef || internalLearningButtonRef;
  const [showQuickNav, setShowQuickNav] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

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

  // Scroll detection for mobile quick navigation - show after scrolling past role section
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 1024) { // Only on mobile
        // Look for the role section (project metadata section)
        const roleSection = document.querySelector('section[class*="py-8"][class*="border-t"]');
        if (roleSection) {
          const rect = roleSection.getBoundingClientRect();
          // Show quick nav when user has scrolled past the role section
          setShowQuickNav(rect.bottom < 0);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleStageChange = (stageKey: StageKey) => {
    console.log('handleStageChange called with:', stageKey);
    onStageChange(stageKey);
    
    // Trigger celebration when reaching the learning stage
    if (stageKey === 'learning' && isCaseStudy) {
      setShowCelebration(true);
      // Hide celebration after 3 seconds
      setTimeout(() => {
        setShowCelebration(false);
      }, 3000);
    }
    
    // Only scroll on case study pages, not on landing page (verticalLayout)
    if (!verticalLayout) {
      // Scroll to top of the content container when stage changes
      setTimeout(() => {
        // For mobile, try to find the specific stage content first
        if (window.innerWidth < 1024) {
          // Look for the stage content within the process section
          const processSection = document.querySelector('[data-process-section]');
          if (processSection) {
            // Find the active stage content - look for the div with padding that contains the stage content
            const stageContent = processSection.querySelector('div[class*="p-4"][class*="pt-16"], div[class*="p-8"]');
            if (stageContent) {
              const rect = stageContent.getBoundingClientRect();
              const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
              const elementTop = rect.top + scrollTop;
              
              // Scroll to the stage content with some padding
              const targetPosition = elementTop - 20;
              
              window.scrollTo({
                top: Math.max(0, targetPosition),
                behavior: 'smooth'
              });
              return;
            }
          }
        }
        
        // Fallback: Try multiple selectors to find the content container
        let contentContainer = document.querySelector('.bg-white.rounded-3xl.border.border-zinc-200.shadow-sm.overflow-hidden');
        
        // If not found, try a more general selector
        if (!contentContainer) {
          contentContainer = document.querySelector('[data-process-section]');
        }
        
        // If still not found, try to find any content section
        if (!contentContainer) {
          contentContainer = document.querySelector('section');
        }
        
        if (contentContainer) {
          // Scroll to the content container with some padding to ensure title is visible
          const rect = contentContainer.getBoundingClientRect();
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const elementTop = rect.top + scrollTop;
          
          // Scroll to just above the container to show the title
          const targetPosition = elementTop - 20; // 20px above for mobile
          
          window.scrollTo({
            top: Math.max(0, targetPosition), // Ensure we don't scroll above the page
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };

  return (
    <MotionConfig reducedMotion={reduceMotion ? "always" : "never"}>
      <div className="w-full">
        {/* Celebration Animation */}
        {showCelebration && <CelebrationAnimation buttonRef={learningButtonRef} />}
          
        {/* Desktop: Layout based on verticalLayout prop */}
        <div className="hidden lg:block">
          {verticalLayout ? (
            /* Vertical Layout for How I Think page */
                <div className="grid lg:grid-cols-12 gap-6">
                  <aside className="lg:col-span-4">
                    <div className="sticky top-8 space-y-4 py-2">
                      {/* Compact Process Header */}
                      <div className="space-y-3">
                        <div>
                          <h2 className="text-lg font-bold tracking-tight text-zinc-900 mb-1">Design Process</h2>
                          <p className="text-xs text-zinc-600 leading-relaxed">
                            A nonlinear approach that adapts to each project's unique challenges and constraints.
                          </p>
                        </div>

                        {/* Compact Navigation */}
                        <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-3 border border-pink-100">
                          <h3 className="text-sm font-semibold text-zinc-900 mb-2">Process Stages</h3>
                          <div className="space-y-1.5">
                            {STAGES.map((stage) => {
                              const isActive = active === stage.key;
                              return (
                                <button
                                  key={stage.key}
                                  onClick={() => handleStageChange(stage.key)}
                                  className={`w-full text-left p-2 rounded-md border transition-all duration-200 ${
                                    isActive
                                      ? "bg-pink-500 border-pink-500 text-white shadow-md"
                                      : "bg-white border-zinc-200 hover:border-pink-300 hover:bg-pink-50 text-zinc-600 hover:text-pink-600"
                                  }`}
                                >
                                  <div className="flex items-center gap-1.5">
                                    <stage.icon className={`h-3.5 w-3.5 ${isActive ? 'text-white' : 'text-zinc-500'}`} />
          <div>
                                      <div className="font-medium text-xs">{stage.label}</div>
                                      <div className={`text-xs ${isActive ? 'text-pink-100' : 'text-zinc-500'}`}>
                                        {stage.key === 'problem' && 'Understanding the core challenges'}
                                        {stage.key === 'research' && 'Gathering insights and data'}
                                        {stage.key === 'tension' && 'Identifying key conflicts'}
                                        {stage.key === 'approach' && 'Developing solutions'}
                                        {stage.key === 'design' && 'Creating the experience'}
                                        {stage.key === 'outcome' && 'Measuring success'}
                                        {stage.key === 'learning' && 'Continuous improvement'}
                                      </div>
                                    </div>
                                  </div>
                                </button>
                              );
                            })}
                          </div>
          </div>
        </div>
            </div>
          </aside>

                  <section ref={contentRef} className="lg:col-span-8 space-y-6 py-2">
                    {/* Compact Phase Descriptions */}
                    <div className="bg-white rounded-xl border border-zinc-200 p-4 shadow-sm">
                    <PhaseDescriptions active={active} />
                    </div>
                    
                    {/* Compact Loop Diagram */}
                    <div className="bg-gradient-to-br from-zinc-50 to-zinc-100 rounded-xl p-4 border border-zinc-200">
                      <div className="text-center mb-2">
                        <h3 className="text-sm font-semibold text-zinc-900 mb-1">Process Flow</h3>
                        <p className="text-xs text-zinc-600">Interactive diagram showing the nonlinear design process</p>
                      </div>
                      <div className="scale-80 origin-center">
                        <LoopView active={active} setActive={handleStageChange} />
                      </div>
                    </div>
                    
                    {/* Compact Content Section */}
                    <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden">
                    </div>
                  </section>
                </div>
          ) : (
            /* Horizontal Layout for case studies */
            <>
              {/* Horizontal Process Navigation - only show if not case study */}
              {!isCaseStudy && (
                <div className="mb-8">
                  <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-6 border border-pink-100">
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-bold tracking-tight text-zinc-900 mb-2">Design Process</h2>
                      <p className="text-zinc-600">
                        A nonlinear approach that adapts to each project's unique challenges and constraints.
                      </p>
                    </div>
                    <IndexNav active={active} setActive={handleStageChange} />
                  </div>
                </div>
              )}

              <section ref={contentRef} className="space-y-12">
                {/* Enhanced Phase Descriptions - only show if not case study */}
                {!isCaseStudy && (
                  <div className="bg-white rounded-3xl border border-zinc-200 p-8 shadow-sm">
            <PhaseDescriptions active={active} />
                  </div>
                )}
                
                {/* Enhanced Loop Diagram - only show if not case study */}
                {!isCaseStudy && (
                  <div className="bg-gradient-to-br from-zinc-50 to-zinc-100 rounded-3xl p-8 border border-zinc-200">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-semibold text-zinc-900 mb-2">Process Flow</h3>
                      <p className="text-zinc-600">Interactive diagram showing the nonlinear design process</p>
                    </div>
            <LoopView active={active} setActive={handleStageChange} />
                  </div>
                )}
                
                {/* Enhanced Content Section */}
                <div className="bg-white rounded-3xl border border-zinc-200 shadow-sm overflow-hidden">
                  {isCaseStudy ? (
                    <StagePanels active={active} caseStudyData={caseStudyData} isCaseStudy={isCaseStudy} />
                  ) : null}
            </div>
          </section>
            </>
          )}
        </div>

        {/* Mobile: Content only (no process diagram) */}
        <div className="lg:hidden" data-process-section>
          {/* Mobile Scroll Indicator */}
          {isCaseStudy && (
            <div className="flex flex-col items-center justify-center pt-8 px-4">
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-zinc-900 mb-3 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Explore the Process</h3>
                <p className="text-base text-zinc-600 font-medium">Scroll down to discover the design journey</p>
              </div>
              
              {/* Enhanced Animated Scroll Indicator */}
              <div className="flex flex-col items-center space-y-4">
                <div className="relative">
                  <div className="w-8 h-12 border-2 border-zinc-300 rounded-full flex justify-center bg-zinc-50 shadow-lg">
                    <div className="w-2 h-4 bg-zinc-400 rounded-full mt-2 animate-bounce shadow-sm"></div>
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 w-8 h-12 border-2 border-zinc-200 rounded-full animate-pulse opacity-50"></div>
                </div>
                
                {/* Enhanced pulsing dots */}
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full animate-pulse shadow-sm"></div>
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full animate-pulse shadow-sm" style={{animationDelay: '0.3s'}}></div>
                  <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full animate-pulse shadow-sm" style={{animationDelay: '0.6s'}}></div>
                </div>
                
                {/* Arrow pointing down */}
                <div className="animate-bounce">
                  <svg className="w-6 h-6 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>
          </div>
          )}
          
          {/* Mobile Content */}
          <div className="pb-10">
            <StagePanels active={active} caseStudyData={caseStudyData} isCaseStudy={isCaseStudy} />
          </div>
          
          {/* Mobile Quick Navigation - Bottom of page - Only show when scrolling to process section */}
          {showQuickNav && (
            <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-zinc-200 shadow-lg lg:hidden">
            <div className="px-4 py-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-zinc-900">Process Navigation</span>
                <div className="text-xs text-zinc-500 bg-zinc-100 px-2 py-1 rounded-full">
                  {STAGES.findIndex(s => s.key === active) + 1} of {STAGES.length}
                </div>
              </div>
              
              {/* Quick Navigation Arrows */}
              <div className="flex items-center justify-between">
                <button
                  onClick={() => {
                    const currentIndex = STAGES.findIndex(s => s.key === active);
                    if (currentIndex > 0) {
                      handleStageChange(STAGES[currentIndex - 1].key);
                    }
                  }}
                  disabled={STAGES.findIndex(s => s.key === active) === 0}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-pink-100 hover:bg-pink-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  <svg className="w-4 h-4 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span className="text-sm font-medium text-pink-700">Previous</span>
                </button>
                
                <span className="text-sm text-zinc-600 font-medium px-4">
                  {STAGES.find(s => s.key === active)?.label}
                </span>
                
                <button
                  onClick={() => {
                    const currentIndex = STAGES.findIndex(s => s.key === active);
                    console.log('Next button clicked - currentIndex:', currentIndex, 'STAGES.length:', STAGES.length);
                    if (currentIndex < STAGES.length - 1) {
                      const nextStage = STAGES[currentIndex + 1];
                      console.log('Moving to next stage:', nextStage.key);
                      handleStageChange(nextStage.key);
                    }
                  }}
                  disabled={STAGES.findIndex(s => s.key === active) === STAGES.length - 1}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-pink-100 hover:bg-pink-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  <span className="text-sm font-medium text-pink-700">Next</span>
                  <svg className="w-4 h-4 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Progress Dots */}
              <div className="flex justify-center gap-1 mt-3">
                {STAGES.map((stage) => (
                  <button
                    key={stage.key}
                    ref={stage.key === 'learning' ? learningButtonRef : undefined}
                    onClick={() => {
                      handleStageChange(stage.key);
                    }}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      stage.key === active ? 'bg-pink-500' : 'bg-zinc-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          )}
        </div>
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
          onClick={() => {
            setActive(s.key);
            // Scroll to top of content section on desktop
            setTimeout(() => {
              const contentSection = document.querySelector('section[class*="lg:col-span-9"]');
              if (contentSection) {
                contentSection.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }, 100);
          }}
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

function StagePanels({ active, caseStudyData, isCaseStudy = false }: { active: StageKey; caseStudyData?: any; isCaseStudy?: boolean }) {
  return (
    <AnimatePresence mode="wait">
      {STAGES.map((s) =>
        s.key === active ? (
            <motion.div
              key={s.key}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            <StagePanelContent stage={s.key} caseStudyData={caseStudyData} isCaseStudy={isCaseStudy} />
          </motion.div>
        ) : null
      )}
    </AnimatePresence>
  );
}

function StagePanelContent({ stage, caseStudyData, isCaseStudy = false }: { stage: StageKey; caseStudyData?: any; isCaseStudy?: boolean }) {
  const stageData = caseStudyData?.[stage] || {};
  const title = stageData.title || STAGES.find((s) => s.key === stage)?.label || "Stage";
  const summary = stageData.summary || "Add your stage content here.";
  
  const Icon = STAGES.find((s) => s.key === stage)?.icon ?? ChevronRight;
  const phaseKey = STAGE_PHASE[stage];
  const phase = PHASES[phaseKey];
  
  return (
    <div className={`${isCaseStudy ? 'p-4 sm:p-6 lg:p-8 pt-28' : 'p-8'}`}>
      {/* Enhanced Header - Always show for case studies, hidden on mobile for landing page */}
      <div className={`mb-6 lg:mb-8 ${isCaseStudy ? 'block' : 'hidden lg:block'}`}>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center">
            <Icon className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">{title}</h3>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-sm font-medium text-pink-600 bg-pink-50 px-3 py-1 rounded-full">
                {phase.name}
              </span>
              <span className="text-sm text-zinc-500">—</span>
              <span className="text-sm text-zinc-600">{phase.hint}</span>
            </div>
          </div>
        </div>
        
        <p className="text-base sm:text-lg text-zinc-700 leading-relaxed max-w-4xl">
          {summary}
        </p>
      </div>

      {/* Mobile Header - Simplified - Only show for landing page, not case studies */}
      <div className={`mb-6 lg:hidden ${isCaseStudy ? 'hidden' : 'block'}`}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center">
            <Icon className="h-4 w-4 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-zinc-900">{title}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs font-medium text-pink-600 bg-pink-50 px-2 py-1 rounded-full">
                {phase.name}
              </span>
            </div>
          </div>
        </div>
        
        <p className="text-sm text-zinc-700 leading-relaxed">
          {summary}
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Left: Content */}
        <div className="space-y-4 lg:space-y-6">
        {stageData.content && (
            <div className="space-y-4 lg:space-y-6">
            {stageData.content}
          </div>
        )}

          {/* Key Insights - Improved mobile styling */}
          <div className="bg-gradient-to-br from-zinc-50 to-zinc-100 rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-zinc-200">
            <h4 className="font-semibold text-zinc-900 mb-3 text-sm lg:text-base">Key Insights</h4>
            <ul className="space-y-2 text-xs lg:text-sm text-zinc-600">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-1.5 lg:mt-2 flex-shrink-0"></div>
                <span>This stage focuses on understanding the core challenges</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-1.5 lg:mt-2 flex-shrink-0"></div>
                <span>Research-driven approach ensures data-backed decisions</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-1.5 lg:mt-2 flex-shrink-0"></div>
                <span>Iterative process allows for continuous improvement</span>
              </li>
            </ul>
        </div>
      </div>
      
        {/* Right: Media */}
        <div className="space-y-4 lg:space-y-6">
        {stageData.media ? (
            <div className="space-y-4">
              {stageData.media}
            </div>
          ) : (
            <div className="aspect-[4/3] rounded-xl lg:rounded-2xl border-2 border-dashed border-zinc-300 grid place-items-center text-zinc-500 bg-gradient-to-br from-zinc-50 to-zinc-100">
              <div className="text-center px-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-zinc-200 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-xs lg:text-sm font-medium">Media Content</p>
              </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}

function LoopView({ active, setActive }: { active: StageKey; setActive: (k: StageKey) => void }) {
  const width = 500;
  const height = 400;
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
    <div className="w-full mx-auto relative">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-[300px] sm:h-[350px] md:h-[400px]">
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
              <foreignObject x={n.x - 200} y={n.y + 40} width={400} height={60}>
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

