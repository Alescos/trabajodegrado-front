/* eslint-disable comma-dangle */
/* eslint-disable dot-notation */
/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */
const API_URL = 'http://localhost:8000/';

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
    const data = JSON.stringify(res.data);
    // sessionStorage.setItem('user', data);
    localStorage.setItem('user', data);
    return res;
  } catch (error) {
    console.error(error);
  }
};

export const logout = () => {
  sessionStorage.removeItem('user');
};
