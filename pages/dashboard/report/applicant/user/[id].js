import { setAuthorHeader } from 'configs/axios';
import { getToken } from 'helpers/getToken';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Sidebar from 'components/dashboard/Sidebar';
import Detailuser from 'components/dashboard/Applicant/detailUser';
import ApiUsers from 'pages/api/ApiUsers';
import Head from 'next/head';

const User = () => {
  const router = useRouter();
  const [data, setdata] = useState(undefined);
  const { id } = router.query;
  const token = getToken();
  useEffect(() => {
    setAuthorHeader(token);
    ApiUsers.getOne(id)
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

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
        <Detailuser data={data}></Detailuser>
        {/* content */}
      </div>
    </>
  );
};

export default User;
