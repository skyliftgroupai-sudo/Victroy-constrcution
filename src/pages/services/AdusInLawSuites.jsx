import { FiCheck, FiHome, FiInfo, FiUsers } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Seo from '../../components/Seo'
import PageHero from '../../components/sections/PageHero'
import SectionHeading from '../../components/ui/SectionHeading'
import Reveal from '../../components/ui/Reveal'
import FaqAccordion from '../../components/ui/FaqAccordion'
import Button from '../../components/ui/Button'
import CtaBanner from '../../components/sections/CtaBanner'
import { company } from '../../data/site'
import {
  aduTypes,
  realLifeChecklist,
  goodFitList,
  aduFaqs,
  gettingStarted,
} from '../../data/adus'

export default function AdusInLawSuites() {
  return (
    <>
      <Seo
        title="In-Law Cottages & ADUs"
        path="/services/in-law-suites-cottages"
        description="Private living space for family, guests, and future flexibility. VCS plans and builds detached ADUs, attached in-law suites, cottages, and multi-generational living spaces in NE Florida."
        image={`${company.website}/images/living-room.jpg`}
      />

      <PageHero
        eyebrow="In-Law Cottages & ADUs"
        title="Private Living Space for Family, Guests, and Future Flexibility"
        intro="An ADU or in-law suite can create more room, more privacy, and a better long-term plan for your home and property. VCS helps you determine the right path before construction begins."
        image="/images/living-room.jpg"
      />

      
      <section className="bg-cream py-20">
        <div className="container-page mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-lg leading-relaxed text-ink/75">
              Victory Construction Services helps clients plan and build detached ADUs, attached
              in-law suites, guest quarters, and multi-generational living spaces through practical
              planning, Trade Team coordination, and organized construction management. Whether the
              goal is space for an aging parent, an adult child, long-term guests, a caregiver, or
              flexible future use, VCS helps determine the right path forward.
            </p>
          </Reveal>
        </div>
      </section>

      
      <section className="bg-cream-dark py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="What Type of Space Are You Considering?"
            title="Every property and family situation is different"
            intro="VCS helps you evaluate the right path based on the home, the property, the intended use, and the approval process."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {aduTypes.map((type, index) => (
              <Reveal key={type.title} delay={(index % 3) * 0.1}>
                <div className="flex h-full flex-col rounded-3xl border border-brand-100 bg-white p-7 shadow-sm">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                    {index === 0 ? <FiHome className="h-5 w-5" /> : index === 1 ? <FiUsers className="h-5 w-5" /> : <FiUsers className="h-5 w-5" />}
                  </span>
                  <h3 className="mt-5 text-xl text-ink">{type.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">{type.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <p className="mx-auto max-w-xl text-ink/70">
              Not sure which option fits your needs and property? Start with the Start My Project form
              and we will reach out to discuss.
            </p>
            <div className="mt-6">
              <Button to="/start-my-project">Start My Project</Button>
            </div>
          </Reveal>
        </div>
      </section>

      
      <section className="bg-cream py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-current" />
              Built Around Real-Life Use
            </span>
            <h2 className="mt-4 text-3xl leading-tight text-ink sm:text-4xl">
              An ADU should work for the people who will actually use it
            </h2>
            <p className="mt-5 leading-relaxed text-ink/70">
              VCS helps you think through the details that matter most. The right plan depends on the
              property, the family, and the intended use.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {realLifeChecklist.map((item) => (
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

      
      <section className="bg-brand-800 py-20 text-cream">
        <div className="container-page mx-auto max-w-3xl text-center">
          <Reveal>
            <FiUsers className="mx-auto h-9 w-9 text-brand-200" />
            <h2 className="mt-5 text-3xl leading-tight sm:text-4xl">The VCS Trade Team Approach</h2>
            <p className="mt-5 leading-relaxed text-cream/90">
              ADUs and in-law suites often require coordination between designers, engineers, survey
              information, utility planning, suppliers, and licensed trade partners. VCS uses a Trade
              Team Approach to connect your goals, the professional input, the project scope, and the
              construction plan — reducing the gap between what was imagined, what was priced, and what
              actually gets built.
            </p>
            <div className="mt-8">
              <Button to="/our-process" variant="outlineLight">
                View Our Process
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      
      <section className="bg-cream-dark py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Is This Project a Good Fit for VCS?"
              title="VCS may be a strong fit if you are planning:"
            />
            <ul className="mt-8 space-y-3">
              {goodFitList.map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink/80">
                  <FiCheck className="mt-1 h-5 w-5 shrink-0 text-brand-600" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-brand-100 bg-white p-7 shadow-sm">
              <FiInfo className="h-7 w-7 text-brand-600" />
              <p className="mt-4 leading-relaxed text-ink/75">
                If the project is mainly a garage conversion, bonus-room remodel, or whole-home layout
                change, the better starting point may be our{' '}
                <Link to="/services/major-home-remodeling" className="font-semibold text-brand-600 underline">
                  Major Home Remodeling
                </Link>{' '}
                service.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink/60">
                VCS is typically not the right fit for quick handyman conversions, unpermitted work,
                unclear rental use, or construction without proper planning and approvals.
              </p>
              <div className="mt-6">
                <Button to="/start-my-project">Start My Project</Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      
      <section className="bg-cream py-20">
        <div className="container-page">
          <SectionHeading eyebrow="FAQ" title="Common questions about ADUs & in-law suites" />
          <div className="mx-auto mt-12 max-w-3xl">
            <FaqAccordion items={aduFaqs} />
          </div>
        </div>
      </section>

      
      <section className="bg-cream-dark py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-current" />
              How to Get Started
            </span>
            <h2 className="mt-4 text-3xl leading-tight text-ink sm:text-4xl">
              Tell us what you are trying to create
            </h2>
            <p className="mt-5 leading-relaxed text-ink/70">
              The best first step is to tell us what you want to build and where the property is
              located. VCS will review the information and help determine the next step.
            </p>
            <div className="mt-7">
              <Button to="/start-my-project">Start My Project</Button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-brand-100 bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-600">
                Helpful starting information
              </p>
              <ul className="mt-5 space-y-3">
                {gettingStarted.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-ink/80">
                    <FiCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="Ready to plan your ADU or in-law suite?"
        intro="Share your property details and intended use. VCS will help determine the right next step for your family."
      />
    </>
  )
}
