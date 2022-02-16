import axios from 'configs/axios';
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  create: (payload) =>
    axios.post(`/user-internship`, payload).then((res) => res),
};
