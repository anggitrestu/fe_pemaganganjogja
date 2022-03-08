import Sidebar from 'components/dashboard/Sidebar';
import Lowongan from 'components/dashboard/Lowongan';
import Head from 'next/head';

const Index = () => {
  return (
    <>
      <Head>
        <title>Pemagangan Jogja</title>
        <meta name="description" content="pemagangan jogja" />
        <link rel="shortcut icon" href="/icon.png" />
      </Head>

      <div>
        <div className="md:flex flex-col md:flex-row md:min-h-screen w-full">
          {/* sidebar */}
          <Sidebar></Sidebar>
          {/* sidebar */}
          {/* content */}
          <Lowongan></Lowongan>
          {/* content */}
        </div>
      </div>
    </>
  );
};

export default Index;
