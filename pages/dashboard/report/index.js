import Sidebar from 'components/dashboard/Sidebar';
import Reports from 'components/dashboard/Report';
import Head from 'next/head';
const Index = () => {
  return (
    <>
      <Head>
        <title>Pemagangan Jogja</title>
        <meta name="description" content="pemagangan jogja" />
        <link rel="shortcut icon" href="/icon.png" />
      </Head>
      <div className="flex flex-row md:min-h-screen w-full">
        {/* sidebar */}
        <Sidebar></Sidebar>
        {/* sidebar */}
        {/* content */}
        <Reports></Reports>
        {/* content */}
      </div>
    </>
  );
};

export default Index;
