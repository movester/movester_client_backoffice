import axios from './defaultClient';

const authAPI = {
  fetchLogin(payload) {
    return axios.post('/admins/login', payload);
  },
  fetchLogout() {
    return axios.get('/admins/logout');
  },
};

export default authAPI;
