export const BASE_URL = 'http://localhost:3000/';

export const registerApi = (name, email, phone, password) => fetch(`${BASE_URL}sign-up`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name, email, phone, password,
  }),
});

export const loginApi = (email, password) => fetch(`${BASE_URL}sign-in`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ email, password }),
});
