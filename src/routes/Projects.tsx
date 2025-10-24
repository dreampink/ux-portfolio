import { useEffect } from 'react'
import App from './App'

const Projects = () => {
  useEffect(() => {
    // Scroll to projects section when component mounts
    setTimeout(() => {
      const projectsSection = document.getElementById('projects')
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }, [])

  return <App />
}

export default Projects