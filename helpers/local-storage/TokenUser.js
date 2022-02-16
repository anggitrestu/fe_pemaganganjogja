import { decodeData } from './JsonWebToken';

export function getDataUser() {
  try {
    const userToken = sessionStorage.getItem('userToken');
    const user = decodeData(userToken);
    return user;
  } catch (error) {
    console.log(error);
  }
}
