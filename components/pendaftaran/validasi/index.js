import { getSessionStorage } from 'helpers/useSessionStorage';
import { useState } from 'react';

const surveySession = getSessionStorage('dataSurvey');
const lowonganSession = getSessionStorage('dataLowongan');
const userSession = getSessionStorage('user');
const profileSession = getSessionStorage('profile');
const KuisionerSession = getSessionStorage('dataKuisioner');



export const checkUser = () => {
  let isValid = false;
  if (userSession) {
    isValid = true;
  }
  return isValid;
};

export const checkProfile = () => {
  let isValid = false;
  if (profileSession) {
    isValid = true;
  }
  return isValid;
};

export const checkInternships = () => {
  let isValid = false;
  if (lowonganSession) {
    isValid = true;
  }
  return isValid;
};

export const checkKuisioner = () => {
  let isValid = false;
  if (KuisionerSession) {
    isValid = true;
  }
  return isValid;
};

export const checkSurvey = () => {
  let isValid = false;
  if (surveySession) {
    isValid = true;
  }
  return isValid;
};
