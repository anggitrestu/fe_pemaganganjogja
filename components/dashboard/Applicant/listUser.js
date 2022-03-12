import Link from 'next/link';
import { EyeIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';

const ListUser = ({ data }) => {
  const router = useRouter();
  return (
    <div className="w-full bg-gray-100 px-20 py-10">
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <a onClick={() => router.back()}>Lowongan</a>
          </li>
          <li>
            <a className="font-semibold">List User</a>
          </li>
        </ul>
      </div>
      {/* With actions */}
      <div className="flex flex-col justify-between my-10">
        <h4 className=" text-lg font-semibold text-black">
          {data?.internships[0].name_program}
        </h4>
        <p className="text-base font-normal text-gray-600">
          List peserta yang mendaftar posisi {data?.internships[0].name_program}
        </p>
      </div>
      <div className="w-full overflow-hidden rounded-lg shadow-xs">
        <div className="w-full overflow-x-auto">
          <table className="w-full whitespace-no-wrap">
            <thead>
              <tr className="text-xs font-medium tracking-wide text-left text-gray-500 uppercase border-b :border-gray-700 bg-gray-50 :text-gray-400 :bg-gray-800 flex">
                <th className="px-4 py-3 w-[50px]">No</th>
                <th className="px-4 py-3 w-[250px]">Nama</th>
                {/* <th className="px-4 py-3">Kuota</th> */}
                {/* <th className="px-4 py-3">Bidang Industri</th> */}
                <th className="px-4 py-3 w-[200px]">No HP</th>
                <th className="px-4 py-3 w-[350px]">Email</th>
                <th className="px-4 py-3 w-[100px]">Action</th>
              </tr>
            </thead>
            {data === undefined ? (
              <h1>Loading ...</h1>
            ) : (
              <tbody className="bg-white divide-y :divide-gray-700 :bg-gray-800 ">
                {data?.internships[0].user_internships.map((item, index) => {
                  return (
                    <tr
                      className="text-gray-700 :text-gray-400 flex truncate"
                      key={index}
                    >
                      <td className="px-4 py-3 w-[50px]">
                        <div className="flex items-center text-sm truncate">
                          <div>
                            <p className="font-medium">{index + 1}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 w-[250px]">
                        <div className="flex items-center text-sm truncate">
                          <div>
                            <p className="font-medium">
                              {item?.user?.fullname}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm  min-w-[200px]">
                        <span className="px-2 py-1 font-medium leading-tight  rounded-full :bg-bermuda :text-green-100">
                          {item?.user?.phone_number}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm truncate w-[350px]">
                        <span className="px-2 py-1 font-medium leading-tight  rounded-full :bg-bermuda :text-green-100">
                          {item?.user?.email}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm truncate w-[100px]">
                        <Link
                          href="/dashboard/report/applicant/user/[id]"
                          as={`/dashboard/report/applicant/user/${item.user_id}`}
                        >
                          <a>
                            <i className="w-2 h-2">
                              <EyeIcon className="w-6 h-6 "></EyeIcon>
                            </i>
                          </a>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListUser;
