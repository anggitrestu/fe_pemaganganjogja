import axios from 'configs/axios';
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  all: () => axios.get(`/kuisioner`).then((res) => res),
  user_kuisioner: (payload) =>
    axios.post(`/user-kuisioner`, payload).then((res) => res),
};
