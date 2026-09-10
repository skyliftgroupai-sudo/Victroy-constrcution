import { Link } from 'react-router-dom'
import { FiArrowRight, FiMapPin } from 'react-icons/fi'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import { areas } from '../../data/areas'
import { serviceZips } from '../../data/site'

export default function ServiceAreasSection() {
  return (
    <section id="service-areas" className="bg-cream-dark py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Where We Work"
          title="Your Northeast Florida Contractor Is Working in Your Neighborhood"
          intro="Proudly serving homeowners across St. Johns and Duval counties and the greater Northeast Florida area."
        />

        <Reveal className="mt-12">
          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((area) => (
              <Link
                key={area.slug}
                to={`/service-areas/${area.slug}`}
                className="group inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-5 py-2.5 text-sm font-medium text-ink/80 shadow-sm transition hover:border-brand-600 hover:text-brand-700"
              >
                <FiMapPin className="h-4 w-4 text-brand-600" />
                {area.name}, FL
                <FiArrowRight className="h-3.5 w-3.5 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </Link>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-8">
          <p className="text-center text-sm text-ink/70">
            Serving ZIP codes including{' '}
            <span className="font-bold text-ink">{serviceZips.join(' · ')}</span>
          </p>
        </Reveal>

        <div className="mt-10 text-center">
          <Button to="/service-areas" variant="outline">
            View All Service Areas
          </Button>
        </div>
      </div>
    </section>
  )
}
