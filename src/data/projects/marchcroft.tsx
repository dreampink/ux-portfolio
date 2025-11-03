export const marchcroftProject = {
  slug: 'marchcroft',
  title: 'Marchcroft',
  description: 'Redesigned financial dashboards and data visualisation tools for a leading financial services firm, enabling faster decision-making and improved user confidence.',
  client: 'Marchcroft Financial Services',
  date: '2024',
  role: 'UX Designer',
  impact: 'Improved data comprehension and decision-making speed for financial teams',
  headerImage: '/project-4.jpg', // Marchcroft is now at index 3, so uses project-4.jpg
  stages: {
    problem: {
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-zinc-900 mb-3">The Challenge</h3>
            <p className="text-zinc-600 leading-relaxed">
              Marchcroft's financial teams were struggling with complex market data and portfolio analytics. Despite having access to vast amounts of financial information, teams struggled to extract meaningful insights quickly enough to make informed investment decisions. The data was often siloed, difficult to interpret, and lacked the visual context needed for rapid financial analysis.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-zinc-900 mb-2">Key Pain Points</h4>
            <ul className="space-y-2 text-zinc-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Financial analysts spent excessive time manually analyzing market data instead of making investment decisions</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Critical market insights were buried in complex financial dashboards and reports</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Investment decision-making was slowed by data interpretation challenges</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Lack of visual context made it difficult to identify market patterns and portfolio trends</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    research: {
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-zinc-900 mb-3">Research Approach</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">
              I conducted comprehensive research to understand how financial teams interact with market data and what barriers prevent effective investment decision-making.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-medium text-zinc-900 mb-3">User Interviews</h4>
              <ul className="space-y-2 text-zinc-600">
                <li>• 12 financial team members interviewed</li>
                <li>• Portfolio managers, analysts, and traders</li>
                <li>• Current workflow analysis</li>
                <li>• Pain point identification</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-zinc-900 mb-3">Data Analysis</h4>
              <ul className="space-y-2 text-zinc-600">
                <li>• Existing financial dashboard usage patterns</li>
                <li>• Time-to-insight measurements for market data</li>
                <li>• Investment decision-making bottlenecks</li>
                <li>• Financial data visualisation preferences</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-zinc-900 mb-3">Key Insights</h4>
            <div className="bg-zinc-50 rounded-lg p-4">
              <p className="text-zinc-700 italic">
                "We have all the market data we need, but it's like trying to find a needle in a haystack. We need to see the big picture first, then drill down into specific portfolio details."
              </p>
              <p className="text-sm text-zinc-500 mt-2">— Senior Portfolio Manager</p>
            </div>
          </div>
        </div>
      )
    },
    tension: {
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-zinc-900 mb-3">Core Tensions</h3>
            <p className="text-zinc-600 leading-relaxed">
              The research revealed several critical tensions that were preventing effective data utilisation and decision-making.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="border-l-4 border-pink-200 pl-4">
              <h4 className="font-medium text-zinc-900 mb-2">Detail vs. Overview</h4>
              <p className="text-zinc-600 text-sm">
                Teams needed both high-level insights and granular details, but existing tools forced them to choose between the two.
              </p>
            </div>
            
            <div className="border-l-4 border-pink-200 pl-4">
              <h4 className="font-medium text-zinc-900 mb-2">Speed vs. Accuracy</h4>
              <p className="text-zinc-600 text-sm">
                The pressure for quick decisions conflicted with the need for thorough data analysis and validation.
              </p>
            </div>
            
            <div className="border-l-4 border-pink-200 pl-4">
              <h4 className="font-medium text-zinc-900 mb-2">Individual vs. Collaborative</h4>
              <p className="text-zinc-600 text-sm">
                Data analysis was often siloed, preventing teams from building on each other's insights and creating shared understanding.
              </p>
            </div>
            
            <div className="border-l-4 border-pink-200 pl-4">
              <h4 className="font-medium text-zinc-900 mb-2">Static vs. Dynamic</h4>
              <p className="text-zinc-600 text-sm">
                Static reports couldn't keep up with real-time operational changes, leading to outdated decision-making.
              </p>
            </div>
          </div>
        </div>
      )
    },
    approach: {
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-zinc-900 mb-3">Design Strategy</h3>
            <p className="text-zinc-600 leading-relaxed">
              I developed a comprehensive approach focused on creating intuitive data visualisation tools that would transform how teams interact with operational data.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-medium text-zinc-900 mb-3">Information Architecture</h4>
              <ul className="space-y-2 text-zinc-600">
                <li>• Hierarchical data organisation</li>
                <li>• Progressive disclosure patterns</li>
                <li>• Contextual navigation</li>
                <li>• Search and filtering systems</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-zinc-900 mb-3">Visual Design</h4>
              <ul className="space-y-2 text-zinc-600">
                <li>• Data visualisation principles</li>
                <li>• Color coding for quick recognition</li>
                <li>• Interactive chart components</li>
                <li>• Responsive design patterns</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-zinc-900 mb-3">Key Design Principles</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-pink-50 rounded-lg p-4">
                <h5 className="font-medium text-pink-900 mb-2">Clarity First</h5>
                <p className="text-pink-700 text-sm">Every visualisation should immediately communicate its purpose and key insights.</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <h5 className="font-medium text-blue-900 mb-2">Speed to Insight</h5>
                <p className="text-blue-700 text-sm">Minimise cognitive load and enable rapid pattern recognition.</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <h5 className="font-medium text-green-900 mb-2">Scalable Execution</h5>
                <p className="text-green-700 text-sm">Design systems that grow with team needs and data complexity.</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h5 className="font-medium text-purple-900 mb-2">Collaborative Context</h5>
                <p className="text-purple-700 text-sm">Enable teams to share insights and build on each other's analysis.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    solution: {
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-zinc-900 mb-3">Solution Overview</h3>
            <p className="text-zinc-600 leading-relaxed">
              I designed a comprehensive data visualisation platform that transforms complex operational data into actionable insights through intuitive interfaces and intelligent design patterns.
            </p>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-medium text-zinc-900 mb-3">Interactive Dashboard System</h4>
              <p className="text-zinc-600 mb-3">
                Created a flexible dashboard framework that allows teams to customise their data views while maintaining consistency and usability.
              </p>
              <ul className="space-y-1 text-zinc-600">
                <li>• Drag-and-drop widget system for personalised layouts</li>
                <li>• Real-time data updates with visual indicators</li>
                <li>• Cross-widget interactions and drill-down capabilities</li>
                <li>• Mobile-responsive design for on-the-go access</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-zinc-900 mb-3">Advanced Visualisation Components</h4>
              <p className="text-zinc-600 mb-3">
                Developed a library of specialised chart types optimised for operational data analysis and decision-making.
              </p>
              <ul className="space-y-1 text-zinc-600">
                <li>• Time-series analysis with trend detection</li>
                <li>• Correlation matrices for pattern identification</li>
                <li>• Heat maps for performance monitoring</li>
                <li>• Sankey diagrams for process flow analysis</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-zinc-900 mb-3">Collaborative Features</h4>
              <p className="text-zinc-600 mb-3">
                Integrated team collaboration tools directly into the data visualisation experience.
              </p>
              <ul className="space-y-1 text-zinc-600">
                <li>• Shared annotations and insights</li>
                <li>• Team workspace organisation</li>
                <li>• Export and sharing capabilities</li>
                <li>• Notification system for data alerts</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    results: {
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-zinc-900 mb-3">Impact & Results</h3>
            <p className="text-zinc-600 leading-relaxed">
              The new data visualisation platform delivered significant improvements in team efficiency and decision-making capabilities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">65%</div>
              <div className="text-sm text-zinc-600">Faster Data Analysis</div>
              <p className="text-xs text-zinc-500 mt-1">Reduced time from data to insight</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">78%</div>
              <div className="text-sm text-zinc-600">Improved Accuracy</div>
              <p className="text-xs text-zinc-500 mt-1">Better decision quality</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">42%</div>
              <div className="text-sm text-zinc-600">Team Collaboration</div>
              <p className="text-xs text-zinc-500 mt-1">Increased shared insights</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-zinc-900 mb-3">Key Achievements</h4>
            <ul className="space-y-2 text-zinc-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Teams can now identify operational issues 3x faster than before</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Reduced data analysis time from hours to minutes for routine reports</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Improved cross-team collaboration through shared data workspaces</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Enhanced decision-making confidence through better data visualisation</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-zinc-50 rounded-lg p-4">
            <h4 className="font-medium text-zinc-900 mb-2">Client Feedback</h4>
            <p className="text-zinc-700 italic">
              "The new platform has completely transformed how our teams work with data. We're making better decisions faster, and our operational efficiency has improved dramatically."
            </p>
            <p className="text-sm text-zinc-500 mt-2">— Marchcroft Technical Director</p>
          </div>
        </div>
      )
    }
  }
}
