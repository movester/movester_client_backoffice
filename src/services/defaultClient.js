import axios from 'axios';

const defaultClient = axios.create({
  baseURL: '/api',
  withCredentials: true,
});

export default defaultClient;