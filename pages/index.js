import Header from 'components/Header';
import Hero from 'components/home/Hero';
import ApiInternship from 'pages/api/ApiInternship';
import Head from 'next/head';
import ListMagang from 'components/home/ListMagang';
import Information from 'components/home/Information';
import Footer from 'components/Footer';
import Modal from 'components/Modal';

function Home({ data }) {
  console.log(data)
  return (
    <>
  {/* <Modal data={data}></Modal> */}
      <Head>
        <title>Pemagangan Jogja</title>
        <meta name="description" content="pemagangan jogja" />
      </Head>

      <main className="bg-[#F8F8F8]">
        <section className="container mx-auto px-20 pt-2">
          <Header></Header>
        </section>
        <section className="bg-cover w-full bg-[url('/images/hero-image.jpg')]  ">
          <div className="container mx-auto px-20">
            <Hero></Hero>
          </div>
        </section>
        <section className="container mx-auto pt-24 px-20 bg-[#F8F8F8]">
          <ListMagang data={data}></ListMagang>
        </section>
        <section className="container mx-auto pt-24 px-20">
          <Information></Information>
        </section>
        <footer className="mt-24 bg-black mx-auto py-12 px-20">
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

export default Home;
