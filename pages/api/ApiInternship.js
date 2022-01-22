import axios from 'configs/axios';
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  all: () => axios.get(`/internships`).then((res) => res),
  details: (id) => axios.get(`/internships/${id}`).then((res) => res.data),
};
