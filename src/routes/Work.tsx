import { useEffect } from 'react'
import App from './App'

const Work = () => {
  useEffect(() => {
    // Scroll to projects section every time the component renders
    // This ensures it works even if user is already on /work and clicks /work again
    const scrollToProjects = () => {
      const projectsSection = document.getElementById('projects')
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
    
    // Use a small delay to ensure the DOM is ready
    const timeoutId = setTimeout(scrollToProjects, 100)
    
    return () => clearTimeout(timeoutId)
  })

  return <App />
}

export default Work