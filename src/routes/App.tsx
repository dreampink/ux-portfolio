import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function App() {
  const cases = [
    { slug: 'payments', title: 'Streamlined Payments' },
    { slug: 'onboarding', title: 'Onboarding Revamp' },
    { slug: 'insights', title: 'Insights Dashboard' },
    { slug: 'mobile', title: 'Mobile IA Refresh' },
  ]

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '/about' },
  ]

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-transparent text-zinc-900">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        {/* Hero Section */}
        <section id="home" className="mb-16 sm:mb-20 md:mb-24 lg:mb-32">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
              {/* Left Column - Content */}
              <div className="text-center lg:text-left">
                {/* Hero Badge */}
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-50 border border-pink-200 mb-8 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-2 animate-pulse"></span>
                  <span className="text-sm font-medium text-pink-700">Available for new opportunities</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 mb-4 sm:mb-6 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
                  Crafting
                  <span className="block bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 bg-clip-text text-transparent">
                    Digital Experiences
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg sm:text-xl md:text-2xl text-zinc-600 leading-relaxed mb-6 sm:mb-8 max-w-2xl animate-fadeInUp" style={{animationDelay: '0.6s'}}>
                  I design user-centered solutions that bridge the gap between business goals and human needs, 
                  creating products that people love to use.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center mb-8 sm:mb-12 animate-fadeInUp" style={{animationDelay: '0.8s'}}>
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-xl sm:rounded-2xl hover:from-pink-600 hover:to-rose-600 transform hover:-translate-y-1 transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base hover:scale-105"
                  >
                    <span className="text-white">View My Work</span>
                    <svg className="ml-2 w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-zinc-200 text-zinc-900 font-semibold rounded-xl sm:rounded-2xl hover:bg-zinc-50 transition-all duration-200 text-sm sm:text-base hover:scale-105"
                  >
                    Get In Touch
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl animate-fadeInUp" style={{animationDelay: '1s'}}>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 mb-1 sm:mb-2">5+</div>
                    <div className="text-xs sm:text-sm text-zinc-600 font-medium">Years Experience</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 mb-1 sm:mb-2">2M+</div>
                    <div className="text-xs sm:text-sm text-zinc-600 font-medium">Users Impacted</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 mb-1 sm:mb-2">15+</div>
                    <div className="text-xs sm:text-sm text-zinc-600 font-medium">Happy Clients</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 mb-1 sm:mb-2">100%</div>
                    <div className="text-xs sm:text-sm text-zinc-600 font-medium">User-Focused</div>
                  </div>
                </div>
              </div>

              {/* Right Column - Profile Image */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  {/* Profile Image Container */}
                  <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl">
                    {/* Profile Image */}
                    <img 
                      src="/src/assets/profile-photo.png" 
                      alt="Ebe Akinfisoye - UX Designer" 
                      className="w-full h-full object-cover object-center"
                    />
                    
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
                  
                  {/* Additional floating elements */}
                  <div className="absolute top-1/2 -left-8 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <span className="text-lg">✨</span>
                  </div>
                  <div className="absolute top-1/4 -right-8 w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                    <span className="text-xl">💻</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-24 md:mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-zinc-900">Featured Projects</h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
              A collection of my recent work showcasing user-centered design solutions and measurable business impact.
            </p>
          </div>
          
          <div className="space-y-6">
            {cases.map((c, index) => (
              <Link
                key={c.slug}
                to={`/case/${c.slug}`}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="group block rounded-3xl border border-zinc-200 bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Project Image */}
                  <div className="relative h-48 lg:h-64 lg:w-80 overflow-hidden flex-shrink-0">
                    <img 
                      src={`/src/assets/project-${index + 1}.jpg`}
                      alt={c.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to gradient if image not found
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fallback) {
                          fallback.style.display = 'flex';
                        }
                      }}
                    />
                    {/* Fallback gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 hidden flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/80 rounded-2xl flex items-center justify-center shadow-lg">
                          <span className="text-2xl">🎨</span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-4 h-4 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6 lg:p-8 flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold tracking-tight text-zinc-900 group-hover:text-pink-600 transition-colors">
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
                    
                    <p className="text-base text-zinc-600 leading-relaxed mb-6">
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
                </div>
            </Link>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl border border-zinc-100 overflow-hidden">
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 px-8 py-6">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Let's Work Together</h2>
                  <p className="text-pink-100 text-lg">Ready to create something amazing? I'd love to hear about your project.</p>
                </div>
              </div>
              
              <div className="p-8 md:p-12">
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Email */}
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-pink-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-pink-100 transition-colors duration-300">
                      <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-zinc-900 mb-3">Email</h3>
                    <p className="text-zinc-600 mb-6 leading-relaxed">Direct communication for project inquiries and collaboration opportunities.</p>
                    <a 
                      href="mailto:madebyebe@gmail.com"
                      className="inline-flex items-center justify-center w-full px-6 py-3 bg-pink-600 text-white rounded-xl font-semibold hover:bg-pink-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                      style={{ color: 'white' }}
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span style={{ color: 'white' }}>Send Email</span>
                    </a>
                  </div>

                  {/* LinkedIn */}
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                      <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-zinc-900 mb-3">LinkedIn</h3>
                    <p className="text-zinc-600 mb-6 leading-relaxed">Connect with me on LinkedIn for professional networking and career opportunities.</p>
                    <a 
                      href="https://linkedin.com/in/ebe-a-280803177/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full px-6 py-3 bg-white text-blue-600 border-2 border-blue-200 rounded-xl font-medium hover:bg-blue-50 hover:border-blue-300 transition-colors duration-200 shadow-lg hover:shadow-xl"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      Connect on LinkedIn
                    </a>
                  </div>

                  {/* GitHub */}
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-zinc-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-zinc-100 transition-colors duration-300">
                      <svg className="w-8 h-8 text-zinc-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-zinc-900 mb-3">GitHub</h3>
                    <p className="text-zinc-600 mb-6 leading-relaxed">Explore my code repositories and development projects on GitHub.</p>
                    <a 
                      href="https://github.com/dreampink"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl font-semibold hover:from-pink-600 hover:to-rose-600 transition-all duration-200 shadow-lg hover:shadow-xl"
                      style={{ color: 'white' }}
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span style={{ color: 'white' }}>View GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </div>
  )
}
