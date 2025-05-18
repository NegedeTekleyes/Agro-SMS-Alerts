// src/utils/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // Update if backend port differs
});

export const registerFarmer = (phone: string) =>
  api.post('/farmers/register', { phone });

export const getFarmers = () => api.get('/farmers');

export const addWeatherUpdate = (data: {
  temperature: number;
  condition: string;
  date: Date;
}) => api.post('/weather', data);

export const getWeatherUpdates = () => api.get('/weather');

export const addProduct = (data: {
  name: string;
  description: string;
  price: number;
}) => api.post('/products', data);

export const getProducts = () => api.get('/products');

export const getMessages = () => api.get('/messages');