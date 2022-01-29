import Image from 'next/image';
import { UsersIcon, BriefcaseIcon } from '@heroicons/react/solid';
import { useEffect, useRef } from 'react';

function ModalDetailMagang({ setOnClick, data }) {
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
                            <Image src="/images/cross.svg" height={18} width={18} />
                        </div>
                    </div>
                    <div className="flex flex-col pl-12 pr-2 pb-8 bg-[#F8F8F8] rounded-bl-2xl rounded-br-2xl">
                        <div className='h-[500px] overflow-y-auto'>
                            <h1 className='text-bermuda text-2xl lg:text-3xl font-semibold'>{data.name}</h1>
                            <h2 className='text-base lg:text-lg font-medium mt-3'>{data.perusahaan}</h2>
                            <h3 className='text-lg lg:text-2xl font-semibold mt-10'>Informasi Program Magang</h3>
                            <div className='flex flex-col lg:flex-row mt-6'>
                                <div className='lg:w-1/2 mb-4 lg:mb-0'>
                                    <h4 className='text-lg font-medium'>Peserta Yang Dibutuhkan</h4>
                                    <div className="flex items-center mt-2">
                                        <span className="inline-block p-[6px] border-[1px] border-[#DFDFDF] rounded-full">
                                            <UsersIcon className="w-[15px] text-bermuda"></UsersIcon>
                                        </span>
                                        <p className="ml-2 text-sm lg:text-base">
                                            {data.kuota} Orang
                                        </p>
                                    </div>
                                </div>

                                <div className='lg:w-1/2'>
                                    <h4 className='text-lg font-medium'>Bidang Kerja/Kerjuruan Yang Dimagangkan</h4>
                                    <div className="flex items-center mt-2">
                                        <span className="inline-block p-[6px] border-[1px] border-[#DFDFDF] rounded-full">
                                            <BriefcaseIcon className="w-[15px] text-bermuda"></BriefcaseIcon>
                                        </span>
                                        <p className="ml-2 text-sm lg:text-base">
                                            Marketing
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <h4 className='text-lg font-medium mt-4'>Syarat Peserta Magang</h4>
                            <div className='flex items-center mt-2'>
                                <div className='w-2 h-2 mr-2 rounded-full bg-bermuda'></div>
                                <p className='font-medium text-sm lg:text-base'>Pendidikan/kejuruan</p>
                            </div>
                            <p className='pl-4 mt-1 text-sm lg:text-base'>{'Ekonomi dan Sejenisnya'}</p>

                            <div className='flex items-center mt-2'>
                                <div className='w-2 h-2 mr-2 rounded-full bg-bermuda'></div>
                                <p className='font-medium text-sm lg:text-base'>Usia</p>
                            </div>
                            <p className='pl-4 mt-1 text-sm lg:text-base'>{'16-24 Tahun'}</p>

                            <div className='flex items-center mt-2'>
                                <div className='w-2 h-2 mr-2 rounded-full bg-bermuda'></div>
                                <p className='font-medium text-sm lg:text-base'>Kelamin</p>
                            </div>
                            <p className='pl-4 mt-1 text-sm lg:text-base'>{'Perempuan'}</p>

                            <div className='flex items-center mt-2'>
                                <div className='w-2 h-2 mr-2 rounded-full bg-bermuda'></div>
                                <p className='font-medium text-sm lg:text-base'>Pengalaman</p>
                            </div>
                            <p className='pl-4 mt-1 text-sm lg:text-base'>{'0-1 Tahun'}</p>

                            <div className='flex items-center mt-2'>
                                <div className='w-2 h-2 mr-2 rounded-full bg-bermuda'></div>
                                <p className='font-medium text-sm lg:text-base'>Sertifikat Keterampilan</p>
                            </div>
                            <p className='pl-4 mt-1 text-sm lg:text-base'>{'Sertifikat Komputer, Microsoft Excel'}</p>

                            <div className='flex items-center mt-2 mb-2'>
                                <div className='w-2 h-2 mr-2 rounded-full bg-bermuda'></div>
                                <p className='font-medium text-sm lg:text-base'>Syarat Khusus/Lainnya</p>
                            </div>
                            <p className='pl-4 mt-1 text-sm lg:text-base w-11/12'>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalDetailMagang;