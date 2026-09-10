import { FiGift } from 'react-icons/fi'
import Reveal from '../../ui/Reveal'
import Button from '../../ui/Button'

export default function ShareSection() {
  return (
    <section className="bg-cream-dark py-20">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl">
          <div className="flex flex-col items-center rounded-[2rem] border border-brand-100 bg-white p-8 text-center shadow-card sm:p-12">
            <span className="grid h-14 w-14 place-items-center rounded-full bg-brand-50 text-brand-600">
              <FiGift className="h-6 w-6" />
            </span>
            <h2 className="mt-6 text-3xl leading-tight text-ink sm:text-4xl">
              Good Relationships Build Good Referrals
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-ink/70">
              Much of our business has grown through relationships — Clients, homeowners, neighbors,
              Trade Partners, and friends who trust VCS enough to recommend us to someone they know. To
              show our appreciation, qualified referrals may be eligible for a{' '}
              <strong className="text-brand-700">$250–$1,000+</strong> referral reward.
            </p>
            <div className="mt-8 flex justify-center">
              <Button to="/referrals">Refer a Project</Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
