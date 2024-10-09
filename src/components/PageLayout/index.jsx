import { Outlet } from 'react-router-dom'

import Navigation from '../Navigation/'
import Footer from '../Footer'

const PageLayout = () => (
  <>
    <header>
      <Navigation />
    </header>
    <Outlet />
    <footer>
      <Footer />
    </footer>
  </>
)

export default PageLayout
