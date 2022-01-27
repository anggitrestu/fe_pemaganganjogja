import { ChevronDownIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import Renderitem from './Renderitem';

const Index = ({ data }) => {
  const [postNum, setPostNum] = useState(15); // Default number of posts dislplayed

  function handleClick(e) {
    // e.PreventDefault();
    setPostNum((prevPostNum) => prevPostNum + 6); // 3 is the number of posts you want to load per click
  }

  return (
    <div>
      <div className="flex">
        <div className="flex-col">
          <h1 className="font-semibold text-black text-4xl">
            Daftar Program Magang
          </h1>
          <p className="font-normal text-[#8F8F8F] text-base inline-block mt-1">
            Temukan program magang yang cocok dengan diri kamu.
          </p>
        </div>
        <div className="ml-auto text-right">
          <h4 className="text-[#8F8F8F] font-normal text-sm">
            Filter Perusahaan :
          </h4>
          <select className="bg-[#F8F8F8] w-full max-w-xs text-black text-right text-base">
            <option selected="selected">Pilih Perusahaan</option>
            {data?.length > 0
              ? data.slice(0, postNum).map((item, index) => {
                  return <option key={index}>{item.perusahaan}</option>;
                })
              : null}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 mt-6">
        {/*  {props.posts.slice(0, postNum).map(post => (
         */}
        {data?.length > 0 ? (
          data.slice(0, postNum).map((item, index) => {
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
