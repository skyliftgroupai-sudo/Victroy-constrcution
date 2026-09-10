import { Navigate, useParams } from 'react-router-dom'
import { FiCheck } from 'react-icons/fi'
import Seo from '../../components/Seo'
import PageHero from '../../components/sections/PageHero'
import SectionHeading from '../../components/ui/SectionHeading'
import Reveal from '../../components/ui/Reveal'
import FaqAccordion from '../../components/ui/FaqAccordion'
import ProcessTimeline from '../../components/sections/ProcessTimeline'
import CtaBanner from '../../components/sections/CtaBanner'
import { serviceContent } from '../../data/serviceContent'
import { company } from '../../data/site'

export default function ServiceDetail() {
  const { slug } = useParams()
  const content = serviceContent[slug]

  if (!content) return <Navigate to="/services" replace />

  return (
    <>
      <Seo
        title={content.title}
        path={`/services/${slug}`}
        description={content.subtitle}
        image={`${company.website}${content.image}`}
      />

      <PageHero
        eyebrow={content.title}
        title={content.hero}
        intro={content.subtitle}
        image={content.image}
      />

      
      <section className="bg-cream py-20">
        <div className="container-page mx-auto max-w-3xl text-center">
          <Reveal>
            {content.intro.map((paragraph, index) => (
              <p
                key={index}
                className={`text-lg leading-relaxed text-ink/75 ${index > 0 ? 'mt-5' : ''}`}
              >
                {paragraph}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      
      <section className="bg-cream-dark py-20">
        <div className="container-page">
          <SectionHeading eyebrow="What We Do" title={`How VCS approaches ${content.title.toLowerCase()}`} />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {content.highlights.map((item, index) => (
              <Reveal key={item.title} delay={(index % 2) * 0.1}>
                <div className="flex h-full gap-5 rounded-3xl border border-brand-100 bg-white p-7 shadow-sm">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-600 font-serif text-cream">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/70">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      
      <section className="bg-cream py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] shadow-soft">
              <img src={content.image} alt={content.title} className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">
              <span className="h-px w-6 bg-current" />
              How It Works
            </span>
            <h2 className="mt-4 text-3xl leading-tight text-ink sm:text-4xl">
              {content.process.heading}
            </h2>
            {content.process.paragraphs.map((paragraph, index) => (
              <p key={index} className="mt-5 leading-relaxed text-ink/70">
                {paragraph}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      
      <section className="bg-cream-dark py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-current" />
              Planning Matters
            </span>
            <h2 className="mt-4 text-3xl leading-tight text-ink sm:text-4xl">
              What we plan for before work begins
            </h2>
            <p className="mt-5 leading-relaxed text-ink/70">
              Good outcomes come from good planning. VCS helps you think through the details that
              affect scope, budget, schedule, and quality — before the first day on site.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {content.considerations.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-brand-100 bg-white p-4 text-sm text-ink/80"
                >
                  <FiCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      
      <section className="bg-cream py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Common Questions" title={`FAQs about ${content.title.toLowerCase()}`} />
          <div className="mx-auto mt-12 max-w-3xl">
            <FaqAccordion items={content.faqs} />
          </div>
        </div>
      </section>

      <ProcessTimeline withCta={false} />

      <CtaBanner
        title={`Ready to plan your ${content.title.toLowerCase()} project?`}
        intro="Share your goals, timeline, and budget range. VCS will review your details and help determine the right next step."
      />
    </>
  )
}
