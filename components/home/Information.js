import Image from 'next/image';

const Information = () => {
  return (
    <div className=" flex flex-col lg:flex-row">
      <div className=" w-full lg:w-1/3 pt-2">
        <Image
          width={'379'}
          height={'724'}
          src="/images/information.jpg"
          layout="responsive"
          className="bg-cover bg-center"
          alt="..."
        />
      </div>
      <div className="w-full mt-6 lg:mt-0 lg:w-2/3 lg:ml-[32px]">
        <div>
          <h1 className="text-black font-semibold text-2xl lg:text-4xl">
            Pemagangan Dalam Negeri 2022 Daerah Istimewa Yogyakarta
          </h1>
          <p className="text-[#8F8F8F] text-sm lg:text-base font-normal pt-2">
            Informasi terkait program pemagangan dalam negeri Daerah Istimewa
            Yogyakarta.
          </p>

          <div className="mt-16">
            <p className="text-[#404040] text-sm lg:text-base font-normal">
              Perubahan teknologi yang demikian cepat (terutama di bidang
              teknologi informasi) telah merubah tuntutan masyarakat terhadap
              industri barang dan jasa. Sementara dunia pendidikan dan pelatihan
              tidak mampu mengimbangi laju pekembangan dimaksud, sehingga
              lulusan dunia pendidikan dan pelatihan tidak memenuhi persyaratan
              yang dibutuhkan oleh dunia industri.
            </p>
            <p className="text-[#404040] text-sm lg:text-base font-normal mt-8">
              Oleh karenanya dibutuhkan program pemagangan yang memberikan
              kesempatan bagi para lulusan dunia pendidikan dan pelatihan untuk
              bekerja secara langsung di perusahaan dengan didampingi oleh
              karyawan sebagai mentor dan instruktur.
            </p>
            <p className="text-[#404040] text-sm lg:text-base font-normal mt-8">
              Peserta pemagangan diharapkan memiliki pengalaman kerja dan
              meningkatkan keahlian, pengetahuan, dan sikap yang disyaratkan
              oleh pengguna tenaga kerja. Dinas Tenaga Kerja & Transmigrasi D.I.
              Yogyakarta mengundang seluruh perusahaan di DIY yang berminat,
              sanggup, dan memenuhi persyaratan untuk ikut berpartisipasi dalam
              pelaksanaan program Pemagangan Nasional di DIY, dengan menjadi
              perusahaan tempat magang.
            </p>
            <p className="text-[#404040] text-sm lg:text-base font-normal mt-8">
              Adapun persyaratan perusahaan tempat magang sesuai dengan
              Permenaker Nomor 6 tahun 2020 tentang Penyelenggaraan Pemagangan
              di Dalam Negeri adalah sebagai berikut:
            </p>
            <ul className="ml-4 text-[#404040] text-sm lg:text-base">
              <li className="">
                Perusahaan hanya dapat menerima peserta pemagangan paling banyak
                20% dari jumlah karyawan (atau jumlah karyawan minimal sejumlah
                50 orang)
              </li>
              <li>
                Menyusun kurikulum/silabus sesuai SKKNI atau SKK atau SKKI
              </li>
              <li>Memiliki instruktur kompeten di bidangnya</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
