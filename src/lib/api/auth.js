import axios from '../defaultClient';

export const login = payload => axios.post('/admins/login', { id: payload.id, password: payload.password });

export const logout = () => axios.post('/admins/logout');

export const updatePassword = ({ beforePassword, newPassword, confirmPassword }, adminIdx) =>
  axios.patch(`/admins/password/${adminIdx}`, {
    beforePassword,
    newPassword,
    confirmPassword,
  });
