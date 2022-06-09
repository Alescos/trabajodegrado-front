/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */
const API_URL = 'http://localhost:8000/users/';

export const login = async (email: string, password: string) => {
  const user = {
    email,
    password,
  };
  try {
    const res = await fetch(`${API_URL}login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        alg: 'HS256',
        typ: 'JWT',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(user),
    }).then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
      return response.json();
    });
    localStorage.setItem('token', res.token);
  } catch (error) {
    console.error(error);
  }
};

/* import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth/';
export const register = (username: string, email: string, password: string) => {
  return axios.post(`${API_URL}signup`, {
    username,
    email,
    password,
  });
};
export const login = (username: string, password: string) => {
  return axios
    .post(`${API_URL}signin`, {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    });
};
export const logout = () => {
  localStorage.removeItem('user');
};
export const getCurrentUser = () => {
  const userStr = localStorage.getItem('user');
  if (userStr) return JSON.parse(userStr);
  return null;
}; */
