import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import DesignThinkingDiagram from '../components/DesignThinkingDiagram';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  return (
    <div className="min-h-screen bg-transparent text-zinc-900">
      <Navigation />

      {/* Main Content */}
      <main>
        {/* About Section */}
        <section id="about" className="pt-16 mb-24 md:mb-32">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-zinc-900">About Me</h2>
              
              {/* Profile Image - Right under About Me */}
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-pink-200 shadow-lg mx-auto mb-8">
                <img
                  src="/src/assets/young-me.JPG"
                  alt="Ebe Etiobhio"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to gradient if image not found
                    e.currentTarget.style.display = 'none';
                    const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                    if (nextElement) {
                      nextElement.style.display = 'block';
                    }
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-pink-400 to-rose-500 hidden flex items-center justify-center">
                  <span className="text-white font-bold text-3xl">E</span>
                </div>
              </div>
              
              <p className="text-xl text-zinc-600 leading-relaxed max-w-2xl mx-auto">
                I'm a UX/UI designer passionate about creating meaningful digital experiences. 
                I specialise in user research, interface design, and design systems that drive business results.
              </p>
            </div>

            {/* Top Section - What I Bring to Your Team & Experience */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Left Column - What I Bring to Your Team */}
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
                          {item.tools.split(', ').map((tool, toolIndex) => (
                            <span key={toolIndex} className="px-2 py-1 bg-white/60 text-xs font-medium text-zinc-700 rounded-full">
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
                      // Expert Level
                      { name: "Figma", level: "Expert" },
                      { name: "Sketch", level: "Expert" },
                      { name: "Adobe XD", level: "Expert" },
                      { name: "Principle", level: "Expert" },
                      // Advanced Level
                      { name: "Framer", level: "Advanced" },
                      { name: "InVision", level: "Advanced" },
                      { name: "Zeplin", level: "Advanced" },
                      { name: "Optimizely", level: "Advanced" },
                      // Intermediate Level
                      { name: "After Effects", level: "Intermediate" },
                      { name: "Photoshop", level: "Intermediate" },
                      { name: "Illustrator", level: "Intermediate" },
                      { name: "Maze", level: "Intermediate" }
                    ].map((skill, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-white rounded-lg border border-zinc-200">
                        <span className="text-xs font-medium text-zinc-900">
                          {skill.name}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          skill.level === 'Expert' ? 'bg-pink-100 text-pink-700' : 
                          skill.level === 'Advanced' ? 'bg-green-100 text-green-700' : 
                          'bg-zinc-100 text-zinc-600'
                        }`}>
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Experience & Achievements */}
              <div>
                <h3 className="text-2xl font-bold tracking-tight mb-6 text-zinc-900">Experience & Achievements</h3>
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-200 via-pink-300 to-pink-200"></div>
                  
                  {[
                    {
                      title: 'Senior UX Designer',
                      company: 'TechCorp',
                      period: '2022 - Present',
                      description: 'Leading design initiatives for enterprise products, managing a team of 3 designers, and establishing design processes that improved team efficiency by 45%.',
                      achievements: ['Led redesign of core product increasing user engagement by 85%', 'Established design system used by 50+ developers', 'Mentored 5 junior designers']
                    },
                    {
                      title: 'UX Designer',
                      company: 'StartupXYZ',
                      period: '2020 - 2022',
                      description: 'Designed user experiences for mobile and web applications, conducted user research, and collaborated with cross-functional teams.',
                      achievements: ['Designed mobile app with 4.8/5 App Store rating', 'Conducted 50+ user interviews', 'Improved conversion rates by 60%']
                    },
                    {
                      title: 'Computer Science Graduate',
                      company: 'University',
                      period: '2015 - 2019',
                      description: 'Graduated with First Class Honours in Computer Science, with a focus on Human Computer Interaction (HCI). This technical foundation allows me to bridge the gap between design and development.',
                      achievements: ['First Class Honours', 'Specialized in Human Computer Interaction', 'Strong foundation in both design and development']
                    }
                  ].map((exp, index) => (
                    <div key={index} className="relative flex items-start space-x-6 pb-8 last:pb-0">
                      {/* Timeline dot */}
                      <div className="relative z-10 flex-shrink-0 w-8 h-8 bg-pink-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 bg-white rounded-2xl p-6 border border-zinc-200 shadow-sm">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h5 className="font-semibold text-zinc-900 text-lg">{exp.title}</h5>
                            <p className="text-sm text-zinc-600 font-medium">{exp.company}</p>
                            <p className="text-sm text-pink-600 font-medium">{exp.period}</p>
                          </div>
                        </div>
                        <p className="text-sm text-zinc-600 mb-4 leading-relaxed">{exp.description}</p>
                        <div className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-start space-x-3">
                              <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-zinc-600">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Design Thinking Process - Full Width */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold tracking-tight mb-6 text-zinc-900">How I Think as a Designer</h3>
              <div className="bg-white rounded-2xl border border-zinc-200 p-8 shadow-sm">
                <DesignThinkingDiagram />
              </div>
            </div>

            {/* Understanding Human Behavior - Full Width */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold tracking-tight mb-6 text-zinc-900">Understanding Human Behavior</h3>
              <div className="p-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-6">
                      🧠 Psychology-Driven Design
                    </div>
                    <p className="text-zinc-600 max-w-3xl mx-auto">
                      My passion for psychology drives every design decision. I study cognitive science, behavioral economics,
                      and human-computer interaction to create interfaces that work with human psychology, not against it.
                    </p>
                  </div>

                  {/* Psychology Concepts Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {[
                      { concept: "Cognitive Load Theory", description: "Reducing mental effort in interfaces", icon: "🧠", color: "from-blue-400 to-blue-600" },
                      { concept: "Gestalt Principles", description: "Visual perception and grouping", icon: "👁️", color: "from-purple-400 to-purple-600" },
                      { concept: "Behavioral Economics", description: "Decision-making patterns", icon: "💰", color: "from-green-400 to-green-600" },
                      { concept: "Emotional Design", description: "Creating meaningful connections", icon: "❤️", color: "from-pink-400 to-pink-600" },
                      { concept: "Social Psychology", description: "Group behavior and influence", icon: "👥", color: "from-orange-400 to-orange-600" },
                      { concept: "Information Architecture", description: "Organizing content for clarity", icon: "🗂️", color: "from-teal-400 to-teal-600" }
                    ].map((concept, index) => (
                      <div key={index} className="group p-4 border border-purple-200 rounded-xl bg-white">
                        <div className="flex items-start space-x-3">
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${concept.color} flex items-center justify-center text-white text-lg`}>
                            {concept.icon}
                          </div>
                          <div className="flex-1">
                            <h5 className="font-semibold text-zinc-900 text-sm mb-1">{concept.concept}</h5>
                            <p className="text-xs text-zinc-600 leading-relaxed">{concept.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Animated Books */}
                  <div className="mb-6">
                    <h5 className="text-center text-lg font-semibold text-zinc-900 mb-4">Essential Reading</h5>
                    <div className="flex justify-center items-center space-x-2 sm:space-x-4 overflow-hidden px-4">
                      {[
                        { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", color: "from-blue-400 to-blue-600" },
                        { title: "Don't Make Me Think", author: "Steve Krug", color: "from-green-400 to-green-600" },
                        { title: "The Design of Everyday Things", author: "Don Norman", color: "from-purple-400 to-purple-600" },
                        { title: "Hooked", author: "Nir Eyal", color: "from-orange-400 to-orange-600" }
                      ].map((book, index) => (
                        <div
                          key={index}
                          className="relative group"
                          style={{
                            animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
                            animationDelay: `${index * 0.2}s`
                          }}
                        >
                          <div className={`w-12 h-16 sm:w-16 sm:h-20 rounded-lg shadow-lg transform group-hover:scale-110 transition-transform duration-300 overflow-hidden`}>
                            <img
                              src={`/src/assets/book-covers/${book.title.toLowerCase().replace(/[,\s]+/g, '-').replace(/[^\w'-]/g, '')}.jpg`}
                              alt={`${book.title} by ${book.author}`}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                // Fallback to gradient if image not found
                                e.currentTarget.style.display = 'none';
                                const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                                if (nextElement) {
                                  nextElement.style.display = 'block';
                                }
                              }}
                            />
                            <div className={`w-full h-full bg-gradient-to-br ${book.color} hidden`}>
                              <div className="p-1 sm:p-2 h-full flex flex-col justify-between">
                                <div className="w-full h-0.5 sm:h-1 bg-white/30 rounded"></div>
                                <div className="w-full h-0.5 sm:h-1 bg-white/30 rounded"></div>
                                <div className="w-full h-0.5 sm:h-1 bg-white/30 rounded"></div>
                              </div>
                            </div>
                          </div>
                          <div className="absolute -bottom-8 sm:-bottom-12 left-1/2 transform -translate-x-1/2 text-xs text-zinc-600 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center hidden sm:block">
                            <div className="font-semibold text-xs sm:text-sm">{book.title}</div>
                            <div className="text-xs text-zinc-500">{book.author}</div>
                          </div>
                          {/* Mobile tooltip */}
                          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-zinc-600 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center block sm:hidden">
                            <div className="font-semibold text-xs">{book.title}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Psychology Impact */}
                  <div className="bg-white/60 rounded-xl p-6 border border-indigo-200">
                    <div className="flex items-start space-x-4">
                      <div className="text-2xl">🎨</div>
                      <div>
                        <h5 className="font-semibold text-zinc-900 mb-2">How Psychology Shapes My Design Process</h5>
                        <p className="text-sm text-zinc-600 mb-4">
                          Every design decision is informed by psychological principles. From reducing cognitive load
                          through clear information hierarchy to leveraging behavioral economics for better user flows,
                          I create interfaces that feel intuitive because they align with how humans naturally think and behave.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                            <span className="text-xs text-zinc-600">Cognitive psychology for information architecture</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                            <span className="text-xs text-zinc-600">Behavioral economics for conversion optimization</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                            <span className="text-xs text-zinc-600">Social psychology for collaborative features</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                            <span className="text-xs text-zinc-600">Emotional design for user engagement</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>

            {/* Coding Skills Section */}
            <section className="mb-24 md:mb-32">
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
                  💻 Full-Stack Developer
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-zinc-900">Design + Code = Powerful Solutions</h2>
                <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
                  I don't just design beautiful interfaces - I build them too. My technical skills allow me to
                  create pixel-perfect implementations and understand the full development lifecycle.
                </p>
              </div>

              {/* Coding Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  // Expert Level
                  { name: "HTML5", level: "Expert", icon: "🌐" },
                  { name: "CSS3", level: "Expert", icon: "🎨" },
                  // Advanced Level
                  { name: "JavaScript", level: "Advanced", icon: "⚡" },
                  { name: "React", level: "Advanced", icon: "⚛️" },
                  { name: "Python", level: "Advanced", icon: "🐍" },
                  { name: "GSAP", level: "Advanced", icon: "✨" },
                  { name: "WCAG 2.2", level: "Advanced", icon: "♿" },
                  // Intermediate Level
                  { name: "WebGL", level: "Intermediate", icon: "🎮" },
                  { name: "Three.js", level: "Intermediate", icon: "🔺" },
                  { name: "Node.js", level: "Intermediate", icon: "🟢" }
                ].map((skill, index) => (
                  <div key={index} className="flex items-center justify-between p-3 sm:p-4 bg-white rounded-xl border border-zinc-200">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <span className="text-base sm:text-lg">{skill.icon}</span>
                      <span className="text-sm sm:text-base font-medium text-zinc-900">
                        {skill.name}
                      </span>
                    </div>
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
                ))}
              </div>

              {/* Team Benefits */}
              <div className="max-w-4xl mx-auto p-4 sm:p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200">
                <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                  <div className="text-2xl sm:text-3xl">🚀</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-zinc-900 mb-4 text-base sm:text-lg">How This Benefits Your Team</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-zinc-900 mb-2 text-sm sm:text-base">🎯 Better Communication</h4>
                        <p className="text-xs sm:text-sm text-zinc-600 mb-3">
                          I speak both design and development languages, reducing miscommunication
                          and ensuring designs are technically feasible from day one.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-zinc-900 mb-2 text-sm sm:text-base">⚡ Faster Prototyping</h4>
                        <p className="text-xs sm:text-sm text-zinc-600 mb-3">
                          I can build interactive prototypes quickly, allowing for rapid iteration
                          and user testing without waiting for developer resources.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-zinc-900 mb-2 text-sm sm:text-base">🔧 Technical Feasibility</h4>
                        <p className="text-xs sm:text-sm text-zinc-600 mb-3">
                          My coding knowledge ensures designs are realistic and achievable,
                          preventing costly redesigns and development delays.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-zinc-900 mb-2 text-sm sm:text-base">💡 Innovation Ready</h4>
                        <p className="text-xs sm:text-sm text-zinc-600 mb-3">
                          I can implement cutting-edge interactions and animations using WebGL,
                          Three.js, and GSAP to create memorable user experiences.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Conclusion Section */}
            <section className="mb-16">
              <div className="max-w-4xl mx-auto text-center">
                <div className="bg-white rounded-3xl p-8 md:p-12 border border-zinc-200 shadow-lg">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
                    Thank You for Considering My Application
                  </h3>
                  <p className="text-lg text-zinc-700 leading-relaxed mb-6 max-w-3xl mx-auto">
                    I'm excited about the opportunity to bring my unique combination of design expertise and technical skills to your team. 
                    My passion for creating user-centered solutions, combined with my ability to bridge the gap between design and development, 
                    makes me a valuable asset for any UX/UI role.
                  </p>
                  <p className="text-lg text-zinc-700 leading-relaxed mb-8 max-w-3xl mx-auto">
                    I'm ready to contribute to meaningful projects that make a real difference in users' lives. 
                    Let's create something amazing together!
                  </p>
                  <a 
                    href="mailto:madebyebe@gmail.com"
                    className="inline-flex items-center justify-center px-8 py-4 bg-pink-600 text-white font-semibold rounded-2xl hover:bg-pink-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                    style={{ color: 'white' }}
                  >
                    <svg className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span style={{ color: 'white' }}>Get In Touch</span>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;