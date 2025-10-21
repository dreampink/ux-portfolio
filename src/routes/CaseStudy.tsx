import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import ProcessDiagram from '../components/ProcessDiagram'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { getCaseStudyBySlug, caseStudies } from '../data/caseStudies'

export default function CaseStudy() {
  const { slug = '' } = useParams()
  const [activeStage, setActiveStage] = useState<'problem' | 'research' | 'tension' | 'approach' | 'design' | 'outcome' | 'learning'>('problem')
  
  const caseStudy = getCaseStudyBySlug(slug)
  
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
      <Navigation />
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-14 space-y-10">

        {/* Header Image */}
        <div className="w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden mb-8">
          {caseStudy.headerImage ? (
            <img 
              src={caseStudy.headerImage} 
              alt={caseStudy.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to gradient if image not found
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                if (fallback) {
                  fallback.style.display = 'flex';
                }
              }}
            />
          ) : null}
          {/* Fallback gradient background */}
          <div className={`absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 ${caseStudy.headerImage ? 'hidden' : 'flex'} items-center justify-center`}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/90 rounded-3xl flex items-center justify-center shadow-xl">
                <span className="text-3xl">🎨</span>
              </div>
            </div>
          </div>
        </div>

        <header className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{caseStudy.title}</h1>
          {caseStudy.intro && <p className="text-zinc-600 max-w-prose">{caseStudy.intro}</p>}
        </header>

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
        />
      </div>
      <Footer />
    </div>
  )
}