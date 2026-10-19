import Seo from '../components/Seo'
import Hero from '../components/sections/home/Hero'
import TrustStrip from '../components/sections/home/TrustStrip'
import ServicesCarousel from '../components/sections/home/ServicesCarousel'
import WhyChoose from '../components/sections/home/WhyChoose'
import ProcessStory from '../components/sections/home/ProcessStory'
import Testimonials from '../components/sections/home/Testimonials'
import ShareSection from '../components/sections/home/ShareSection'
import ResourceHub from '../components/sections/home/ResourceHub'
import ServiceAreasSection from '../components/sections/ServiceAreasSection'
import LeadPopup from '../components/LeadPopup'

export default function Home() {
  return (
    <>
      <Seo
        path="/"
        description="Victory Construction Services is a Custom Home Contractor in Northeast Florida — custom homes, metal homes, additions, remodels, and outdoor living, guided by a clear, proven process."
      />
      <Hero />
      <TrustStrip />
      <ServicesCarousel />
      <WhyChoose />
      <ProcessStory />
      <Testimonials />
      <ShareSection />
      <ResourceHub />
      <ServiceAreasSection />
      <LeadPopup />
    </>
  )
}
