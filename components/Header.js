import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useRouter();

  return (
    <div>
      <nav className="bg-background ">
        <div className="py-2">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/">
                  <a>
                    <span className="hidden md:block">
                      <Image
                        src="/images/logo.svg"
                        alt="Picture of the author"
                        width={129}
                        height={50}
                        className="cursor-pointer"
                      />
                    </span>
                    <span className="md:hidden">
                      <Image
                        src="/icon.png"
                        alt="Picture of the author"
                        width={40}
                        height={40}
                        className="cursor-pointer"
                      />
                    </span>
                  </a>
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {/* className={
                  'w-fit px-4 py-2 rounded-full ' +
                  (company.instruktur
                    ? 'text-[#36B752] bg-[#36b75242]'
                    : 'text-[#b73636] bg-[#b7363642]')
                } */}
                  <Link href="/">
                    <a
                      className={
                        ' px-3 py-2 rounded-md text-sm font-semibold ' +
                        (pathname === '/' ? 'text-bermuda' : 'text-black')
                      }
                    >
                      Beranda
                    </a>
                  </Link>
                  <Link href="perusahaan">
                    <a
                      className={
                        ' px-3 py-2 rounded-md text-sm font-semibold ' +
                        (pathname === '/perusahaan'
                          ? 'text-bermuda'
                          : 'text-black')
                      }
                    >
                      Perusahaan
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="hidden md:block ml-auto">
              <Link href="/pendaftaran" passHref>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" bg-bermuda hover:bg-[#c54933] transition-all text-sm text-white rounded-3xl px-5 py-3 "
                >
                  Daftar Sekarang
                </a>
              </Link>
            </div>
            <div className="-mr-2 flex md:hidden">
              <Link href="/pendaftaran" passHref>
                <span className=" inline-flex items-center justify-center mr-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" bg-bermuda hover:bg-[#c54933] transition-all text-center text-sm text-white rounded-3xl px-5 py-3 "
                  >
                    Daftar
                  </a>
                </span>
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-[#DFDFDF] inline-flex items-center justify-center p-[10px] rounded-md text-gray-400 hover:text-gray-600 hover:bg-[#d4d4d4] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-400 focus:ring-[#F8F8F8]"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col"
              >
                <Link href="/">
                  <a
                    className={
                      ' px-3 py-4 text-sm font-semibold hover:text-bermuda ' +
                      (pathname === '/' ? 'text-bermuda' : 'text-black')
                    }
                  >
                    Beranda
                  </a>
                </Link>
                <Link href="perusahaan">
                  <a
                    className={
                      ' px-3 py-4 text-sm font-semibold hover:text-bermuda ' +
                      (pathname === '/perusahaan'
                        ? 'text-bermuda'
                        : 'text-black')
                    }
                  >
                    Perusahaan
                  </a>
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Header;
