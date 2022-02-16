import { deleteLocalStorage } from 'helpers/useLocalStorage';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import Swal from 'sweetalert2';

const FormEnam = () => {
  const router = useRouter();
  const handleClick = () => {
    Swal.fire({
      icon: 'success',
      title: `success`,
      text: `Pendaftaran Berhasil `,
    }).then(() => {
      const succes = deleteLocalStorage();
      if (succes) {
        router.push('/');
      }
    });
  };

  return (
    <div>
      <div className="flex justify-center ">
        <Image
          src="/images/finish.jpg"
          alt="image"
          width={230}
          height={230}
          className="inline-block"
        />
      </div>
      <div className="flex justify-center mt-8 mb-4">
        <div className="flex flex-col justify-center text-center">
          <h1 className="inline-block text-bermuda font-semibold text-3xl lg:text-5xl w-full mb-6">
            Pendaftaran Selesai
          </h1>
          <p className="text-black text-sm lg:text-base font-normal w-full leading-6 md:w-[635px] mb-8">
            Data kamu telah tersimpan untuk keperluan seleksi peserta
            pemagangan. Semoga kamu yang terpilih sebagai peserta yaa...😉{' '}
            <br />
            Kamu bisa lanjut mengambil tes psikologi dengan klik tombol di
            bawah.
          </p>
        </div>
      </div>

      <div className=" flex justify-center mt-6">
        <button onClick={() => handleClick()}>
          <a className=" px-4 py-3 rounded-3xl text-bermuda border-2 border-bermuda hover:bg-bermuda hover:text-white transition-all">
            Kembali Ke Beranda
          </a>
        </button>
      </div>
    </div>
  );
};

export default FormEnam;
