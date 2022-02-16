import axios from 'axios';
import errorHandler from './errorHandler';

const instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_HOST}`,
  withCredentials: false,
});

instance.interceptors.response.use((response) => response.data, errorHandler);

export { default as setAuthorHeader } from './setAuthorHeader';
export default instance;
