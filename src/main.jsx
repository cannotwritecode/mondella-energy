import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PageLayout from './components/PageLayout'
import AboutPage from './components/About'
import LandingPage from './components/Landing'
import CareersPage from './components/Careers'
import TeamPage from './components/Team'
import ContactPage from './components/Contact'
import PartnersPage from './components/Partners'
import * as ROUTES from './constants/routes'
import './index.css'
import '@firebase/auth'
import '@firebase/firestore'

const router = createBrowserRouter([
  {
    element: <PageLayout />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: `${ROUTES.ABOUT}`,
        element: <AboutPage />,
      },
      {
        path: `${ROUTES.CAREERS}`,
        element: <CareersPage />,
      },
      {
        path: `${ROUTES.CONTACT}`,
        element: <ContactPage />,
      },
      {
        path: `${ROUTES.TEAM}`,
        element: <TeamPage />,
      },
      {
        path: `${ROUTES.PARTNERS}`,
        element: <PartnersPage />,
      },
    ],
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
