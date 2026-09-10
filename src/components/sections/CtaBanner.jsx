import Reveal from '../ui/Reveal'
import Button from '../ui/Button'
import { company } from '../../data/site'

export default function CtaBanner({
  title = 'Ready to start planning your project?',
  intro = 'Tell us where you are in the process. VCS will review your details and help determine the right next step.',
}) {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] px-6 py-16 text-center text-cream shadow-soft sm:px-12">
            
            <img
              src="/images/framing.jpg"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

            <div className="relative mx-auto max-w-2xl">
              <span className="eyebrow justify-center text-brand-200">
                <span className="h-px w-6 bg-current" />
                {company.descriptor}
              </span>
              <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">{title}</h2>
              <p className="mt-4 text-cream/90">{intro}</p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button to="/start-my-project" variant="light">
                  Start My Project
                </Button>
                <Button to="/our-process" variant="outlineLight">
                  View Our Process
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
