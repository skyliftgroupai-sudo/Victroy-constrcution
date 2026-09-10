import { Link } from 'react-router-dom'
import { FiArrowRight, FiBookOpen, FiGift } from 'react-icons/fi'
import Seo from '../components/Seo'
import PageHero from '../components/sections/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import FaqAccordion from '../components/ui/FaqAccordion'
import Button from '../components/ui/Button'
import CtaBanner from '../components/sections/CtaBanner'
import { resourceGuides } from '../data/resources'
import { customHomeFaqs } from '../data/customHomes'
import { company } from '../data/site'

export default function Resources() {
  return (
    <>
      <Seo
        title="Resources & Referrals"
        path="/resources"
        description="Planning guides, common questions, and the VCS Referral Appreciation Program. Helpful resources to plan your Northeast Florida construction project with confidence."
      />

      <PageHero
        eyebrow="Resources & Referrals"
        title="Plan With Confidence, Refer With Trust"
        intro="Helpful reading to guide your decisions, plus a thank-you program for the homeowners who send friends and neighbors our way."
        image="/images/home-exterior.jpg"
        ctas={false}
      />

      
      <section className="bg-cream py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Planning Guides"
            title="Resources to help you plan"
            intro="Practical reading whether you are ready to build now or simply exploring your options."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {resourceGuides.map((guide, index) => (
              <Reveal key={guide.title} delay={(index % 2) * 0.1}>
                <Link
                  to={guide.to}
                  className="group flex h-full items-start gap-5 rounded-3xl border border-brand-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-card"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                    <FiBookOpen className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg text-ink">{guide.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/70">{guide.description}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                      Read article
                      <FiArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      
      <section id="referral" className="bg-cream-dark py-20">
        <div className="container-page">
          <Reveal className="mx-auto max-w-3xl rounded-[2.5rem] border border-brand-100 bg-white p-8 shadow-card sm:p-12">
            <span className="grid h-14 w-14 place-items-center rounded-full bg-brand-50 text-brand-600">
              <FiGift className="h-6 w-6" />
            </span>
            <h2 className="mt-6 text-3xl leading-tight text-ink sm:text-4xl">
              The VCS Referral Appreciation Program
            </h2>
            <p className="mt-5 leading-relaxed text-ink/75">
              The greatest compliment we can receive is a referral from someone who trusts us. So much
              of our business has been built through relationships — homeowners, neighbors, clients,
              trade partners, and friends who were willing to put their name behind ours.
            </p>
            <p className="mt-4 leading-relaxed text-ink/75">
              When you introduce VCS to a friend, neighbor, client, or family member, we take that
              responsibility seriously. Our goal is not just to complete one project. Our goal is to be
              your contractor for years — the builder you trust, the company you feel confident
              recommending, and the team that takes good care of the people you send our way.
            </p>
            <p className="mt-4 leading-relaxed text-ink/75">
              If you know someone thinking about building, adding, or renovating, we would be grateful
              for the introduction. We appreciate the trust, and we will work hard to earn it.
            </p>
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.15em] text-brand-600">
              — {company.owner}, Owner
            </p>
            <p className="mt-6 rounded-2xl bg-brand-50 px-6 py-4 text-sm text-ink/80">
              Qualified referrals may be eligible for a{' '}
              <strong className="text-brand-700">$250–$1,000+ referral reward</strong>.
            </p>
            <div className="mt-8">
              <Button to="/referrals">Refer a Project</Button>
            </div>
          </Reveal>
        </div>
      </section>

      
      <section id="faq" className="bg-cream py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Common Questions" title="Answers to the questions we hear most" />
          <div className="mx-auto mt-12 max-w-3xl">
            <FaqAccordion items={customHomeFaqs} />
          </div>
        </div>
      </section>

      
      <section className="bg-cream-dark py-20">
        <div className="container-page grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col justify-between rounded-3xl border border-brand-100 bg-white p-8 shadow-sm">
              <div>
                <h3 className="text-2xl text-ink">Trade Partners</h3>
                <p className="mt-3 text-ink/70">
                  We are always building our roster of vetted, licensed trade partners. If you take
                  pride in your craft and stand behind your work, we would like to hear from you.
                </p>
              </div>
              <div className="mt-6">
                <Button to="/start-my-project" variant="outline">
                  Trade Partner Application
                </Button>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-between rounded-3xl border border-brand-100 bg-white p-8 shadow-sm">
              <div>
                <h3 className="text-2xl text-ink">Careers at VCS</h3>
                <p className="mt-3 text-ink/70">
                  Interested in joining a team that values planning, communication, and doing right by
                  homeowners? Reach out about current opportunities.
                </p>
              </div>
              <div className="mt-6">
                <Button to="/start-my-project" variant="outline">
                  Employment Application
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
