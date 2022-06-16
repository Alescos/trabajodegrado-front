/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
const API_URL = 'http://localhost:8000/organization/';

export const getOrganization = async (id: string) => {
  try {
    const response = await fetch(`${API_URL}${id}`)
      .then((res) => res.json())
      .then((data) => data);
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
};
