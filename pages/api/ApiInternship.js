import axios from 'configs/axios';
export default {
  all: () => axios.get(`/internships`).then((res) => res),
  details: (id) => axios.get(`/internships/${id}`).then((res) => res.data),
};
