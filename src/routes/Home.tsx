import { useEffect } from 'react'
import App from './App'

const Home = () => {
  useEffect(() => {
    // Scroll to home section when component mounts
    setTimeout(() => {
      const homeSection = document.getElementById('home')
      if (homeSection) {
        homeSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }, [])

  return <App />
}

export default Home
