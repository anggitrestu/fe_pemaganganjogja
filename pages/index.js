import Header from 'components/Header';
import Hero from 'components/home/Hero';
import ApiInternship from 'pages/api/ApiInternship';
import Head from 'next/head';
import ListMagang from 'components/home/ListMagang';
import Information from 'components/home/Information';
import Footer from 'components/Footer';

function Home({ data }) {
  return (
    <>
      <Head>
        <title>Pemagangan Jogja</title>
        <meta name="description" content="pemagangan jogja" />
      </Head>

      <main className="bg-white">
        <section className="container mx-auto px-20 pt-2">
          <Header></Header>
        </section>
        {/*   */}
        <section className="header-clipping min-h-screen bg-cover bg-[url('/images/hero-image.jpg')]  ">
          <div className="absolute bg-black opacity-70 min-h-screen min-w-full"></div>
          <div className="container mx-auto px-20">
            <Hero></Hero>
          </div>
        </section>
        <section className="container mx-auto pt-24 px-20 bg-white">
          <ListMagang data={data}></ListMagang>
        </section>
        <section className="container mx-auto pt-24 px-20">
          <Information></Information>
        </section>
        <footer className="mt-24  bg-black mx-auto py-12 px-20">
          <Footer></Footer>
        </footer>
      </main>
    </>
  );
}

// Home.getServerSideProps = async () => {
//   try {
//     const data = await axios(
//       `https://61ebb5507ec58900177cdd32.mockapi.io/internships`
//     );
//     // const data = await ApiCourses.all();
//     return {
//       props: { data: data }, // will be passed to the page component as props
//     };
//   } catch (error) {
//     return error;
//   }
// };
export async function getServerSideProps() {
  const data = await ApiInternship.all();

  return { props: { data: data } };
}

export default Home;
