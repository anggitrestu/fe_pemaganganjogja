import axios from 'configs/axios';
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  login: (payload) => axios.post(`/admin/login`, payload).then((res) => res),
  details: (id) => axios.get(`/users/${id}`).then((res) => res),
  register: (payload) => axios.post(`users`, payload).then((res) => res),
};
