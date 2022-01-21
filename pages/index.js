import Head from 'next/head';
import Header from './components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pemagangan Jogja</title>
        <meta name="description" content="pemagangan jogja" />
      </Head>

      <main className="bg-background">
        <section className="container mx-auto px-20 pt-2">
          <Header></Header>
        </section>

        <section className="header-clipping pt-8 bg-backgroundd">
          <div className="container mx-auto px-20">{/* <Hero></Hero> */}</div>
        </section>
        <section className="container mx-auto pt-24 px-20 ">
          {/* <Features></Features> */}
        </section>
        <section className="container mx-auto pt-24 px-20">
          {/* <ListCourses data={data}></ListCourses> */}
        </section>
        <section className="container mx-auto pt-24 px-20">
          {/* <ListCategories></ListCategories> */}
        </section>
        <footer className="mt-24  bg-secondary mx-auto py-12 px-20">
          {/* <Footer></Footer> */}
        </footer>
      </main>
    </>
  );
}
