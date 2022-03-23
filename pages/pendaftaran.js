/* eslint-disable jsx-a11y/alt-text */
import Head from 'next/head';
import Image from 'next/image';
import Footer from 'components/Footer';
import ApiInternship from './api/ApiInternship';
import ApiKuisioners from './api/ApiKuisioners';
import ApiSurvey from './api/ApiSurvey';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';

function Pendaftaran({ data, kuisioner, survey }) {
  const router = useRouter();

  const handleBeranda = () => {
    Swal.fire({
      title: 'Yakin kembali ke beranda?',
      text: 'Sebaiknya selesaikan dulu proses pendaftaran',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!',
    }).then((result) => {
      if (result.isConfirmed) {
        router.push('/');
        Swal.fire('Berhasil!', 'Selamat datang di beranda', 'success');
      }
    });
  };

  return (
    <>
      <Head>
        <title>Pendaftaran | Pemagangan Jogja</title>
        <link rel="shortcut icon" href="/icon.png" />
        <meta name="description" content="pemagangan jogja" />
      </Head>
      <main className="bg-[#F8F8F8]">
        <section className="bg-cover bg-center w-full bg-[url('/images/title-pendaftaran-image.jpg')] py-20">
          <div className="container mx-auto px-8 md:px-20">
            <a
              onClick={() => handleBeranda()}
              className=" flex w-fit border-[1px] border-white hover:bg-[#c54933] transition-all text-sm text-white rounded-3xl px-5 py-3 "
            >
              <Image src="/images/left-arrow.svg" height={16} width={8} />
              <p className="ml-5">Kembali Ke Beranda</p>
            </a>

            <h1 className="text-white font-semibold text-4xl mt-14">
              Pendaftaran Pemagangan 2022
            </h1>
            {/* 
            <p className="text-[#C5C5C5] font-normal text-base mt-2">
              Selesaikan pendaftaran agar kamu dapat bergabung dengan program
              magang ini.
            </p>
            */}
          </div>
        </section>

        <section className="mt-10">
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
                Pendaftaran Telah Ditutup
              </h1>
              <p className="text-black text-sm lg:text-base font-normal w-full leading-6 md:w-[635px] mb-8">
                Terima Kasih telah menjadi bagian dari program magang ini,
                sampai bertemu lagi di kesempatan berikutnya....😉 <br />
              </p>
            </div>
          </div>

          <div className=" flex justify-center mt-6">
            <button onClick={() => router.push('/')}>
              <a className=" px-4 py-3 rounded-3xl text-bermuda border-2 border-bermuda hover:bg-bermuda hover:text-white transition-all">
                Kembali Ke Beranda
              </a>
            </button>
          </div>
        </section>

        <footer className="mt-24 bg-black mx-auto py-12 px-8 md:px-20">
          <Footer></Footer>
        </footer>
      </main>
    </>
  );
}

// const Stepper = () => {
//   const [stepper, setStepper] = useSessionStorage(1, 'stepper');
//   return [stepper, setStepper];
// };

export async function getServerSideProps() {
  try {
    const data = await ApiInternship.all();
    const kuisioner = await ApiKuisioners.all();
    const survey = await ApiSurvey.all();
    // const [stepper, setStepper] = Stepper();
    return {
      props: {
        data: data,
        kuisioner: kuisioner.data,
        survey: survey.data,
        // stepper: stepper,
        // setStepper: setStepper,
      },
    };
  } catch (error) {
    console.log(error);
  }
}

export default Pendaftaran;
