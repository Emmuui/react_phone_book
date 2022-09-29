export const ROUTES = {
  login: '/login',
  homePage: '/',
  dynamic: {
    contact_detail: (id = ':id') => `contact/${id}`
  },
  contactCreate: '/add',
};
