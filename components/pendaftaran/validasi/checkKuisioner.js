import { getSessionStorage } from 'helpers/useSessionStorage';

const CheckKuisioner = () => {
  let isValid = false;
  const dataAkun = getSessionStorage('dataKuisioner');
  if (dataAkun === 'null') {
    isValid = false;
  } else {
    isValid = true;
  }

  return isValid;
};

export default CheckKuisioner;
