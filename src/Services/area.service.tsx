import authHeader from './auth-header';

const API_URL = 'http://localhost:8000/areas/';
const token = authHeader();
type AreaInput = {
  name: string;
  description: string;
  location: string;
  phone: string;
  status: boolean;
  organization: number;
};
export const getAllAreas = async (id: string) => {
  const areas: string[] = await fetch(`${API_URL}getAll\\${id}`)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      return data;
    });
  return areas;
};

export const createArea = async (area: AreaInput) => {
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
