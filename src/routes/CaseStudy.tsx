import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import ProcessDiagram from '../components/ProcessDiagram'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { getCaseStudyBySlug, caseStudies } from '../data/caseStudies'

export default function CaseStudy() {
  const { slug = '' } = useParams()
  const [activeStage, setActiveStage] = useState<'problem' | 'research' | 'tension' | 'approach' | 'design' | 'outcome' | 'learning'>('problem')
  const [showStickyNav, setShowStickyNav] = useState(false)
  const learningButtonRef = useRef<HTMLButtonElement>(null)

  const caseStudy = getCaseStudyBySlug(slug)

      // Scroll detection for sticky process navigation - desktop only
      useEffect(() => {
        const handleScroll = () => {
          // Only show process nav on desktop (lg and up)
          if (window.innerWidth >= 1024) {
            // Look for the main title specifically
            const titleElement = document.querySelector('h1.text-4xl.md\\:text-5xl.lg\\:text-6xl.font-bold.tracking-tight.bg-gradient-to-r.from-zinc-900.to-zinc-700.bg-clip-text.text-transparent')
            if (titleElement) {
              const rect = titleElement.getBoundingClientRect()
              // Show sticky nav when user scrolls past the title
              // Trigger when the bottom of title reaches the top of viewport
              setShowStickyNav(rect.bottom <= 0)
            } else {
              // Fallback to header if title not found
              const headerSection = document.querySelector('header')
              if (headerSection) {
                const rect = headerSection.getBoundingClientRect()
                setShowStickyNav(rect.bottom <= 0)
              }
            }
          } else {
            // On mobile, always hide the process nav
            setShowStickyNav(false)
          }
        }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)
    handleScroll() // Check initial state
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])
  
  // Get current case study index and navigation
  const currentIndex = caseStudies.findIndex(study => study.slug === slug)
  const prevCaseStudy = currentIndex > 0 ? caseStudies[currentIndex - 1] : null
  const nextCaseStudy = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null
  
  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-white text-zinc-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">Case Study Not Found</h1>
          <Link to="/#projects" className="text-blue-600 hover:underline">← Back to all case studies</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Main Navigation - only show when process nav is not visible */}
      {!showStickyNav && <Navigation />}
      
          {/* Sticky Process Navigation - appears after scrolling past metadata - hidden on mobile */}
          {showStickyNav && (
            <div className="hidden lg:block fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-zinc-200 shadow-sm">
              <div className="max-w-7xl mx-auto px-6 py-4">
                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-xs text-zinc-500 mb-3">
                  <Link to="/#home" className="hover:text-pink-600 transition-colors">Home</Link>
                  <span>/</span>
                  <Link to="/#projects" className="hover:text-pink-600 transition-colors">Projects</Link>
                  <span>/</span>
                  <span className="text-zinc-900 font-medium">{caseStudy.title}</span>
                  <span>/</span>
                  <span className="text-pink-600 font-medium">
                    {['problem', 'research', 'tension', 'approach', 'design', 'outcome', 'learning'].find(s => s === activeStage)?.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                  </span>
                </div>
                
                {/* Progress Bar */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-zinc-600">
                      Step {['problem', 'research', 'tension', 'approach', 'design', 'outcome', 'learning'].findIndex(s => s === activeStage) + 1} of 7
                    </span>
                    <div className="w-24 h-1.5 bg-zinc-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-pink-500 to-rose-500 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${((['problem', 'research', 'tension', 'approach', 'design', 'outcome', 'learning'].findIndex(s => s === activeStage) + 1) / 7) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
                
                {/* Horizontal Navigation */}
                <div className="grid grid-cols-7 gap-1">
                  {[
                    { key: 'problem', label: 'Problem', icon: '🔍' },
                    { key: 'research', label: 'Research', icon: '🧪' },
                    { key: 'tension', label: 'Tension', icon: '⚡' },
                    { key: 'approach', label: 'Approach', icon: '💡' },
                    { key: 'design', label: 'Design', icon: '🎨' },
                    { key: 'outcome', label: 'Outcome', icon: '🚀' },
                    { key: 'learning', label: 'Learning', icon: '📚' }
                  ].map((stage) => {
                    const isActive = activeStage === stage.key;
                    return (
                      <button
                        key={stage.key}
                        ref={stage.key === 'learning' ? learningButtonRef : undefined}
                    onClick={() => {
                      setActiveStage(stage.key as any);
                      // Scroll to the client, date, role section when stage changes
                      setTimeout(() => {
                        const metadataSection = document.querySelector('section[class*="py-8"][class*="border-t"]');
                        if (metadataSection) {
                          // Scroll to the metadata section with some padding
                          const rect = metadataSection.getBoundingClientRect();
                          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                          const elementTop = rect.top + scrollTop;
                          
                          // Scroll to just above the metadata section
                          const targetPosition = elementTop - 20; // 20px above the section
                          
                          window.scrollTo({
                            top: Math.max(0, targetPosition), // Ensure we don't scroll above the page
                            behavior: 'smooth'
                          });
                        }
                      }, 100);
                    }}
                        className={`text-center py-2 px-1 rounded-md border transition-all duration-200 ${
                          isActive
                            ? "bg-pink-500 border-pink-500 text-white shadow-md"
                            : "bg-white border-zinc-200 hover:border-pink-300 hover:bg-pink-50 text-zinc-600 hover:text-pink-600"
                        }`}
                      >
                        <div className="flex flex-col items-center gap-0.5">
                          <span className="text-sm">{stage.icon}</span>
                          <span className="text-xs font-medium leading-tight">{stage.label}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

      <div className={`max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-14 space-y-10 ${showStickyNav ? 'pt-36' : 'pt-20'}`}>

        {/* Enhanced Header Section */}
        <div className="relative">
          {/* Header Image with Overlay */}
          {caseStudy.headerImage && (
            <div className="w-full h-48 md:h-64 lg:h-80 rounded-3xl overflow-hidden mb-8 relative">
              <img 
                src={caseStudy.headerImage} 
                alt={caseStudy.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          )}

          {/* Enhanced Header Content */}
          <header className="space-y-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-zinc-900 to-zinc-700 bg-clip-text text-transparent">
                  {caseStudy.title}
                </h1>
                {caseStudy.description && (
                  <p className="text-lg md:text-xl text-zinc-600 max-w-4xl mt-4 leading-relaxed">
                    {caseStudy.description}
                  </p>
                )}
              </div>
              
            </div>
          </header>
        </div>


        {/* Project metadata */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 py-8 border-t border-zinc-200">
          <div className="text-center">
            <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-2">Client</h3>
            <p className="text-zinc-900 font-medium">{caseStudy.client || 'Client Name'}</p>
          </div>
          <div className="text-center">
            <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-2">Date</h3>
            <p className="text-zinc-900 font-medium">{caseStudy.date || '2024'}</p>
          </div>
          <div className="text-center">
            <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-2">My Role</h3>
            <p className="text-zinc-900 font-medium">{caseStudy.role || 'UX Designer'}</p>
          </div>
        </section>


        {/* The nonlinear process diagram + phase descriptions */}
            <ProcessDiagram 
              active={activeStage} 
              onStageChange={setActiveStage}
              caseStudyData={caseStudy.stages}
              prevCaseStudy={prevCaseStudy}
              nextCaseStudy={nextCaseStudy}
              isCaseStudy={true}
              learningButtonRef={learningButtonRef}
            />

        {/* Case Studies Navigation - Bottom */}
        <section className="hidden lg:block py-12 border-t border-zinc-200">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-2">Explore More Case Studies</h3>
              <p className="text-zinc-600">Discover other design projects and methodologies</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Previous Case Study */}
              {prevCaseStudy && (
                <Link
                  to={`/case/${prevCaseStudy.slug}`}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="group bg-gradient-to-br from-zinc-50 to-zinc-100 hover:from-pink-50 hover:to-pink-100 rounded-2xl p-6 border border-zinc-200 hover:border-pink-200 transition-all duration-200 min-w-[280px]"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-zinc-200 group-hover:bg-pink-200 flex items-center justify-center transition-colors">
                      <svg className="w-5 h-5 text-zinc-600 group-hover:text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-zinc-500 font-medium mb-1">Previous Project</p>
                      <p className="text-base font-semibold text-zinc-900 group-hover:text-pink-700 truncate">
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
                  className="group bg-gradient-to-br from-zinc-50 to-zinc-100 hover:from-pink-50 hover:to-pink-100 rounded-2xl p-6 border border-zinc-200 hover:border-pink-200 transition-all duration-200 min-w-[280px]"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-zinc-200 group-hover:bg-pink-200 flex items-center justify-center transition-colors">
                      <svg className="w-5 h-5 text-zinc-600 group-hover:text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-zinc-500 font-medium mb-1">Next Project</p>
                      <p className="text-base font-semibold text-zinc-900 group-hover:text-pink-700 truncate">
                        {nextCaseStudy.title}
                      </p>
                    </div>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}