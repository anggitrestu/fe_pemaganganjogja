import { alertIsiLowongan, alertBuatAkun } from './alert';
import CheckBuatAkun from './validasi/checkUser';
import CheckKuisioner from './validasi/checkKuisioner';
import CheckLengkapiProfile from './validasi/checkLengkapiProfile';
import Checklowongan from './validasi/checkLowongan';
import CheckSurvey from './validasi/checkSurvey';

// const { default: CheckBuatAkun } = require('./validasi/checkBuatAkun');

const ValidasiForm = ({
  setStepper,
  lowongan = false,
  akun = false,
  lengkapiProfile = false,
  survei = false,
  kuisioner = false,
}) => {
  let validate = false;
  const lowonganIsDone = Checklowongan();
  const buatAkunIsDone = CheckBuatAkun();
  const lengkapiProfileIsDone = CheckLengkapiProfile();
  const surveiIsDone = CheckSurvey();
  const kuisionerIsDone = CheckKuisioner();

  if (lowongan) {
    if (lowonganIsDone === true) {
      validate = true;
    } else {
      validate = false;
      alertIsiLowongan();
      setStepper(1);
    }
  }

  if (akun) {
    if (buatAkunIsDone === true) {
      validate = true;
    } else {
      validate = false;
      alertBuatAkun();
      setStepper(2);
    }
  }

  if (lengkapiProfile) {
    if (lengkapiProfileIsDone === true) {
      validate = true;
    } else {
      validate = false;
      alertBuatAkun();
      setStepper(3);
    }
  }

  if (survei) {
    if (surveiIsDone === true) {
      validate = true;
    } else {
      validate = false;
      alertBuatAkun();
      setStepper(4);
    }
  }

  if (kuisioner) {
    if (kuisionerIsDone === true) {
      validate = true;
    } else {
      validate = false;
      alertBuatAkun();
      setStepper(5);
    }
  }

  return validate;
};

export default ValidasiForm;
