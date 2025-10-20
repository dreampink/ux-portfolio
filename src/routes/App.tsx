import { Link } from 'react-router-dom'

export default function App() {
  const cases = [
    { slug: 'payments', title: 'Streamlined Payments' },
    { slug: 'onboarding', title: 'Onboarding Revamp' },
    { slug: 'insights', title: 'Insights Dashboard' },
    { slug: 'mobile', title: 'Mobile IA Refresh' },
  ]
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <header className="mb-12 md:mb-16">
          <div className="flex items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">My UX/UI Portfolio</h1>
              <p className="text-zinc-600 mt-2 max-w-prose">Four case studies showcasing a nonlinear process and business impact.</p>
            </div>
          </div>
        </header>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {cases.map(c => (
            <li key={c.slug}>
              <Link
                to={`/case/${c.slug}`}
                className="group block rounded-3xl border border-zinc-200 bg-white p-6 md:p-7 shadow-sm hover:shadow-md transition-shadow hover:-translate-y-0.5 will-change-transform"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-lg md:text-xl font-medium tracking-tight group-hover:text-zinc-900">{c.title}</div>
                    <div className="text-sm text-zinc-600 mt-1">Case study</div>
                  </div>
                  <div className="shrink-0 rounded-xl border border-zinc-200 text-[12px] px-2.5 py-1 text-zinc-600 bg-zinc-50">View</div>
                </div>
                <div className="mt-4 h-28 rounded-2xl border border-dashed border-zinc-200 grid place-items-center text-zinc-500 text-sm">Thumbnail</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
