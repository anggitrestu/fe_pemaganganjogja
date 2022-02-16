import { useState } from 'react';
import Renderitem from 'components/home/ListMagang/Renderitem';
import ModalDetailMagang from 'components/ModalDetailMagang';
import ApiInternship from 'pages/api/ApiInternship';

function DetailPerusahaan({ data }) {
  const [onClickModal, setOnClickModal] = useState(false);
  const [modalData, setModalData] = useState({});
  function handleClickModal(item) {
    ApiInternship.details(item.id).then((res) => {
      setModalData(res.data);
      setOnClickModal(true);
    });
  }
  return (
    <div>
      {onClickModal && (
        <ModalDetailMagang
          setOnClick={setOnClickModal}
          data={modalData}
        ></ModalDetailMagang>
      )}
      <div className="card border-[1px] border-[#DFDFDF] border-solid text-[#404040]">
        <div className="card-body">
          <h2 className="font-semibold text-2xl lg:text-4xl text-bermuda mb-10">
            {data?.name}
          </h2>
          <h3 className="font-semibold text-xl lg:text-2xl">
            Informasi Perusahaan
          </h3>
          <div className="mt-9">
            <h4 className="font-medium text-base lg:text-lg">Alamat</h4>
            <p className="text-sm lg:text-base">{data?.address}</p>
          </div>
          <div className="mt-8 flex">
            <div className="w-1/2">
              <h4 className="font-medium text-base lg:text-lg">Jenis Usaha</h4>
              <p className="text-sm lg:text-base">{data?.type_of_business}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-[#404040] mt-8 mb-6">
        <h3 className="font-semibold text-lg lg:text-2xl">Lowongan Magang</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {data?.internships?.length > 0 ? (
            data.internships.map((item, index) => {
              return (
                <div key={index} onClick={() => handleClickModal(item)}>
                  <Renderitem item={item}></Renderitem>
                </div>
              );
            })
          ) : (
            <div className="w-full text-center py-12">No Item Found</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DetailPerusahaan;
