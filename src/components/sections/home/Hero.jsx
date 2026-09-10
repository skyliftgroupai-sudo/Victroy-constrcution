import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import Button from '../../ui/Button'
import { company } from '../../../data/site'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/hero-home.jpg"
          alt="A custom home in Northeast Florida"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/35" />
      </div>

      <div className="container-page relative pb-28 pt-36 text-center text-cream">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow justify-center text-cream/90"
        >
          <span className="h-px w-6 bg-current" />
          {company.descriptor}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-8 max-w-3xl text-4xl leading-tight sm:text-5xl"
        >
          Your Project — Thoroughly Planned. Professionally Built.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-cream/85"
        >
          {company.hook}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button to="/start-my-project" variant="light" className="px-8 py-3.5 text-base">
            Start My Project
            <FiArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>

      
      <div className="absolute inset-x-0 bottom-0 border-t border-cream/15 bg-black/45 backdrop-blur-sm">
        <div className="container-page flex flex-col items-center justify-center gap-3 py-3 text-center text-xs tracking-wide text-cream/85 sm:flex-row sm:gap-8 sm:text-sm lg:gap-14">
          <a href={company.phoneHref} className="font-semibold hover:text-cream">
            {company.phone}
          </a>
          <span className="hidden text-cream/30 sm:inline">|</span>
          <span className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            {['Custom Homes', 'Metal Homes', 'Additions', 'Major Remodels', 'Outdoor Living'].map(
              (item, i, arr) => (
                <span key={item} className="flex items-center gap-x-3">
                  {item}
                  {i < arr.length - 1 && <span className="text-cream/40">·</span>}
                </span>
              ),
            )}
          </span>
          <span className="hidden text-cream/30 sm:inline">|</span>
          <span className="font-semibold">CBC #{company.license.replace('CBC', '')}</span>
        </div>
      </div>
    </section>
  )
}
