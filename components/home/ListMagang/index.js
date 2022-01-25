import { ChevronDownIcon } from '@heroicons/react/solid';
import Renderitem from './Renderitem';

const Index = ({ data }) => {
  console.log(data);
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
          <p className="text-bermuda font-normal text-base">
            Abadi Hotel Malioboro
            <span className="inline-block w-2.5">
              <ChevronDownIcon></ChevronDownIcon>
            </span>{' '}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 mt-6">
        {data?.length > 0 ? (
          data.map((item, index) => {
            return <Renderitem item={item} key={index}></Renderitem>;
          })
        ) : (
          <div className="w-full text-center py-12">No Item Found</div>
        )}
      </div>
    </div>
  );
};

export default Index;
