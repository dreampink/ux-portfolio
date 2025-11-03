
import mortgageHub from '../../assets/mortgage-hub/mortgage-hub.png'
import mh1 from '../../assets/mortgage-hub/mh-1.png'
import mh2 from '../../assets/mortgage-hub/mh-2.png'
import mh3 from '../../assets/mortgage-hub/mh-3.png'
import mh4 from '../../assets/mortgage-hub/mh-4.png'
import mh5 from '../../assets/mortgage-hub/mh-5.png'
import mh6mov from '../../assets/mortgage-hub/mh-6.mov'

export const mortgageHubProject = {
  slug: 'mortgage-hub',
  title: 'Mortgage Hub',
  client: 'Mortgage Hub',
  date: '2022 - 2023',
  role: 'UX/UI Designer',
  impact: 'Reduced mortgage processing time from over a month to under seven days',
  headerImage: mortgageHub,
  description:
    'Designed and implemented the underwriter experience, connecting brokers and underwriters on a unified platform that transformed the mortgage origination process.',
  
  stages: {
    problem: {
      content: (
        <div className="space-y-6">
          <p>Mortgage Hub aimed to revolutionise mortgage origination by uniting all key players, borrowers, brokers and underwriters, on a unified platform.</p>
          <p>When I joined, the broker side of the platform had already been designed and tested, but there was a major gap: <strong>no corresponding solution for underwriters</strong> and <strong>no connection</strong> between the two systems.</p>
          <h3 className="text-lg font-semibold text-zinc-900 mt-6 mb-3">The UK Mortgage Origination Challenge</h3>
          <p>The UK mortgage origination process was riddled with inefficiencies. Borrowers were frustrated by the lack of transparency, while brokers and underwriters were overwhelmed by outdated, manual workflows.</p>
          <p>Key challenges included:</p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-700">
            <li><strong>Fragmented communication:</strong> Reliance on emails and phone calls led to missed details and delays.</li>
            <li><strong>Manual, error-prone workflows:</strong> Underwriters often had to verify documents manually or print them to compare details.</li>
            <li><strong>Lack of clarity:</strong> No centralised hub for tracking case progress, borrower details or document status.</li>
          </ul>
          <p>These issues created a broken, time-consuming process that left everyone, from lenders to brokers to borrowers, frustrated.</p>
        </div>
      ),
      media: (
        <figure className="space-y-3">
          <img src={mh1} alt="Early underwriter dashboard with documents and case details" className="w-full h-auto rounded-xl border border-zinc-200" />
          <figcaption className="text-sm text-zinc-600">Early underwriter dashboard showing the fragmented workflow with documents and case details.</figcaption>
        </figure>
      )
    },
    tension: {
      content: (
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-zinc-900 mt-6 mb-3">Balancing Structure and Flexibility</h3>
          <p>The main design tension lay between two needs:</p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-700">
            <li><strong>Structure:</strong> Underwriters needed a clear, guided workflow to manage complex cases.</li>
            <li><strong>Flexibility:</strong> They also needed the freedom to handle unique cases that didn't fit a rigid system.</li>
          </ul>
          <p>Too much structure risked slowing them down; too much freedom could cause inconsistencies.</p>
          <p>Additionally, underwriters were sceptical about adopting new digital tools, having spent years relying on paper and email workflows. The solution needed to respect their habits while introducing <strong>clarity, speed and automation</strong>.</p>
        </div>
      ),
      media: (
        <figure className="space-y-3">
          <img src={mh4} alt="Journey mapping showing friction points" className="w-full h-auto rounded-xl border border-zinc-200" />
          <figcaption className="text-sm text-zinc-600">Journey mapping sticky-note board showing friction points and dependencies.</figcaption>
        </figure>
      )
    },
    research: {
      content: (
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-zinc-900 mt-6 mb-3">Listening to the Voices That Matter</h3>
          <p>Understanding underwriters' real-world challenges was critical. I led a discovery phase that included <strong>workshops, interviews, and empathy mapping</strong> sessions.</p>
          <p>We explored questions like:</p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-700">
            <li>What slows you down most during an application review?</li>
            <li>How do you communicate with brokers?</li>
            <li>What tools do you wish you had?</li>
          </ul>
          <h3 className="text-lg font-semibold text-zinc-900 mt-6 mb-3">Service-Level Insights</h3>
          <p>Beyond the digital interface, we mapped the entire mortgage origination service, from broker submission to final approval, revealing critical handoffs between people and systems.</p>
          <h3 className="text-lg font-semibold text-zinc-900 mt-6 mb-3">Key Findings</h3>
          <ul className="list-disc pl-6 space-y-2 text-zinc-700">
            <li>Underwriters juggled <strong>multiple systems, spreadsheets, and printouts</strong>.</li>
            <li>The approval process relied heavily on <strong>manual checks</strong> and <strong>re-entering data</strong>.</li>
            <li>There was <strong>no shared workspace</strong> for brokers and underwriters to collaborate efficiently.</li>
            <li>Communication breakdowns occurred at <strong>key service touchpoints</strong>, email chains, phone calls, and document exchanges that created bottlenecks.</li>
          </ul>
          <p>These insights revealed opportunities for simplification, automation, and connection across the entire service.</p>
        </div>
      ),
      media: (
        <div className="space-y-4">
          <figure className="space-y-3">
            <img src={mh2} alt="Empathy map showing underwriter insights" className="w-full h-auto rounded-xl border border-zinc-200" />
          </figure>
          <figure className="space-y-3">
            <img src={mh3} alt="Workshop board mapping user journeys" className="w-full h-auto rounded-xl border border-zinc-200" />
            <figcaption className="text-sm text-zinc-600">Empathy mapping and workshop activities uncovering underwriter pain points and opportunities.</figcaption>
          </figure>
        </div>
      )
    },
    approach: {
      content: (
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-zinc-900 mt-6 mb-3">From Insight to Implementation</h3>
          <p>With a clear understanding of the pain points, I defined three guiding principles:</p>
          <ol className="list-decimal pl-6 space-y-3 text-zinc-700">
            <li>
              <strong>Simplify complexity.</strong>
              <p className="text-sm text-zinc-600 ml-0">Provide structure without rigidity, underwriters should always know what to do next.</p>
            </li>
            <li>
              <strong>Empower clarity.</strong>
              <p className="text-sm text-zinc-600 ml-0">Make document verification and case tracking intuitive and error-free.</p>
            </li>
            <li>
              <strong>Connect collaboration.</strong>
              <p className="text-sm text-zinc-600 ml-0">Enable seamless, real-time communication between brokers and underwriters.</p>
            </li>
          </ol>
          <p>I translated these principles into actionable design goals, then iterated through sketches, prototypes, and user tests with underwriters to validate every design decision.</p>
        </div>
      )
    },
    solution: {
      content: (
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-zinc-900 mt-6 mb-3">Turning Pain Points into Product Strengths</h3>
          
          <h4 className="text-base font-semibold text-zinc-900 mt-4 mb-2">Simplifying Complex Workflows</h4>
          <p>I introduced a <strong>two-column interface</strong>:</p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-700">
            <li><strong>Left panel:</strong> borrower and case reference information.</li>
            <li><strong>Right panel:</strong> action hub for reviewing documents, making decisions, and adding notes.</li>
          </ul>
          <p>This structure gave underwriters clarity on what required action and what was for context.</p>

          <h4 className="text-base font-semibold text-zinc-900 mt-4 mb-2">Eliminating Manual Frustrations</h4>
          <p>A major breakthrough came from the <strong>side-by-side document viewer</strong>, allowing underwriters to review borrower details and documents simultaneously. This eliminated the need to print or toggle between tabs.</p>
          <p>User testing confirmed faster, more accurate decisions and a significant drop in human error.</p>

          <h4 className="text-base font-semibold text-zinc-900 mt-4 mb-2">Connecting Brokers & Underwriters in Real-Time</h4>
          <p>I designed <strong>shared case notes and real-time updates</strong>, allowing both sides to track progress without endless email threads. The collaboration felt intuitive and transparent, reducing delays and improving trust.</p>
          <p className="mt-3 text-zinc-600 text-sm"><strong>Service design impact:</strong> By eliminating the email/phone handoff friction, we redesigned not just the interface but the entire communication layer of the mortgage service, creating seamless end-to-end experience.</p>
        </div>
      ),
      media: (
        <div className="space-y-4">
          <figure className="space-y-3">
            <img src={mh5} alt="Two-column interface with document review" className="w-full h-auto rounded-xl border border-zinc-200" />
            <figcaption className="text-sm text-zinc-600">Interface showing two-column layout and document review functionality.</figcaption>
          </figure>
          <figure className="space-y-3">
            <video src={mh6mov} autoPlay loop muted playsInline className="w-full h-auto rounded-xl border border-zinc-200">
              Your browser does not support the video tag.
            </video>
            <figcaption className="text-sm text-zinc-600">Demo showing interaction between broker and underwriter workflows.</figcaption>
          </figure>
        </div>
      )
    },
    results: {
      content: (
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-zinc-900 mt-6 mb-3">A New Way of Working</h3>
          <p className="text-zinc-700 leading-relaxed">When we tested the MVP, underwriters embraced the tool immediately. They reported measurable improvements in efficiency, accuracy, and confidence.</p>
          
          <div className="grid grid-cols-2 gap-3 mt-6">
            <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl p-4 text-white">
              <div className="text-2xl font-bold mb-1">7 days</div>
              <div className="text-xs font-medium opacity-90">Processing Time</div>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-4 text-white">
              <div className="text-2xl font-bold mb-1">Higher</div>
              <div className="text-xs font-medium opacity-90">Accuracy</div>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl p-4 text-white">
              <div className="text-2xl font-bold mb-1">Minutes</div>
              <div className="text-xs font-medium opacity-90">vs. Hours</div>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl p-4 text-white">
              <div className="text-2xl font-bold mb-1">✓</div>
              <div className="text-xs font-medium opacity-90">Essential Tool</div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-zinc-50 rounded-xl border border-zinc-200">
            <p className="text-sm text-zinc-700 italic">"Work that once took hours could be completed in minutes. The interface made complex cases easier to manage." - Underwriter feedback</p>
          </div>
        </div>
      )
    },
    learning: {
      content: (
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-zinc-900 mt-6 mb-3">Key Learnings</h3>
          
          <div className="space-y-4">
            <div className="border-l-4 border-pink-500 pl-4">
              <h4 className="text-base font-semibold text-zinc-900 mt-4 mb-2">Empathy Drives Adoption</h4>
              <p className="text-sm text-zinc-600">By engaging underwriters early and understanding their routines, the final product aligned naturally with their needs.</p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="text-base font-semibold text-zinc-900 mt-4 mb-2">Efficiency Requires Design Discipline</h4>
              <p className="text-sm text-zinc-600">Simplifying the workflow without oversimplifying the process demanded a careful balance between usability and compliance.</p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="text-base font-semibold text-zinc-900 mt-4 mb-2">Collaboration Transforms Outcomes</h4>
              <p className="text-sm text-zinc-600">Real-time updates between brokers and underwriters not only improved workflow speed, it fundamentally reshaped trust and transparency in the mortgage process.</p>
            </div>
          </div>

          <p className="text-zinc-700 mt-4">Mortgage Hub wasn't just a redesign; it was a rethinking of how mortgages could be done, smarter, faster and together.</p>
        </div>
      )
    }
  }
};

