import Link from 'next/link';
import { ExclamationIcon } from '@heroicons/react/solid';

const Hero = () => {
  return (
    <div className="pb-16 pt-16 ">
      <div className="">
        <Link href="https://peraturan.go.id/common/dokumen/bn/2020/bn351-2020.pdf">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FFE27A] truncate  flex-row bg-opacity-25 px-6 py-3 rounded-3xl text-yellow-300 font-normal mt-9 hover:bg-[#dfc462] hover:text-white transition-all text-sm lg:text-base"
          >
            <span>
              <ExclamationIcon className="w-[20px] inline-block mr-2"></ExclamationIcon>
            </span>
            BACA: Permenaker No 6 Tahun 2020{' '}
            <span className=" hidden lg:inline">
              tentang Penyelenggaraan Pemagangan di Dalam Negeri.
            </span>
          </a>
        </Link>
      </div>
      <div className="flex flex-col w-full mt-9 ">
        <h1 className="text-white font-semibold text-3xl lg:text-5xl">
          Magang Kerja di Jogja
        </h1>
        <p className="hidden md:block text-[#C5C5C5] font-normal text-sm lg:text-base mt-9">
          Disnakertrans DIY menyelenggarakan program Pemagangan 2022 sebagai
          amanat Peraturan <br /> Menteri Ketenagakerjaan Republik Indonesia
          Nomor 6 Tahun 2020 tentang Penyelenggaraan <br /> Pemagangan di Dalam
          Negeri.
        </p>
        <p className="text-[#C5C5C5] font-normal text-sm lg:text-base mt-9">
          Program pemagangan ini akan dimulai sejak 15 Maret 2022 hingga 15
          Agustus 2022, terbuka bagi seluruh <br /> perusahaan dan warga DIY
          yang memenuhi persyaratan.
        </p>
        <div className="md:hidden mt-8">
          <Link href="/pendaftaran" passHref>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className=" bg-bermuda hover:bg-[#c54933] transition-all text-sm text-white rounded-3xl  px-5 py-3"
            >
              Daftar Sekarang
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {};

export default Hero;
