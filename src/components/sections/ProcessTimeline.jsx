import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import { processSteps } from '../../data/process'

export default function ProcessTimeline({ withCta = true, className = '' }) {
  return (
    <section className={`bg-brand-800 py-20 text-cream ${className}`}>
      <div className="container-page">
        <SectionHeading
          light
          eyebrow="Our Process"
          title="A proven path from concept to completion"
          intro="A successful construction project requires more than good craftsmanship. Our process is built to create clarity, establish expectations, identify challenges early, and keep Clients informed from the first conversation through project closeout."
        />

        <div className="relative mx-auto mt-16 max-w-3xl">
          <div className="absolute left-[27px] top-2 bottom-2 w-px bg-cream/20 sm:left-[31px]" aria-hidden="true" />

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.08}>
                <div className="flex gap-6">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-cream/25 bg-brand-700 font-serif text-xl text-cream">
                    {step.number}
                  </span>
                  <div className="pt-1.5">
                    <h3 className="text-xl text-cream">{step.title}</h3>
                    <p className="mt-2 leading-relaxed text-cream/85">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-14 max-w-2xl text-center font-serif text-2xl text-cream">
          A good construction process should remove uncertainty — not create more of it.
        </p>

        {withCta && (
          <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button to="/start-my-project" variant="light">
              Start My Project
            </Button>
            <Button to="/our-process" variant="outlineLight">
              View Our Process
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
