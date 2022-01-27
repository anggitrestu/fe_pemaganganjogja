function SelectorPerusahaan({ item, setId, idNow }) {
  return (
    <div
      onClick={() => setId(item.id)}
      className={
        'card border-[1px] border-[#DFDFDF] border-solid  mb-5 card-internship cursor-pointer hover:bg-bermuda hover:border-bermuda transition-all ' +
        (idNow === item.id ? 'bg-bermuda text-white' : 'text-[#404040]')
      }
    >
      <p className="p-6 font-semibold text-sm card-internship-hover:text-white">
        {item.name}
      </p>
    </div>
  );
}

export default SelectorPerusahaan;
