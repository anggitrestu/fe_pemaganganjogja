import Link from 'next/link';
import PropTypes from 'prop-types';
import { ExclamationIcon } from '@heroicons/react/solid';

const Hero = () => {
  return (
    <div className="pb-20 pt-20">
      <div className="">
        <Link href="#">
          <a className="bg-[#FFE27A] flex-row bg-opacity-25 px-6 py-3 rounded-3xl text-yellow-300 font-normal text-sm mt-9 hover:bg-[#dfc462] hover:text-white transition-all">
            <span>
              <ExclamationIcon className="w-[20px] inline-block mr-2"></ExclamationIcon>
            </span>
            BACA: Permenaker No 6 Tahun 2020 tentang Penyelenggaraan Pemagangan
            di Dalam Negeri.
          </a>
        </Link>
      </div>
      <div className="flex flex-col mt-9 ">
        <h1 className="text-white font-semibold text-5xl">
          {' '}
          Magang Kerja di Jogja
        </h1>
        <p className="text-[#C5C5C5] w-[793px] font-normal text-base mt-9">
          Disnakertrans DIY menyelenggarakan program Pemagangan 2021 sebagai
          amanat Peraturan <br /> Menteri Ketenagakerjaan Republik Indonesia
          Nomor 6 Tahun 2020 tentang Penyelenggaraan <br /> Pemagangan di Dalam
          Negeri.
        </p>
        <p className="text-[#C5C5C5] w-[793px] font-normal text-base mt-9">
          Program pemagangan ini akan dimulai sejak 15 Maret hingga 14 Agustus
          2021, terbuka bagi seluruh <br /> perusahaan dan warga DIY yang
          memenuhi persyaratan.
        </p>
      </div>
    </div>
  );
};

Hero.propTypes = {};

export default Hero;