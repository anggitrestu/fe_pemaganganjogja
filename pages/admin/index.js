import Head from 'next/head';
import Sidebar from 'components/dashboard/Sidebar';
import Dashboard from 'components/super-admin/dashboard';
import ApiUsers from 'pages/api/ApiUsers';
import { setAuthorHeader } from 'configs/axios';
import { useEffect, useState } from 'react';
import { getToken } from 'helpers/getToken';

const Index = () => {
  const token = getToken();
  const [data, setdata] = useState(undefined);

  useEffect(() => {
    setAuthorHeader(token);
    ApiUsers.getAll()
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => console.log(err.response));
  }, []);

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

        <Dashboard dataDashboard={data}></Dashboard>
        {/* content */}
      </div>
    </>
  );
};

export default Index;
