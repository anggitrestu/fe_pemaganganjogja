import Image from 'next/image';
import {
  LocationMarkerIcon,
  BriefcaseIcon,
  InformationCircleIcon,
} from '@heroicons/react/solid';
import { useEffect, useRef } from 'react';
import Parser from 'html-react-parser';

function ModalDetailMagang({ setOnClick, data }) {
  console.log(data);
  const exitModal = (e) => {
    e.preventDefault();
    setOnClick(false);
  };

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
    <div className="fixed left-0 top-0 z-50">
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
                src="/images/cross.svg"
                alt="image"
                height={18}
                width={18}
              />
            </div>
          </div>
          <div className="flex flex-col pl-12 pr-2 pb-8 bg-[#F8F8F8] rounded-bl-2xl rounded-br-2xl">
            <div className="h-[500px] overflow-y-auto">
              <h1 className="text-bermuda text-2xl lg:text-3xl font-semibold">
                {data.name_program}
              </h1>
              <h2 className="text-base lg:text-lg font-medium mt-3">
                {data.company.name}
              </h2>
              <h3 className="text-lg lg:text-2xl font-semibold mt-10">
                Informasi Program Magang
              </h3>
              <div className="flex flex-col lg:flex-row mt-6">
                <div className="lg:w-1/2 mb-4 lg:mb-0">
                  <h4 className="text-lg font-medium">Penempatan Magang</h4>
                  <div className="flex items mt-2">
                    <span className="inline-block p-[6px] ">
                      <LocationMarkerIcon className="w-[15px] text-bermuda"></LocationMarkerIcon>
                      {/* Penempatan */}
                    </span>
                    <p className="ml-2 text-sm lg:text-base">{data.location}</p>
                  </div>

                  <div className="ml-3 flex items-center mt-2">
                    <div className="w-2 h-2 mr-2 rounded-full bg-bermuda"></div>
                    <p className="ml-2 font-medium text-sm lg:text-base">
                      Persyaratan Magang
                    </p>
                  </div>

                  <div className="pl-4 mt-1 text-sm lg:text-base">
                    {Parser(data?.condition)}
                  </div>

                  <div className="ml-3 flex items-center mt-2">
                    <div className="w-2 h-2 mr-2 rounded-full bg-bermuda"></div>
                    <p className="font-medium text-sm lg:text-base">
                      Deksripsi Magang
                    </p>
                  </div>
                  <div className="pl-4 mt-1 text-sm lg:text-base">
                    {Parser(data?.job_desc)}
                  </div>
                </div>

                <div className="lg:w-1/2">
                  <div>
                    <h4 className="text-lg font-medium">
                      Bidang Kerja/Kerjuruan Yang Dimagangkan
                    </h4>
                    <div className="flex mt-2">
                      <span className="inline-block p-[6px] ">
                        <BriefcaseIcon className="w-[15px] text-bermuda"></BriefcaseIcon>
                      </span>
                      <p className="ml-2 text-sm lg:text-base">
                        {data.company.type_of_business}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <h4 className="text-lg font-medium">
                      Terbuka untuk Penyandang Disabilitas?
                    </h4>
                    <div className="flex mt-2">
                      <span className="inline-block p-[6px] ">
                        <InformationCircleIcon className="w-[15px] text-bermuda"></InformationCircleIcon>
                      </span>
                      <p className="ml-2 text-sm lg:text-base">
                        {data?.disability}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalDetailMagang;
