import axios_hacklab from 'configs/axios';
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetch: () => axios_hacklab.get(`/v1/auth/user`).then((res) => res),
  login: (payload) =>
    axios_hacklab.post(`/auth/login`, payload).then((res) => res),
  register: (payload) =>
    axios_hacklab.post(`/auth/register`, payload).then((res) => res),
  test: () =>
    axios_hacklab
      .get(`/my-application?page=1&perpage=10&field=created_at&state=desc`)
      .then((res) => res),
};
