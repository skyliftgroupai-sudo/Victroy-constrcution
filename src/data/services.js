export const services = [
  {
    slug: 'custom-homes',
    title: 'Custom Homes',
    blurb:
      "Building homes that meet the demands of today's families, stand up to Florida's elements, and bring one dream to life at a time.",
    image: '/images/home-exterior.jpg',
  },
  {
    slug: 'metal-home-construction',
    title: 'Metal Home Construction',
    blurb:
      "Steel-framed homes, barndominiums, and custom metal buildings built for flexibility, durability, and Florida's demanding environment.",
    image: '/images/metal-homes.jpg',
  },
  {
    slug: 'in-law-suites-cottages',
    title: 'In-Law Suites & Cottages',
    blurb:
      'Keeping families close while creating independent living spaces thoughtfully integrated into your property.',
    image: '/images/living-room.jpg',
  },
  {
    slug: 'room-additions',
    title: 'Room Additions',
    blurb:
      'Creating the space your growing family needs without leaving the home you love.',
    image: '/images/room-additions.jpg',
  },
  {
    slug: 'major-home-remodeling',
    title: 'Major Home Remodeling & Restoration',
    blurb:
      'Updating, restoring, and transforming your home to better fit the way you live today.',
    image: '/images/major-remodeling.jpg',
  },
  {
    slug: 'kitchen-bathroom-remodeling',
    title: 'Kitchen & Bathroom Remodeling',
    blurb:
      'Transforming the most-used spaces in your home for better function, comfort, and everyday living.',
    image: '/images/kitchen-remodel.jpg',
  },
  {
    slug: 'outdoor-living',
    title: 'Outdoor Structures & Living',
    blurb:
      'Extending your home outdoors with custom spaces built for entertaining, relaxing, and Florida living.',
    image: '/images/outdoor-living.jpg',
  },
]

export const getService = (slug) => services.find((s) => s.slug === slug)
