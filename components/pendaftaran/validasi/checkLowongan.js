import { getSessionStorage } from 'helpers/useSessionStorage';

const Checklowongan = () => {
  let isValid = false;
  const lowongan1 = getSessionStorage('lowongan-1');
  const lowongan2 = getSessionStorage('lowongan-2');
  const lowongan3 = getSessionStorage('lowongan-3');

  if (lowongan1.id === 0 && lowongan2.id === 0 && lowongan3.id === 0) {
    isValid = false;
  } else {
    isValid = true;
  }

  return isValid;
};

export default Checklowongan;
