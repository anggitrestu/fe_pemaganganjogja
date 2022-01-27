import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import Footer from 'components/Footer';

import FormSatu from 'components/pendaftaran/FormSatu';
import FormDua from 'components/pendaftaran/FormDua';
import FormTiga from 'components/pendaftaran/FormTiga';

function pendaftaran() {
    return (
        <>
            <Head>
                <title>Pemagangan Jogja</title>
                <meta name="description" content="pemagangan jogja" />
            </Head>
            <main className="bg-[#F8F8F8]">
                <section className="bg-cover bg-center w-full bg-[url('/images/title-pendaftaran-image.jpg')] py-20">
                    <div className="container mx-auto px-8 md:px-20">
                        <Link href="/pendaftaran">
                            <a className=" flex w-fit border-[1px] border-white hover:bg-[#c54933] transition-all text-sm text-white rounded-3xl px-5 py-3 ">
                                <Image src="/images/left-arrow.svg" height={16} width={8}/>
                                <p className="ml-5">Kembali Ke Beranda</p>
                            </a>
                        </Link>
                        <h1 className="text-white font-semibold text-4xl mt-14">
                            Pendaftaran Pemagangan 2022
                        </h1>
                        <p className="text-[#C5C5C5] font-normal text-base mt-2">
                            Selesaikan pendaftaran agar kamu dapat bergabung dengan program magang ini.
                        </p>
                    </div>
                </section>
                <section className="">
                    <div className="container mx-auto px-8 md:px-20 py-10">
                        This for wizard
                    </div>
                </section>
                <section className="container mx-auto px-8 md:px-20">
                    <FormSatu></FormSatu>
                    {/* <FormDua></FormDua> */}
                    {/* <FormTiga></FormTiga> */}
                </section>
                <footer className="mt-24 bg-black mx-auto py-12 px-8 md:px-20">
                    <Footer></Footer>
                </footer>
            </main>
        </>
    );
}

export default pendaftaran;
