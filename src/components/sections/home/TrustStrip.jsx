import { FiStar } from 'react-icons/fi'
import Reveal from '../../ui/Reveal'
import Button from '../../ui/Button'
import { company } from '../../../data/site'

export default function TrustStrip() {
  return (
    <section className="bg-cream py-20">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <a
            href={company.reviewUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-brand-600 transition hover:text-brand-700"
            title="Read our Google reviews"
          >
            {[...Array(5)].map((_, i) => (
              <FiStar key={i} className="h-5 w-5 fill-current" />
            ))}
            <span className="ml-2 text-sm font-medium text-ink/70">
              Trusted by Northeast Florida Homeowners
            </span>
          </a>

          <blockquote className="mt-6 font-serif text-2xl leading-snug text-ink sm:text-[1.75rem]">
            “A successful project starts long before the first day of construction, and well before
            the plans are finalized. At VCS, our systems, processes, and checklists are designed to
            create clarity around the plan, define expectations, clarify responsibilities, and outline
            next steps. That preparation helps us reduce surprises, solve problems earlier, and deliver
            a better construction experience.”
          </blockquote>
          <p className="mt-5 text-right text-sm font-semibold uppercase tracking-[0.15em] text-brand-600">
            — {company.owner}, Owner
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button to="/start-my-project">Start My Project</Button>
            <Button to="/our-process" variant="outline">
              View Our Process
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-soft">
              <img
                src="/images/home-exterior.jpg"
                alt="A custom home built by Victory Construction Services"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-4 rounded-2xl bg-brand-700 px-6 py-4 text-center text-cream shadow-card sm:absolute sm:-bottom-6 sm:right-8 sm:mt-0 sm:w-64 sm:text-left">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-200">Licensed & Local</p>
              <p className="mt-1 font-serif text-lg">
                Florida Certified Building Contractor
              </p>
              <p className="text-sm text-cream/90">{company.license}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
