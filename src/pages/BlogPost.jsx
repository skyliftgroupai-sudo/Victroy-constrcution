import { Link, Navigate, useParams } from 'react-router-dom'
import { FiArrowLeft, FiArrowRight, FiCalendar, FiClock } from 'react-icons/fi'
import { motion } from 'framer-motion'
import Seo from '../components/Seo'
import Reveal from '../components/ui/Reveal'
import Button from '../components/ui/Button'
import CtaBanner from '../components/sections/CtaBanner'
import { posts, getPost, formatDate } from '../data/blog'
import { company } from '../data/site'

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPost(slug)

  if (!post) return <Navigate to="/blog" replace />

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <>
      <Seo
        title={post.title}
        path={`/blog/${post.slug}`}
        description={post.excerpt}
        image={`${company.website}${post.image}`}
      />

      
      <section className="relative flex min-h-[60vh] items-end overflow-hidden pb-14 pt-40">
        <div className="absolute inset-0">
          <img src={post.image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/25" />
        </div>
        <div className="container-page relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl text-cream"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-cream/80 transition hover:text-cream"
            >
              <FiArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
            <span className="mt-5 inline-flex rounded-full bg-cream/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-cream">
              {post.category}
            </span>
            <h1 className="mt-4 text-4xl leading-tight sm:text-5xl">{post.title}</h1>
            <div className="mt-5 flex items-center gap-5 text-sm text-cream/80">
              <span className="flex items-center gap-2">
                <FiCalendar className="h-4 w-4" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-2">
                <FiClock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      
      <section className="bg-cream py-16 sm:py-20">
        <div className="container-page">
          <Reveal className="mx-auto max-w-3xl">
            <p className="text-xl leading-relaxed text-ink/80">{post.excerpt}</p>
            <div className="mt-8 space-y-8">
              {post.content.map((block, index) => (
                <div key={index}>
                  {block.heading && (
                    <h2 className="mb-3 text-2xl text-ink">{block.heading}</h2>
                  )}
                  <p className="leading-relaxed text-ink/75">{block.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-3xl border border-brand-100 bg-white p-7 shadow-sm">
              <p className="text-ink/75">
                Thinking about a project like this? Learn more about our{' '}
                <Link to={post.service} className="font-semibold text-brand-600 underline">
                  {post.category}
                </Link>{' '}
                service, or start your project and we will help determine the right next step.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Button to="/start-my-project">Start My Project</Button>
                <Button to={post.service} variant="outline">
                  View Service
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      
      <section className="bg-cream-dark py-20">
        <div className="container-page">
          <h2 className="text-center text-3xl text-ink sm:text-4xl">Keep Reading</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {related.map((rel, index) => (
              <Reveal key={rel.slug} delay={(index % 3) * 0.08}>
                <Link
                  to={`/blog/${rel.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-card transition hover:-translate-y-1 hover:shadow-soft"
                >
                  <div className="h-44 overflow-hidden">
                    <img
                      src={rel.image}
                      alt={rel.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-600">
                      {rel.category}
                    </span>
                    <h3 className="mt-2 text-lg leading-snug text-ink">{rel.title}</h3>
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

      <CtaBanner />
    </>
  )
}
