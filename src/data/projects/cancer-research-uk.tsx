
import cr1 from '../../assets/cancer-research/cr-1.png'
import cr2 from '../../assets/cancer-research/cr-2.png'
import cr3 from '../../assets/cancer-research/cr-3.png'
import cr4 from '../../assets/cancer-research/cr-4.png'
import cr5 from '../../assets/cancer-research/cr-5.png'
import cr6 from '../../assets/cancer-research/cr-6.png'
import cr7 from '../../assets/cancer-research/cr-7.png'

export const cancerResearchUKProject = {
  slug: 'cancer-research-uk',
  title: 'Cancer Research UK',
  client: 'Cancer Research UK',
  date: '2023–2024',
  role: 'UX/UI Designer',
  impact: '+50% engagement, +11% donation uplift; Helix design system adopted',
  headerImage: '/project-2.jpg',
  description:
    'A multi-slice redesign of CRUK’s website and the creation of Helix, a scalable digital design system that improved engagement and donation outcomes.',

  stages: {
    problem: {
      content: (
        <div className="space-y-6">
          <p>
            CRUK’s site had grown unwieldy: content organised around internal structures, visual and tonal
            inconsistency, a constrained CMS, and a dated interface that lagged accessibility standards.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-700">
            <li>Content overload: thousands of pages not aligned to user journeys.</li>
            <li>Inconsistent UI across sections; fragmented patterns.</li>
            <li>Legacy CMS limiting scalability and timely updates.</li>
            <li>Design lagged the rebrand and accessibility requirements.</li>
          </ul>
          <p>
            The objective: migrate to a headless CMS, overhaul content, and launch a modern, reusable design system.
          </p>
        </div>
      ),
      media: (
        <figure className="space-y-3">
          <img src={cr1} alt="Previous site examples showing inconsistent layouts and heavy content" className="w-full h-auto rounded-xl border border-zinc-200" />
          <figcaption className="text-sm text-zinc-600">Examples of the previous site experience – inconsistent layouts, heavy content, and fragmented design.</figcaption>
        </figure>
      )
    },

    research: {
      content: (
        <div className="space-y-6">
          <p>We ran a comprehensive discovery across flows, content, and components.</p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-700">
            <li>Component audit to uncover inconsistencies and redundancies.</li>
            <li>Heuristic and accessibility reviews of high-traffic pages.</li>
            <li>Content critique against user goals rather than org silos.</li>
            <li>As-is flow mapping for end-to-end donation journeys.</li>
            <li>Quant + qual analysis using analytics and prior feedback.</li>
          </ul>
          <p>
            Outcome: scope reduced from 1,000+ pages to 11 high-impact journeys, forming the new IA and component foundation.
          </p>
        </div>
      ),
      media: (
        <figure className="space-y-3">
          <img src={cr2} alt="Component audit and user flow mapping artefacts" className="w-full h-auto rounded-xl border border-zinc-200" />
          <figcaption className="text-sm text-zinc-600">Component audit and user flow mapping – uncovering duplication and bottlenecks across journeys.</figcaption>
        </figure>
      )
    },

    tension: {
      content: (
        <div className="space-y-6">
          <p>While our vision was ambitious, real-world constraints shaped our approach.</p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-700">
            <li>Legacy technology restricted design flexibility during early phases.</li>
            <li>Internal ownership silos meant stakeholders were attached to old content structures.</li>
            <li>Rebrand interpretation: Translating new print-first brand guidelines into a digital system required creative exploration.</li>
          </ul>
          <p>Balancing innovation with delivery feasibility became a key design tension and a driver of collaboration across teams.</p>
        </div>
      )
    },

    approach: {
      content: (
        <div className="space-y-6">
          <p>
            We delivered in thin slices, running end-to-end discovery → delivery for each area. The first slice targeted
            <span className="font-semibold"> /donate</span> to validate principles against critical conversion.
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-zinc-700">
            <li>Discovery: audit, content review, analytics, flow mapping</li>
            <li>Ideation: co-design with UX, content, brand</li>
            <li>Validation: moderated usability testing on hi-fi prototypes</li>
            <li>Iteration: refine via feedback and a11y findings</li>
            <li>Delivery: front-end handoff and QA with shared docs</li>
          </ol>
          <p>Incremental value, continuous learning, and a repeatable framework for subsequent slices.</p>
        </div>
      )
    },

    solution: {
      content: (
        <div className="space-y-8">
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-zinc-900 mt-4 mb-2">Design</h4>
            <p>
              Translated the new brand into a cohesive digital system. Built responsive, accessible components and
              stress-tested with real content in shared Figma playgrounds.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-base font-semibold text-zinc-900 mt-4 mb-2">User testing</h4>
            <ul className="list-disc pl-6 space-y-2 text-zinc-700">
              <li>Prototype testing with donors to measure comprehension, trust, and completion.</li>
              <li>Accessibility testing on live pages with assistive tech users; resolved focus traps and blockers.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-base font-semibold text-zinc-900 mt-4 mb-2">Design system — Helix</h4>
            <ul className="list-disc pl-6 space-y-2 text-zinc-700">
              <li>Figma UI toolkit with core components and templates.</li>
              <li>Zeroheight docs covering principles, usage, and a11y specs.</li>
              <li>Storybook integration for live coded components.</li>
              <li>Governance model for ownership, contribution, and updates.</li>
            </ul>
          </div>
        </div>
      ),
      media: (
        <div className="space-y-6">
          <figure className="space-y-3">
            <img src={cr3} alt="Redesigned donation pages" className="w-full h-auto rounded-xl border border-zinc-200" />
            <figcaption className="text-sm text-zinc-600">A selection of redesigned donation pages – simplified, brand-aligned, and content-focused.</figcaption>
          </figure>
          <figure className="space-y-3">
            <img src={cr4} alt="Testing findings and accessibility notes" className="w-full h-auto rounded-xl border border-zinc-200" />
            <figcaption className="text-sm text-zinc-600">Analysing findings from our first round of testing – identifying accessibility gaps and usability improvements.</figcaption>
          </figure>
          <figure className="space-y-3">
            <img src={cr5} alt="Helix design system artefacts" className="w-full h-auto rounded-xl border border-zinc-200" />
            <figcaption className="text-sm text-zinc-600">Helix – combining Figma, Storybook, and Zeroheight for a cohesive, documented design ecosystem.</figcaption>
          </figure>
        </div>
      )
    },

    results: {
      content: (
        <div className="space-y-6">
          <ul className="list-disc pl-6 space-y-2 text-zinc-700">
            <li>+50% increase in engagement across redesigned sections.</li>
            <li>
              +11% uplift on donation funnels; Donate in Memory generated <span className="font-semibold">£72,628</span> additional
              income in Q4 23/24.
            </li>
            <li>Helix adopted as a multi-brand design system across digital platforms.</li>
            <li>Stand Up To Cancer minisite delivered in 12 weeks using Helix.</li>
          </ul>
        </div>
      ),
      media: (
        <div className="space-y-6">
          {/* Outcome Percentage Visuals */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-pink-200 bg-pink-50 p-5 flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 text-white flex items-center justify-center text-2xl font-bold shadow-sm">50%</div>
              <div>
                <div className="text-sm font-semibold text-zinc-900">Engagement increase</div>
                <div className="text-xs text-zinc-600">Across redesigned sections</div>
              </div>
            </div>
            <div className="rounded-xl border border-pink-200 bg-pink-50 p-5 flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 text-white flex items-center justify-center text-2xl font-bold shadow-sm">11%</div>
              <div>
                <div className="text-sm font-semibold text-zinc-900">Donation conversion uplift</div>
                <div className="text-xs text-zinc-600">Including Donate in Memory</div>
              </div>
            </div>
          </div>

          <figure className="space-y-3">
            <img src={cr6} alt="Later slices using Helix across sections" className="w-full h-auto rounded-xl border border-zinc-200" />
            <figcaption className="text-sm text-zinc-600">Later slices – applying the Helix design system to Health Professionals and Philanthropy sections.</figcaption>
          </figure>
          <figure className="space-y-3">
            <img src={cr7} alt="Final responsive designs" className="w-full h-auto rounded-xl border border-zinc-200" />
            <figcaption className="text-sm text-zinc-600">Final responsive designs – delivering a cohesive, accessible, and modern digital experience.</figcaption>
          </figure>
        </div>
      )
    },

    learning: {
      content: (
        <div className="space-y-6">
          <ul className="list-disc pl-6 space-y-2 text-zinc-700">
            <li>
              Not all content is equal: specialist areas (e.g., Health Professionals) needed deeper review and slower iteration.
            </li>
            <li>
              Vertical slices can mask horizontal needs: introduced a cross-site stream to ensure component scalability.
            </li>
            <li>
              Accessibility is ongoing: early testing caught critical issues; continuous audits are essential.
            </li>
          </ul>
          <p>
          Ultimately, this project demonstrated how user-centred design, content strategy, and system thinking can transform a legacy digital estate into a modern, impactful, and scalable experience.
          </p>
          <p>
          This project taught me how to design within complex organisational structures, balancing brand ambition, accessibility, and content governance.
          It also reinforced the value of design systems as living products, enabling efficiency, collaboration, and consistency at scale.
          </p>
        </div>
      )
    }
  }
};
