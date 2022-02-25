import { getSessionStorage } from 'helpers/useSessionStorage';

const checkUser = () => {
  let isValid = false;
  const user = getSessionStorage('user');
  if (user) {
    isValid = true;
  }

  return isValid;
};

export default checkUser;
