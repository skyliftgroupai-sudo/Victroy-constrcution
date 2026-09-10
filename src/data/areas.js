export const areas = [
  {
    slug: 'saint-johns',
    name: 'Saint Johns',
    county: 'St. Johns County, FL · 32259',
    image: '/images/home-exterior.jpg',
    intro:
      'Saint Johns is home base for VCS. We help homeowners across Fruit Cove, Julington Creek, and Switzerland plan and build custom homes, additions, and major remodels with a clear, guided process.',
    localNote:
      'From established neighborhoods to newer communities, Saint Johns homes come with their own site conditions, HOA requirements, and permitting steps. VCS knows the local process and plans around it before construction begins.',
  },
  {
    slug: 'nocatee',
    name: 'Nocatee',
    county: 'Ponte Vedra, St. Johns County, FL · 32081',
    image: '/images/living-room.jpg',
    intro:
      'For Nocatee homeowners, VCS helps plan and build additions, remodels, outdoor living, and custom projects that work within the community and its guidelines.',
    localNote:
      'Master-planned communities like Nocatee often have detailed architectural review and HOA requirements. VCS helps coordinate approvals as part of the planning process.',
  },
  {
    slug: 'ponte-vedra',
    name: 'Ponte Vedra',
    county: 'St. Johns County, FL · 32081',
    image: '/images/hero-home.jpg',
    intro:
      'In Ponte Vedra, VCS helps homeowners plan custom homes, additions, and high-quality remodels with the documentation and coordination these projects deserve.',
    localNote:
      'Near-coastal building brings specific considerations — drainage, durability, and HOA design standards. VCS accounts for them in the plan so there are fewer surprises in the field.',
  },
  {
    slug: 'ponte-vedra-beach',
    name: 'Ponte Vedra Beach',
    county: 'St. Johns County, FL · 32082',
    image: '/images/outdoor-living.jpg',
    intro:
      'VCS serves Ponte Vedra Beach, Sawgrass, and Marsh Landing homeowners planning custom homes, remodels, and outdoor living built for coastal Florida life.',
    localNote:
      'Coastal properties need durable materials and careful drainage and structural planning. VCS builds those considerations into the scope from the start.',
  },
  {
    slug: 'palm-valley',
    name: 'Palm Valley',
    county: 'St. Johns County, FL · 32082',
    image: '/images/framing.jpg',
    intro:
      'VCS serves Palm Valley homeowners planning custom homes, room additions, in-law suites, and remodels, with a clear process from first idea to final walkthrough.',
    localNote:
      'Palm Valley properties vary widely in lot size and site conditions. Early feasibility review helps confirm access, utilities, and setbacks before the budget is set.',
  },
  {
    slug: 'world-golf-village',
    name: 'World Golf Village',
    county: 'St. Johns County, FL · 32092',
    image: '/images/major-remodeling.jpg',
    intro:
      'VCS serves World Golf Village and North St. Augustine homeowners planning custom homes, additions, and remodels, with the planning and communication that keep a project on track.',
    localNote:
      'Community guidelines and site specifics shape what is possible here. VCS reviews the path early so the design and budget reflect reality.',
  },
  {
    slug: 'silverleaf',
    name: 'SilverLeaf',
    county: 'St. Johns County, FL · 32092',
    image: '/images/room-additions.jpg',
    intro:
      'In the growing SilverLeaf community, VCS helps homeowners plan additions, outdoor living, and custom projects that fit newer homes and neighborhood standards.',
    localNote:
      'Newer communities carry specific architectural review and permitting steps. VCS coordinates those approvals as part of planning.',
  },
  {
    slug: 'palencia',
    name: 'Palencia',
    county: 'St. Johns County, FL · 32095',
    image: '/images/kitchen-remodel.jpg',
    intro:
      'VCS serves Palencia and the US-1 North corridor with custom homes, remodels, and additions planned around the community and each property.',
    localNote:
      'Palencia’s design guidelines and HOA review shape exterior work. VCS plans finishes and approvals to fit the neighborhood.',
  },
  {
    slug: 'north-st-augustine',
    name: 'North St. Augustine',
    county: 'St. Johns County, FL · 32084 / 32095',
    image: '/images/whole-home.jpg',
    intro:
      'VCS helps North St. Augustine homeowners plan and build custom homes, additions, and whole-home remodels with organized, accountable project management.',
    localNote:
      'From older homes to new construction, North St. Augustine projects benefit from early feasibility and permitting review. VCS handles that up front.',
  },
  {
    slug: 'vilano-beach',
    name: 'Vilano Beach',
    county: 'St. Johns County, FL · 32084',
    image: '/images/bathroom-remodel.jpg',
    intro:
      'In the Vilano Beach area, VCS helps homeowners plan coastal-ready custom homes, remodels, and outdoor living built to last in Florida weather.',
    localNote:
      'Coastal and near-shore building calls for durable materials, drainage, and structural planning. VCS builds those into the scope early.',
  },
  {
    slug: 'jacksonville-beach',
    name: 'Jacksonville Beach',
    county: 'Duval County, FL · 32250',
    image: '/images/living-room.jpg',
    intro:
      'VCS serves Jacksonville Beach homeowners planning remodels, additions, outdoor living, and custom projects designed for beachside living.',
    localNote:
      'Beachside properties need durable finishes and careful planning around lot size and access. VCS accounts for that from the start.',
  },
  {
    slug: 'neptune-beach',
    name: 'Neptune Beach',
    county: 'Duval County, FL · 32266',
    image: '/images/home-exterior.jpg',
    intro:
      'In Neptune Beach, VCS helps homeowners reimagine established homes with additions, remodels, and outdoor living that fit the neighborhood’s character.',
    localNote:
      'Many Neptune Beach homes have great bones and room to improve. VCS plans structural, system, and finish work so the update fits the existing home.',
  },
  {
    slug: 'atlantic-beach',
    name: 'Atlantic Beach',
    county: 'Duval County, FL · 32233',
    image: '/images/kitchen.jpg',
    intro:
      'VCS serves Atlantic Beach and the Mayport area with custom homes, additions, and remodels planned around each property and coastal conditions.',
    localNote:
      'Coastal considerations — drainage, durability, and structure — matter here. VCS builds those into the plan before construction begins.',
  },
  {
    slug: 'intracoastal-east-jacksonville',
    name: 'Intracoastal / East Jacksonville',
    county: 'Duval County, FL · 32224 / 32225',
    image: '/images/major-remodeling.jpg',
    intro:
      'Across the Intracoastal and East Jacksonville — Queens Harbour, Girvin, and the Kernan area — VCS plans and builds custom homes, additions, and major remodels.',
    localNote:
      'These neighborhoods range from established homes to gated communities with architectural review. VCS coordinates approvals and site planning up front.',
  },
]

export const getArea = (slug) => areas.find((a) => a.slug === slug)
