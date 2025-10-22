import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5001/api',
  // Add timeout and better error handling
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Add response interceptor for better error handling
API.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error:', error.response || error);
    throw error;
  }
);

export default API;