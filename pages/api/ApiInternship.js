import axios from 'configs/axios';
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  details: (id) => axios.get(`/internship/${id}`).then((res) => res),
  create: (payload) => axios.post(`/internship`, payload).then((res) => res),
  delete: (id) => axios.delete(`/internship/${id}`).then((res) => res),
  all: (query) =>
    axios
      .get(`/internship`, {
        params: {
          company: query,
        },
      })
      .then((res) => res),
  getNameCompany: () => axios.patch(`/company/name`).then((res) => res),
};
