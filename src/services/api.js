import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.exemplo.com',
});

export default api;
