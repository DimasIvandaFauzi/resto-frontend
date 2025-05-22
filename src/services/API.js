import axios from "axios";

const API_URL = "http://localhost:3000/api/v1/";
export const createMenu = async (id, name, description, price, category, stock) => {
  return await axios.post(
    `${API_URL}menu`,
    {
      id,
      name,
      description,
      price,
      category,
      stock,
    },
    {
      withCredentials: true,
    }
  );
};
export const getMenu = async () => {
  return await axios.get(`${API_URL}menu`, {
    withCredentials: true,
  });
};
export const updateMenu = async (id, name, description, price, category, stock) => {
  return await axios.put(
    `${API_URL}menu/${id}`,
    {
      name,
      description,
      price,
      category,
      stock,
    },
    {
      withCredentials: true,
    }
  );
};

export const deleteMenu = async (id) => {
  return await axios.delete(
    `${API_URL}menu/${id}`,
    {},
    {
      withCredentials: true,
    }
  );
};
