import Head from 'next/head';
import Header from 'components/Header';
import Footer from 'components/Footer';
import DetailPerusahaan from 'components/perusahaan/DetailPerusahaan';
import SelectorPerusahaan from 'components/perusahaan/SelectorPerusahaan';
import 'react-perfect-scrollbar/dist/css/styles.css';
import ApiCompanies from './api/ApiCompanies';
import { useEffect, useState } from 'react';

function Perusahaan({ data }) {
  const [id, setId] = useState(1);
  const [detailCompany, setDetailCompany] = useState(null);
  const fetchDetailCompanies = async (id) => {
    try {
      const data = await ApiCompanies.details(id);
      setDetailCompany(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchDetailCompanies(id);
    window.scrollTo(0, 300);
    return () => {};
  }, [id]);

  return (
    <>
      <Head>
        <title>Pemagangan Jogja</title>
        <meta name="description" content="pemagangan jogja" />
      </Head>

      <main className="bg-[#F8F8F8]">
        <section className="mx-auto px-8 lg:px-20 sticky top-0 bg-[#F8F8F8] z-50">
          <Header></Header>
        </section>
        <section className="bg-cover w-full bg-[url('/images/title-perusahan-image.jpg')] py-16">
          <div className="container mx-auto px-8 lg:px-20">
            <h1 className="text-white font-semibold text-2xl lg:text-4xl">
              Daftar Perusahaan
            </h1>
            <p className="text-[#C5C5C5] font-normal text-sm lg:text-base mt-2">
              Lihat informasi perusahaan yang menjadi mitra kami.
            </p>
          </div>
        </section>

        <section className="flex flex-col lg:flex-row container mx-auto pt-16 px-8 lg:px-20 ">
          <div
            //  max-h-[' + height + 'px]
            className={
              'overflow-y-auto w-full lg:w-1/3 mr-4 max-h-80 lg:max-h-screen lg:sticky lg:top-0 pr-2 lg:pr-4 mb-8 lg:mb-0'
            }
          >
            {data?.length > 0 ? (
              data.map((item, index) => {
                return (
                  <SelectorPerusahaan
                    item={item}
                    idNow={id}
                    setId={setId}
                    key={index}
                  ></SelectorPerusahaan>
                );
              })
            ) : (
              <div className="w-full text-center py-12">No Item Found</div>
            )}
            {/* </PerfectScrollbar> */}
          </div>
          <div className="relative w-full lg:w-2/3">
            {detailCompany !== null && (
              <DetailPerusahaan data={detailCompany}></DetailPerusahaan>
            )}
          </div>
        </section>
        <footer className="mt-24 bg-black mx-auto py-12 px-20">
          <Footer></Footer>
        </footer>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const data = await ApiCompanies.all();
  return { props: { data: data } };
}

export default Perusahaan;
