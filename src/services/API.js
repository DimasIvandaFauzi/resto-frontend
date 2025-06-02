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

export const createPesanan = async (money, payment_method, items, cashier) => {
  return await axios.post(
    `${API_URL}transaction/`,
    { items, money, payment_method, cashier: "" },
    {
      withCredentials: true,
    }
  );
};

export const getTransaksi = async () => {
  return await axios.get(
    `${API_URL}transaction/`,
    {},
    {
      withCredentials: true,
    }
  );
};
export const getLaporan = async (startDate, endDate) =>{
  return await axios.get(
    `${API_URL}report/daily-revenue?start_date=${startDate}&end_date=${endDate}`,
  )
}
