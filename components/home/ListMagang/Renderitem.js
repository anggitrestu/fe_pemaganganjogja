import { LocationMarkerIcon } from '@heroicons/react/solid';

const Renderitem = ({ item, setOnClick, setValue }) => {
  const onClickc = (e) => {
    setValue
      ? setValue({
          id: item.id,
          name_program: item.name_program,
        })
      : {};

    setOnClick ? setOnClick(e) : {};
  };

  return (
    <div
      onClick={(e) => onClickc(e)}
      className="card card-internship border-[1px] border-[#DFDFDF] border-solid hover:bg-bermuda hover:border-0 hover:scale-[1.008] transition-all cursor-pointer"
    >
      <div className="card-body">
        <h2 className="truncate hover:text-clip text-sm text-bermuda font-normal card-internship-h2-hover:text-white-opacity">
          {item?.company?.name}
        </h2>
        <p className="font-semibold text-lg lg:text-xl text-black card-internship-hover:text-white mt-1 mb-6">
          {item?.name_program}
        </p>
        <div className="flex ">
          <span className="text-bermuda text-sm card-internship-hover:text-white ">
            <LocationMarkerIcon className="w-[15px] text-bermuda card-internship-hover:text-white"></LocationMarkerIcon>
          </span>
          <p className="ml-2 text-sm lg:text-sm card-internship-hover:text-white">
            {`${item?.location}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Renderitem;
