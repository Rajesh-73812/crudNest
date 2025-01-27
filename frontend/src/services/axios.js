import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4001', // Your backend URL
//   withCredentials: true,           // Make sure cookies are sent with requests
});

export default api;
