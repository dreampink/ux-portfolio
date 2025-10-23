
import polishpadUser1 from '../../assets/polishpad-user1.jpg'


export const polishpadProject = {
  slug: 'polishpad',
  title: 'Polish Pad',
  client: 'Polish Pad',
  date: '2025',
  role: 'Design Tech Lead',
  tools: 'Figma, React, TypeScript, Tailwind CSS',
  impact: '55% increase in user engagement, 40% reduction in time-to-insight',
  headerImage: '/project-3.jpg',
  description: 'Designed a comprehensive analytics dashboard that increased user engagement by 55% and reduced time-to-insight by 40%.',
  
  // Process stages content
  stages: {
    tension: {
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

          <img 
                src={polishpadUser1} 
                alt="Polish Pad User Interface Design" 
                className="w-full h-auto rounded-xl shadow-lg"
              />
          
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
    
    design: {
      title: 'Design Showcase',
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 border border-pink-200 rounded-2xl p-6">
            <h4 className="font-semibold text-pink-800 mb-4">Polish Pad Social Media Campaign</h4>
            <p className="text-pink-700 leading-relaxed mb-6">
              Interactive showcase of the nail art campaign featuring animated blocks that reveal 
              key information as users scroll through the design.
            </p>
            
            {/* Animated Image Blocks Component */}
            <div className="relative">
              <img 
                src="/project-3.jpg" 
                alt="Polish Pad Campaign" 
                className="w-full h-auto rounded-xl shadow-lg"
              />
              
              {/* Animated overlay blocks */}
              <div className="absolute inset-0">
                {/* Block 1: Behind the Polish Pad */}
                <div className="absolute top-4 left-4 w-80 h-32 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-white/20 animate-fadeInUp">
                  <h5 className="font-bold text-gray-900 mb-2">Behind the Polish Pad</h5>
                  <p className="text-sm text-gray-700">Brand introduction and community showcase</p>
                </div>
                
                {/* Block 2: Business Mistakes */}
                <div className="absolute top-4 right-4 w-80 h-32 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-white/20 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
                  <h5 className="font-bold text-gray-900 mb-2">Business Mistakes to Avoid</h5>
                  <p className="text-sm text-gray-700">Financial guidance for entrepreneurs</p>
                </div>
                
                {/* Block 3: London Services */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-32 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-white/20 animate-scaleIn" style={{animationDelay: '0.4s'}}>
                  <h5 className="font-bold text-gray-900 mb-2">London Nail Art Services</h5>
                  <p className="text-sm text-gray-700">Premium nail art designs and services</p>
                </div>
                
                {/* Block 4: Income Tax Info */}
                <div className="absolute bottom-4 left-4 w-80 h-32 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-white/20 animate-slideInLeft" style={{animationDelay: '0.6s'}}>
                  <h5 className="font-bold text-gray-900 mb-2">Income Tax 2021/2022</h5>
                  <p className="text-sm text-gray-700">Tax guidance for self-employed individuals</p>
                </div>
                
                {/* Block 5: Essex Services */}
                <div className="absolute bottom-4 right-4 w-80 h-32 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-white/20 animate-slideInRight" style={{animationDelay: '0.8s'}}>
                  <h5 className="font-bold text-gray-900 mb-2">Essex Nail Art Services</h5>
                  <p className="text-sm text-gray-700">Local nail art services and designs</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* User Interface Design */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-6">
            <h4 className="font-semibold text-purple-800 mb-4">User Interface Design</h4>
            <p className="text-purple-700 leading-relaxed mb-6">
              Clean and intuitive interface design for the Polish Pad application, focusing on 
              user experience and visual appeal.
            </p>
            
            <div className="relative">
              <img 
                src={polishpadUser1} 
                alt="Polish Pad User Interface Design" 
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
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
