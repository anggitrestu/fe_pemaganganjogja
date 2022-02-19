/* eslint-disable jsx-a11y/alt-text */
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Footer from 'components/Footer';
import FormSatu from 'components/pendaftaran/FormSatu';
import FormDua from 'components/pendaftaran/FormDua';
import FormTiga from 'components/pendaftaran/FormTiga';
import ApiInternship from './api/ApiInternship';
import FormEmpat from 'components/pendaftaran/FormEmpat';
import FormLima from 'components/pendaftaran/FormLima';
import FormEnam from 'components/pendaftaran/FormEnam';
import ApiKuisioners from './api/ApiKuisioners';
import ApiSurvey from './api/ApiSurvey';
import { useLocalStorage } from 'helpers/useLocalStorage';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';

function Pendaftaran({ data, kuisioner, survey }) {
  const [stepper, setStepper] = useLocalStorage(1, 'stepper');
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
            <p className="text-[#C5C5C5] font-normal text-base mt-2">
              Selesaikan pendaftaran agar kamu dapat bergabung dengan program
              magang ini.
            </p>
          </div>
        </section>
        <section className="">
          <div className="container mx-auto px-8 md:px-20 py-10">
            {stepper === 6 ? null : (
              <ul className="w-full steps">
                <li
                  {...(stepper <= 1 ? null : { onClick: () => setStepper(1) })}
                  className={
                    'step cursor-pointer ' +
                    (stepper >= 1 ? 'step-error text-bermuda' : '')
                  }
                >
                  Pilih Lowongan
                </li>
                <li
                  {...(stepper <= 2 ? {} : { onClick: () => setStepper(2) })}
                  className={
                    'step cursor-pointer ' +
                    (stepper >= 2 ? 'step-error text-bermuda' : '')
                  }
                >
                  Buat Akun
                </li>
                <li
                  {...(stepper <= 3 ? {} : { onClick: () => setStepper(3) })}
                  className={
                    'step cursor-pointer ' +
                    (stepper >= 3 ? 'step-error text-bermuda' : '')
                  }
                >
                  Lengkapi Profil
                </li>
                <li
                  {...(stepper <= 4 ? {} : { onClick: () => setStepper(4) })}
                  className={
                    'step cursor-pointer ' +
                    (stepper >= 4 ? 'step-error text-bermuda' : '')
                  }
                >
                  Kuisioner
                </li>
                <li
                  {...(stepper <= 5 ? {} : { onClick: () => setStepper(5) })}
                  className={
                    'step cursor-pointer ' +
                    (stepper >= 5 ? 'step-error text-bermuda' : '')
                  }
                >
                  Survey Digital
                </li>
                <li
                  {...(stepper <= 6 ? {} : { onClick: () => setStepper(6) })}
                  className={
                    'step cursor-pointer ' +
                    (stepper >= 6 ? 'step-error text-bermuda' : '')
                  }
                >
                  Selesai
                </li>
              </ul>
            )}
          </div>
        </section>

        <section className="container mx-auto px-8 md:px-20">
          {stepper == 1 && (
            <FormSatu data={data} setStepper={setStepper}></FormSatu>
          )}
          {stepper == 2 && <FormDua setStepper={setStepper}></FormDua>}
          {stepper == 3 && <FormTiga setStepper={setStepper}></FormTiga>}
          {stepper == 4 && (
            <FormEmpat setStepper={setStepper} data={kuisioner}></FormEmpat>
          )}
          {stepper == 5 && (
            <FormLima setStepper={setStepper} data={survey}></FormLima>
          )}
          {stepper == 6 && <FormEnam setStepper={setStepper}></FormEnam>}
        </section>
        <footer className="mt-24 bg-black mx-auto py-12 px-8 md:px-20">
          <Footer></Footer>
        </footer>
      </main>
    </>
  );
}

// const Stepper = () => {
//   const [stepper, setStepper] = useLocalStorage(1, 'stepper');
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
