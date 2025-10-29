import axios from 'axios';

// Use the VITE_API_URL from our environment, or default to localhost for development
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

const API = axios.create({
  baseURL: API_URL,
});

export default API;