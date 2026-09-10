import { Helmet } from 'react-helmet-async'
import { company, serviceAreas } from '../data/site'

const SITE_URL = company.website
const DEFAULT_IMAGE = `${SITE_URL}/images/home-exterior.jpg`

export default function Seo({ title, description, path = '/', image = DEFAULT_IMAGE }) {
  const fullTitle = title
    ? `${title} | ${company.shortName}`
    : `${company.shortName} | Custom Homes & Remodeling in ${company.region}`
  const url = `${SITE_URL}${path}`

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    name: company.name,
    image: DEFAULT_IMAGE,
    url: SITE_URL,
    telephone: company.phone,
    email: company.email,
    founder: company.owner,
    slogan: company.hook,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.office.lines[0],
      addressLocality: 'St. Johns',
      addressRegion: 'FL',
      postalCode: '32259',
      addressCountry: 'US',
    },
    areaServed: serviceAreas.map((area) => ({ '@type': 'Place', name: area })),
    identifier: `Florida Certified Building Contractor ${company.license}`,
  }

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={company.shortName} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  )
}
