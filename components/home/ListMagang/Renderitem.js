import { UserIcon } from '@heroicons/react/solid';

const Renderitem = ({ item }) => {
  return (
      <div className="card card-internship border-[1px] border-[#DFDFDF] border-solid hover:bg-bermuda hover:border-0 hover:scale-[1.008] transition-all cursor-pointer">
        <div className="card-body">
          <h2 className="truncate hover:text-clip text-sm text-bermuda font-normal card-internship-h2-hover:text-white-opacity">
            {item.perusahaan}
          </h2>
          <p className="font-semibold text-xl text-black card-internship-hover:text-white mt-1 mb-6">{item.name}</p>
          <div className="flex items-center">
            <span className="inline-block p-[6px] border-[1px] border-[#DFDFDF] rounded-full">
              <UserIcon className="w-[15px] text-bermuda card-internship-hover:text-white"></UserIcon>
            </span>
            <p className="ml-2 card-internship-hover:text-white">{item.kuota} Orang</p>
          </div>
        </div>
      </div>
  );
};

export default Renderitem;
