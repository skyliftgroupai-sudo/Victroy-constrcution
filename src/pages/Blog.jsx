import { Link } from 'react-router-dom'
import { FiArrowRight, FiCalendar, FiClock } from 'react-icons/fi'
import Seo from '../components/Seo'
import PageHero from '../components/sections/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import CtaBanner from '../components/sections/CtaBanner'
import { posts, formatDate } from '../data/blog'

export default function Blog() {
  const [featured, ...rest] = posts

  return (
    <>
      <Seo
        title="Blog"
        path="/blog"
        description="Planning guides and practical advice on custom homes, additions, ADUs, remodeling, and outdoor living in Northeast Florida from Victory Construction Services."
      />

      <PageHero
        eyebrow="VCS Blog"
        title="Guidance for Planning, Building & Remodeling"
        intro="Practical reading on the projects we build most — written to help you make better decisions before you build."
        image="/images/framing.jpg"
        ctas={false}
      />

      
      <section className="bg-cream py-20">
        <div className="container-page">
          <Reveal>
            <Link
              to={`/blog/${featured.slug}`}
              className="group grid overflow-hidden rounded-[2rem] bg-white shadow-card transition hover:-translate-y-1 hover:shadow-soft lg:grid-cols-2"
            >
              <div className="h-64 overflow-hidden lg:h-auto">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-10">
                <span className="inline-flex w-fit rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-brand-600">
                  {featured.category}
                </span>
                <h2 className="mt-4 text-3xl leading-tight text-ink">{featured.title}</h2>
                <p className="mt-4 leading-relaxed text-ink/70">{featured.excerpt}</p>
                <div className="mt-6 flex items-center gap-5 text-sm text-ink/50">
                  <span className="flex items-center gap-2">
                    <FiCalendar className="h-4 w-4" />
                    {formatDate(featured.date)}
                  </span>
                  <span className="flex items-center gap-2">
                    <FiClock className="h-4 w-4" />
                    {featured.readTime}
                  </span>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                  Read article
                  <FiArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      
      <section className="bg-cream-dark py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Latest Articles" title="More reading from VCS" />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, index) => (
              <Reveal key={post.slug} delay={(index % 3) * 0.08}>
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
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-600">
                      {post.category}
                    </span>
                    <h3 className="mt-3 text-xl leading-snug text-ink">{post.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">{post.excerpt}</p>
                    <div className="mt-5 flex items-center gap-4 text-xs text-ink/50">
                      <span className="flex items-center gap-1.5">
                        <FiCalendar className="h-3.5 w-3.5" />
                        {formatDate(post.date)}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FiClock className="h-3.5 w-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
