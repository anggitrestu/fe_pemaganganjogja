import Cookies from 'js-cookie';
import { verifyToken } from '../helpers/middleware';

export function getToken() {
  try {
    const token = Cookies.get('token');
    return token;
  } catch (e) {
    return null;
  }
}

export function decodeToken() {
  try {
    const data = verifyToken(getToken());
    return data;
  } catch (e) {
    return false;
  }
}
