import axios from 'configs/axios';
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  all: () => axios.get(`/kuisioners`).then((res) => res),
  details: (id) => axios.get(`/kuisioners/${id}`).then((res) => res),
};
