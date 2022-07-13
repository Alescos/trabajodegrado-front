/* eslint-disable @typescript-eslint/no-explicit-any */
import authHeader from './auth-header';

type EquipmentInput = {
  name: string;
  branch: string;
  model: string;
  type: string;
  alias?: string;
  serial: string;
  purchasedAt: string;
  status: string;
  classEquipment: string;
  history?: string;
  area: string;
};
const token: string = authHeader();
const API_URL = 'http://localhost:8000/equipments/';

export const registerEquipment = async (equipment: any) => {
  console.log(equipment);
  const res = await fetch(`${API_URL}register`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: token,
    },
    body: JSON.stringify(equipment),
  });
};

export const getAllEquipments = async (id: number) => {
  const equipments: object[] = await fetch(`${API_URL}getAll/${id}`, {
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
  return equipments;
};
