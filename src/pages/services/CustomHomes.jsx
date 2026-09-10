import { FiCheck, FiHome, FiUsers } from 'react-icons/fi'
import Seo from '../../components/Seo'
import PageHero from '../../components/sections/PageHero'
import SectionHeading from '../../components/ui/SectionHeading'
import Reveal from '../../components/ui/Reveal'
import Accordion from '../../components/ui/Accordion'
import FaqAccordion from '../../components/ui/FaqAccordion'
import Button from '../../components/ui/Button'
import CtaBanner from '../../components/sections/CtaBanner'
import { company } from '../../data/site'
import {
  startingPoints,
  criticalQuestions,
  planningFactors,
  customHomePath,
  customHomeFaqs,
} from '../../data/customHomes'

const customFeatures = [
  'Site-specific planning and layout flow',
  'Indoor and outdoor living',
  'Guest suites or multi-generational space',
  'Accessibility and aging-in-place considerations',
  'Durability in Florida weather conditions',
  'Energy, comfort, and maintenance considerations',
  'Future additions, ADUs, garages, or detached structures',
  'Budget priorities and finish selections',
]

const reassurancePoints = [
  'Practical preconstruction planning',
  'Trade Team coordination',
  'Scope and budget clarity',
  'Professional designer and engineer coordination where needed',
  'Trade partner scheduling and communication',
  'Permitting and inspection awareness',
  'Documented decisions and change discussions',
  'Quality checks and closeout planning',
]

