import { getSessionStorage } from 'helpers/useSessionStorage';

const CheckBuatAkun = () => {
  let isValid = false;
  const dataAkun = getSessionStorage('dataAkun');
  if (dataAkun === 'null') {
    isValid = false;
  } else {
    isValid = true;
  }

  return isValid;
};

export default CheckBuatAkun;
