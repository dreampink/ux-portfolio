
export const sportProject = {
  slug: 'sport-direct',
  title: 'Sports Direct',
  client: 'FinTech Startup',
  date: '2024',
  role: 'Lead UX Designer',
  tools: 'Figma, Principle, Maze, Google Analytics',
  impact: '35% reduction in drop-off rates, 28% increase in conversion',
  headerImage: '/project-1.jpg',
  description: 'Redesigned the payment flow for a fintech application, reducing drop-off rates by 35% and increasing conversion by 28%.',
  
  // Process stages content
  stages: {
    tension: {
      content: (
        <div className="space-y-6">
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
            <h4 className="font-semibold text-red-800 mb-3">The Problem</h4>
            <p className="text-red-700 leading-relaxed">
              Users were abandoning the payment process at a 45% rate, with 60% of drop-offs occurring 
              during the payment method selection step. The existing flow had 8 steps and required 
              users to re-enter information they had already provided.
            </p>
          </div>
          
          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
            <h4 className="font-semibold text-orange-800 mb-3">Business Impact</h4>
            <ul className="text-orange-700 space-y-2">
              <li>• Lost revenue: $2.3M annually due to abandoned payments</li>
              <li>• Customer support tickets increased by 40%</li>
              <li>• User satisfaction score dropped to 2.1/5</li>
            </ul>
          </div>
        </div>
      )
    },
    
    approach: {
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
            <h4 className="font-semibold text-blue-800 mb-3">Research Methods</h4>
            <ul className="text-blue-700 space-y-2">
              <li>• User interviews with 15 payment abandoners</li>
              <li>• Usability testing with 20 participants</li>
              <li>• Analytics analysis of payment funnel</li>
              <li>• Competitive analysis of 8 payment systems</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6">
            <h4 className="font-semibold text-purple-800 mb-3">Key Insights</h4>
            <ul className="text-purple-700 space-y-2">
              <li>• Users wanted to save payment methods for future use</li>
              <li>• Security concerns were the #1 reason for abandonment</li>
              <li>• Mobile users needed larger touch targets</li>
              <li>• Progress indication was crucial for completion</li>
            </ul>
          </div>
        </div>
      )
    },
    
    problem: {
      content: (
        <div className="space-y-6">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
            <h4 className="font-semibold text-gray-800 mb-3">Root Causes</h4>
            <ul className="text-gray-700 space-y-2">
              <li>• Too many form fields requiring manual entry</li>
              <li>• No saved payment method options</li>
              <li>• Unclear security indicators</li>
              <li>• Poor mobile experience</li>
              <li>• No progress indication</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
            <h4 className="font-semibold text-yellow-800 mb-3">User Pain Points</h4>
            <p className="text-yellow-700 leading-relaxed">
              "I always get nervous entering my card details online. I wish I could just use 
              my saved payment method like on other sites." - Sarah, 28, Marketing Manager
            </p>
          </div>
        </div>
      )
    },
    
    solution: {
      content: (
        <div className="space-y-6">
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
            <h4 className="font-semibold text-green-800 mb-3">Design Solutions</h4>
            <ul className="text-green-700 space-y-2">
              <li>• Reduced payment steps from 8 to 3</li>
              <li>• Added saved payment method selection</li>
              <li>• Implemented clear security badges</li>
              <li>• Created mobile-optimized interface</li>
              <li>• Added progress indicator</li>
            </ul>
          </div>
          
          <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6">
            <h4 className="font-semibold text-teal-800 mb-3">Key Features</h4>
            <ul className="text-teal-700 space-y-2">
              <li>• One-click payment with saved methods</li>
              <li>• Real-time form validation</li>
              <li>• SSL security indicators</li>
              <li>• Guest checkout option</li>
              <li>• Mobile-first responsive design</li>
            </ul>
          </div>
        </div>
      )
    },
    
    results: {
      content: (
        <div className="space-y-6">
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
            <h4 className="font-semibold text-emerald-800 mb-3">Quantitative Results</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">35%</div>
                <div className="text-sm text-emerald-700">Reduction in drop-off rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">28%</div>
                <div className="text-sm text-emerald-700">Increase in conversion</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">4.2/5</div>
                <div className="text-sm text-emerald-700">User satisfaction score</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">$1.8M</div>
                <div className="text-sm text-emerald-700">Additional revenue</div>
              </div>
            </div>
          </div>
          
          <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6">
            <h4 className="font-semibold text-indigo-800 mb-3">Qualitative Feedback</h4>
            <p className="text-indigo-700 leading-relaxed italic">
              "The new payment process is so much easier! I can use my saved card and 
              complete the purchase in under 30 seconds." - Mike, 34, Business Owner
            </p>
          </div>
        </div>
      )
    }
  }
};
