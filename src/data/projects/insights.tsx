
export const insightsProject = {
  slug: 'insights',
  title: 'Insights Dashboard',
  client: 'Analytics Company',
  date: '2023',
  role: 'UX/UI Designer',
  headerImage: '/src/assets/project-3.jpg',
  description: 'Designed a comprehensive analytics dashboard that increased user engagement by 55% and reduced time-to-insight by 40%.',
  
  // Process stages content
  stages: {
    tension: {
      title: 'The Tension',
      content: (
        <div className="space-y-6">
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
            <h4 className="font-semibold text-red-800 mb-3">The Problem</h4>
            <p className="text-red-700 leading-relaxed">
              Users were struggling to find meaningful insights in the existing dashboard. 
              The interface was cluttered with 50+ metrics, and users spent an average 
              of 12 minutes just trying to locate relevant data.
            </p>
          </div>
          
          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
            <h4 className="font-semibold text-orange-800 mb-3">Business Impact</h4>
            <ul className="text-orange-700 space-y-2">
              <li>• Low dashboard usage: 34% of users never returned</li>
              <li>• Feature adoption: Only 12% used advanced features</li>
              <li>• Customer complaints: "Too complex to understand"</li>
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
              <li>• User interviews with 20 dashboard users</li>
              <li>• Task-based usability testing</li>
              <li>• Analytics analysis of user behavior</li>
              <li>• Card sorting for information architecture</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6">
            <h4 className="font-semibold text-purple-800 mb-3">Key Insights</h4>
            <ul className="text-purple-700 space-y-2">
              <li>• Users wanted personalized dashboards</li>
              <li>• Visual hierarchy was crucial for scanning</li>
              <li>• Contextual help reduced confusion</li>
              <li>• Mobile access was increasingly important</li>
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
              <li>• Information overload with too many metrics</li>
              <li>• No personalization or customization</li>
              <li>• Poor visual hierarchy and scanning</li>
              <li>• Complex navigation structure</li>
              <li>• No contextual explanations</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
            <h4 className="font-semibold text-yellow-800 mb-3">User Pain Points</h4>
            <p className="text-yellow-700 leading-relaxed">
              "I know the data is there, but I can't find what I need quickly. 
              I end up exporting everything to Excel." - Lisa, 35, Data Analyst
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
              <li>• Personalized dashboard with role-based widgets</li>
              <li>• Clear visual hierarchy with progressive disclosure</li>
              <li>• Smart insights with automated recommendations</li>
              <li>• Mobile-responsive design</li>
              <li>• Contextual help and tooltips</li>
            </ul>
          </div>
          
          <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6">
            <h4 className="font-semibold text-teal-800 mb-3">Key Features</h4>
            <ul className="text-teal-700 space-y-2">
              <li>• Customizable widget layout</li>
              <li>• AI-powered insight recommendations</li>
              <li>• Interactive data visualizations</li>
              <li>• One-click report generation</li>
              <li>• Real-time data updates</li>
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
                <div className="text-3xl font-bold text-emerald-600">55%</div>
                <div className="text-sm text-emerald-700">Increase in user engagement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">40%</div>
                <div className="text-sm text-emerald-700">Reduction in time-to-insight</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">89%</div>
                <div className="text-sm text-emerald-700">User satisfaction score</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">67%</div>
                <div className="text-sm text-emerald-700">Increase in feature adoption</div>
              </div>
            </div>
          </div>
          
          <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6">
            <h4 className="font-semibold text-indigo-800 mb-3">Qualitative Feedback</h4>
            <p className="text-indigo-700 leading-relaxed italic">
              "This dashboard actually makes sense! I can find what I need in seconds 
              and the insights are incredibly valuable." - Mark, 42, Marketing Manager
            </p>
          </div>
        </div>
      )
    }
  }
};
