
export const tescoProject = {
  slug: 'tesco',
  title: 'Tesco',
  client: 'E-commerce Platform',
  date: '2023',
  role: 'UX Designer',
  headerImage: '/project-4.jpg',
  description: 'Redesigned the mobile information architecture, improving task completion rates by 48% and reducing bounce rate by 32%.',
  
  // Process stages content
  stages: {
    tension: {
      title: 'The Tension',
      content: (
        <div className="space-y-6">
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
            <h4 className="font-semibold text-red-800 mb-3">The Problem</h4>
            <p className="text-red-700 leading-relaxed">
              Mobile users were struggling to navigate the app, with 68% of users unable to 
              complete basic tasks like finding products or checking out. The information 
              architecture was designed for desktop and didn't translate well to mobile.
            </p>
          </div>
          
          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
            <h4 className="font-semibold text-orange-800 mb-3">Business Impact</h4>
            <ul className="text-orange-700 space-y-2">
              <li>• High mobile bounce rate: 67% vs 34% on desktop</li>
              <li>• Low mobile conversion: 1.2% vs 3.8% on desktop</li>
              <li>• Poor app store ratings: 2.3/5 stars</li>
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
              <li>• Mobile usability testing with 30 participants</li>
              <li>• Tree testing for navigation structure</li>
              <li>• Mobile analytics analysis</li>
              <li>• Competitive analysis of top mobile apps</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6">
            <h4 className="font-semibold text-purple-800 mb-3">Key Insights</h4>
            <ul className="text-purple-700 space-y-2">
              <li>• Users expected thumb-friendly navigation</li>
              <li>• Search was the primary discovery method</li>
              <li>• Bottom navigation was preferred over hamburger menus</li>
              <li>• Contextual actions were crucial for mobile</li>
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
              <li>• Desktop-first navigation structure</li>
              <li>• Hidden primary actions in hamburger menu</li>
              <li>• Inconsistent interaction patterns</li>
              <li>• Poor touch target sizing</li>
              <li>• No mobile-specific user flows</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
            <h4 className="font-semibold text-yellow-800 mb-3">User Pain Points</h4>
            <p className="text-yellow-700 leading-relaxed">
              "I can never find what I'm looking for on mobile. The menu is confusing 
              and I always end up going back to the website." - Alex, 26, Student
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
              <li>• Bottom navigation with 5 core sections</li>
              <li>• Mobile-first information architecture</li>
              <li>• Thumb-friendly touch targets (44px minimum)</li>
              <li>• Contextual floating action buttons</li>
              <li>• Progressive disclosure for complex features</li>
            </ul>
          </div>
          
          <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6">
            <h4 className="font-semibold text-teal-800 mb-3">Key Features</h4>
            <ul className="text-teal-700 space-y-2">
              <li>• Bottom tab navigation</li>
              <li>• Prominent search functionality</li>
              <li>• Quick actions for common tasks</li>
              <li>• Swipe gestures for navigation</li>
              <li>• Mobile-optimized checkout flow</li>
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
                <div className="text-3xl font-bold text-emerald-600">48%</div>
                <div className="text-sm text-emerald-700">Improvement in task completion</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">32%</div>
                <div className="text-sm text-emerald-700">Reduction in bounce rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">2.1x</div>
                <div className="text-sm text-emerald-700">Increase in mobile conversion</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">4.2/5</div>
                <div className="text-sm text-emerald-700">App store rating</div>
              </div>
            </div>
          </div>
          
          <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6">
            <h4 className="font-semibold text-indigo-800 mb-3">Qualitative Feedback</h4>
            <p className="text-indigo-700 leading-relaxed italic">
              "Finally, a mobile app that makes sense! I can actually find what I need 
              and complete my purchases without getting frustrated." - Sarah, 29, Teacher
            </p>
          </div>
        </div>
      )
    }
  }
};
