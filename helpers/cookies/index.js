import Cookies from 'js-cookie';
import { decodeToken } from 'helpers/local-storage/JsonWebToken';

export function getDataUser() {
  try {
    const userToken = Cookies.get('token');
    const user = decodeToken(userToken);
    return user;
  } catch (error) {
    console.log(error);
  }
}
