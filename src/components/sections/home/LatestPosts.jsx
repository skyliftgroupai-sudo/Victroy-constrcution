import { Link } from 'react-router-dom'
import { FiArrowRight, FiCalendar } from 'react-icons/fi'
import SectionHeading from '../../ui/SectionHeading'
import Reveal from '../../ui/Reveal'
import Button from '../../ui/Button'
import { posts, formatDate } from '../../../data/blog'

export default function LatestPosts() {
  const latest = posts.slice(0, 3)

  return (
    <section className="bg-cream py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="From the Blog"
          title="Advice to help you plan with confidence"
          intro="Practical reading on the projects we build most across Northeast Florida."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {latest.map((post, index) => (
            <Reveal key={post.slug} delay={(index % 3) * 0.1}>
              <Link
                to={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-card transition hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="flex items-center gap-2 text-xs text-ink/50">
                    <FiCalendar className="h-3.5 w-3.5" />
                    {formatDate(post.date)}
                  </span>
                  <h3 className="mt-3 text-xl leading-snug text-ink">{post.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">{post.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                    Read article
                    <FiArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button to="/blog" variant="outline">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  )
}
