import { decodeToken } from '../../helpers/getToken';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { LogoutIcon, DocumentReportIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';

const Sidebar = (props) => {
  const { pathname } = useRouter();
  console.log(pathname);
  const admin = decodeToken().data;

  const handleLogout = (e) => {
    e.preventDefault();
    Cookies.remove('token');
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
      <div className="fixed flex flex-col top-0 left-0 w-64 bg-gray-900 h-full shadow-lg">
        <div className="flex items-center pl-6 h-20 border-b border-gray-800">
          <div className="ml-1">
            <p className="ml-1 text-md font-medium tracking-wide truncate text-gray-100 font-sans">
              {admin ? admin.name : 'admin'}
            </p>
            <div className="badge">
              <span className="px-2 py-0.5 ml-auto text-xs font-medium tacking-wide text-blue-800 bg-blue-100 rounded-full">
                {admin ? admin.role : 'admin'}
              </span>
            </div>
          </div>
        </div>
        <div className="overflow-y-auto overflow-x-hidden flex-grow">
          <ul className="flex flex-col py-6 space-y-1">
            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="flex font-semibold text-sm text-gray-300 my-4 font-sans uppercase">
                  <Link href="/dashboard">
                    <a>Dashboard</a>
                  </Link>
                </div>
              </div>
            </li>
            {admin?.role === 'admin-company' && (
              <>
                <li>
                  <Link href="/dashboard">
                    <a
                      className={
                        'relative flex flex-row items-center h-11  text-gray-500 hover:bg-gray-700  hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6' +
                        (pathname === '/dashboard'
                          ? ' text-gray-200 border-l-4  border-blue-500 bg-gray-700 pr-6 focus:outline-none'
                          : '')
                      }
                    >
                      <span className="inline-flex justify-center items-center ml-4">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                          />
                        </svg>
                      </span>
                      <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">
                        Perusahaan
                      </span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard/lowongan">
                    <a
                      className={
                        'relative flex flex-row items-center h-11  text-gray-500 hover:bg-gray-700  hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6' +
                        (pathname.includes('/dashboard/lowongan')
                          ? ' text-gray-200 border-l-4  border-blue-500 bg-gray-700 pr-6 focus:outline-none'
                          : '')
                      }
                    >
                      <span className="inline-flex justify-center items-center ml-4">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                          />
                        </svg>
                      </span>
                      <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">
                        Lowongan
                      </span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard/report">
                    <a
                      className={
                        'relative flex flex-row items-center h-11  text-gray-500 hover:bg-gray-700  hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6' +
                        (pathname.includes('/dashboard/report')
                          ? ' text-gray-200 border-l-4  border-blue-500 bg-gray-700 pr-6 focus:outline-none'
                          : '')
                      }
                    >
                      <span className="inline-flex justify-center items-center ml-4">
                        <i className="w-5 h-5">
                          <DocumentReportIcon></DocumentReportIcon>
                        </i>
                      </span>
                      <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans ">
                        Laporan
                      </span>
                    </a>
                  </Link>
                </li>
              </>
            )}

            {admin?.role === 'super-admin' && (
              <>
                <li>
                  <Link href="/admin">
                    <a
                      className={
                        'relative flex flex-row items-center h-11  text-gray-500 hover:bg-gray-700  hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6' +
                        (pathname.includes('/admin')
                          ? ' text-gray-200 border-l-4  border-blue-500 bg-gray-700 pr-6 focus:outline-none'
                          : '')
                      }
                    >
                      <span className="inline-flex justify-center items-center ml-4">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                          />
                        </svg>
                      </span>
                      <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">
                        Beranda
                      </span>
                    </a>
                  </Link>
                </li>
              </>
            )}

            <li>
              <a
                onClick={(e) => handleLogout(e)}
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <i className="h-5 w-5">
                    <LogoutIcon></LogoutIcon>
                  </i>
                </span>
                <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">
                  Logout
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full ml-64"></div>
      {/* <h1>Hallo</h1> */}
    </div>
  );
};

export default Sidebar;
