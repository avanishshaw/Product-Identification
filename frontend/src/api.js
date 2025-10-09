import axios from 'axios';

const API = axios.create({
  // This is the base URL of the backend server we created.
  baseURL: 'http://localhost:5001/api',
});

export default API;