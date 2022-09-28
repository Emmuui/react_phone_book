export const ROUTES = {
  login: '/login',
  homePage: { path: '/' },
  dynamic: {
    contact_detail: (id = ':id') => `contact/${id}`
  },
  contactCreate: { path: '/add' },
};
