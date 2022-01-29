import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FormEnam = () => {
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
          <h1 className="inline-block text-bermuda font-semibold text-5xl w-full">
            Pendaftaran Selesai
          </h1>
          <p className="text-black  text-base font-normal w-[635px] ">
            Data kamu telah tersimpan untuk keperluan seleksi peserta
            pemagangan. Semoga kamu yang terpilih sebagai peserta yaa...😉 Kamu
            bisa lanjut mengambil tes psikologi dengan klik tombol di bawah.
          </p>
        </div>
      </div>
      <div className=" flex justify-center">
        <Link href="/psikotes">
          <a className=" px-4 py-3 rounded-3xl text-bermuda border-2 border-bermuda">
            Lanjut Ke Psikotes
          </a>
        </Link>
      </div>
      <div className=" flex justify-center items-center mt-3">
        <span className=" border-b-2 w-[80px]"></span>
        <p className="text-[#8F8F8F] text-[12px] mx-3">atau</p>
        <span className=" border-b-2 w-[80px]"></span>
      </div>

      <div className=" flex justify-center mt-3">
        <Link href="/">
          <a className=" px-4 py-3 rounded-3xl text-bermuda border-2 border-bermuda">
            Kembali Ke Beranda
          </a>
        </Link>
      </div>
    </div>
  );
};

export default FormEnam;
