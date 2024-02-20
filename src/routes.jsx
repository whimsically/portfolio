import { createRef } from 'react'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Resume from './pages/Resume.jsx'

export const routes = [
    { path: '/', name: 'About', element: <About />, nodeRef: createRef() },
    { path: '/portfolio', name: 'Portfolio', element: <Portfolio />, nodeRef: createRef(), },
    { path: '/resume', name: 'Resume', element: <Resume />, nodeRef: createRef(), },
    { path: '/contact', name: 'Contact', element: <Contact />, nodeRef: createRef(), },
  ]