import axios from 'configs/axios';
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  all: () => axios.get(`/company`).then((res) => res),
  details: (id) => axios.get(`/company/${id}`).then((res) => res),
  create: (payload) => axios.post(`/company`, payload).then((res) => res),
  update: (id, payload) =>
    axios.put(`/company/${id}`, payload).then((res) => res),
  getByAdminID: () => axios.get(`/company/my/admin`).then((res) => res),
  listlApplicantInternship: (internship_id) =>
    axios.get(`/company/my/admin/${internship_id}`).then((res) => res),
};
