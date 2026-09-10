import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { FiChevronDown, FiGift, FiMenu, FiPhone, FiX } from 'react-icons/fi'
import { company, mainNav } from '../../data/site'
import Button from '../ui/Button'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
  }, [location.pathname])

  const headerTone =
    scrolled || mobileOpen
      ? 'bg-brand-700/95 backdrop-blur shadow-soft'
      : 'bg-gradient-to-b from-brand-800/80 to-transparent'

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${headerTone}`}>
      
      <div className="container-page grid grid-cols-[1fr_auto_1fr] items-center gap-4 py-3">
        <div className="flex items-center">
          <Button
            to="/referrals"
            variant="light"
            className="hidden whitespace-nowrap px-4 py-2 text-xs sm:inline-flex"
          >
            <FiGift className="h-4 w-4" />
            Share a Referral
          </Button>
          
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-full text-cream transition hover:bg-cream/10 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>

        <Link
          to="/"
          className="flex items-center justify-self-center rounded-xl bg-white px-4 py-2 shadow-card transition hover:-translate-y-0.5"
          aria-label={`${company.shortName} home`}
        >
          <img src="/images/logo.png" alt={company.shortName} className="h-9 w-auto sm:h-14" />
        </Link>

        <div className="flex items-center justify-end gap-3">
          <a
            href={company.phoneHref}
            className="hidden items-center gap-2 text-sm font-medium text-cream/90 transition hover:text-cream md:flex"
          >
            <FiPhone className="h-4 w-4" />
            {company.phone}
          </a>
          <Button
            to="/start-my-project"
            variant="light"
            className="whitespace-nowrap px-3.5 py-2 text-xs sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Start My Project
          </Button>
        </div>
      </div>

      
      <nav className="hidden justify-center gap-7 border-t border-cream/10 pb-3 pt-2 lg:flex">
        {mainNav.map((item) =>
          item.children ? (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-1 text-sm font-medium text-cream/90 transition hover:text-cream ${
                    isActive ? 'text-cream' : ''
                  }`
                }
              >
                {item.label}
                <FiChevronDown className="h-4 w-4" />
              </NavLink>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3"
                  >
                    <div className="overflow-hidden rounded-2xl bg-cream p-2 shadow-soft">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.to}
                          to={child.to}
                          className="block rounded-xl px-4 py-2.5 text-sm text-ink/80 transition hover:bg-brand-50 hover:text-brand-700"
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium text-cream/90 transition hover:text-cream ${
                  isActive ? 'text-cream' : ''
                }`
              }
            >
              {item.label}
            </NavLink>
          ),
        )}
      </nav>

      
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden lg:hidden"
          >
            <div className="container-page flex flex-col gap-1 pb-6 pt-2">
              {mainNav.map((item) => (
                <div key={item.label}>
                  <NavLink
                    to={item.to}
                    className="block rounded-xl px-3 py-3 font-medium text-cream/90 transition hover:bg-cream/10"
                  >
                    {item.label}
                  </NavLink>
                  {item.children && (
                    <div className="ml-3 border-l border-cream/20 pl-3">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.to}
                          to={child.to}
                          className="block rounded-lg px-3 py-2 text-sm text-cream/85 transition hover:text-cream"
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button to="/start-my-project" variant="light" className="mt-3">
                Start My Project
              </Button>
              <Button to="/referrals" variant="light" className="mt-2">
                <FiGift className="h-4 w-4" />
                Share a Referral
              </Button>
              <a
                href={company.phoneHref}
                className="mt-2 flex items-center justify-center gap-2 py-2 text-sm text-cream/90"
              >
                <FiPhone className="h-4 w-4" />
                {company.phone}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
