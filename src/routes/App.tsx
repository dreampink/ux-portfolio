import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import ProcessDiagram from '../components/ProcessDiagram'
import recommeHeader from '../assets/recomme/recomme.png'
import mortgageHubHeader from '../assets/mortgage-hub/mortgage-hub.png'

export default function App() {
  const [activeStage, setActiveStage] = useState<'problem' | 'research' | 'tension' | 'approach' | 'design' | 'outcome' | 'learning'>('problem')
  const [showScrollUpIndicator, setShowScrollUpIndicator] = useState(false)
  
  const cases = [
    { slug: 'sport-direct', title: 'Sports Direct', image: '/project-1.jpg' },
    { slug: 'cancer-research-uk', title: 'Cancer Research UK', image: '/project-2.jpg' },
    { slug: 'tesco', title: 'Tesco', image: '/project-3.jpg' },
    { slug: 'recomme', title: 'Re–up', image: recommeHeader },
    { slug: 'mortgage-hub', title: 'Mortgage Hub', image: mortgageHubHeader },
    // { slug: 'marchcroft', title: 'Marchcroft', image: '/project-4.jpg' },
    { slug: 'polishpad', title: 'Polish Pad', image: '/project-5.jpg' },
  ]


  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Scroll detection for showing scroll-up indicator
  useEffect(() => {
    const handleScroll = () => {
      const processSection = document.getElementById('process')
      const contactSection = document.getElementById('contact')
      
      if (processSection && contactSection) {
        const processRect = processSection.getBoundingClientRect()
        const contactRect = contactSection.getBoundingClientRect()
        
        // Show indicator only when user has scrolled past the projects section
        // and is actually in the process or contact sections
        const isInProcess = processRect.top <= 100 && processRect.bottom >= 100
        const isInContact = contactRect.top <= 100 && contactRect.bottom >= 100
        
        setShowScrollUpIndicator(isInProcess || isInContact)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-transparent text-zinc-900">
      <Navigation />
      
      {/* Scroll Up Indicator */}
      {showScrollUpIndicator && (
        <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
          <button
            onClick={() => scrollToSection('projects')}
            className="group flex flex-col items-center space-y-3 bg-white/90 backdrop-blur-sm border border-pink-200 rounded-2xl px-4 py-6 shadow-lg hover:shadow-xl hover:bg-pink-50 hover:border-pink-300 transition-all duration-300 hover:scale-105 relative overflow-hidden"
          >
            {/* Animated arrow pointing up */}
            <div className="relative">
              <svg 
                className="w-6 h-6 text-pink-500 group-hover:text-pink-600 animate-bounce transition-colors duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              {/* Pulsing ring */}
              <div className="absolute inset-0 rounded-full border-2 border-pink-300 animate-ping opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
            
            {/* Text */}
            <div className="text-center">
              <div className="text-xs font-semibold text-pink-600 group-hover:text-pink-700 mb-1 transition-colors duration-300">Click here</div>
              <div className="text-xs text-zinc-600 group-hover:text-zinc-700 transition-colors duration-300">to see my work</div>
            </div>
          </button>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        {/* Hero Section */}
        <section id="home" className="mb-16 sm:mb-20 md:mb-24 lg:mb-32 relative overflow-hidden">
          {/* Floating particles background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="particle" style={{left: '10%', top: '20%', animationDelay: '0s'}}></div>
            <div className="particle" style={{left: '80%', top: '30%', animationDelay: '1s'}}></div>
            <div className="particle" style={{left: '20%', top: '70%', animationDelay: '2s'}}></div>
            <div className="particle" style={{left: '70%', top: '80%', animationDelay: '3s'}}></div>
            <div className="particle" style={{left: '50%', top: '10%', animationDelay: '4s'}}></div>
            <div className="particle" style={{left: '90%', top: '60%', animationDelay: '5s'}}></div>
          </div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
              {/* Left Column - Content */}
              <div className="text-center lg:text-left">
                {/* Hero Badge */}
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-50 border border-pink-200 mb-8 animate-fadeInUp hover-lift animate-bounce-gentle mt-4" style={{animationDelay: '0.2s'}}>
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-2 animate-pulse"></span>
                  <span className="text-sm font-medium text-pink-700">Available for full-time opportunities</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 mb-4 sm:mb-6 animate-fadeInUp text-glow" style={{animationDelay: '0.4s'}}>
                  Crafting
                  <span className="block bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
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
                    className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-xl sm:rounded-2xl hover:from-pink-600 hover:to-rose-600 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base hover:scale-105 animate-pulse-glow hover-lift magnetic shimmer cursor-glow"
                  >
                    <span className="text-white">View My Work</span>
                    <svg className="ml-2 w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-zinc-200 text-zinc-900 font-semibold rounded-xl sm:rounded-2xl hover:bg-zinc-50 transition-all duration-300 text-sm sm:text-base hover:scale-105 hover-lift hover-glow magnetic cursor-glow"
                  >
                    Get In Touch
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl animate-fadeInUp" style={{animationDelay: '1s'}}>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 mb-1 sm:mb-2">2M+</div>
                    <div className="text-xs sm:text-sm text-zinc-600 font-medium">Users Impacted</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 mb-1 sm:mb-2">15+</div>
                    <div className="text-xs sm:text-sm text-zinc-600 font-medium">Clients Served</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 mb-1 sm:mb-2">5+</div>
                    <div className="text-xs sm:text-sm text-zinc-600 font-medium">Years Experience</div>
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
                      src="/profile-photo.png" 
                      alt="Ebe Akinfisoye - UX Designer" 
                      className="w-full h-full object-cover object-center"
                    />
                    
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-pink-300 to-rose-400 rounded-full opacity-20 blur-xl"></div>
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-rose-300 to-pink-400 rounded-full opacity-20 blur-xl"></div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute -top-6 -left-6 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                    <span className="text-2xl animate-paint-brush">🎨</span>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                    <span className="text-2xl animate-lightbulb-flicker">💡</span>
                  </div>
                  
                  {/* Additional floating elements */}
                  <div className="absolute top-1/2 -left-8 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <span className="text-lg animate-star-shine">✨</span>
                  </div>
                  <div className="absolute top-1/4 -right-8 w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                    <span className="text-xl animate-laptop-glow">💻</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Marquee */}
        <section className="mb-16 md:mb-20">
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap py-6">
              <div className="flex items-center space-x-12 text-sm font-medium text-zinc-500 tracking-wide">
                <span>E-commerce</span>
                <span>Beauty Tech</span>
                <span>Healthcare</span>
                <span>Retail</span>
                <span>Fintech</span>
                <span>Mobile App Design</span>
                <span>Web Design</span>
                <span>•</span>
                <span>Accessibility</span>
                <span>Design Systems</span>
                <span>Service Design</span>
                <span>Behavioural Design</span>
                <span>User Research</span>
                <span>Data Visualisation</span>
                <span>•</span>
                <span>E-commerce</span>
                <span>Beauty Tech</span>
                <span>Healthcare</span>
                <span>Retail</span>
                <span>Fintech</span>
                <span>Mobile App Design</span>
                <span>Web Design</span>
                <span>•</span>
                <span>Accessibility</span>
                <span>Design Systems</span>
                <span>Service Design</span>
                <span>Behavioural Design</span>
                <span>User Research</span>
                <span>Data Visualisation</span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-24 md:mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-zinc-900">Featured Projects</h2>
            <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
              A collection of my recent work showcasing user-centered design solutions and measurable business impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {cases.map((c, index) => {
              const isPolishPad = c.slug === 'polishpad';
              
              if (isPolishPad) {
                return (
                  <div key={c.slug} className="block bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm opacity-75 cursor-not-allowed">
                <div className="flex flex-col h-full">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={c.image}
                      alt={c.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
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
                        <div className="w-16 h-16 bg-white/90 rounded-2xl flex items-center justify-center shadow-lg">
                          <span className="text-2xl">🎨</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover overlay - only for clickable projects */}
                    {!isPolishPad && (
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex items-center space-x-2 text-white">
                          <span className="font-medium">View Case Study</span>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    )}
                    
                    {/* Privacy overlay for Polish Pad */}
                    {isPolishPad && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="flex items-center space-x-2 text-white">
                          <span className="font-medium">Private Project</span>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-pink-600">Case Study</span>
                        {!isPolishPad && (
                          <div className="flex items-center text-zinc-400 transition-colors">
                            <span className="text-sm mr-1">View</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </div>
                        )}
                        {isPolishPad && (
                          <div className="flex items-center text-zinc-400">
                            <span className="text-sm mr-1">Private</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-zinc-900 transition-colors mb-3">
                        {c.title}
                      </h3>
                      <p className="text-sm text-zinc-600 leading-relaxed">
                        {index === 0 && "Streamlined payment flows resulting in 35% reduction in drop-off rates and 28% increase in conversion, impacting 2M+ users."}
                        {index === 1 && "Completely revamped onboarding experience with 42% increase in activation rates and 60% reduction in time-to-value."}
                        {index === 2 && "Redesigned mobile information architecture improving task completion rates by 48% and reducing bounce rate by 32%."}
                        {index === 3 && "Proof of concept for sustainable fashion recycling, validating platform engagement and attracting multiple brands for pilot integration."}
                        {index === 4 && "Connected brokers and underwriters on a unified platform, reducing mortgage processing time from over a month to under seven days."}
                        {index === 5 && "Confidential Startup Project - methodology and results shared in interview"}
                      </p>
                    </div>
                    
                    {/* Tools/Tags */}
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2">
                        {index === 0 && ['Personalisation', 'Mobile App', 'UI Design'].map((tag, tagIndex) => {
                          const tagColors = [
                            'bg-blue-100 text-blue-700',
                            'bg-purple-100 text-purple-700',
                            'bg-indigo-100 text-indigo-700'
                          ];
                          return (
                            <span key={tag} className={`px-2 py-1 ${tagColors[tagIndex]} text-xs font-medium rounded-full`}>
                              {tag}
                            </span>
                          );
                        })}
                        {index === 1 && ['Design Systems', 'Accessibility', 'UX Design'].map((tag, tagIndex) => {
                          const tagColors = [
                            'bg-cyan-100 text-cyan-700',
                            'bg-teal-100 text-teal-700',
                            'bg-emerald-100 text-emerald-700'
                          ];
                          return (
                            <span key={tag} className={`px-2 py-1 ${tagColors[tagIndex]} text-xs font-medium rounded-full`}>
                              {tag}
                            </span>
                          );
                        })}
                        {index === 2 && ['UX Research', 'Service Design', 'Facilitation'].map((tag, tagIndex) => {
                          const tagColors = [
                            'bg-amber-100 text-amber-700',
                            'bg-pink-100 text-pink-700',
                            'bg-rose-100 text-rose-700'
                          ];
                          return (
                            <span key={tag} className={`px-2 py-1 ${tagColors[tagIndex]} text-xs font-medium rounded-full`}>
                              {tag}
                            </span>
                          );
                        })}
                        {index === 3 && ['Sustainability', 'UX Research', 'Prototyping'].map((tag, tagIndex) => {
                          const tagColors = [
                            'bg-green-100 text-green-700',
                            'bg-emerald-100 text-emerald-700',
                            'bg-teal-100 text-teal-700'
                          ];
                          return (
                            <span key={tag} className={`px-2 py-1 ${tagColors[tagIndex]} text-xs font-medium rounded-full`}>
                              {tag}
                            </span>
                          );
                        })}
                        {index === 4 && ['FinTech', 'Workflow Design', 'Collaborative UX'].map((tag, tagIndex) => {
                          const tagColors = [
                            'bg-indigo-100 text-indigo-700',
                            'bg-purple-100 text-purple-700',
                            'bg-blue-100 text-blue-700'
                          ];
                          return (
                            <span key={tag} className={`px-2 py-1 ${tagColors[tagIndex]} text-xs font-medium rounded-full`}>
                              {tag}
                            </span>
                          );
                        })}
                        {index === 5 && ['Confidential', 'Private', 'Interview Only'].map((tag, tagIndex) => {
                          const tagColors = [
                            'bg-gray-100 text-gray-700',
                            'bg-slate-100 text-slate-700',
                            'bg-zinc-100 text-zinc-700'
                          ];
                          return (
                            <span key={tag} className={`px-2 py-1 ${tagColors[tagIndex]} text-xs font-medium rounded-full`}>
                              {tag}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                  </div>
                );
              }
              
              return (
              <Link
                key={c.slug}
                to={`/case/${c.slug}`}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="group block bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex flex-col h-full">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={c.image}
                      alt={c.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
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
                        <div className="w-16 h-16 bg-white/90 rounded-2xl flex items-center justify-center shadow-lg">
                          <span className="text-2xl">🎨</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex items-center space-x-2 text-white">
                        <span className="font-medium">View Case Study</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-pink-600">Case Study</span>
                        <div className="flex items-center text-zinc-400 transition-colors">
                          <span className="text-sm mr-1">View</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-zinc-900 transition-colors mb-3">
                        {c.title}
                      </h3>
                      <p className="text-sm text-zinc-600 leading-relaxed">
                        {index === 0 && "Built a personalised app experience to drive greater customer engagement, delivering +18.86% daily average conversion rate and doubling app revenue share."}
                        {index === 1 && "A multi-slice redesign of CRUK's website and the creation of Helix, a scalable digital design system that improved engagement and donation outcomes."}
                        {index === 2 && "Led three workstreams to unblock Tesco's supplier onboarding product: design file refactor, usability discovery, and measurement workshops that aligned teams around shared OKRs."}
                        {index === 3 && "Designing a scalable recycling experience for a more sustainable fashion industry."}
                        {index === 4 && "Designed and implemented the underwriter experience, connecting brokers and underwriters on a unified platform that transformed the mortgage origination process."}
                      </p>
                    </div>
                    
                    {/* Tools/Tags */}
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2">
                        {index === 0 && ['App Design', 'Personalisation', 'UI Design'].map((tag, tagIndex) => {
                          const tagColors = [
                            'bg-blue-100 text-blue-700',
                            'bg-purple-100 text-purple-700',
                            'bg-indigo-100 text-indigo-700'
                          ];
                          return (
                            <span key={tag} className={`px-2 py-1 ${tagColors[tagIndex]} text-xs font-medium rounded-full`}>
                              {tag}
                            </span>
                          );
                        })}
                        {index === 1 && ['UX Design', 'Design Systems', 'Accessibility'].map((tag, tagIndex) => {
                          const tagColors = [
                            'bg-cyan-100 text-cyan-700',
                            'bg-teal-100 text-teal-700',
                            'bg-emerald-100 text-emerald-700'
                          ];
                          return (
                            <span key={tag} className={`px-2 py-1 ${tagColors[tagIndex]} text-xs font-medium rounded-full`}>
                              {tag}
                            </span>
                          );
                        })}
                        {index === 2 && ['UX Research', 'Service Design', 'Facilitation'].map((tag, tagIndex) => {
                          const tagColors = [
                            'bg-amber-100 text-amber-700',
                            'bg-pink-100 text-pink-700',
                            'bg-rose-100 text-rose-700'
                          ];
                          return (
                            <span key={tag} className={`px-2 py-1 ${tagColors[tagIndex]} text-xs font-medium rounded-full`}>
                              {tag}
                            </span>
                          );
                        })}
                        {index === 3 && ['Sustainability', 'UX Research', 'Prototyping'].map((tag, tagIndex) => {
                          const tagColors = [
                            'bg-green-100 text-green-700',
                            'bg-emerald-100 text-emerald-700',
                            'bg-teal-100 text-teal-700'
                          ];
                          return (
                            <span key={tag} className={`px-2 py-1 ${tagColors[tagIndex]} text-xs font-medium rounded-full`}>
                              {tag}
                            </span>
                          );
                        })}
                        {index === 4 && ['FinTech', 'Workflow Design', 'Collaborative UX'].map((tag, tagIndex) => {
                          const tagColors = [
                            'bg-indigo-100 text-indigo-700',
                            'bg-purple-100 text-purple-700',
                            'bg-blue-100 text-blue-700'
                          ];
                          return (
                            <span key={tag} className={`px-2 py-1 ${tagColors[tagIndex]} text-xs font-medium rounded-full`}>
                              {tag}
                            </span>
                          );
                        })}
                        {index === 5 && ['Confidential', 'Private', 'Interview Only'].map((tag, tagIndex) => {
                          const tagColors = [
                            'bg-gray-100 text-gray-700',
                            'bg-slate-100 text-slate-700',
                            'bg-zinc-100 text-zinc-700'
                          ];
                          return (
                            <span key={tag} className={`px-2 py-1 ${tagColors[tagIndex]} text-xs font-medium rounded-full`}>
                              {tag}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
            </Link>
              );
            })}
          </div>
        </section>

        {/* Process Flow Section - Hidden on mobile */}
        <section id="process" className="mb-16 md:mb-20 hidden lg:block">
          <div className="max-w-7xl mx-auto">
            {/* Section Title */}
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-zinc-900">Design Process</h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                Explore my systematic approach to solving complex design challenges through research, iteration, and user-centered solutions.
              </p>
            </div>
            
            {/* Interactive Process Diagram */}
            <ProcessDiagram 
              active={activeStage} 
              onStageChange={setActiveStage}
              verticalLayout={true}
            />
          </div>
        </section>

        {/* Contact Section - Chrome Interface with Figma */}
        <section id="contact" className="mb-16">
          <div className="max-w-6xl mx-auto">
            {/* Chrome Browser Window */}
            <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
              {/* Chrome Header */}
              <div className="bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200">
                <div className="px-6 py-4">
                  <div className="flex items-center justify-between">
                    {/* Left side - macOS Controls and Figma Tab */}
                    <div className="flex items-center space-x-4">
                      {/* macOS Controls */}
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                      
                      {/* Figma Tab */}
                      <div className="bg-white rounded-t-lg px-4 py-2 border border-slate-200 border-b-0 flex items-center space-x-2 mt-4">
                        <div className="w-4 h-4 bg-white rounded flex items-center justify-center">
                          <img 
                            src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/figma.svg" 
                            alt="Figma" 
                            className="w-3 h-3"
                          />
                        </div>
                        <span className="text-slate-600 font-medium text-sm">Figma</span>
                      </div>
                    </div>
                    
                    {/* Right side - Chrome-style menu */}
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">E</span>
                      </div>
                      <span className="text-slate-600 text-sm">Ebe Etiobhio</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Figma Canvas - Connected to tab */}
              <div className="bg-slate-50 p-8 -mt-px">
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Let's Work Together</h2>
                  <p className="text-slate-600 text-lg">Ready to create something amazing? I'd love to hear about your project.</p>
                </div>
                
                {/* Contact Cards - Figma Style */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Email Card */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col h-full">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="text-xs text-slate-400 bg-slate-100 px-2 py-1 rounded">Primary</div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Email Me</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">Direct communication for project inquiries and collaboration opportunities.</p>
                    
                    <div className="space-y-4 flex-1 flex flex-col">
                      <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                        <div className="text-sm text-slate-500 mb-1">Email Address</div>
                        <div className="font-mono text-slate-900">madebyebe@gmail.com</div>
                      </div>
                      
                      <div className="mt-auto">
                        <a 
                          href="mailto:madebyebe@gmail.com"
                          className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl py-4 px-6 font-semibold flex items-center justify-center hover:from-pink-600 hover:to-rose-600 transition-all duration-200 shadow-lg hover:shadow-xl group-hover:scale-105"
                        >
                          <svg className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <span className="text-white">Send Message</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* LinkedIn Card */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col h-full">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </div>
                      <div className="text-xs text-slate-400 bg-blue-100 text-blue-600 px-2 py-1 rounded">Professional</div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Connect on LinkedIn</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">Professional networking and career opportunities. Connect with me there</p>
                    
                    <div className="space-y-4 flex-1 flex flex-col">
                      <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                        <div className="text-sm text-slate-500 mb-1">LinkedIn Profile</div>
                        <div className="font-mono text-slate-900">linkedin.com/in/ebe-a-280803177/</div>
                      </div>
                      
                      <div className="mt-auto">
                        <a 
                          href="https://linkedin.com/in/ebe-a-280803177/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-white text-blue-600 border-2 border-blue-200 rounded-xl py-4 px-6 font-semibold flex items-center justify-center hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 shadow-lg hover:shadow-xl group-hover:scale-105"
                        >
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                          Connect Now
                        </a>
                      </div>
                    </div>
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

