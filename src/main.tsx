import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './routes/App.tsx'
import CaseStudy from './routes/CaseStudy'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/case/:slug', element: <CaseStudy /> },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode><RouterProvider router={router} /></React.StrictMode>
)
