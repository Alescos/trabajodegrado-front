import authHeader from './auth-header';

type UserInput = {
  email: string;
  name: string;
  phone: string;
  password: string;
  organization: string;
};
const token: string = authHeader();
const API_URL = 'http://localhost:8000/users/';

export const createUser = async (user: UserInput) => {
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

export const getAllUsers = async (id: number) => {
  const users: object[] = await fetch(`${API_URL}getAll/${id}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: token,
    },
  })
    .then((response) => response.json())
    .then((res) => {
      const { data } = res;
      return data;
    });
  return users;
};

export const getUser = async (id) => {
  const user = await fetch(`${API_URL}${id}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: token,
    },
  }).then((data) => data.json());
  return user;
};