export default function CustomHomes() {
  return (
    <>
      <Seo
        title="Custom Homes"
        path="/services/custom-homes"
        description="Custom homes built through planning, coordination, and accountability. VCS helps you plan and build a custom home in Northeast Florida with a clear, guided process."
        image={`${company.website}/images/home-exterior.jpg`}
      />

      <PageHero
        eyebrow="Custom Homes"
        title="Custom Homes Built Through Planning, Coordination, and Accountability"
        intro="Building a custom home should start with more than a floor plan and a price range. It should start with a clear understanding of the land, your goals, the budget, the design path, and the construction decisions that shape the finished home for years."
        image="/images/home-exterior.jpg"
      />

      
      <section className="bg-cream py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1.2fr,1fr] lg:items-center">
          <Reveal>
            <p className="text-lg leading-relaxed text-ink/75">
              Victory Construction Services helps each client plan and build a custom home through
              practical preconstruction planning, our organized process, Trade Team coordination, and
              construction management built around scope, budget, schedule, communication, and
              accountability.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-ink/75">
              Whether you already own land, have plans in hand, are working with a designer, or are
              still trying to understand where to begin, VCS helps identify the right next step before
              construction begins.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-[2rem] bg-brand-700 p-8 text-cream shadow-soft">
              <FiHome className="h-8 w-8 text-brand-200" />
              <p className="mt-4 font-serif text-2xl">The product is the process.</p>
              <p className="mt-3 text-cream/90">
                We focus on meticulous planning, precise documentation, and proactive management so
                you know the exact path of your build before heavy machinery ever shows up.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button to="/start-my-project" variant="light" className="px-5 py-2.5">
                  Start My Project
                </Button>
                <Button to="/our-process" variant="outlineLight" className="px-5 py-2.5">
                  View Our Process
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      
      <section className="bg-cream-dark py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr,1.1fr]">
          <SectionHeading
            align="left"
            eyebrow="Where Are You Starting From?"
            title="Every custom home client starts in a different place"
            intro="VCS helps you understand your starting point so the next step is practical, organized, and realistic."
          />
          <Reveal delay={0.1}>
            <Accordion items={startingPoints} />
          </Reveal>
        </div>
      </section>

      
      <section className="bg-cream py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Beyond the Portfolio"
            title="How to truly compare custom builders"
            intro="A stunning photo does not show the budget overruns, communication gaps, or delays behind the scenes. To protect your investment, look past the finishes and ask these seven questions."
          />
          <Reveal className="mx-auto mt-12 max-w-3xl">
            <Accordion items={criticalQuestions} defaultOpen={-1} />
          </Reveal>
          <div className="mt-10 text-center">
            <Button to="/start-my-project">Ready to build with confidence? Start My Project</Button>
          </div>
        </div>
      </section>

      
      <section className="bg-cream-dark py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-current" />
              What VCS Means by a Custom Home
            </span>
            <h2 className="mt-4 text-3xl leading-tight text-ink sm:text-4xl">
              Custom is how the home is planned around you
            </h2>
            <p className="mt-5 leading-relaxed text-ink/70">
              A custom home can begin with a one-of-a-kind design, a modified plan, a client-provided
              concept, or a proven layout adapted to the property. What makes it custom is how the
              home is planned around the land, your lifestyle, the budget, the construction path, and
              the long-term use of the home.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {customFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 rounded-2xl border border-brand-100 bg-white p-4 text-sm text-ink/80"
                >
                  <FiCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  {feature}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      
      <section className="bg-brand-800 py-20 text-cream">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <FiUsers className="h-9 w-9 text-brand-200" />
            <h2 className="mt-5 text-3xl leading-tight sm:text-4xl">The VCS Trade Team Approach</h2>
            <p className="mt-5 leading-relaxed text-cream/90">
              A custom home requires the right professional input at the right time — designers,
              architects, engineers, surveyors, energy consultants, suppliers, specialty vendors, and
              licensed trade partners. VCS uses a Trade Team Approach to connect your goals, the
              professional design path, and the construction execution plan.
            </p>
            <p className="mt-4 leading-relaxed text-cream/90">
              This approach helps reduce the common gap between what was drawn, what was assumed, what
              was priced, and what actually needs to happen in the field.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                'Scope & feasibility conversations',
                'Design & engineering coordination',
                'Trade Team input',
                'Site meetings',
                'Construction pricing discussions',
                'Material & selection planning',
                'Permitting & inspection readiness',
                'Closeout & warranty path',
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-cream/15 bg-brand-700/40 p-4 text-sm text-cream/85">
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      
      <section className="bg-cream py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Before You Build"
            title="Important planning factors"
            intro="Custom homes involve more than the house itself. VCS helps you work through these factors before construction begins."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {planningFactors.map((item, index) => (
              <Reveal key={item.factor} delay={(index % 2) * 0.08}>
                <div className="flex gap-5 rounded-3xl border border-brand-100 bg-white p-6 shadow-sm">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-600 font-serif text-cream">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg text-ink">{item.factor}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/70">{item.why}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      
      <section className="bg-cream-dark py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="The VCS Custom Home Path"
            title="Every project is unique, but the path is familiar"
          />
          <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {customHomePath.map((step, index) => (
              <Reveal key={step.number} delay={(index % 3) * 0.08}>
                <div className="h-full rounded-3xl border border-brand-100 bg-white p-7 shadow-sm">
                  <span className="font-serif text-4xl text-brand-200">{step.number}</span>
                  <h3 className="mt-3 text-lg text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      
      <section className="bg-cream py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-current" />
              Why Build with VCS?
            </span>
            <h2 className="mt-4 text-3xl leading-tight text-ink sm:text-4xl">
              A custom home is too important to manage casually
            </h2>
            <p className="mt-5 leading-relaxed text-ink/70">
              The finished home matters, but the process matters just as much. VCS focuses on the
              parts of construction that protect you before and during the build.
            </p>
            <div className="mt-6 rounded-2xl bg-brand-50 p-6">
              <p className="font-serif text-xl text-brand-700">The Mom&rsquo;s House Standard</p>
              <p className="mt-2 text-sm text-ink/75">
                Treating each home with the care, respect, and accountability we would bring to our
                own family&rsquo;s home.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="space-y-3">
              {reassurancePoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-ink/80">
                  <FiCheck className="mt-1 h-5 w-5 shrink-0 text-brand-600" />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      
      <section className="bg-cream-dark py-20">
        <div className="container-page">
          <SectionHeading eyebrow="FAQ" title="Common questions about custom homes" />
          <div className="mx-auto mt-12 max-w-3xl">
            <FaqAccordion items={customHomeFaqs} />
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button to="/resources#faq" variant="outline">
              View More FAQs
            </Button>
            <Button to="/resources">View the Full Custom Home Planning Guide</Button>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to start planning your custom home?"
        intro="Tell us where you are in the process, whether you own land, whether plans exist, and what you want the finished home to accomplish."
      />
    </>
  )
}
