import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { encodeData, decodeData } from './local-storage/JsonWebToken';

export function useSessionStorage(defaultValue, key) {
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
    Cookies.set(key, encode, { expires: 1, path: '/pendaftaran' });
  }, [key, value]);

  return [value, setValue];
}

export function createSessionStorage(key, value) {
  const encode = encodeData(value);
  Cookies.set(key, encode, { expires: 1, path: '/pendaftaran' });
}

export function getSessionStorage(key) {
  const stickyValue = Cookies.get(key);
  const decode = decodeData(stickyValue);
  return decode;
}

export function deleteLocalStorage() {
  try {
    Cookies.remove('stepper', { path: '/pendaftaran' });
    Cookies.remove('kuisionerIsDone', { path: '/pendaftaran' });
    Cookies.remove('surveyIsDone', { path: '/pendaftaran' });
    Cookies.remove('dataLowongan', { path: '/pendaftaran' });
    Cookies.remove('lowongan-3', { path: '/pendaftaran' });
    Cookies.remove('lowongan-2', { path: '/pendaftaran' });
    Cookies.remove('lowongan-1', { path: '/pendaftaran' });
    Cookies.remove('profile', { path: '/pendaftaran' });
    Cookies.remove('user', { path: '/pendaftaran' });
    return true;
  } catch (error) {
    console.log(error);
  }
}
