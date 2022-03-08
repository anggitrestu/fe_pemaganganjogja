import { setAuthorHeader } from 'configs/axios';
import { getToken } from 'helpers/getToken';
import ApiCompanies from 'pages/api/ApiCompanies';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Sidebar from 'components/dashboard/Sidebar';
import ListUser from 'components/dashboard/Applicant/listUser';
const Applicant = () => {
  const router = useRouter();
  const [data, setdata] = useState(undefined);
  const { id } = router.query;

  const token = getToken();
  useEffect(() => {
    setAuthorHeader(token);
    ApiCompanies.listlApplicantInternship(id)
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="flex flex-row md:min-h-screen w-full">
      {/* sidebar */}
      <Sidebar></Sidebar>
      {/* sidebar */}
      {/* content */}
      <ListUser data={data}></ListUser>
      {/* content */}
    </div>
  );
};

export default Applicant;
