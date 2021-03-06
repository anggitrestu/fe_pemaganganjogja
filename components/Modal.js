import Image from 'next/image';
import Renderitem from './home/ListMagang/Renderitem';
import { useEffect, useRef, useState } from 'react';
import ApiInternship from '../pages/api/ApiInternship';

function Modal({ setOnClick, data, setValue }) {
  const exitModal = (e) => {
    e.preventDefault();
    setOnClick(false);
  };
  const [internships, setInternships] = useState(data);
  const [nameProgram, setNameProgram] = useState(null);

  const fetchInterhips = async (query) => {
    if (nameProgram === 'null') {
      setInternships(data);
    } else {
      const filter = await ApiInternship.all('', nameProgram);
      setInternships(filter.data);
    }
  };
  useEffect(() => {
    fetchInterhips(nameProgram);
    return () => {};
  }, [nameProgram]);

  const outsideClick = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    setOnClick(false);
  };

  const node = useRef();

  useEffect(() => {
    document.addEventListener('mousedown', outsideClick);
    return () => {
      document.removeEventListener('mousedown', outsideClick);
    };
  }, []);

  return (
    <div className="fixed z-50 left-0 top-0">
      <div className="flex justify-center items-center antialiased fixed w-full h-full bg-black bg-opacity-90">
        <div
          ref={node}
          className="flex flex-col w-11/12 sm:w-5/6 lg:w-9/12 max-w-6xl mx-auto shadow-xl text-[#404040]"
        >
          <div className="flex flex-row justify-end p-6 bg-[#F8F8F8] rounded-tl-2xl rounded-tr-2xl">
            <div
              className="pt-3 px-[11px] pb-1 rounded-full border-[1px] border-[#DFDFDF] cursor-pointer hover:border-bermuda"
              onClick={exitModal}
            >
              <Image
                alt="images"
                src="/images/cross.svg"
                height={18}
                width={18}
              />
            </div>
          </div>
          <div className="flex flex-col px-6 bg-[#F8F8F8] rounded-bl-2xl rounded-br-2xl">
            <form className="mb-4">
              <label className="relative block w-full md:w-3/5 mx-auto">
                <svg
                  className="pointer-events-none w-6 h-6 absolute top-8 transform -translate-y-1/2 left-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.7388 2C17.1088 2 21.4768 6.368 21.4768 11.738C21.4768 14.2715 20.5045 16.5823 18.9134 18.3165L22.0442 21.4407C22.3372 21.7337 22.3382 22.2077 22.0452 22.5007C21.8992 22.6487 21.7062 22.7217 21.5142 22.7217C21.3232 22.7217 21.1312 22.6487 20.9842 22.5027L17.8156 19.343C16.1488 20.6778 14.0354 21.477 11.7388 21.477C6.36876 21.477 1.99976 17.108 1.99976 11.738C1.99976 6.368 6.36876 2 11.7388 2ZM11.7388 3.5C7.19576 3.5 3.49976 7.195 3.49976 11.738C3.49976 16.281 7.19576 19.977 11.7388 19.977C16.2808 19.977 19.9768 16.281 19.9768 11.738C19.9768 7.195 16.2808 3.5 11.7388 3.5Z"
                    fill="#8F8F8F"
                  />
                </svg>
                <input
                  onChange={(e) => setNameProgram(e.target.value)}
                  type="text"
                  name="search"
                  id="email"
                  placeholder="Cari Program Magang..."
                  className="form-input w-full block border-[1px] bg-[#DFDFDF] cursor-pointer text-base text-[#8F8F8F] focus:text-bermuda focus:outline-none focus:border-bermuda rounded-3xl pl-16 py-5"
                />
              </label>
            </form>
            <div className="mt-6 mb-6 overflow-x-hidden overflow-y-auto h-[380px] pr-2">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {internships?.length > 0 ? (
                  internships.map((item, index) => {
                    return (
                      <div key={index}>
                        <Renderitem
                          setOnClick={exitModal}
                          item={item}
                          setValue={setValue}
                        ></Renderitem>
                      </div>
                    );
                  })
                ) : (
                  <div className="w-full text-center py-12">No Item Found</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
