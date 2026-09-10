import { FiCheckCircle } from 'react-icons/fi'
import Seo from '../components/Seo'
import PageHero from '../components/sections/PageHero'
import ProcessTimeline from '../components/sections/ProcessTimeline'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import CtaBanner from '../components/sections/CtaBanner'

const contractorChecklist = [
  'Are they licensed and insured for the work?',
  'Do they evaluate the site before pricing?',
  'Are allowances and selections documented clearly?',
  'How are trade partners vetted and coordinated?',
  'Are changes tracked with cost and schedule impacts?',
  'How, and how often, will they communicate?',
]

export default function OurProcess() {
  return (
    <>
      <Seo
        title="Our Process"
        path="/our-process"
        description="The VCS Smarter Build Process — a clear, guided path from your first project details through discovery, planning, contract, and a well-managed build."
      />

      <PageHero
        eyebrow="Our Process"
        title="A Guided Process, From First Idea to Final Walkthrough"
        intro="At VCS, our product is the process. We focus on planning, documentation, trade coordination, and proactive management so you always know the path of your build."
        image="/images/framing.jpg"
      />

      <ProcessTimeline withCta={false} />

      
      <section className="bg-cream py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Choosing a Contractor"
              title="What to look for in a contractor"
              intro="Before you sign with anyone, these are the questions worth asking. VCS is built to answer every one of them clearly."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="space-y-4">
              {contractorChecklist.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-brand-100 bg-white p-5 text-ink/80 shadow-sm"
                >
                  <FiCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
