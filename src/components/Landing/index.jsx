import Faq from '../Faq'
import ImageCarousel from '../ImageCarousel'
import ServiceSection from '../ServiceSection'
import AboutSection from '../AboutSection'
import Testimonials from '../Testimonials'
import TrustedBy from '../TrustedBy'

const LandingPage = () => {
  return (
    <div>
      <ImageCarousel />
      <TrustedBy />
      <AboutSection />
      <ServiceSection />
      <Testimonials />
      <Faq />
    </div>
  )
}

export default LandingPage
