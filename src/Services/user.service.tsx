import authHeader from './auth-header';

type UserInput = {
  email: string;
  name: string;
  phone: string;
  password: string;
  organization: string;
};

const API_URL = 'http://localhost:8000/users/';

export const createUser = async (user: UserInput) => {
  const token: string = authHeader();
  const res = await fetch(`${API_URL}register`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: token,
    },
    body: JSON.stringify(user),
  });
  return res;
};
