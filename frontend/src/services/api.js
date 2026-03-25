import axios from 'axios';

// Detect if we are running on Vercel or local
const isProd = import.meta.env.PROD;
const baseURL = isProd ? '/api' : 'http://localhost:3001/api';

const api = axios.create({
  baseURL,
  timeout: 10000,
});

export async function getOfertas() {
  const response = await api.get('/ofertas');
  return response.data;
}

export async function getOferta(id) {
  const response = await api.get(`/ofertas/${id}`);
  return response.data;
}

export async function getProgramacao() {
  const response = await api.get('/programacao');
  return response.data;
}

export default api;
