const API_URL = 'http://localhost:8000/areas/';

export const getAllAreas = async (id: string) => {
  const areas: string[] = await fetch(`${API_URL}getAll\\${id}`)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      return data;
    });
  return areas;
};
