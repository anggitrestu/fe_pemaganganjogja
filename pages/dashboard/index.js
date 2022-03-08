import Company from 'components/dashboard/Company';
import Sidebar from 'components/dashboard/Sidebar';
import Head from 'next/head';

const Index = () => {
  return (
    <>
      <Head>
        <title>Dashboard | Pemagangan Jogja</title>
        <link rel="shortcut icon" href="/icon.png" />
        <meta name="description" content="pemagangan jogja" />
      </Head>

      <div className="md:flex flex-col md:flex-row md:min-h-screen w-full">
        {/* sidebar */}
        <Sidebar></Sidebar>
        {/* sidebar */}
        {/* content */}
        <Company></Company>
        {/* content */}
      </div>
    </>
  );
};

export default Index;
