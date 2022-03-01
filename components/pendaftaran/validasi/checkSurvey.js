import { getSessionStorage } from 'helpers/useSessionStorage';

const CheckSurvey = () => {
  let isValid = false;
  const dataAkun = getSessionStorage('dataSurvei');
  if (dataAkun === 'null') {
    isValid = false;
  } else {
    isValid = true;
  }

  return isValid;
};

export default CheckSurvey;
