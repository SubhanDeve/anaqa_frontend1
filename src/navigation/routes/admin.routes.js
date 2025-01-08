const routes = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: 'dashboard'
  },
  {
    title: 'Saloon',
    path: '/salons',
    icon: 'saloon',
  },
  {
    title: 'Users',
    path: '/users',
    icon: 'users',
  },
  {
    title: 'Bookings',
    path: '/bookings',
    icon: 'bookings',
  },
  {
    title: 'Services',
    icon: 'services',
    children: [
      {
        title: 'Services',
        path: '/services',
        icon: ''
      },
      {
        title: 'Sub Services',
        path: '/subservices',
        icon: ''
      },
    ]
  },
  {
    title: 'Promotions',
    path: '/promotions',
    icon: 'promotions',
  },
  {
    title: 'Reviews',
    icon: 'reviews',
    children: [
      {
        title: 'Salon Reviews',
        path: '/reviews',
        icon: ''
      },
      {
        title: 'Professional Reviews',
        path: '/professional',
        icon: ''
      },
    ]
  },
  {
    title: 'Requests',
    icon: 'requests',
    children: [
      {
        title: 'Salon Registration',
        path: '/requests',
        icon: ''
      },
      {
        title: 'Sub Service Addition',
        path: '#',
        icon: ''
      },
      {
        title: 'Service Addition',
        path: '#',
        icon: ''
      },
      {
        title: 'Pricing Change Request',
        path: '#',
        icon: ''
      },
      {
        title: 'Promotion Request',
        path: '#',
        icon: ''
      },
    ]
  },
  {
    title: 'Complaints',
    path: '/complaints',
    icon: 'complaints',
  },
  {
    title: 'Contract',
    path: '/contract',
    icon: 'contract',
  },
  {
    title: 'Support',
    path: '/support',
    icon: 'support',
  },
  {
    title: 'FAQs',
    path: '/faqs',
    icon: 'faqs',
  },
]

export default routes
