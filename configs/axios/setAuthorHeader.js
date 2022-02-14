/* eslint-disable import/no-anonymous-default-export */
import axios from './index';
export default (token = null) => {
  if (token) axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  else delete axios.defaults.headers.common['Authorization'];
};
