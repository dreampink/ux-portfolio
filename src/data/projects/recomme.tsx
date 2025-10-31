
import recomme from '../../assets/recomme/recomme.png'
import r1 from '../../assets/recomme/r-1.png'
import r2 from '../../assets/recomme/r-2.png'
import r3 from '../../assets/recomme/r-3.png'
import r4 from '../../assets/recomme/r-4.png'
import r5 from '../../assets/recomme/r-5.png'
import r6 from '../../assets/recomme/r-6.png'
import r7mov from '../../assets/recomme/r-7.mov'



export const recommeProject = {
  slug: 'recomme',
  title: 'Re–up',
  client: 'Recomme (Re-Up Initiative)',
  date: '2023',
  role: 'UX / UI Designer · Researcher',
  impact: 'Validated core product concept, increased user trust, and attracted multiple fashion brands for pilot integration.',
  headerImage: recomme,
  description:
    'Designing a scalable recycling experience for a more sustainable fashion industry.',
  
  stages: {
    problem: {
      content: (
        <div className="space-y-6">
          <p>To validate the platform's potential, three key challenges were identified during the POC phase:</p>
          <h3 className="text-lg font-semibold text-zinc-900 mt-6 mb-3">1. User Engagement</h3>
          <p>Most users find clothing recycling confusing or inconvenient. The challenge was to <strong>design a seamless, trustworthy, and motivating journey</strong> that encouraged participation.</p>
          <h3 className="text-lg font-semibold text-zinc-900 mt-6 mb-3">2. Brand Integration</h3>
          <p>The platform needed to be <strong>white-labeled</strong>, fitting invisibly within any brand's ecosystem with minimal setup or technical friction.</p>
          <h3 className="text-lg font-semibold text-zinc-900 mt-6 mb-3">3. Business Viability</h3>
          <p>Re-Up needed to prove that the experience could <strong>drive user engagement</strong> and <strong>attract fashion brands</strong> seeking measurable sustainability outcomes.</p>
        </div>
      ),
      media: (
        <figure className="space-y-3">
          <img src={r1} alt="In-store recycling drop-off inspiration" className="w-full h-auto rounded-xl border border-zinc-200" />
          <figcaption className="text-sm text-zinc-600">In-store recycling drop-off inspiration — understanding the current user experience baseline.</figcaption>
        </figure>
      )
    },
    tension: {
      content: (
        <div className="space-y-6">
          <p>Re-Up was created to address one of fashion's biggest sustainability challenges — <strong>the environmental impact of textile waste</strong>. Millions of garments end up in landfills each year, and few consumers understand how to recycle them responsibly.</p>
          <p>Partnering with a UK-based recycling facility, Re-Up set out to design an <strong>end-to-end solution</strong> that connected three audiences:</p>
          <ol className="list-decimal pl-6 space-y-2 text-zinc-700">
            <li><strong>Consumers</strong> – making recycling intuitive and rewarding.</li>
            <li><strong>Operators</strong> – enabling efficient processing at the recycling facility.</li>
            <li><strong>Brands</strong> – offering a dashboard to track sustainability metrics and user participation.</li>
          </ol>
          <p>The project began as a <strong>proof of concept (POC)</strong> integrated within fashion brands' existing sites to test <strong>feasibility, engagement, and scalability</strong>.</p>
        </div>
      )
    },
    research: {
      content: (
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-zinc-900 mt-6 mb-3">Understanding User & Business Needs</h3>
          <p>Initial discovery combined <strong>user surveys, stakeholder interviews, and competitive analysis</strong> (H&M, M&S, Patagonia).</p>
          <p>Findings revealed that:</p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-700">
            <li>Users wanted <strong>simplicity and transparency</strong> — knowing where clothes go and their impact.</li>
            <li>Brands wanted <strong>easy integration</strong> with minimal operational effort.</li>
            <li>Both sides valued <strong>trust</strong> and <strong>tangible rewards</strong>.</li>
          </ul>
          <h3 className="text-lg font-semibold text-zinc-900 mt-6 mb-3">Persona-Driven Design</h3>
          <p>With limited research time, I developed <strong>provisional personas</strong> grounded in survey data and sustainability reports.</p>
          <p>These represented our target demographics — from eco-driven Gen Z users to pragmatic, family-oriented parents.</p>
          <p>Each persona revealed unique motivations:</p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-700">
            <li><strong>Emily:</strong> convenience and social responsibility.</li>
            <li><strong>Sally:</strong> transparency and measurable impact.</li>
            <li><strong>Fabio:</strong> style alignment and eco-luxury appeal.</li>
          </ul>
        </div>
      ),
      media: (
        <div className="space-y-4">
          <figure className="space-y-3">
            <img src={r2} alt="Benchmarking existing fashion recycling programs" className="w-full h-auto rounded-xl border border-zinc-200" />
            <figcaption className="text-sm text-zinc-600">Benchmarking existing fashion recycling programs to identify UX opportunities.</figcaption>
          </figure>
          <figure className="space-y-3">
            <img src={r3} alt="Eco-Conscious Emily persona" className="w-full h-auto rounded-xl border border-zinc-200" />
          </figure>
          <figure className="space-y-3">
            <img src={r4} alt="Sustainable Sally persona" className="w-full h-auto rounded-xl border border-zinc-200" />
          </figure>
        </div>
      )
    },
    approach: {
      content: (
        <div className="space-y-6">
          <p>Once the user flows were mapped, I created low-fidelity wireframes to visualise a friction-free process.</p>
          <p>The design goals:</p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-700">
            <li><strong>Simplify steps:</strong> from recycling selection to label generation in under 5 screens.</li>
            <li><strong>Reward transparency:</strong> show impact through carbon offset metrics.</li>
            <li><strong>Build trust:</strong> explain each stage clearly, avoiding "greenwashing."</li>
          </ul>
          <h3 className="text-lg font-semibold text-zinc-900 mt-6 mb-3">High-Fidelity Prototype</h3>
          <p>The prototype focused on a calm, eco-inspired interface — minimal, monochrome, and purposefully slow-paced to communicate reflection and care.
          Subtle animations visualised the <strong>carbon offset impact</strong> through tree-planting illustrations.</p>
        </div>
      ),
      media: (
        <div className="space-y-4">
          <figure className="space-y-3">
            <img src={r5} alt="Design exploration" className="w-full h-auto rounded-xl border border-zinc-200" />
          </figure>
        
        </div>
      )
    },
    solution: {
      content: (
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-zinc-900 mt-6 mb-3">Testing & Insights</h3>
          <p>Three rounds of <strong>remote usability testing</strong> validated and refined the flow.</p>
          <h4 className="text-base font-semibold text-zinc-900 mt-4 mb-2">Key learnings:</h4>
          <ol className="list-decimal pl-6 space-y-2 text-zinc-700">
            <li>
              <strong>Reordering improves engagement:</strong>
              Users disliked inputting personal details upfront.
              ➤ Reversing the flow (recycle first → details later) increased satisfaction — <strong>89% of testers preferred it.</strong>
            </li>
            <li>
              <strong>Transparency builds trust:</strong>
              Adding a clear FAQ about the recycling process reduced drop-off by 40%.
            </li>
            <li>
              <strong>Gamification motivates:</strong>
              Introducing a visual carbon offset tracker boosted user satisfaction from <strong>20% → 65%.</strong>
            </li>
          </ol>
        </div>
      ),
      media: (
        <div className="space-y-4">
          <figure className="space-y-3">
            <img src={r6} alt="End-to-end user journey wireframes" className="w-full h-auto rounded-xl border border-zinc-200" />
            <figcaption className="text-sm text-zinc-600">End-to-end user journey wireframes showing simplified task flow.</figcaption>
          </figure>
          <figure className="space-y-3">
            <video src={r7mov} autoPlay loop muted playsInline className="w-full h-auto rounded-xl border border-zinc-200">
              Your browser does not support the video tag.
            </video>
            <figcaption className="text-sm text-zinc-600">Prototype walkthrough — "Recycle My Items" flow from selection to carbon offset confirmation.</figcaption>
          </figure>
        </div>
      )
    },
    results: {
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-zinc-900">Validation & Impact</h3>
          <p className="text-zinc-700 leading-relaxed">The proof of concept successfully validated the core product concept across users and brands, demonstrating measurable impact on engagement, trust, and business viability.</p>
          
          <div className="grid grid-cols-2 gap-3 mt-6">
            <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl p-4 text-white">
              <div className="text-2xl font-bold mb-1">68%</div>
              <div className="text-xs font-medium opacity-90">Completion Rate</div>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-4 text-white">
              <div className="text-2xl font-bold mb-1">+45%</div>
              <div className="text-xs font-medium opacity-90">Trust Increase</div>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl p-4 text-white">
              <div className="text-2xl font-bold mb-1">30%</div>
              <div className="text-xs font-medium opacity-90">Conversion Rate</div>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl p-4 text-white">
              <div className="text-2xl font-bold mb-1">✓</div>
              <div className="text-xs font-medium opacity-90">Brand Interest</div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-zinc-50 rounded-xl border border-zinc-200">
            <p className="text-sm text-zinc-700 italic">"Brands praised the ease of integration and low technical overhead, while users highlighted the sense of contribution and reward clarity."</p>
          </div>
        </div>
      ),
    },
    learning: {
      content: (
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-zinc-900 mt-6 mb-3">Key Takeaways</h3>
          <ul className="list-disc pl-6 space-y-2 text-zinc-700">
            <li><strong>Fast Iteration = Strong Validation</strong><br />Rapid testing and refinement cycles ensured that every design change had measurable impact.</li>
            <li><strong>Transparency Builds Trust</strong><br />Educating users about the real recycling process increased credibility and engagement.</li>
            <li><strong>Gamification Drives Behaviour</strong><br />The visual "tree counter" gave users a tangible sense of environmental contribution — a simple, powerful motivator.</li>
          </ul>
        </div>
      )
    }
  }
};
