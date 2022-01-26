

function SelectorPerusahaan({item}) {
    return (
        <div className="card border-[1px] border-[#DFDFDF] border-solid text-[#404040] mb-5 card-internship cursor-pointer hover:bg-bermuda hover:border-bermuda transition-all">
            <p className="p-6 font-semibold text-sm card-internship-hover:text-white">
                {item.perusahaan}
            </p>
        </div>
    );
}

export default SelectorPerusahaan;
