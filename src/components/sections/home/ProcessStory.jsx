import {
  FiClipboard,
  FiFileText,
  FiHome,
  FiMessageSquare,
  FiPackage,
  FiPenTool,
  FiSearch,
  FiTool,
} from 'react-icons/fi'
import SectionHeading from '../../ui/SectionHeading'
import Reveal from '../../ui/Reveal'
import Button from '../../ui/Button'
import { processSteps } from '../../../data/process'

const stepIcons = [FiMessageSquare, FiSearch, FiClipboard, FiPenTool, FiFileText, FiPackage, FiTool, FiHome]

export default function ProcessStory() {
  return (
    <section className="bg-cream-dark py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Our Process"
          title="How a VCS Project Comes Together"
          intro="A successful project involves more than good craftsmanship. It requires planning, coordination, communication, and the ability to work through important decisions before and during construction. That is where our process makes the difference."
        />

        <div className="mt-16 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => {
            const Icon = stepIcons[i]
            return (
              <Reveal
                key={step.number}
                delay={(i % 4) * 0.08}
                className={`group px-2 text-center lg:px-6 ${
                  i % 4 !== 0 ? 'lg:border-l lg:border-brand-200/70' : ''
                }`}
              >
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand-600 text-cream shadow-card ring-4 ring-cream transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-white group-hover:text-brand-600 group-hover:shadow-soft group-hover:ring-brand-200">
                  <Icon className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
                </span>
                <p className="mt-4 font-serif text-3xl text-brand-300">{step.number}</p>
                <h3 className="mt-1 font-serif text-lg leading-snug text-ink">{step.title}</h3>
                <p className="mx-auto mt-2 max-w-[15rem] text-sm leading-relaxed text-ink/60">
                  {step.description}
                </p>
              </Reveal>
            )
          })}
        </div>

        <p className="mx-auto mt-16 max-w-2xl text-center font-serif text-2xl leading-snug text-brand-700">
          A successful project takes more than construction. It takes a clear path.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button to="/our-process">Explore Our Full Process</Button>
          <Button to="/start-my-project" variant="outline">
            Start My Project
          </Button>
        </div>
      </div>
    </section>
  )
}
