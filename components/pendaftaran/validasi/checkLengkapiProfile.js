import { getSessionStorage } from 'helpers/useSessionStorage';

const CheckLengkapiProfile = () => {
  let isValid = false;
  const dataAkun = getSessionStorage('dataLengkapiProfile');
  if (dataAkun === 'null') {
    isValid = false;
  } else {
    isValid = true;
  }

  return isValid;
};

export default CheckLengkapiProfile;
