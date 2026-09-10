import { Link, Navigate, useParams } from 'react-router-dom'
import { FiArrowRight, FiCheck, FiMapPin } from 'react-icons/fi'
import Seo from '../components/Seo'
import PageHero from '../components/sections/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import ProcessTimeline from '../components/sections/ProcessTimeline'
import CtaBanner from '../components/sections/CtaBanner'
import { getArea } from '../data/areas'
import { services } from '../data/services'
import { company } from '../data/site'

export default function AreaDetail() {
  const { slug } = useParams()
  const area = getArea(slug)

  if (!area) return <Navigate to="/service-areas" replace />

  return (
    <>
      <Seo
        title={`Custom Home Builder in ${area.name}, FL`}
        path={`/service-areas/${area.slug}`}
        description={`${area.intro} Serving ${area.name} and ${area.county}.`}
        image={`${company.website}${area.image}`}
      />

      <PageHero
        eyebrow={area.county}
        title={`Building & Remodeling in ${area.name}, Florida`}
        intro={area.intro}
        image={area.image}
      />

      
      <section className="bg-cream py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1.2fr,1fr] lg:items-center">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-current" />
              Local Knowledge
            </span>
            <h2 className="mt-4 text-3xl leading-tight text-ink sm:text-4xl">
              A contractor who knows {area.name}
            </h2>
            <p className="mt-5 leading-relaxed text-ink/75">{area.localNote}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-[2rem] bg-brand-700 p-8 text-cream shadow-soft">
              <FiMapPin className="h-8 w-8 text-brand-200" />
              <p className="mt-4 font-serif text-2xl">Serving {area.name}</p>
              <p className="mt-2 text-cream/85">{area.county}</p>
              <p className="mt-4 border-t border-cream/15 pt-4 text-sm text-cream/85">
                Florida Certified Building Contractor · {company.license}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      
      <section className="bg-cream-dark py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="What We Build Here"
            title={`Services available in ${area.name}`}
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={(index % 3) * 0.06}>
                <Link
                  to={`/services/${service.slug}`}
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-brand-100 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-card"
                >
                  <span className="flex items-center gap-3 text-ink/85">
                    <FiCheck className="h-5 w-5 shrink-0 text-brand-600" />
                    {service.title}
                  </span>
                  <FiArrowRight className="h-4 w-4 text-brand-600 transition group-hover:translate-x-1" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProcessTimeline withCta={false} />

      <CtaBanner
        title={`Planning a project in ${area.name}?`}
        intro="Tell us about your goals, timeline, and budget range. VCS will review your details and help determine the right next step."
      />
    </>
  )
}
