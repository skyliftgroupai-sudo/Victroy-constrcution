import { FiStar } from 'react-icons/fi'
import SectionHeading from '../../ui/SectionHeading'
import Reveal from '../../ui/Reveal'
import Button from '../../ui/Button'
import { reviews, googleRating } from '../../../data/reviews'
import { company } from '../../../data/site'

export default function Testimonials() {
  return (
    <section className="bg-cream py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Proof"
          title="Our Clients Say It Best"
          intro="The best way to understand what it’s like to work with VCS is to hear from the Clients who already have. Here are a few of their experiences."
        />

        <Reveal className="mt-8 flex items-center justify-center gap-3">
          <span className="flex text-brand-600">
            {[...Array(googleRating.stars)].map((_, i) => (
              <FiStar key={i} className="h-6 w-6 fill-current" />
            ))}
          </span>
          <span className="text-sm font-semibold text-ink/70">{googleRating.label}</span>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((review, index) => (
            <Reveal key={index} delay={(index % 3) * 0.1}>
              <figure className="flex h-full flex-col rounded-3xl border border-brand-100 bg-white p-7 shadow-sm">
                <span className="flex text-brand-600">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="h-4 w-4 fill-current" />
                  ))}
                </span>
                <blockquote className="mt-4 flex-1 leading-relaxed text-ink/75">
                  “{review.quote}”
                </blockquote>
                <figcaption className="mt-5 text-sm font-semibold text-brand-700">
                  {review.name}
                  <span className="block font-normal text-ink/50">{review.location}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href={company.reviewUrl} variant="outline" target="_blank" rel="noreferrer">
            Read Reviews on Google
          </Button>
        </div>
      </div>
    </section>
  )
}
