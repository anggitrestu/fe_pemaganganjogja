import { getSessionStorage } from 'helpers/useSessionStorage';

const checklowongan = () => {
  let isValid = false;
  const a = getSessionStorage('dataLowongan');

  if (a) {
    if (a.lowongan1.id === 0 && a.lowongan2.id === 0 && a.lowongan3.id === 0) {
      isValid = false;
    } else {
      isValid = true;
    }
  }

  return isValid;
};

export default checklowongan;
