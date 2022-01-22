import { UserIcon } from '@heroicons/react/solid';

const Renderitem = ({ item }) => {
  console.log(item);
  return (
    <div>
      <div className="card shadow-sm border-[1px] border-[#DFDFDF] border-solid hover:bg-bermuda hover:bg-opacity-20">
        <div className="card-body">
          <h2 className="font-sm text-bermuda font-normal">
            {item.perusahaan}
          </h2>
          <p className="font-medium text-xl text-black">{item.name}</p>
          <div className="flex items-center">
            <span className="inline-block">
              <UserIcon className="w-[15px] text-bermuda"></UserIcon>
            </span>
            <p className="ml-2">{item.kuota}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Renderitem;
