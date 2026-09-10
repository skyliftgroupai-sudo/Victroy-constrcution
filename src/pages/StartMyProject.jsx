import { FiCheck, FiClock, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import Seo from '../components/Seo'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import { company } from '../data/site'

const whatToExpect = [
  'A quick review of your project details and fit',
  'A conversation about goals, budget, and timeline',
  'Clear guidance on the right next step',
]

export default function StartMyProject() {
  return (
    <>
      <Seo
        title="Start My Project"
        path="/start-my-project"
        description="Start your project with Victory Construction Services. Share your project type, details, timeline, and budget range, and we will help determine the right next step."
      />

      <section className="bg-brand-800 pb-16 pt-36 text-cream">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <span className="eyebrow text-brand-200">
              <span className="h-px w-6 bg-current" />
              {company.descriptor}
            </span>
            <h1 className="mt-4 text-4xl leading-tight sm:text-5xl">Start My Project</h1>
            <p className="mt-5 text-lg leading-relaxed text-cream/85">
              Tell us where you are in the process. Share as much or as little as you have — VCS will
              review your details and help determine the right next step.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Request a Quote"
            title="Tell us about your project"
            intro="Share your project type, details, timeline, and budget range. The more you can tell us, the better we can help determine the right next step."
          />

          
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl bg-brand-700 p-7 text-cream shadow-card">
                <h2 className="font-serif text-2xl">Talk with VCS directly</h2>
                <ul className="mt-5 space-y-4 text-sm text-cream/85">
                  <li>
                    <a href={company.phoneHref} className="flex items-center gap-3 hover:text-cream">
                      <FiPhone className="h-4 w-4 text-brand-200" />
                      {company.phone}
                    </a>
                  </li>
                  <li>
                    <a href={company.emailHref} className="flex items-center gap-3 hover:text-cream">
                      <FiMail className="h-4 w-4 text-brand-200" />
                      {company.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiMapPin className="mt-1 h-4 w-4 shrink-0 text-brand-200" />
                    <span>
                      {company.office.label}
                      <br />
                      {company.office.lines[0]}
                      <br />
                      {company.office.lines[1]}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiClock className="mt-1 h-4 w-4 shrink-0 text-brand-200" />
                    <span>By appointment · we typically reply within one business day</span>
                  </li>
                </ul>
                <p className="mt-6 border-t border-cream/15 pt-4 text-xs text-cream/85">
                  Florida Certified Building Contractor · {company.license}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="h-full rounded-3xl border border-brand-100 bg-white p-7 shadow-sm">
                <SectionHeading align="left" title="What happens next" />
                <ul className="mt-5 space-y-3">
                  {whatToExpect.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-ink/80">
                      <FiCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          
          <Reveal className="mt-10">
            <div className="overflow-hidden rounded-[2rem] border border-brand-100 bg-white p-2 shadow-card sm:p-4">
              <iframe
                src={company.quoteFormEmbed}
                title="Request a Quote — Victory Construction Services"
                loading="lazy"
                className="h-[2400px] w-full rounded-2xl sm:h-[2100px]"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
