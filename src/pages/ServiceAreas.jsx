import { Link } from 'react-router-dom'
import { FiArrowRight, FiMapPin } from 'react-icons/fi'
import Seo from '../components/Seo'
import PageHero from '../components/sections/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import CtaBanner from '../components/sections/CtaBanner'
import { areas } from '../data/areas'

export default function ServiceAreas() {
  return (
    <>
      <Seo
        title="Service Areas"
        path="/service-areas"
        description="Victory Construction Services builds custom homes, additions, ADUs, and remodels across Northeast Florida — Saint Johns, Ponte Vedra, Palm Valley, Nocatee, Mandarin, and World Golf Village."
      />

      <PageHero
        eyebrow="Where We Work"
        title="Your NE Florida Contractor, Working in Your Neighborhood"
        intro="VCS proudly serves homeowners across St. Johns County and the greater Northeast Florida area. Choose your community to learn more."
        image="/images/home-exterior.jpg"
        ctas={false}
      />

      <section className="bg-cream py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Service Areas"
            title="Local knowledge in every community we serve"
            intro="Each area has its own site conditions, HOA requirements, and permitting steps. We plan around them before construction begins."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area, index) => (
              <Reveal key={area.slug} delay={(index % 3) * 0.08}>
                <Link
                  to={`/service-areas/${area.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-card transition hover:-translate-y-1 hover:shadow-soft"
                >
                  <div className="h-44 overflow-hidden">
                    <img
                      src={area.image}
                      alt={`${area.name}, Florida`}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-brand-600">
                      <FiMapPin className="h-4 w-4" />
                      {area.county}
                    </p>
                    <h3 className="mt-2 text-2xl text-ink">{area.name}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">{area.intro}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                      Explore {area.name}
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
