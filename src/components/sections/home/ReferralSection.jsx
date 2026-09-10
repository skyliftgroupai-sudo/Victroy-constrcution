import { FiGift } from 'react-icons/fi'
import Reveal from '../../ui/Reveal'
import Button from '../../ui/Button'
import { company } from '../../../data/site'

export default function ReferralSection() {
  return (
    <section className="bg-cream py-20">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl rounded-[2.5rem] border border-brand-100 bg-white p-8 text-center shadow-card sm:p-14">
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand-50 text-brand-600">
            <FiGift className="h-6 w-6" />
          </span>
          <h2 className="mt-6 text-3xl leading-tight text-ink sm:text-4xl">
            The greatest compliment we can receive is your referral
          </h2>
          <p className="mt-5 leading-relaxed text-ink/70">
            So much of our business is built through relationships — homeowners, neighbors, clients,
            trade partners, and friends who trust VCS enough to put our name in front of someone they
            care about. When you introduce us, we take that responsibility seriously.
          </p>
          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.15em] text-brand-600">
            — {company.owner}, Owner
          </p>
          <p className="mt-6 rounded-2xl bg-brand-50 px-6 py-4 text-sm text-ink/80">
            To show our appreciation, qualified referrals may be eligible for a{' '}
            <strong className="text-brand-700">$250–$1,000+ referral reward</strong> through the VCS
            Referral Appreciation Program.
          </p>
          <div className="mt-8">
            <Button to="/resources#referral">Refer a Friend</Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
