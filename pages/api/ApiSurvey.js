import axios from 'configs/axios';
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  all: () => axios.get(`/survey`).then((res) => res),
  user_surcey: (payload) =>
    axios.post(`/user-survey`, payload).then((res) => res),
};
