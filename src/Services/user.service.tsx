import authHeader from './auth-header';

const API_URL = 'http://localhost:8000/users/';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createUser = async (user: any) => {
  const token: string = authHeader();
  const res = await fetch(`${API_URL}register`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  return res;
};
