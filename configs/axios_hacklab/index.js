import axios from 'axios';
import errorHandler from './errorHandler';

const instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_HACKLAB}`,
  mode: 'no-cors',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
  credentials: 'same-origin',
});

instance.interceptors.response.use((response) => response.data, errorHandler);

export { default as setAuthorHeader } from './setAuthorHeader';
export default instance;
