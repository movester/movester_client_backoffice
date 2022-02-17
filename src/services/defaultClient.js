import axios from 'axios';

const defaultClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 3000,
  withCredentials: true,
});

export default defaultClient;
