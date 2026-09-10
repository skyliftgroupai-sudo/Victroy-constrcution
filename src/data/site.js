export const company = {
  name: 'Victory Construction Services, LLC',
  shortName: 'Victory Construction Services',
  initials: 'VCS',
  owner: 'David Vick',
  phone: '(904) 916-7577',
  phoneHref: 'tel:+19049167577',
  email: 'info@victory-built.net',
  emailHref: 'mailto:info@victory-built.net',
  website: 'https://www.victory-built.net',
  license: 'CBC1254293',
  reviewUrl: 'https://share.google/NX4cfbtLVSktbQcgT',
  descriptor: 'Your Northeast Florida Custom Home & Remodeling Contractor',
  hook: 'A better experience starts with the right relationship.',
  region: 'Northeast Florida',
  office: {
    label: 'Office / By Appointment',
    lines: ['100 Roberts Village Ct., Suite 901', 'St. Johns, FL 32259'],
  },
  mailing: {
    label: 'Mailing Address',
    lines: ['450-106 SR 13 #193', 'St. Johns, FL 32259'],
  },
  formEndpoint: 'https://formspree.io/f/your-form-id',
  quoteFormEmbed:
    'https://app.structur.com/embed?form=new_opportunity&id=a76a7e86-5652-4864-8bb0-b91cfb031c1a',
}

export const serviceAreas = [
  'Saint Johns, FL',
  'Palm Valley, FL',
  'Ponte Vedra, FL',
  'Nocatee, FL',
  'Mandarin, FL',
  'World Golf Village, FL',
]

export const serviceZips = [
  '32259',
  '32081',
  '32082',
  '32092',
  '32095',
  '32084',
  '32224',
  '32225',
  '32250',
  '32266',
  '32233',
  '32258',
  '32256',
]

export const mainNav = [
  { label: 'Home', to: '/' },
  {
    label: 'Services',
    to: '/services',
    children: [
      { label: 'Custom Homes', to: '/services/custom-homes' },
      { label: 'Metal Home Construction', to: '/services/metal-home-construction' },
      { label: 'In-Law Suites & Cottages', to: '/services/in-law-suites-cottages' },
      { label: 'Room Additions', to: '/services/room-additions' },
      { label: 'Major Home Remodeling & Restoration', to: '/services/major-home-remodeling' },
      { label: 'Kitchen & Bathroom Remodeling', to: '/services/kitchen-bathroom-remodeling' },
      { label: 'Outdoor Structures & Living', to: '/services/outdoor-living' },
    ],
  },
  { label: 'Our Process', to: '/our-process' },
  { label: 'Our Projects', to: '/projects' },
  { label: 'Blogs & Guides', to: '/blog' },
  { label: 'Referrals', to: '/referrals' },
]
