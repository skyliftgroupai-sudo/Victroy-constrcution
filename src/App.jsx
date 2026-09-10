import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import CustomHomes from './pages/services/CustomHomes'
import AdusInLawSuites from './pages/services/AdusInLawSuites'
import ServiceDetail from './pages/services/ServiceDetail'
import OurProcess from './pages/OurProcess'
import ServiceAreas from './pages/ServiceAreas'
import AreaDetail from './pages/AreaDetail'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Resources from './pages/Resources'
import Referral from './pages/Referral'
import StartMyProject from './pages/StartMyProject'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="services/custom-homes" element={<CustomHomes />} />
        <Route path="services/in-law-suites-cottages" element={<AdusInLawSuites />} />
        <Route path="services/:slug" element={<ServiceDetail />} />
        <Route path="our-process" element={<OurProcess />} />
        <Route path="service-areas" element={<ServiceAreas />} />
        <Route path="service-areas/:slug" element={<AreaDetail />} />
        <Route path="projects" element={<Projects />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogPost />} />
        <Route path="resources" element={<Resources />} />
        <Route path="referrals" element={<Referral />} />
        <Route path="start-my-project" element={<StartMyProject />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
