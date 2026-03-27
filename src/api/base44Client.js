import { products, syrups } from './mockData';

const createEntityProxy = (data) => ({
  list: (sortField) => {
    const sorted = [...data];
    if (sortField && sortField.startsWith('-')) {
      const field = sortField.slice(1);
      sorted.sort((a, b) => (b[field] || '').localeCompare(a[field] || ''));
    }
    return Promise.resolve(sorted);
  },
  filter: (criteria) => {
    const filtered = data.filter((item) =>
      Object.entries(criteria).every(([key, value]) => String(item[key]) === String(value))
    );
    return Promise.resolve(filtered);
  },
});

export const base44 = {
  entities: {
    Product: createEntityProxy(products),
    Syrup: createEntityProxy(syrups),
  },
  auth: {
    me: () => Promise.resolve({ id: 'local', name: 'Local User', role: 'user' }),
    logout: () => {},
    redirectToLogin: () => {},
  },
};
