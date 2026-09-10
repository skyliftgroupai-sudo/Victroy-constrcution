import { FiArrowUpRight, FiBookOpen } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import SectionHeading from '../../ui/SectionHeading'
import Reveal from '../../ui/Reveal'
import Button from '../../ui/Button'
import { resourceGuides } from '../../../data/resources'

export default function ResourceHub() {
  return (
    <section className="bg-cream py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Resource Hub"
          title="Plan with Confidence Before You Begin"
          intro="Practical reading to help you make better decisions, whether you are ready to build now or simply exploring."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {resourceGuides.map((guide, index) => (
            <Reveal key={guide.title} delay={(index % 2) * 0.1}>
              <Link
                to={guide.to}
                className="group flex h-full items-start gap-5 rounded-3xl border border-brand-100 bg-white p-7 transition hover:-translate-y-1 hover:shadow-card"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                  <FiBookOpen className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="flex items-center gap-2 text-lg text-ink">
                    {guide.title}
                    <FiArrowUpRight className="h-4 w-4 text-brand-600 opacity-0 transition group-hover:opacity-100" />
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{guide.description}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button to="/blog">Visit Blogs &amp; Guides</Button>
        </div>
      </div>
    </section>
  )
}
