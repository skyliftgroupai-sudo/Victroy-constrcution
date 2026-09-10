import { FiCheckCircle } from 'react-icons/fi'
import Reveal from '../../ui/Reveal'
import Button from '../../ui/Button'

const reasons = [
  {
    title: 'Local & Accountable',
    text: 'Northeast Florida is our home and the community where we have built our business and reputation. We value being accessible, responsive, and accountable to the Clients and Trade Partners we work with.',
  },
  {
    title: 'Partnership Approach',
    text: 'We prefer conversations over sales pitches. Our goal is to determine whether VCS and the Client are the right fit for each other and build the project relationship from there.',
  },
  {
    title: 'Transparent Scope & Pricing',
    text: 'We work to identify known scope, anticipated costs, and potential variables as early as practical. Our goal is to give Clients a realistic understanding of the project before construction begins and reduce avoidable surprises along the way.',
  },
  {
    title: 'Consistent Communication',
    text: 'Regular updates and weekly schedules help Clients understand what is happening, what is coming next, and where their attention may be needed.',
  },
  {
    title: 'Clean & Respectful',
    text: 'We recognize that we are working in someone’s home and neighborhood. Our team and Trade Partners maintain an organized jobsite and respect the Client’s property and daily life.',
  },
  {
    title: 'Referrable by Design',
    text: 'Our goal is to provide an experience Clients are comfortable recommending to friends and family, and one our Trade Partners and professional relationships are confident recommending to their own Clients.',
  },
]

export default function WhyChoose() {
  return (
    <section className="bg-cream py-20">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-px w-6 bg-current" />
            Why Choose VCS
          </span>
          <p className="mt-5 text-lg leading-relaxed text-ink/75">
            We believe the best measure of a contractor is whether Clients, Trade Partners, and local
            professionals are comfortable recommending them to the people they know. VCS has built its
            business around earning that trust — through partnerships rather than pressure,
            transparency rather than sales tactics, and a process designed to establish clear
            expectations before construction begins.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <Reveal key={reason.title} delay={(index % 3) * 0.08}>
              <div className="flex h-full flex-col rounded-3xl border border-brand-100 bg-white p-7 shadow-sm">
                <FiCheckCircle className="h-7 w-7 text-brand-600" />
                <h3 className="mt-4 text-lg text-ink">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{reason.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <Button to="/services" variant="outline">
            Explore Our Services
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
