import { Link } from 'react-router-dom'
import { FiMail, FiMapPin, FiPhone, FiStar } from 'react-icons/fi'
import { company } from '../../data/site'
import Button from '../ui/Button'

const serviceLinks = [
  { label: 'Custom Homes', to: '/services/custom-homes' },
  { label: 'Major Home Remodeling & Restoration', to: '/services/major-home-remodeling' },
  { label: 'Room Additions', to: '/services/room-additions' },
  { label: 'In-Law Cottages & ADUs', to: '/services/in-law-suites-cottages' },
  { label: 'Metal Framed Homes', to: '/services/metal-home-construction' },
  { label: 'Kitchen & Bathroom Remodeling', to: '/services/kitchen-bathroom-remodeling' },
  { label: 'Outdoor Structures & Living', to: '/services/outdoor-living' },
]

const companyLinks = [
  { label: 'Our Process', to: '/our-process' },
  { label: 'Projects', to: '/projects' },
  { label: 'Blog', to: '/blog' },
  { label: 'Referrals', to: '/referrals' },
  { label: 'Reviews', to: company.reviewUrl, external: true },
  { label: 'Service Areas', to: '/service-areas' },
]

const resourceLinks = [
  { label: 'Referral Appreciation Program', to: '/referrals' },
  { label: 'Refer a Project', to: '/referrals' },
  { label: 'Planning Guides', to: '/resources' },
  { label: 'Common Questions', to: '/resources#faq' },
]

function Column({ title, children }) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-cream/60">{title}</h3>
      <ul className="mt-5 space-y-3 text-sm text-cream/90">{children}</ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-brand-800 text-cream">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        
        <div>
          <span className="inline-flex items-center rounded-xl bg-white px-4 py-3 shadow-card">
            <img src="/images/logo.png" alt={`${company.shortName} logo`} className="h-10 w-auto" />
          </span>
          <ul className="mt-5 space-y-3 text-sm text-cream/90">
            <li>
              <a href={company.phoneHref} className="flex items-center gap-3 hover:text-cream">
                <FiPhone className="h-4 w-4 text-brand-200" />
                {company.phone}
              </a>
            </li>
            <li>
              <a href={company.emailHref} className="flex items-center gap-3 hover:text-cream">
                <FiMail className="h-4 w-4 text-brand-200" />
                {company.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <FiMapPin className="mt-1 h-4 w-4 shrink-0 text-brand-200" />
              <span>
                {company.office.lines[0]}
                <br />
                {company.office.lines[1]}
              </span>
            </li>
          </ul>
          <Button to="/start-my-project" variant="light" className="mt-6 px-5 py-2.5">
            Start My Project
          </Button>
          <p className="mt-5 text-xs text-cream/60">
            Florida Certified Building Contractor
            <br />
            {company.license}
          </p>
        </div>

        <Column title="Our Services">
          {serviceLinks.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className="link-underline hover:text-cream">
                {link.label}
              </Link>
            </li>
          ))}
        </Column>

        <Column title="Company Hub">
          {companyLinks.map((link) =>
            link.external ? (
              <li key={link.label}>
                <a href={link.to} target="_blank" rel="noreferrer" className="link-underline hover:text-cream">
                  {link.label}
                </a>
              </li>
            ) : (
              <li key={link.label}>
                <Link to={link.to} className="link-underline hover:text-cream">
                  {link.label}
                </Link>
              </li>
            ),
          )}
        </Column>

        <Column title="Resources & Referrals">
          {resourceLinks.map((link) => (
            <li key={link.label}>
              <Link to={link.to} className="link-underline hover:text-cream">
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={company.reviewUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center gap-2 rounded-full bg-cream/10 px-4 py-2 text-xs font-semibold text-cream transition hover:bg-cream/20"
            >
              <FiStar className="h-4 w-4 text-yellow-300" />
              Leave us a Google review
            </a>
          </li>
        </Column>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p>Serving {company.region} · {company.descriptor}</p>
        </div>
      </div>
    </footer>
  )
}
