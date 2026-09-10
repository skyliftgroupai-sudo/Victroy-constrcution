import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import SectionHeading from '../../ui/SectionHeading'
import Reveal from '../../ui/Reveal'
import { services } from '../../../data/services'

function ServiceCard({ service }) {
  return (
    <Link
      to={`/services/${service.slug}`}
      className="group relative w-[300px] shrink-0 overflow-hidden rounded-[1.75rem] bg-white shadow-card transition hover:-translate-y-1 hover:shadow-soft sm:w-[340px]"
    >
      <div className="h-56 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl text-ink">{service.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink/70">{service.blurb}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
          Learn more
          <FiArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}

export default function ServicesCarousel() {
  return (
    <section className="bg-cream-dark py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="What We Build"
          title="Custom Approach to Every Project"
          intro="Our work often involves much more than simply following a set of plans. We enjoy creating and building the types of projects shown here, but many of our projects also involve difficult site conditions, construction challenges, complicated logistics, and important design execution. We help work through those details to turn an idea into a well-planned, professionally managed project."
        />
      </div>

      <Reveal className="mt-14 overflow-hidden">
        <div className="flex w-max animate-marquee gap-6 px-3 hover:[animation-play-state:paused]">
          {[...services, ...services].map((service, index) => (
            <ServiceCard key={`${service.slug}-${index}`} service={service} />
          ))}
        </div>
      </Reveal>
    </section>
  )
}
