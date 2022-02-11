import axios from '../defaultClient';

export const login = payload => axios.post('/admins/login', { email: payload.id, password: payload.password });

export const logout = () => axios.post('/admins/logout');
