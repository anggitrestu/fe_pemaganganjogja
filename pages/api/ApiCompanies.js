import axios from 'configs/axios';
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  all: () => axios.get(`/companies`).then((res) => res),
  details: (id) => axios.get(`/companies/${id}`).then((res) => res),
};
