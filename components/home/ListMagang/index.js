import ApiInternship from 'pages/api/ApiInternship';
import { useState, useEffect } from 'react';
import Renderitem from './Renderitem';
import Fade from 'react-reveal/Fade';
import ModalDetailMagang from 'components/ModalDetailMagang';

const Index = ({ data, nameCompany }) => {
  const [onClickModal, setOnClickModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [params, setParams] = useState(null);
  const [postNum, setPostNum] = useState(15); // Default number of posts dislplayed
  const [dataMagang, setDataMagang] = useState(data);

  const fetchInterhips = async (query) => {
    if (params === 'null') {
      setDataMagang(data);
    } else {
      const filter = await ApiInternship.all(query, '');
      setDataMagang(filter.data);
    }
  };

  function handleClick() {
    setPostNum((prevPostNum) => prevPostNum + 6); // 6 is the number of internships you want to load per click
  }

  function handleClickModal(item) {
    setModalData(item);
    setOnClickModal(true);
  }

  useEffect(() => {
    fetchInterhips(params);
    return () => {};
  }, [params]);

  return (
    <div>
      {onClickModal && (
        <ModalDetailMagang
          setOnClick={setOnClickModal}
          data={modalData}
        ></ModalDetailMagang>
      )}
      <div className="flex flex-col lg:flex-row">
        <div className="flex-col">
          <h1 className="font-semibold text-black text-2xl lg:text-4xl">
            Daftar Program Magang
          </h1>
          <p className="font-normal text-[#8F8F8F] text-base inline-block mt-1 mb-5">
            Temukan program magang yang cocok dengan diri kamu.
          </p>
        </div>
        <div className="lg:ml-auto text-left lg:text-right">
          <h4 className="text-[#8F8F8F] font-normal text-sm">
            Filter Perusahaan :
          </h4>
          <select
            onChange={(e) => setParams(e.target.value)}
            className=" bg-[#F8F8F8] w-[200px]  border-none px-3 py-2 text-bermuda text-left lg:text-right text-base hover:text-red-700 hover:cursor-pointer"
          >
            <option value="null">Pilih Perusahaan</option>
            {nameCompany?.length > 0
              ? nameCompany.map((item, index) => {
                  return (
                    <option
                      value={item.name}
                      key={index}
                      className="text-bermuda"
                    >
                      {item.name}
                    </option>
                  );
                })
              : null}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {dataMagang?.length > 0 ? (
          dataMagang.slice(0, postNum).map((item, index) => {
            return (
              <Fade key={index} bottom delay={15 * index}>
                <div onClick={() => handleClickModal(item)}>
                  <Renderitem item={item}></Renderitem>
                </div>
              </Fade>
            );
          })
        ) : (
          <div className="w-full text-center py-12">No Item Found</div>
        )}
      </div>

      <button
        onClick={handleClick}
        className="bg-bermuda hover:bg-red-700 flex mt-10 mx-auto text-white px-5 py-3 rounded-3xl"
      >
        Tampilkan Lebih Banyak
      </button>
    </div>
  );
};

export default Index;
