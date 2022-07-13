/* eslint-disable consistent-return */
import authHeader from './auth-header';

/* eslint-disable import/prefer-default-export */
const API_URL = 'http://localhost:8000/organization/';
const token: string = authHeader();
export const getOrganization = async (id: number) => {
  try {
    const response = await fetch(`${API_URL}${id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => data);
    // console.log(response);
    return response;
  } catch (error) {
    // console.error(error);
    return error;
  }
};
