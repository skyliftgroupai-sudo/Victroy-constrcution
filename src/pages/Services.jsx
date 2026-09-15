import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import Seo from '../components/Seo'
import PageHero from '../components/sections/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import CtaBanner from '../components/sections/CtaBanner'
import { services } from '../data/services'

export default function Services() {
  return (
    <>
      <Seo
        title="Our Services"
        path="/services"
        description="Custom homes, major remodeling, room additions, in-law cottages and ADUs, metal framed homes, kitchen and bath, and outdoor living — planned and built with the VCS process."
      />

      <PageHero
        eyebrow="Our Services"
        title="What We Build Is Only Part of What We Deliver"
        intro="“Our job is to build the project you envisioned. Our goal is to earn the trust and confidence that last well beyond construction.” — David Vick, Owner"
        image="/images/home-exterior.jpg"
        ctas={false}
      />

      <section className="bg-cream py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="What We Build"
            title="Explore the Services That Fit Your Project"
          />

          <div className="mt-14 flex flex-wrap justify-center gap-8">
            {services.map((service, index) => (
              <Reveal
                key={service.slug}
                delay={(index % 2) * 0.1}
                className="w-full lg:w-[calc(50%-1rem)]"
              >
                <Link
                  to={`/services/${service.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[2rem] bg-white shadow-card transition hover:-translate-y-1 hover:shadow-soft sm:flex-row"
                >
                  <div className="h-56 overflow-hidden sm:h-auto sm:w-2/5">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="text-2xl leading-tight text-ink">{service.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">{service.blurb}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                      Learn more
                      <FiArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
