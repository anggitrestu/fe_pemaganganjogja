import ApiInternship from 'pages/api/ApiInternship';
import { useState, useEffect } from 'react';
import Renderitem from './Renderitem';

const Index = ({ data }) => {
  const [params, setParams] = useState(null);
  const [postNum, setPostNum] = useState(15); // Default number of posts dislplayed
  const [dataMagang, setDataMagang] = useState(data);
  const fetchInterhips = async (query) => {
    if (params === 'null') {
      setDataMagang(data);
    } else {
      const filter = await ApiInternship.all(query);
      setDataMagang(filter);
    }
  };

  function handleClick() {
    setPostNum((prevPostNum) => prevPostNum + 6); // 6 is the number of internships you want to load per click
  }
  useEffect(() => {
    fetchInterhips(params);
    return () => {};
  }, [params]);

  return (
    <div>
      <div className="flex">
        <div className="flex-col">
          <h1 className="font-semibold text-black text-4xl">
            Daftar Program Magang
          </h1>
          <p className="font-normal text-[#8F8F8F] text-base inline-block mt-1 mb-5">
            Temukan program magang yang cocok dengan diri kamu.
          </p>
        </div>
        <div className="ml-auto text-right">
          <h4 className="text-[#8F8F8F] font-normal text-sm">
            Filter Perusahaan :
          </h4>
          <select
            // onClick={() => console.log('asdasd')}
            onChange={(e) => setParams(e.target.value)}
            className="bg-[#F8F8F8] w-full max-w-xs text-bermuda text-right text-base hover:text-red-700 hover:cursor-pointer"
          >
            <option value="null">Pilih Perusahaan</option>
            {data?.length > 0
              ? data.slice(0, postNum).map((item, index) => {
                  return (
                    <option
                      value={item.perusahaan}
                      key={index}
                      className="text-bermuda"
                    >
                      {item.perusahaan}
                    </option>
                  );
                })
              : null}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 mt-6">
        {dataMagang?.length > 0 ? (
          dataMagang.slice(0, postNum).map((item, index) => {
            return <Renderitem item={item} key={index}></Renderitem>;
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
