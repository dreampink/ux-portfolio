
export const onboardingProject = {
  slug: 'onboarding',
  title: 'Cancer Research UK',
  client: 'SaaS Platform',
  date: '2024',
  role: 'Senior UX Designer',
  headerImage: '/project-2.jpg',
  description: 'Completely redesigned the user onboarding experience, increasing activation rates by 42% and reducing time-to-value by 60%.',
  
  // Process stages content
  stages: {
    tension: {
      title: 'The Tension',
      content: (
        <div className="space-y-6">
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
            <h4 className="font-semibold text-red-800 mb-3">The Problem</h4>
            <p className="text-red-700 leading-relaxed">
              Only 23% of new users completed the onboarding process, with most dropping off 
              after the first 3 steps. The existing flow was overwhelming with 12 steps and 
              no clear value demonstration.
            </p>
          </div>
          
          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
            <h4 className="font-semibold text-orange-800 mb-3">Business Impact</h4>
            <ul className="text-orange-700 space-y-2">
              <li>• Low activation rate: 23% vs industry average of 45%</li>
              <li>• High churn: 67% of users churned within first week</li>
              <li>• Support tickets: 300+ per month about setup</li>
            </ul>
          </div>
        </div>
      )
    },
    
    approach: {
      title: 'The Approach',
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
            <h4 className="font-semibold text-blue-800 mb-3">Research Methods</h4>
            <ul className="text-blue-700 space-y-2">
              <li>• User journey mapping with 25 new users</li>
              <li>• A/B testing of onboarding flows</li>
              <li>• Heatmap analysis of drop-off points</li>
              <li>• Customer support ticket analysis</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6">
            <h4 className="font-semibold text-purple-800 mb-3">Key Insights</h4>
            <ul className="text-purple-700 space-y-2">
              <li>• Users wanted to see value before committing time</li>
              <li>• Progressive disclosure was more effective</li>
              <li>• Interactive tutorials beat static instructions</li>
              <li>• Personalization increased completion rates</li>
            </ul>
          </div>
        </div>
      )
    },
    
    problem: {
      title: 'The Problem',
      content: (
        <div className="space-y-6">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
            <h4 className="font-semibold text-gray-800 mb-3">Root Causes</h4>
            <ul className="text-gray-700 space-y-2">
              <li>• Information overload in first session</li>
              <li>• No clear value proposition upfront</li>
              <li>• Complex setup requirements</li>
              <li>• Poor mobile onboarding experience</li>
              <li>• No progress saving or resumption</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
            <h4 className="font-semibold text-yellow-800 mb-3">User Pain Points</h4>
            <p className="text-yellow-700 leading-relaxed">
              "I spent 20 minutes setting up my account but still don't understand what this 
              tool actually does for me." - Jennifer, 31, Project Manager
            </p>
          </div>
        </div>
      )
    },
    
    solution: {
      title: 'The Solution',
      content: (
        <div className="space-y-6">
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
            <h4 className="font-semibold text-green-800 mb-3">Design Solutions</h4>
            <ul className="text-green-700 space-y-2">
              <li>• Interactive product tour with value demonstration</li>
              <li>• Progressive onboarding with 3 core steps</li>
              <li>• Personalized setup based on user role</li>
              <li>• Mobile-optimized experience</li>
              <li>• Save and resume functionality</li>
            </ul>
          </div>
          
          <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6">
            <h4 className="font-semibold text-teal-800 mb-3">Key Features</h4>
            <ul className="text-teal-700 space-y-2">
              <li>• Interactive demo before signup</li>
              <li>• Role-based onboarding paths</li>
              <li>• Contextual help and tooltips</li>
              <li>• Achievement badges for motivation</li>
              <li>• Smart defaults and auto-fill</li>
            </ul>
          </div>
        </div>
      )
    },
    
    results: {
      title: 'The Results',
      content: (
        <div className="space-y-6">
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
            <h4 className="font-semibold text-emerald-800 mb-3">Quantitative Results</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">42%</div>
                <div className="text-sm text-emerald-700">Increase in activation rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">60%</div>
                <div className="text-sm text-emerald-700">Reduction in time-to-value</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">78%</div>
                <div className="text-sm text-emerald-700">Onboarding completion rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">45%</div>
                <div className="text-sm text-emerald-700">Reduction in support tickets</div>
              </div>
            </div>
          </div>
          
          <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6">
            <h4 className="font-semibold text-indigo-800 mb-3">Qualitative Feedback</h4>
            <p className="text-indigo-700 leading-relaxed italic">
              "Finally, an onboarding that actually shows me what the product does! 
              I was up and running in 5 minutes." - David, 29, Marketing Director
            </p>
          </div>
        </div>
      )
    }
  }
};
