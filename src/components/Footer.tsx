import { Link } from 'react-router-dom'

const Footer = () => {
  const cases = [
    { slug: 'sport-direct', title: 'Sports Direct' },
    { slug: 'cancer-research-uk', title: 'Cancer Research UK' },
    { slug: 'tesco', title: 'Tesco' },
    { slug: 'recomme', title: 'Re–up' },
    // { slug: 'marchcroft', title: 'Marchcroft' },
    { slug: 'polishpad', title: 'Polish Pad' },
  ]

  const navItems = [
    { name: 'Home', href: '/home' },
    { name: 'Work', href: '/work' },
    { name: 'About', href: '/about' },
  ]

  return (
    <footer className="bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
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
            <h4 className="text-sm font-semibold text-zinc-900 mb-4">Navigation</h4>
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-sm text-zinc-600 hover:text-pink-600 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-zinc-900 mb-4">Work</h4>
            <div className="space-y-2">
              {cases.map((project) => {
                const isPolishPad = project.slug === 'polishpad';
                
                if (isPolishPad) {
                  return (
                    <div
                      key={project.slug}
                      className="block text-sm text-zinc-400 cursor-not-allowed flex items-center"
                    >
                      {project.title}
                      <span className="ml-2 text-xs text-zinc-400">(Private)</span>
                    </div>
                  );
                }
                
                return (
                  <Link
                    key={project.slug}
                    to={`/case/${project.slug}`}
                    onClick={() => {
                      // Scroll to top after navigation
                      setTimeout(() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                      }, 100)
                    }}
                    className="block text-sm text-zinc-600 hover:text-pink-600 transition-colors"
                  >
                    {project.title}
                  </Link>
                );
              })}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-zinc-900 mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="mailto:madebyebe@gmail.com" className="text-zinc-400 hover:text-zinc-600 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a href="https://linkedin.com/in/ebe-a-280803177/" className="text-zinc-400 hover:text-zinc-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-zinc-200 mt-8 pt-8 text-center">
          <p className="text-sm text-zinc-500">
            © 2025 Ebe Etiobhio. All rights reserved. Built by Ebe with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
