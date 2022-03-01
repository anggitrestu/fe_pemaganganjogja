import { setAuthorHeader } from 'configs/axios';
import { getToken } from 'helpers/getToken';
import Link from 'next/link';
import ApiCompanies from 'pages/api/ApiCompanies';
import { useEffect, useState } from 'react';
import { EyeIcon, PencilIcon, TrashIcon } from '@heroicons/react/solid';
import ModalDetailMagang from 'components/ModalDetailMagang';
import ApiInternship from 'pages/api/ApiInternship';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';

const Lowongan = () => {
  const router = useRouter();
  const [showDetailMagang, setShowDetailMagang] = useState(false);
  const [modalData, setModalData] = useState({});
  const [internship, setInternship] = useState(undefined);
  const token = getToken();

  function handleShowDetailMagang(id) {
    ApiInternship.details(id).then((res) => {
      setModalData(res.data);
      setShowDetailMagang(true);
    });
  }

  function handleDeleteMagang(id, name_program) {
    setAuthorHeader(token);
    Swal.fire({
      title: `Yakin menghapus lowongan ${name_program} ini?`,
      showCancelButton: true,
      confirmButtonText: 'Delete',
    }).then((result) => {
      if (result.isConfirmed) {
        ApiInternship.delete(id).then((res) => {
          window.location.reload();
        });
        Swal.fire('Delete!', '', 'success');
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  }

  const fetchMyCompany = () => {
    setAuthorHeader(token);
    ApiCompanies.getByAdminID()
      .then((res) => {
        setInternship(res.data.internships);
      })
      .catch((err) => {
        Swal.fire({
          title: 'Harap Lengkapi data perusahaan terlebih dahulu!',
          confirmButtonText: 'OK',
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            Swal.fire('OK!', '', 'success');
            router.push('/dashboard');
          }
        });
        console.log(err);
      });
  };

  useEffect(() => {
    fetchMyCompany();
  }, []);

  return (
    <div className="w-full bg-gray-300 px-20 py-10">
      <div>
        {showDetailMagang && (
          <ModalDetailMagang
            setOnClick={setShowDetailMagang}
            data={modalData}
          ></ModalDetailMagang>
        )}
      </div>

      {/* With actions */}
      <div className="flex justify-between my-10">
        <h4 className="mb-4 text-lg font-semibold text-black">
          Daftar Lowongan Magang
        </h4>
        <Link href="/dashboard/lowongan/create">
          <a className="btn">
            Tambah Lowongan
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 ml-2 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </Link>
      </div>
      <div className="w-full overflow-hidden rounded-lg shadow-xs">
        <div className="w-full overflow-x-auto">
          <table className="w-full whitespace-no-wrap">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b :border-gray-700 bg-gray-50 :text-gray-400 :bg-gray-800">
                <th className="px-4 py-3">Lowongan</th>
                {/* <th className="px-4 py-3">Kuota</th> */}
                {/* <th className="px-4 py-3">Bidang Industri</th> */}
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            {internship === undefined ? (
              <h1>Loading ...</h1>
            ) : (
              <tbody className="bg-white divide-y :divide-gray-700 :bg-gray-800">
                {internship.length === 0 ? (
                  <tr className="text-gray-700 :text-gray-400">
                    <td colSpan={5} className="px-4 py-3 text-sm text-center">
                      Belum ada lowongan
                    </td>
                  </tr>
                ) : (
                  internship.map((item, index) => {
                    return (
                      <tr className="text-gray-700 :text-gray-400" key={index}>
                        <td className="px-4 py-3">
                          <div className="flex items-center text-sm">
                            <div>
                              <p className="font-semibold">
                                {item.name_program}
                              </p>
                            </div>
                          </div>
                        </td>
                        {/* <td className="px-4 py-3 text-sm">{`${item.quota} Orang`}</td> */}
                        {/* <td className="px-4 py-3 text-xs">
                          {item.industrial_field}
                        </td> */}
                        <td className="px-4 py-3 text-sm">
                          <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full :bg-bermuda :text-green-100">
                            Compeleted
                          </span>
                        </td>
                        <td>
                          <div className="px-4 py-3">
                            <div className="flex items-center space-x-4 text-sm">
                              <button className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg :text-gray-400 focus:outline-none focus:shadow-outline-gray">
                                <EyeIcon
                                  onClick={() =>
                                    handleShowDetailMagang(item.id)
                                  }
                                  className="w-[22px] cursor-pointer"
                                ></EyeIcon>
                              </button>
                              <button className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg :text-gray-400 focus:outline-none focus:shadow-outline-gray">
                                <PencilIcon
                                  // onClick={}
                                  className="w-[22px] cursor-pointer"
                                ></PencilIcon>
                              </button>
                              <button className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg :text-gray-400 focus:outline-none focus:shadow-outline-gray">
                                <TrashIcon
                                  onClick={() =>
                                    handleDeleteMagang(
                                      item.id,
                                      item.name_program
                                    )
                                  }
                                  className="w-[22px] cursor-pointer"
                                ></TrashIcon>
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Lowongan;
