import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { encodeData, decodeData } from './local-storage/JsonWebToken';

export function useLocalStorage(defaultValue, key) {
  const [value, setValue] = useState(defaultValue);
  useEffect(() => {
    const stickyValue = Cookies.get(key);
    const decode = decodeData(stickyValue);
    if (decode !== false) {
      setValue(decode);
    }
  }, [key]);

  useEffect(() => {
    const encode = encodeData(value);
    Cookies.set(key, encode);
  }, [key, value]);

  return [value, setValue];
}

export function getLocalStorage(key) {
  const stickyValue = Cookies.get(key);
  const decode = decodeData(stickyValue);
  return decode;
}

export function deleteLocalStorage() {
  try {
    Cookies.remove('stepper');
    Cookies.remove('kuisionerIsDone');
    Cookies.remove('surveyIsDone');
    Cookies.remove('lowongan-3');
    Cookies.remove('lowongan-2');
    Cookies.remove('lowongan-1');
    Cookies.remove('profile');
    Cookies.remove('user');
    return true;
  } catch (error) {
    console.log(error);
  }
}
