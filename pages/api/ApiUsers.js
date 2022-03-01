import axios_hacklab from 'configs/axios';
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  login: (payload) =>
    axios_hacklab.post(`/auth/login`, payload).then((res) => res),
  register: (payload) =>
    axios_hacklab.post(`/auth/register`, payload).then((res) => res),
  updateProfile: (payload) =>
    axios_hacklab.post(`/auth/update`, payload).then((res) => res),
};
