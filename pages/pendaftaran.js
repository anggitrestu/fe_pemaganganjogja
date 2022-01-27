/* eslint-disable jsx-a11y/alt-text */
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import Footer from 'components/Footer';

import FormSatu from 'components/pendaftaran/FormSatu';
import FormDua from 'components/pendaftaran/FormDua';
import FormTiga from 'components/pendaftaran/FormTiga';
import ApiInternship from './api/ApiInternship';
import { useState } from 'react';

function Pendaftaran({ data }) {
  const [stepper, setStepper] = useState(1);

  return (
    <>
      <Head>
        <title>Pemagangan Jogja</title>
        <meta name="description" content="pemagangan jogja" />
      </Head>
      <main className="bg-[#F8F8F8]">
        <section className="bg-cover bg-center w-full bg-[url('/images/title-pendaftaran-image.jpg')] py-20">
          <div className="container mx-auto px-8 md:px-20">
            <Link href="/">
              <a className=" flex w-fit border-[1px] border-white hover:bg-[#c54933] transition-all text-sm text-white rounded-3xl px-5 py-3 ">
                <Image src="/images/left-arrow.svg" height={16} width={8} />
                <p className="ml-5">Kembali Ke Beranda</p>
              </a>
            </Link>
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
            <ul className="w-full steps">
              {/* className={"w-fit px-4 py-2 rounded-full " + (company.pelatihan ? 'text-[#36B752] bg-[#36b75242]' : 'text-[#b73636] bg-[#b7363642]')} */}
              <li
                {...(stepper <= 1 ? null : { onClick: () => setStepper(1) })}
                className={
                  'step cursor-pointer ' +
                  (stepper >= 1 ? 'step-error text-bermuda' : '')
                }
              >
                Fly to moon
              </li>
              <li
                {...(stepper <= 2 ? {} : { onClick: () => setStepper(2) })}
                className={
                  'step cursor-pointer ' +
                  (stepper >= 2 ? 'step-error text-bermuda' : '')
                }
              >
                Shrink the moon
              </li>
              <li
                {...(stepper <= 3 ? {} : { onClick: () => setStepper(3) })}
                className={
                  'step cursor-pointer ' +
                  (stepper >= 3 ? 'step-error text-bermuda' : '')
                }
              >
                Grab the moon
              </li>
              <li
                {...(stepper <= 4 ? {} : { onClick: () => setStepper(4) })}
                className={
                  'step cursor-pointer ' +
                  (stepper >= 4 ? 'step-error text-bermuda' : '')
                }
              >
                Grab the moon
              </li>
              <li
                {...(stepper <= 5 ? {} : { onClick: () => setStepper(5) })}
                className={
                  'step cursor-pointer ' +
                  (stepper >= 5 ? 'step-error text-bermuda' : '')
                }
              >
                Grab the moon
              </li>
              <li
                {...(stepper <= 6 ? {} : { onClick: () => setStepper(6) })}
                className={
                  'step cursor-pointer ' +
                  (stepper >= 6 ? 'step-error text-bermuda' : '')
                }
              >
                Grab the moon
              </li>
            </ul>
          </div>
        </section>
        <section className="container mx-auto px-8 md:px-20">
          {stepper == 1 && (
            <FormSatu data={data} setStepper={setStepper}></FormSatu>
          )}
          {stepper == 2 && <FormDua setStepper={setStepper}></FormDua>}
          {stepper == 3 && <FormTiga></FormTiga>}
        </section>
        <footer className="mt-24 bg-black mx-auto py-12 px-8 md:px-20">
          <Footer></Footer>
        </footer>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const data = await ApiInternship.all();
  return { props: { data: data } };
}

export default Pendaftaran;
