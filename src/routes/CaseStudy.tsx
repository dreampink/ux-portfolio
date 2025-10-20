import { useParams, Link } from 'react-router-dom'
import NonlinearProcessPortfolio from '../components/CaseStudies'

const CASE_COPY: Record<string, { title: string; intro: string }> = {
  payments:  { title: 'Streamlined Payments',  intro: 'Reducing drop-off during checkout.' },
  onboarding:{ title: 'Onboarding Revamp',     intro: 'Helping new users find value faster.' },
  insights:  { title: 'Insights Dashboard',    intro: 'Surfacing KPIs with clarity.' },
  mobile:    { title: 'Mobile IA Refresh',     intro: 'Simplifying navigation on small screens.' },
}

export default function CaseStudy() {
  const { slug = '' } = useParams()
  const meta = CASE_COPY[slug] ?? { title: 'Case Study', intro: '' }

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-14 space-y-10">
        <nav className="text-sm">
          <Link to="/" className="inline-flex items-center gap-2 text-zinc-600 hover:text-zinc-900 transition-colors">
            <span>←</span>
            <span>Back to all case studies</span>
          </Link>
        </nav>

        <header className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{meta.title}</h1>
          {meta.intro && <p className="text-zinc-600 max-w-prose">{meta.intro}</p>}
        </header>

      {/* The nonlinear process diagram + phase descriptions */}
        <NonlinearProcessPortfolio />

 
      </div>
    </div>
  )
}
