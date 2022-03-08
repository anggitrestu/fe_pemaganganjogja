import Image from 'next/image';
import {
  UsersIcon,
  OfficeBuildingIcon,
  BriefcaseIcon,
} from '@heroicons/react/solid';

const Dashboard = ({ dataDashboard }) => {
  return dataDashboard !== undefined ? (
    <>
      <div className="w-full bg-gray-100 px-20 py-10">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 2xl:col-span-9">
            <div className="grid grid-cols-12 gap-6">
              {/* BEGIN: General Report */}
              <div className="col-span-12 mt-8">
                <div className="intro-y flex items-center h-10">
                  <h2 className="text-lg font-medium truncate mr-5">
                    General Report
                  </h2>
                  <a href className="ml-auto flex items-center text-primary">
                    <i data-feather="refresh-ccw" className="w-4 h-4 mr-3" />{' '}
                    {/* Reload Data{' '} */}
                  </a>
                </div>
                <div className="grid grid-cols-12 gap-6 mt-5">
                  <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y ">
                    <div className="bg-slate-100">
                      <div className="box  p-5">
                        <div className="flex">
                          <i className="inline-block ">
                            <UsersIcon className="w-[25px] "></UsersIcon>
                          </i>
                        </div>
                        <div className="text-2xl font-medium leading-8 mt-6">
                          {dataDashboard?.totalUser}
                        </div>
                        <div className="text-base text-slate-500 mt-1">
                          Partisipan
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                    <div className="bg-slate-100">
                      <div className="box p-5">
                        <div className="flex">
                          <i className="inline-block ">
                            <OfficeBuildingIcon className="w-[25px] "></OfficeBuildingIcon>
                          </i>
                        </div>
                        <div className="text-2xl font-medium leading-8 mt-6">
                          {dataDashboard?.totalCompany}
                        </div>
                        <div className="text-base text-slate-500 mt-1">
                          Perusahaan
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                    <div className="bg-slate-100">
                      <div className="box p-5">
                        <div className="flex">
                          <i className="inline-block ">
                            <BriefcaseIcon className="w-[25px] "></BriefcaseIcon>
                          </i>
                        </div>
                        <div className="text-2xl font-medium leading-8 mt-6">
                          {dataDashboard?.totalInternship}
                        </div>
                        <div className="text-base text-slate-500 mt-1">
                          Lowongan Magang
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* END: General Report */}
            </div>
          </div>
        </div>

        <div className="box">
          <div className=" flex items-center mt-5">
            <h2 className="text-lg font-medium truncate mr-5">
              Laporan Lowongan
            </h2>
          </div>
          <div className="">
            <div>
              <div>
                <table className="table  mt-5">
                  <thead className="">
                    <tr className="flex ">
                      <th className="whitespace-nowrap w-[50px]">#</th>
                      <th className="whitespace-nowrap w-[300px]">
                        Perusahaan
                      </th>
                      <th className="whitespace-nowrap w-[400px]">Lowongan</th>
                      <th className="whitespace-nowrap w-[100px]">Applicant</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataDashboard.users.length > 0 ? (
                      <>
                        {dataDashboard.users.map((item, index) => {
                          return item.internships.length > 1 ? (
                            <>
                              {item.internships.map((intern, ind) => {
                                return (
                                  <>
                                    <tr className="flex truncate " key={index}>
                                      <td width={50}>
                                        {ind === 0 && index + 1}
                                      </td>
                                      <td
                                        width={300}
                                        className={'' + (ind === 0 && '')}
                                      >
                                        {ind === 0 && item.name}
                                      </td>
                                      <td width={400} className="">
                                        {intern.name_program}
                                      </td>
                                      <td width={100}>
                                        {`${intern.user_internships.length} Orang`}
                                      </td>
                                    </tr>
                                  </>
                                );
                              })}
                            </>
                          ) : (
                            <>
                              <tr key={index} className="flex truncate">
                                <td width={50}>{index + 1}</td>
                                <td width={300} className="">
                                  {item.name}
                                </td>
                                <td width={400} className="">
                                  {item.internships[0].name_program}
                                </td>
                                <td width={100}>
                                  {`${item.internships[0].user_internships.length} Orang`}
                                </td>
                              </tr>
                            </>
                          );
                        })}
                      </>
                    ) : (
                      'null'
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <div className="w-full bg-gray-100 px-20 py-10">
      <h1>Loading...</h1>
    </div>
  );
};

export default Dashboard;
