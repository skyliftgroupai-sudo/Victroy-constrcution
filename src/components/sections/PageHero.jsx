import { motion } from 'framer-motion'
import Button from '../ui/Button'

export default function PageHero({
  eyebrow,
  title,
  intro,
  image = '/images/home-exterior.jpg',
  ctas = true,
}) {
  return (
    <section className="relative flex min-h-[68vh] items-end overflow-hidden pb-16 pt-40">
      <div className="absolute inset-0">
        <img src={image} alt="" className="h-full w-full object-cover" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      <div className="container-page relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl text-cream"
        >
          {eyebrow && (
            <span className="eyebrow text-brand-200">
              <span className="h-px w-6 bg-current" />
              {eyebrow}
            </span>
          )}
          <h1 className="mt-4 text-4xl leading-[1.1] sm:text-5xl md:text-[3.4rem]">{title}</h1>
          {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/85">{intro}</p>}
          {ctas && (
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button to="/start-my-project" variant="light">
                Start My Project
              </Button>
              <Button to="/our-process" variant="outlineLight">
                View Our Process
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
