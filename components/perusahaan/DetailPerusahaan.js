import Renderitem from 'components/home/ListMagang/Renderitem';

let company = {
    "name": "ABADI HOTEL MALIOBORO",
    "alamat": "Jl. Ps. Kembang No.49, Sosromenduran, Gedong Tengen, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55271",
    "website": "abadihotel.com",
    "jenis": "Perhotelan",
    "karyawan": "50-100 Karyawan",
    "pelatihan": false,
    "instruktur": true
}

function DetailPerusahaan({ dataMagang }) {
    return (
        <>
            <div className="card border-[1px] border-[#DFDFDF] border-solid text-[#404040]">
                <div className="card-body">
                    <h2 className='font-semibold text-4xl text-bermuda mb-10'>
                        {company.name}
                    </h2>
                    <h3 className='font-semibold text-2xl'>
                        Informasi Perusahaan
                    </h3>
                    <div className='mt-9'>
                        <h4 className='font-medium text-lg'>
                            Alamat
                        </h4>
                        <p>
                            {company.alamat}
                        </p>
                    </div>
                    <div className='mt-8 flex'>
                        <div className='w-1/2'>
                            <h4 className='font-medium text-lg'>
                                Website
                            </h4>
                            <p>
                                {company.website}
                            </p>
                        </div>
                        <div className='w-1/2'>
                            <h4 className='font-medium text-lg'>
                                Jenis Usaha
                            </h4>
                            <p>
                                {company.jenis}
                            </p>
                        </div>
                    </div>
                    <div className='mt-8 flex'>
                        <div className='w-1/2'>
                            <h4 className='font-medium text-lg'>
                                Jumlah Karyawan
                            </h4>
                            <p>
                                {company.karyawan}
                            </p>
                        </div>
                        <div className='w-1/2'>
                            <h4 className='font-medium text-lg'>
                                Ruang Pelatihan
                            </h4>
                            <p className={"w-fit px-4 py-2 rounded-full " + (company.pelatihan ? 'text-[#36B752] bg-[#36b75242]' : 'text-[#b73636] bg-[#b7363642]')}>
                                {company.pelatihan ? 'Tersedia' : 'Tidak Tersedia'}
                            </p>
                        </div>
                    </div>
                    <div className='mt-4 flex'>
                        <div className='w-1/2'>
                            <h4 className='font-medium text-lg'>
                                Instruktur yang bersertifikat metodologi pelatihan
                            </h4>
                            <p className={"w-fit px-4 py-2 rounded-full " + (company.instruktur ? 'text-[#36B752] bg-[#36b75242]' : 'text-[#b73636] bg-[#b7363642]')}>
                                {company.instruktur ? 'Tersedia' : 'Tidak Tersedia'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-[#404040] mt-8 mb-6'>
                <h3 className='font-semibold text-2xl'>
                    Lowongan Magang
                </h3>
                <div className="grid grid-cols-2 gap-6 mt-6">
                    {dataMagang?.length > 0 ? (
                        dataMagang.map((item, index) => {
                            return <Renderitem item={item} key={index}></Renderitem>;
                        })
                    ) : (
                        <div className="w-full text-center py-12">No Item Found</div>
                    )}
                </div>
            </div>
        </>
    );
}

export default DetailPerusahaan;
