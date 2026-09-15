export const services = [
  {
    slug: 'custom-homes',
    title: 'Custom Homes',
    blurb:
      'Custom homes thoughtfully planned around your property, lifestyle, priorities, and the demands of building in Northeast Florida.',
    image: '/images/home-exterior.jpg',
  },
  {
    slug: 'major-home-remodeling',
    title: 'Major Home Remodeling & Restoration',
    blurb:
      'Reworking, updating, and transforming existing homes with more functional layouts, open living spaces, improved storage, updated materials, and thoughtful design that better supports the way our Clients live today.',
    image: '/images/major-remodeling.jpg',
  },
  {
    slug: 'room-additions',
    title: 'Room Additions',
    blurb:
      'Adding the space your home needs while thoughtfully integrating new construction with the existing home, creating more functional layouts, better flow, useful storage, and living space designed around how you live today.',
    image: '/images/room-additions.jpg',
  },
  {
    slug: 'in-law-suites-cottages',
    title: 'In-Law Cottages & ADUs',
    blurb:
      'Independent living spaces designed to keep family close while providing privacy, comfort, and thoughtful use of every square foot, and seamless integration with the existing property.',
    image: '/images/living-room.jpg',
  },
  {
    slug: 'metal-home-construction',
    title: 'Metal Framed Homes',
    blurb:
      'Steel-framed custom homes and alternative metal-building solutions designed for durability, flexibility, and Florida conditions.',
    image: '/images/metal-homes.jpg',
  },
  {
    slug: 'kitchen-bathroom-remodeling',
    title: 'Kitchen & Bathroom Remodeling',
    blurb:
      'Improving the function, comfort, durability, and appearance of the spaces you use every day, with smarter layouts, updated materials, and current design features tailored to how you live.',
    image: '/images/kitchen-remodel.jpg',
  },
  {
    slug: 'outdoor-living',
    title: 'Outdoor Structures & Living',
    blurb:
      'Creating substantial outdoor living spaces with covered structures, fireplaces, summer kitchens, and entertainment areas designed for Florida living.',
    image: '/images/outdoor-living.jpg',
  },
]

export const getService = (slug) => services.find((s) => s.slug === slug)
