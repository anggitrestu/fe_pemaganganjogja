import axios from 'configs/axios';
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  all: (query) =>
    axios
      .get(`/users`, {
        params: {
          perusahaan_like: query,
        },
      })
      .then((res) => res),
  details: (id) => axios.get(`/users/${id}`).then((res) => res),
  register: (payload) => axios.post(`users`, payload).then((res) => res),
};
