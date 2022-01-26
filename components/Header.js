import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  console.log(router.pathname);
  return (
    <div>
      <nav className="bg-background">
        <div className="">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image
                  src="/images/logo.svg"
                  alt="Picture of the author"
                  width={129}
                  height={50}
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/">
                    <a className="text-red-500 text-primary px-3 py-2 rounded-md text-sm font-semibold">
                      Beranda
                    </a>
                  </Link>
                  <Link href="perusahaan">
                    <a className="text-black  hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">
                      Perusahaan
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="hidden md:block ml-auto">
              <Link href="/pendaftaran">
                <a className=" bg-bermuda hover:bg-[#c54933] transition-all text-sm text-white rounded-3xl px-5 py-3 ">
                  Daftar Sekarang
                </a>
              </Link>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
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
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className="hover:bg-gray-700 text-black block px-3 py-2 rounded-md text-base font-medium"
                >
                  Beranda
                </a>

                <a
                  href="#"
                  className="text-black hover:bg-gray-700 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Perusahaan
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Header;
