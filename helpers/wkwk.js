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

export function getSessionStorage(key) {
  const stickyValue = Cookies.get(key);
  const decode = decodeData(stickyValue);
  return decode;
}
