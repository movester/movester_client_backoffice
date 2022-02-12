import axios from '../defaultClient';

export const login = payload => axios.post('/admins/login', { id: payload.id, password: payload.password });
