import Swal from 'sweetalert2';

export const alertIsiLowongan = () => {
  Swal.fire({
    title: 'Oops..',
    text: 'Pilih minimal satu lowongan',
    icon: 'warning',
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'Ok!',
  });
};

export const alertBuatAkun = () => {
  Swal.fire({
    title: 'Oops..',
    text: 'Lengkapi data akun!',
    icon: 'warning',
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'Ok!',
  });
};

export const alertLengkapiProfile = () => {
  Swal.fire({
    title: 'Oops..',
    text: 'Lengkapi profile diri anda!',
    icon: 'warning',
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'Ok!',
  });
};

export const alertSurvei = () => {
  Swal.fire({
    title: 'Oops..',
    text: 'Isi semua survey terlebih dahulu!',
    icon: 'warning',
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'Ok!',
  });
};

export const alertKuisioner = () => {
  Swal.fire({
    title: 'Oops..',
    text: 'Isi semua kuisioner terlebih dahulu!',
    icon: 'warning',
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'Ok!',
  });
};
