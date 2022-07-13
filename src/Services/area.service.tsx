/* eslint-disable @typescript-eslint/no-explicit-any */
import authHeader from './auth-header';

const API_URL = 'http://localhost:8000/areas/';

type AreaInput = {
  name: string;
  description: string;
  location: string;
  phone: string;
  status: boolean;
  organization: number;
};

export const getAllAreas = async (id: string) => {
  const token = authHeader();
  const areas: object[] = await fetch(`${API_URL}getAll\\${id}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: token,
    },
  })
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      return data;
    });
  return areas;
};

export const createArea = async (area: AreaInput) => {
  const token = await authHeader();
  // console.log(token);
  const res = await fetch(`${API_URL}register`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: token,
    },
    body: JSON.stringify(area),
  });
  return res;
};
