import Link from 'next/link';

export default function Home() {
  return (
    <div className="container md:px-8 ">
      hallow
      <div className="flex items-stretch min-h-screen">
        <div className="flex-auto w-1/2 bg-slate-100 self-center ">
          <h1 class="text-3xl font-bold leading-tight mt-0 mb-2 text-black">
            Magang Kerja di Jogja
          </h1>
          <p className="text-base font-normal leading-tight mt-0 mb-2 text-black">
            Disnakertrans DIY menyelenggarakan program Pemagangan 2021 sebagai
            amanat Peraturan Menteri Ketenagakerjaan Republik Indonesia Nomor 6
            Tahun 2020 tentang Penyelenggaraan Pemagangan di Dalam Negeri.
          </p>
          <p className="text-base font-normal leading-tight mt-0 mb-2 text-black">
            Program pemagangan ini akan dimulai sejak 15 Maret hingga 14 Agustus
            2021, terbuka bagi seluruh perusahaan dan warga DIY yang memenuhi
            persyaratan.
          </p>

          <div class="text-dark-900">
            <div class="block md:flex justify-between items-center text-center md:text-left">
              <div>
                <Link href="/aa">
                  <p className="text-lg font-bold mb-6 pb-1 md:mb-0 md:pb-0 hover:text-green-300">
                    BACA: Permenaker No 6 Tahun 2020 tentang <br />
                    Penyelenggaraan Pemagangan di Dalam Negeri
                    <hr className="border-2 bg-red-500" />
                  </p>
                  {/* <br />
                  <span class="text-blue-600">Register for free today.</span> */}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-auto w-1/2 bg-red-100"></div>
      </div>
    </div>
  );
}
