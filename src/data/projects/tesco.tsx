
import ts1 from '../../assets/tesco/ts-1.png'
import ts2 from '../../assets/tesco/ts-2.png'
import ts3 from '../../assets/tesco/ts-3.png'
import ts4 from '../../assets/tesco/ts-4.png'
import ts5 from '../../assets/tesco/ts-5.png'
import ts6 from '../../assets/tesco/ts-6.png'
import ts7 from '../../assets/tesco/ts-7.png'

export const tescoProject = {
  slug: 'tesco',
  title: 'Tesco Supplier Setup',
  client: 'Tesco (via AND Digital)',
  date: '2023',
  role: 'UX/UI Design · UX Research · Service Design',
  impact: 'Identified root causes, shifted mindset to service design, established team alignment',
  headerImage: '/project-3.jpg',
  description:
    'Led three workstreams to unblock Tesco\'s supplier onboarding product: design file refactor, usability discovery, and measurement workshops that aligned teams around shared OKRs.',

  stages: {
    problem: {
      content: (
        <div className="space-y-6">
          <p>
            The team wanted to advance to phase two of the product strategy but couldn't gain momentum.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-700">
            <li>
              <span className="font-semibold">Fragmented design file:</span> The Figma file had grown around technical tickets rather
              than holistic journeys. Flows were disjointed, patterns inconsistent, and onboarding new designers was difficult.
            </li>
            <li>
              <span className="font-semibold">High support ticket volume:</span> The team received dozens of Zendesk tickets each
              week. These drained product and engineering capacity, forcing reactive work rather than strategic progress.
            </li>
            <li>
              <span className="font-semibold">Lack of alignment and measurement:</span> Product, service, and support teams were
              working toward different goals without shared metrics for success, creating friction and confusion.
            </li>
          </ul>
          <p>
            I initiated and led three workstreams: a design file refactor, a usability discovery, and a measurement and alignment
            workshop series.
          </p>
        </div>
      ),
      media: (
        <figure className="space-y-3">
          <img
            src={ts1}
            alt="Tesco Supplier Setup dashboard – part of the MVP self-serve onboarding tool"
            className="w-full h-auto rounded-xl border border-zinc-200"
          />
          <figcaption className="text-sm text-zinc-600">
            Tesco Supplier Setup dashboard – part of the MVP self-serve onboarding tool.
          </figcaption>
        </figure>
      )
    },

    research: {
      content: (
        <div className="space-y-6">
          <div className="space-y-3">
            <h4 className="font-semibold">Support Ticket Analysis</h4>
            <ul className="list-disc pl-6 space-y-2 text-zinc-700">
              <li>Reviewed 60+ Zendesk tickets from suppliers and Tesco staff.</li>
              <li>Categorised issues by frequency, impact, and affected user type.</li>
              <li>Identified recurring UX themes (e.g., unclear error states, missing contextual guidance).</li>
              <li>Highlighted gaps in internal communications between Tesco support roles and end users.</li>
            </ul>
            <p>This led to an automated framework for ticket categorisation and trend tracking.</p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">Heuristic Evaluation</h4>
            <p>
              Conducted a heuristic evaluation using Jakob Nielsen's 10 usability heuristics. Identified and prioritised 100+ issues
              and validated many findings from the Zendesk analysis.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">Comprehension Testing</h4>
            <p>
              Developed a plan for moderated comprehension testing sessions to evaluate end-to-end onboarding experience,
              including participant and discussion guides, and onboarded an in-house designer to lead the research after departure.
            </p>
          </div>
        </div>
      ),
      media: (
        <div className="space-y-6">
          <figure className="space-y-3">
            <img
              src={ts2}
              alt="Full end-to-end user journey mapped in Figma to uncover inconsistencies and missing handoffs"
              className="w-full h-auto rounded-xl border border-zinc-200"
            />
            <figcaption className="text-sm text-zinc-600">
              Full end-to-end user journey mapped in Figma to uncover inconsistencies and missing handoffs.
            </figcaption>
          </figure>
          <figure className="space-y-3">
            <img
              src={ts3}
              alt="Key usability themes identified from the evaluation, approvals, data quality, and access challenges"
              className="w-full h-auto rounded-xl border border-zinc-200"
            />
            <figcaption className="text-sm text-zinc-600">
              Key usability themes identified from the evaluation, approvals, data quality, and access challenges.
            </figcaption>
          </figure>
          <figure className="space-y-3">
            <img
              src={ts4}
              alt="Participant guide prepared for comprehension testing,outlining structure, tasks, and roles"
              className="w-full h-auto rounded-xl border border-zinc-200"
            />
            <figcaption className="text-sm text-zinc-600">
              Participant guide prepared for comprehension testing, outlining structure, tasks, and roles.
            </figcaption>
          </figure>
        </div>
      )
    },

    tension: {
      content: (
        <div className="space-y-6">
          <p>Three core tensions were blocking progress:</p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-700">
            <li>
              Reactive vs strategic: Teams were firefighting support requests instead of addressing root causes of issues.
            </li>
            <li>
              Product vs service: Teams were focused on product features rather than the end-to-end service experience.
            </li>
            <li>
              Individual vs shared: Teams lacked shared success metrics, causing confusion and friction.
            </li>
          </ul>
        </div>
      )
    },

    approach: {
      content: (
        <div className="space-y-6">
          <div className="space-y-3">
            <h4 className="font-semibold">Design File Refactor</h4>
            <ul className="list-disc pl-6 space-y-2 text-zinc-700">
              <li>Completely overhauled the Figma file to create a single source of truth.</li>
              <li>Visualised full end-to-end user journeys with clear user roles and handoffs.</li>
              <li>Componentised recurring patterns for easier iteration.</li>
              <li>Ensured design parity with the existing live product to prevent misalignment.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">Measurement Workshops</h4>
            <p>Designed and facilitated Miro-based measurement workshops to:</p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-700">
              <li>Align product and service teams on a unified vision and measurable OKRs.</li>
              <li>Define what success looks like for both digital and service touchpoints.</li>
              <li>Map blockers, dependencies, and data sources to track progress.</li>
            </ul>
            <p>Through these workshops, teams aligned around common objectives and began reframing from a product mindset to a
              service mindset.</p>
          </div>
        </div>
      ),
      media: (
        <div className="space-y-6">
          <figure className="space-y-3">
            <img
              src={ts5}
              alt="Rebuilding the Figma file – mapping flows by user role and interaction points"
              className="w-full h-auto rounded-xl border border-zinc-200"
            />
            <figcaption className="text-sm text-zinc-600">
              Rebuilding the Figma file – mapping flows by user role and interaction points.
            </figcaption>
          </figure>
          <figure className="space-y-3">
            <img
              src={ts6}
              alt="Collaborative Miro workshop – defining success measures and mapping blockers"
              className="w-full h-auto rounded-xl border border-zinc-200"
            />
            <figcaption className="text-sm text-zinc-600">
              Collaborative Miro workshop – defining success measures and mapping blockers.
            </figcaption>
          </figure>
        </div>
      )
    },

    solution: {
      content: (
        <div className="space-y-6">
          <p>Following research synthesis and team alignment, we explored solutions to the most pressing usability challenges.</p>
          <div className="space-y-3">
            <h4 className="font-semibold">Key focus areas:</h4>
            <ul className="list-disc pl-6 space-y-2 text-zinc-700">
              <li>Improving data input and validation to reduce manual error.</li>
              <li>Introducing progressive disclosure to simplify form-heavy screens.</li>
              <li>Creating clearer feedback loops for users submitting data or awaiting review.</li>
              <li>Designing contextual guidance to reduce dependency on support channels.</li>
            </ul>
          </div>
          <div className="bg-zinc-50 rounded-xl p-4 border border-zinc-200">
            <p className="text-zinc-700 italic">
              "If we improve usability and comprehension across the Supplier Setup experience, then buyers, suppliers, and Tesco
              teams will spend less time resolving errors and onboarding will become faster, smoother, and more scalable."
            </p>
          </div>
        </div>
      ),
      media: (
        <figure className="space-y-3">
          <img
            src={ts7}
            alt="Problem statement, key ideas, and early design iterations, moving toward a non-linear, guided process"
            className="w-full h-auto rounded-xl border border-zinc-200"
          />
          <figcaption className="text-sm text-zinc-600">
            Problem statement, key ideas, and early design iterations, moving toward a non-linear, guided process.
          </figcaption>
        </figure>
      )
    },

    results: {
      content: (
        <div className="space-y-6">
          <ul className="list-disc pl-6 space-y-2 text-zinc-700">
            <li>Identified root causes of recurring user problems, enabling long-term fixes rather than reactive patches.</li>
            <li>Shifted mindset from "product" to "service", promoting holistic understanding of the onboarding ecosystem.</li>
            <li>Established alignment across product, design, and support teams through shared OKRs.</li>
            <li>Created design and research documentation to onboard a new in-house designer seamlessly.</li>
            <li>Delivered ideation outputs ready for user testing, built on validated problems and hypotheses.</li>
          </ul>
        </div>
      )
    },

    learning: {
      content: (
        <div className="space-y-6">
          <p>This project reinforced several key lessons:</p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-700">
            <li>
              Design system governance and information architecture are as important as new features.
            </li>
            <li>
              Operational alignment is foundational, even the best UX can't thrive without shared measurement frameworks.
            </li>
            <li>
              Support data is a rich research source, analysed correctly, it becomes the best indicator of product health.
            </li>
          </ul>
          <p>
            The Tesco Supplier Setup initiative demonstrated the power of combining UX research, service design, and team
            facilitation to unlock progress in a stalled product environment.
          </p>
        </div>
      )
    }
  }
};
