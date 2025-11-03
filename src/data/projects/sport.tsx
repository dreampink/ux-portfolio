
import sd1 from '../../assets/sports-direct/sd-1.png'
import sd2 from '../../assets/sports-direct/sd-2.png'
import sd3 from '../../assets/sports-direct/sd-3.png'
import sd4 from '../../assets/sports-direct/sd-4.png'
import sd5mov from '../../assets/sports-direct/sd-5.mov'
import sd6 from '../../assets/sports-direct/sd-6.png'

export const sportProject = {
  slug: 'sport-direct',
  title: 'Sports Direct App Redesign',
  client: 'Frasers Group (Sports Direct)',
  date: '2021 - 2022',
  role: 'Lead UX/UI Designer',
  impact: '+18.86% conversion increase; 6% → 12% revenue share from app',
  headerImage: '/project-1.jpg',
  description:
    'Built a personalised app experience to drive greater customer engagement, delivering +18.86% daily average conversion rate and doubling app revenue share.',

  stages: {
    problem: {
      content: (
        <div className="space-y-6">
          <p>
            Sports Direct's legacy app had strong brand equity but weak usability. It was cluttered, visually inconsistent, and
            lacked personalisation, limiting engagement and conversion.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-700">
            <li>Users expected the app to remember their preferences and deliver content tailored to their interests.</li>
            <li>Customer feedback indicated frustration with static content and lack of relevance.</li>
          </ul>
          <div className="bg-zinc-50 rounded-xl p-4 border border-zinc-200">
            <p className="text-zinc-700 italic">
              "I would expect the app to remember my size when I return."
              <br />"I like to be shown products I'm interested in, it saves time."
            </p>
          </div>
        </div>
      ),
      media: (
        <figure className="space-y-3">
          <img
            src={sd1}
            alt="Heuristic review revealed cluttered layouts, accessibility issues, and redundant navigation elements"
            className="w-full h-auto rounded-xl border border-zinc-200"
          />
          <figcaption className="text-sm text-zinc-600">
            Heuristic review revealed cluttered layouts, accessibility issues, and redundant navigation elements.
          </figcaption>
        </figure>
      )
    },

    research: {
      content: (
        <div className="space-y-6">
          <p>
            Discovery combined usability testing, competitor analysis, and desk research to understand user expectations and
            market positioning.
          </p>
          <div className="space-y-3">
            <h4 className="text-base font-semibold text-zinc-900 mt-4 mb-2">Key findings:</h4>
            <ul className="list-disc pl-6 space-y-2 text-zinc-700">
              <li>The homepage was overwhelming and visually dense, increasing cognitive load.</li>
              <li>Touchpoints were too small, failing accessibility standards.</li>
              <li>The redundant hamburger menu created confusion and duplicated navigation.</li>
              <li>Personalisation opportunities were underused, content was static, not behaviour-driven.</li>
            </ul>
          </div>
          <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
            <p className="text-blue-900 font-medium italic">
              "80% of respondents indicated they are more likely to do business with a company if it offers personalised
              experiences." - Epsilon Survey
            </p>
          </div>
        </div>
      ),
      media: (
        <figure className="space-y-3">
          <img
            src={sd2}
            alt="Annotated heuristic review identifying key usability and accessibility issues on the existing homepage"
            className="w-full h-auto rounded-xl border border-zinc-200"
          />
          <figcaption className="text-sm text-zinc-600">
            Annotated heuristic review identifying key usability and accessibility issues on the existing homepage.
          </figcaption>
        </figure>
      )
    },

    tension: {
      content: (
        <div className="space-y-6">
          <p>The team balanced competing priorities across design, business, and technology.</p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-700">
            <li>Visual boldness versus accessibility compliance, creating energetic brand expression while ensuring WCAG standards.</li>
            <li>Personalisation versus simplicity and control, delivering tailored experiences without overwhelming users.</li>
            <li>Business commercial needs versus user autonomy, balancing revenue targets with genuine user value.</li>
            <li>Design-led innovation versus technical feasibility, pushing creative boundaries within existing platform constraints.</li>
          </ul>
        </div>
      )
    },

    approach: {
      content: (
        <div className="space-y-6">
          <p>Each design lead owned a major part of the redesign. My focus: the homepage experience.</p>
          <div className="space-y-4">
            <div className="space-y-3">
              <h4 className="text-base font-semibold text-zinc-900 mt-4 mb-2">Phase 1: Fix the fundamentals</h4>
              <ul className="list-disc pl-6 space-y-2 text-zinc-700">
                <li>Reduce visual clutter and improve hierarchy.</li>
                <li>Improve accessibility and touch target sizing.</li>
                <li>Create a flexible modular framework for A/B testing.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-base font-semibold text-zinc-900 mt-4 mb-2">Phase 2: Introducing personalisation</h4>
              <p>
                We introduced a data-driven recommendation layer using Optimizely and Amplience integrations, enabling dynamic
                product recommendations, tailored content blocks, and flexible CMS control.
              </p>
            </div>
          </div>
        </div>
      ),
      media: (
        <div className="space-y-6">
          <figure className="space-y-3">
            <img
              src={sd3}
              alt="Early prototypes exploring cleaner, bolder layouts with improved hierarchy and accessibility"
              className="w-full h-auto rounded-xl border border-zinc-200"
            />
            <figcaption className="text-sm text-zinc-600">
              Early prototypes exploring cleaner, bolder layouts with improved hierarchy and accessibility.
            </figcaption>
          </figure>
          <figure className="space-y-3">
            <img
              src={sd4}
              alt="Mapping logic and content sources for personalised homepage components"
              className="w-full h-auto rounded-xl border border-zinc-200"
            />
            <figcaption className="text-sm text-zinc-600">
              Mapping logic and content sources for personalised homepage components.
            </figcaption>
          </figure>
        </div>
      )
    },

    solution: {
      content: (
        <div className="space-y-8">
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-zinc-900 mt-4 mb-2">A cleaner, bolder look</h4>
            <p>
              Leveraging Sports Direct's brand identity, I redesigned the homepage to be visually bold, tactile, and simplified.
              We emphasised large, clear imagery and concise CTAs.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-700">
              <li>Simplified visual hierarchy and spacing.</li>
              <li>Larger, tappable components.</li>
              <li>Clearer modular structure for experimentation.</li>
              <li>Accessibility-compliant text and contrast.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-base font-semibold text-zinc-900 mt-4 mb-2">Experiment: Control through customisation</h4>
            <p>
              We designed a customisable Quick Links feature where users could add or reorder shortcuts. Preferences set during
              onboarding appeared instantly on the homepage, combining business‑specified and user‑specified links.
            </p>
            <p>I collaborated closely with developers to ensure technical feasibility and seamless integration.</p>
          </div>
        </div>
      ),
      media: (
        <div className="space-y-6">
          <figure className="space-y-3">
            <img
              src={sd6}
              alt="Customisable quick links prototype,blending business logic with user control"
              className="w-full h-auto rounded-xl border border-zinc-200"
            />
            <figcaption className="text-sm text-zinc-600">
              Customisable quick links prototype, blending business logic with user control.
            </figcaption>
          </figure>
          <figure className="space-y-3">
            <video src={sd5mov} autoPlay loop muted playsInline className="w-full h-auto rounded-xl border border-zinc-200">
              Your browser does not support the video tag.
            </video>
            <figcaption className="text-sm text-zinc-600">
              Interactive prototype walkthrough demonstrating the Quick Links customisation flow.
            </figcaption>
          </figure>
        </div>
      )
    },

    results: {
      content: (
        <div className="space-y-6">
          <ul className="list-disc pl-6 space-y-2 text-zinc-700">
            <li>
              <span className="font-semibold">+18.86% increase</span> in daily average conversion rate.
            </li>
            <li>
              Revenue mix growth from <span className="font-semibold">6% → 12%</span> for app channels.
            </li>
            <li>A flexible homepage framework enabling continuous optimisation by the operations team.</li>
            <li>
              Users understood customisable links immediately; those who engaged described the experience as "modern and
              convenient".
            </li>
          </ul>
        </div>
      )
    },

    learning: {
      content: (
        <div className="space-y-6">
          <p>This project reinforced principles of large-scale UX delivery:</p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-700">
            <li>Strong collaboration across design, tech, and operations ensures feasibility and adoption.</li>
            <li>Accessibility and clarity first, the foundation for any innovation.</li>
            <li>Personalisation ≠ complexity, users value relevance, but also control.</li>
            <li>Design for evolution, modular frameworks empower teams to iterate and grow.</li>
          </ul>
          <div className="bg-zinc-50 rounded-xl p-4 border border-zinc-200">
            <p className="text-zinc-700 italic">"To find ideas, find problems. To find problems, talk to people."</p>
          </div>
        </div>
      )
    }
  }
};
