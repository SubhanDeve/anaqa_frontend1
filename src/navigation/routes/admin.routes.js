const routes = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: 'dashboard'
  },
  {
    title: 'Salon',
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
        path: '/services/subservices',
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
        path: '/reviews/salonreviews',
        icon: ''
      },
      {
        title: 'Professional Reviews',
        path: '/reviews/professionalreviews',
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
        path: '/requests/salonregistration',
        icon: ''
      },
      {
        title: 'Service Addition',
        path: '/requests/serviceaddition',
        icon: ''
      },
      {
        title: 'Sub Service Addition',
        path: '/requests/subserviceaddition',
        icon: ''
      },
      {
        title: 'Pricing Change Request',
        path: '/requests/pricingchangerequest',
        icon: ''
      },
      {
        title: 'Promotion Request',
        path: '/requests/promotionrequest',
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
