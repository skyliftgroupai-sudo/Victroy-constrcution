import { FiCheck, FiGift } from 'react-icons/fi'
import Seo from '../components/Seo'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import Button from '../components/ui/Button'
import Accordion from '../components/ui/Accordion'
import ReferralForm from '../components/ReferralForm'
import { company } from '../data/site'
import { goodReferralList, howItWorks, programRules } from '../data/referral'

export default function Referral() {
  const ruleItems = programRules.map((r) => ({ title: r.title, body: r.body }))

  return (
    <>
      <Seo
        title="Referral Appreciation Program"
        path="/referrals"
        description="Know someone in Northeast Florida planning a custom home, addition, or major renovation? Refer a project to Victory Construction Services — qualified referrals may earn $250–$1,000+."
      />

      
      <section className="relative overflow-hidden pb-16 pt-40 text-cream">
        <div className="absolute inset-0">
          <img src="/images/home-exterior.jpg" alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/65 to-black/55" />
        </div>
        <div className="container-page relative">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-cream/10 text-brand-200">
              <FiGift className="h-6 w-6" />
            </span>
            <h1 className="mt-6 text-4xl leading-tight sm:text-5xl">Referral Appreciation Program</h1>
            <p className="mt-4 font-serif text-2xl text-brand-200">
              Earn $250–$1,000+ for a Qualified Construction Referral
            </p>
            <p className="mt-6 leading-relaxed text-cream/85">
              Know someone in Northeast Florida planning a major renovation, addition, custom home, or
              construction project that needs a licensed contractor? Victory Construction Services
              accepts referrals for projects that require professional planning, management,
              coordination, permitting support, and a State Certified Building Contractor.
            </p>
            <p className="mt-4 text-sm text-cream/70">
              Qualified referrals may be eligible for a thank-you reward ranging from $250–$1,000+,
              depending on the project type, contract value, referral timing, and VCS approval.
            </p>
            <p className="mt-6 text-sm font-semibold text-cream">
              Victory Construction Services · State Certified Building Contractor · {company.license}
            </p>
            <div className="mt-8">
              <Button href="#refer-form" variant="light">
                Refer a Project
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      
      <section className="bg-cream py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-current" />
              Referrals Mean More Than New Business
            </span>
            <blockquote className="mt-5 font-serif text-2xl leading-snug text-ink">
              “The greatest compliment we can receive is a referral from someone who trusts us. So
              much of our business has been built through relationships — homeowners, neighbors,
              Clients, Trade Partners, and friends who were willing to put their name behind ours.”
            </blockquote>
            <p className="mt-5 leading-relaxed text-ink/70">
              When you introduce VCS to a friend, neighbor, Client, or family member, we take that
              responsibility seriously. Our goal is not just to complete one project — it is to be your
              contractor for years, the builder you trust and feel confident recommending. If you know
              someone thinking about building, adding, or renovating, we would be grateful for the
              introduction.
            </p>
            <p className="mt-6 font-serif text-2xl text-brand-700">David Vick</p>
            <p className="text-sm uppercase tracking-[0.15em] text-brand-600">Owner, VCS</p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[2rem] bg-brand-700 p-8 text-center text-cream shadow-soft">
              <span className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-cream text-3xl font-serif text-brand-700">
                {company.initials}
              </span>
              <p className="mt-6 leading-relaxed text-cream/85">
                “We appreciate the trust, and we will work hard to earn it.”
              </p>
              <p className="mt-4 text-sm font-semibold text-cream">— David Vick, Owner</p>
            </div>
          </Reveal>
        </div>
      </section>

      
      <section className="bg-cream-dark py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="What Makes a Good Referral?"
            title="Best suited for projects that require professional oversight"
            intro="VCS is best suited for construction projects that require professional planning, management, and permitting. A good referral may include:"
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-2">
            {goodReferralList.map((item) => (
              <Reveal key={item}>
                <div className="flex items-start gap-3 rounded-2xl border border-brand-100 bg-white p-4 text-sm text-ink/80">
                  <FiCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  {item}
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-ink/60">
            Smaller projects may still be reviewed. If a project is better suited for a specialty
            trade, VCS may make an introduction to a trusted Trade Partner instead. Smaller projects
            may not qualify for the standard referral reward.
          </p>

          <div className="mt-16">
            <SectionHeading eyebrow="How the Program Works" title="Four simple steps" />
            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-4">
              {howItWorks.map((step, index) => (
                <Reveal key={step.number} delay={(index % 4) * 0.08}>
                  <div className="h-full rounded-3xl border border-brand-100 bg-white p-6 shadow-sm">
                    <span className="font-serif text-4xl text-brand-200">{step.number}</span>
                    <h3 className="mt-3 text-lg text-ink">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/70">{step.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      
      <section id="refer-form" className="bg-cream py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Refer a Project"
            title="Make the introduction below"
            intro="Know someone who may be a good fit for VCS? You do not need to know every detail — provide whatever information you have, and our team can take it from there."
          />
          <div className="mx-auto mt-12 max-w-3xl">
            <ReferralForm />
          </div>
        </div>
      </section>

      
      <section className="bg-cream-dark py-20">
        <div className="container-page">
          <SectionHeading eyebrow="The Fine Print" title="Program Rules & Disclosures" />
          <div className="mx-auto mt-12 max-w-3xl">
            <Accordion items={ruleItems} defaultOpen={-1} />
          </div>
        </div>
      </section>

      
      <section className="bg-brand-800 py-16 text-cream">
        <div className="container-page text-center">
          <h2 className="text-2xl">Questions about the referral program?</h2>
          <p className="mt-3 text-cream/85">Contact Victory Construction Services.</p>
          <div className="mt-5 flex flex-col items-center justify-center gap-2 text-sm text-cream/85 sm:flex-row sm:gap-6">
            <a href={company.phoneHref} className="hover:text-cream">{company.phone}</a>
            <a href={company.emailHref} className="hover:text-cream">{company.email}</a>
            <span>{company.license}</span>
          </div>
        </div>
      </section>
    </>
  )
}
