import { Link } from 'react-router-dom'
import DesignThinkingDiagram from '../components/DesignThinkingDiagram'

export default function App() {
  const cases = [
    { slug: 'payments', title: 'Streamlined Payments' },
    { slug: 'onboarding', title: 'Onboarding Revamp' },
    { slug: 'insights', title: 'Insights Dashboard' },
    { slug: 'mobile', title: 'Mobile IA Refresh' },
  ]

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-zinc-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo/Brand */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">UX</span>
              </div>
              <div>
                <h2 className="text-xl font-bold tracking-tight text-zinc-900">Ebe Etiobhio</h2>
                <p className="text-xs text-zinc-500 font-medium">UX/UI Designer</p>
              </div>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 rounded-lg transition-all duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="p-2 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 rounded-lg transition-colors duration-200">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
        {/* Home Section */}
        <section id="home" className="mb-20 md:mb-32">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div className="text-center lg:text-left">
                {/* Hero Badge */}
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-50 border border-pink-200 mb-8">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-2 animate-pulse"></span>
                  <span className="text-sm font-medium text-pink-700">Available for new opportunities</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 mb-6">
                  Crafting Digital
                  <span className="block bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 bg-clip-text text-transparent">
                    Experiences
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-xl md:text-2xl text-zinc-600 leading-relaxed mb-8 max-w-2xl">
                  I design user-centered solutions that bridge the gap between business goals and human needs, 
                  creating products that people love to use.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-2xl hover:from-pink-600 hover:to-rose-600 transform hover:-translate-y-1 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <span className="text-white">View My Work</span>
                    <svg className="ml-2 w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-zinc-200 text-zinc-900 font-semibold rounded-2xl hover:bg-zinc-50 transition-all duration-200"
                  >
                    Get In Touch
                  </a>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl">
                  <div className="text-center lg:text-left">
                    <div className="text-3xl md:text-4xl font-bold text-zinc-900 mb-2">5+</div>
                    <div className="text-sm text-zinc-600 font-medium">Years Experience</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-3xl md:text-4xl font-bold text-zinc-900 mb-2">50+</div>
                    <div className="text-sm text-zinc-600 font-medium">Projects Delivered</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-3xl md:text-4xl font-bold text-zinc-900 mb-2">15+</div>
                    <div className="text-sm text-zinc-600 font-medium">Happy Clients</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-3xl md:text-4xl font-bold text-zinc-900 mb-2">100%</div>
                    <div className="text-sm text-zinc-600 font-medium">User-Focused</div>
                  </div>
                </div>
              </div>

              {/* Right Column - Profile Image */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  {/* Profile Image Container */}
                  <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl">
                    {/* Placeholder for profile image */}
                    <div className="w-full h-full bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-32 h-32 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                          <span className="text-6xl text-white font-bold">EE</span>
                        </div>
                        <p className="text-zinc-600 text-sm">Add your photo here</p>
                      </div>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-pink-300 to-rose-400 rounded-full opacity-20 blur-xl"></div>
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-rose-300 to-pink-400 rounded-full opacity-20 blur-xl"></div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute -top-6 -left-6 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                    <span className="text-2xl">💡</span>
                  </div>
                  <div className="absolute top-1/2 -left-8 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <span className="text-lg">✨</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-20 md:mb-32">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-zinc-900">About Me</h2>
              <p className="text-xl text-zinc-600 leading-relaxed max-w-3xl mx-auto">
                I'm a UX/UI designer passionate about creating meaningful digital experiences. 
                I specialize in user research, interface design, and design systems that drive business results.
              </p>
            </div>
            
            {/* Design Thinking Process */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-zinc-900">
                  How I Think as a Designer
                </h3>
                <p className="text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto">
                  My design process is rooted in human-centered design thinking, where empathy drives every decision 
                  and iteration leads to better solutions. Here's how I approach complex problems:
                </p>
              </div>
              <DesignThinkingDiagram />
            </div>

            {/* Skills Section */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-bold tracking-tight mb-6 text-zinc-900">What I Bring to Your Team</h3>
                
                {/* Primary Expertise */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-zinc-800 mb-4">Primary Expertise</h4>
                  <div className="space-y-4">
                    {[
                      { 
                        skill: 'User Research & Strategy', 
                        expertise: 'Expert',
                        impact: 'Led research that increased user satisfaction by 40%',
                        tools: 'UserTesting, Maze, Hotjar, Figma'
                      },
                      { 
                        skill: 'UI/UX Design', 
                        expertise: 'Expert',
                        impact: 'Designed interfaces used by 100K+ users',
                        tools: 'Figma, Adobe Creative Suite, Principle'
                      },
                      { 
                        skill: 'Design Systems', 
                        expertise: 'Advanced',
                        impact: 'Built scalable design systems for 3 companies',
                        tools: 'Figma, Storybook, Zeroheight'
                      }
                    ].map((item, index) => (
                      <div key={index} className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-6 border border-pink-100">
                        <div className="flex items-start justify-between mb-3">
                          <h5 className="font-semibold text-zinc-900">{item.skill}</h5>
                          <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                            item.expertise === 'Advanced' 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-pink-100 text-pink-700'
                          }`}>
                            {item.expertise}
                          </span>
                        </div>
                        <p className="text-sm text-zinc-600 mb-3">{item.impact}</p>
                        <div className="flex flex-wrap gap-2">
                          {item.tools.split(', ').map((tool, i) => (
                            <span key={i} className="px-2 py-1 bg-white text-xs text-zinc-600 rounded-lg border border-zinc-200">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Skills */}
                <div>
                  <h4 className="text-lg font-semibold text-zinc-800 mb-4">Design & Development Tools</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { name: 'Figma', level: 'Expert' },
                      { name: 'Sketch', level: 'Advanced' },
                      { name: 'Adobe Creative Suite', level: 'Advanced' },
                      { name: 'Principle', level: 'Advanced' },
                      { name: 'Framer', level: 'Advanced' },
                      { name: 'InVision', level: 'Advanced' },
                      { name: 'Zeplin', level: 'Advanced' },
                      { name: 'Abstract', level: 'Intermediate' },
                      { name: 'HTML/CSS', level: 'Advanced' },
                      { name: 'JavaScript', level: 'Intermediate' },
                      { name: 'React', level: 'Intermediate' },
                      { name: 'Optimizely', level: 'Advanced' },
                      { name: 'Hotjar', level: 'Advanced' },
                      { name: 'UserTesting', level: 'Advanced' },
                      { name: 'Maze', level: 'Advanced' },
                      { name: 'Miro', level: 'Advanced' }
                    ].map((skill, index) => {
                      
                      return (
                        <div key={index} className="flex items-center justify-between p-3 bg-white rounded-xl border border-zinc-200">
                          <span className="text-sm font-medium text-zinc-900">
                            {skill.name}
                          </span>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            skill.level === 'Expert' 
                              ? 'bg-pink-100 text-pink-700' 
                              : skill.level === 'Advanced'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-zinc-100 text-zinc-600'
                          }`}>
                            {skill.level}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold tracking-tight mb-6 text-zinc-900">Experience & Achievements</h3>
                
                {/* Experience Timeline */}
                <div className="space-y-6 mb-8">
                  {[
                    {
                      title: 'Senior UX Designer',
                      company: 'TechCorp Inc.',
                      period: '2022 - Present',
                      description: 'Leading design initiatives for enterprise products, managing a team of 3 designers, and establishing design systems.',
                      achievements: ['Increased user engagement by 60%', 'Reduced support tickets by 45%', 'Led 15+ successful product launches']
                    },
                    {
                      title: 'UX Designer',
                      company: 'StartupXYZ',
                      period: '2020 - 2022',
                      description: 'Designed user experiences for mobile and web applications, conducted user research, and collaborated with development teams.',
                      achievements: ['Improved conversion rate by 35%', 'Conducted 50+ user interviews', 'Designed for 2M+ users']
                    },
                    {
                      title: 'Junior UI Designer',
                      company: 'DesignStudio',
                      period: '2019 - 2020',
                      description: 'Created visual designs and prototypes, supported senior designers, and learned industry best practices.',
                      achievements: ['Delivered 20+ design projects', 'Mentored 3 junior designers', 'Won internal design award']
                    }
                  ].map((exp, index) => (
                    <div key={index} className="border-l-2 border-pink-200 pl-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h4 className="font-semibold text-zinc-900">{exp.title}</h4>
                        <span className="text-sm text-zinc-500">{exp.period}</span>
                      </div>
                      <p className="text-sm font-medium text-pink-600 mb-2">{exp.company}</p>
                      <p className="text-sm text-zinc-600 mb-3">{exp.description}</p>
                      <div className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-center text-xs text-zinc-500">
                            <div className="w-1 h-1 bg-pink-400 rounded-full mr-2"></div>
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-20 md:mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-zinc-900">Featured Projects</h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
              A collection of my recent work showcasing user-centered design solutions and measurable business impact.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((c, index) => (
              <Link
                key={c.slug}
                to={`/case/${c.slug}`}
                className="group block rounded-3xl border border-zinc-200 bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/80/80 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-2xl">🎨</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="w-8 h-8 bg-white/90/90 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-4 h-4 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-zinc-900 group-hover:text-pink-600 transition-colors">
                        {c.title}
                      </h3>
                      <p className="text-sm text-zinc-500 mt-1">Case Study</p>
                    </div>
                    <div className="flex items-center text-pink-600 group-hover:translate-x-1 transition-transform">
                      <span className="text-sm font-medium mr-1">View</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                  
                  <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                    {index === 0 && "Streamlined payment flows resulting in 40% faster checkout completion."}
                    {index === 1 && "Redesigned onboarding experience with 60% improvement in user retention."}
                    {index === 2 && "Created comprehensive dashboard increasing user engagement by 85%."}
                    {index === 3 && "Mobile information architecture refresh with 50% better task completion."}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {index === 0 && ['UX Research', 'UI Design', 'Prototyping'].map((tag, tagIndex) => {
                      const tagColors = [
                        'bg-blue-100 text-blue-700',
                        'bg-purple-100 text-purple-700',
                        'bg-indigo-100 text-indigo-700'
                      ];
                      return (
                        <span key={tag} className={`px-3 py-1 ${tagColors[tagIndex]} text-xs font-medium rounded-full`}>
                          {tag}
                        </span>
                      );
                    })}
                    {index === 1 && ['User Testing', 'Wireframing', 'Figma'].map((tag, tagIndex) => {
                      const tagColors = [
                        'bg-cyan-100 text-cyan-700',
                        'bg-teal-100 text-teal-700',
                        'bg-emerald-100 text-emerald-700'
                      ];
                      return (
                        <span key={tag} className={`px-3 py-1 ${tagColors[tagIndex]} text-xs font-medium rounded-full`}>
                          {tag}
                        </span>
                      );
                    })}
                    {index === 2 && ['Data Viz', 'Dashboard', 'Analytics'].map((tag, tagIndex) => {
                      const tagColors = [
                        'bg-lime-100 text-lime-700',
                        'bg-yellow-100 text-yellow-700',
                        'bg-orange-100 text-orange-700'
                      ];
                      return (
                        <span key={tag} className={`px-3 py-1 ${tagColors[tagIndex]} text-xs font-medium rounded-full`}>
                          {tag}
                        </span>
                      );
                    })}
                    {index === 3 && ['Mobile UX', 'IA Design', 'Usability'].map((tag, tagIndex) => {
                      const tagColors = [
                        'bg-amber-100 text-amber-700',
                        'bg-pink-100 text-pink-700',
                        'bg-rose-100 text-rose-700'
                      ];
                      return (
                        <span key={tag} className={`px-3 py-1 ${tagColors[tagIndex]} text-xs font-medium rounded-full`}>
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </div>
            </Link>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-20 md:mb-32">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-zinc-900">Let's Work Together</h2>
              <p className="text-xl text-zinc-600 leading-relaxed max-w-2xl mx-auto">
                Ready to create something amazing? I'd love to hear about your project and how we can bring your vision to life.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight mb-6 text-zinc-900">Get In Touch</h3>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-zinc-900">Email</p>
                        <p className="text-zinc-600">ebe@example.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-rose-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-zinc-900">LinkedIn</p>
                        <p className="text-zinc-600">linkedin.com/in/sarahjohnson</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-zinc-900">GitHub</p>
                        <p className="text-zinc-600">github.com/sarahjohnson</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col justify-center space-y-6">
                <a
                  href="mailto:ebe@example.com"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-2xl hover:from-pink-600 hover:to-rose-600 transform hover:-translate-y-1 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-white">Send Email</span>
                </a>
                
                <a
                  href="https://linkedin.com/in/sarahjohnson"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-zinc-200 text-zinc-900 font-semibold rounded-2xl hover:bg-zinc-50 transition-all duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">UX</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900">Ebe Etiobhio</h3>
                  <p className="text-sm text-zinc-500">UX/UI Designer</p>
                </div>
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Creating meaningful digital experiences through user-centered design and innovative solutions.
              </p>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-zinc-900 mb-4">Quick Links</h4>
              <div className="space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-zinc-900 mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="mailto:sarah@example.com" className="text-zinc-400 hover:text-zinc-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
                <a href="https://linkedin.com/in/sarahjohnson" className="text-zinc-400 hover:text-zinc-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://github.com/sarahjohnson" className="text-zinc-400 hover:text-zinc-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-zinc-200 mt-8 pt-8 text-center">
            <p className="text-sm text-zinc-500">
              © 2025 Ebe Etiobhio. All rights reserved. Built with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
