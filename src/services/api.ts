import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3000/api', // The address that will repeat on every single page requirement.
})
