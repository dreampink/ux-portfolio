import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './routes/App.tsx'
import About from './routes/About.tsx'
import CaseStudy from './routes/CaseStudy'
import Home from './routes/Home.tsx'
import Projects from './routes/Projects.tsx'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/home', element: <Home /> },
  { path: '/projects', element: <Projects /> },
  { path: '/about', element: <About /> },
  { path: '/case/:slug', element: <CaseStudy /> },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
