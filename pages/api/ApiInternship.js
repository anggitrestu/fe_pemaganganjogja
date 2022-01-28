import axios from 'configs/axios';
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  all: (query) =>
    axios
      .get(`/internships`, {
        params: {
          perusahaan_like: query,
        },
      })
      .then((res) => res),
  details: (id) => axios.get(`/internships/${id}`).then((res) => res),
};
// ?perusahaan_like=HOTEL
