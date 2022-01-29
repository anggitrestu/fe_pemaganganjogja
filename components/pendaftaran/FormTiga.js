function FormTiga({ setStepper }) {
  return (
    <>
      <h1 className="text-[#404040] font-semibold text-2xl mt-14">
        Lengkapi Profil
      </h1>
      <p className="text-[#8F8F8F] w-[793px] font-normal text-base mt-2">
        Masukan informasi detail tentang dirimu.
      </p>
      <form className="mt-8">
        <div className="mt-10 mb-6">
          <h4 className="text-[#404040] font-medium text-lg mb-6">
            Informasi Pribadi
          </h4>
          <input
            type="text"
            name="nama"
            placeholder="Nama Lengkap"
            className="w-full border-[1px] bg-[#DFDFDF] cursor-pointer text-base text-[#8F8F8F] focus:text-bermuda focus:outline-none focus:border-bermuda rounded-3xl py-5 px-8"
          />
          <div className="mt-6 mb-6 flex justify-between">
            <input
              type="text"
              name="provinsiDomisili"
              placeholder="Provinsi Domisili"
              className=" w-[49%] border-[1px] bg-[#DFDFDF] cursor-pointer text-base text-[#8F8F8F] focus:text-bermuda focus:outline-none focus:border-bermuda rounded-3xl py-5 px-8"
            />
            <input
              type="text"
              name="kotaDomisili"
              placeholder="Kota Domisili"
              className=" w-[49%] border-[1px] bg-[#DFDFDF] cursor-pointer text-base text-[#8F8F8F] focus:text-bermuda focus:outline-none focus:border-bermuda rounded-3xl py-5 px-8"
            />
          </div>
          <select className="w-full border-[1px] bg-[#DFDFDF] cursor-pointer appearance-none text-base text-[#8F8F8F] focus:text-bermuda focus:outline-none focus:border-bermuda rounded-3xl py-5 px-8 mb-6">
            <option hidden selected>
              Jenis Kelamin
            </option>
            <option>Laki-Laki</option>
            <option>Perempuan</option>
          </select>
          <textarea
            placeholder="Tuliskan gambaran mengenai dirimu disini..."
            className="w-full border-[1px] bg-[#DFDFDF] cursor-pointer appearance-none text-base text-[#8F8F8F] focus:text-bermuda focus:outline-none focus:border-bermuda rounded-3xl py-8 px-8"
            rows="6"
          ></textarea>
        </div>

        <div className="mt-10 mb-6">
          <h4 className="text-[#404040] font-medium text-lg mb-6">
            Pendidikan Terakhir
          </h4>
          <input
            type="text"
            name="namaSekolah"
            placeholder="Nama Sekolah/Universitas"
            className="w-full border-[1px] bg-[#DFDFDF] cursor-pointer text-base text-[#8F8F8F] focus:text-bermuda focus:outline-none focus:border-bermuda rounded-3xl py-5 px-8 mb-6"
          />
          <select className="w-full border-[1px] bg-[#DFDFDF] cursor-pointer appearance-none text-base text-[#8F8F8F] focus:text-bermuda focus:outline-none focus:border-bermuda rounded-3xl py-5 px-8 mb-6">
            <option hidden selected>
              Derajat Sekolah
            </option>
            <option>Laki-Laki</option>
            <option>Perempuan</option>
          </select>
          <input
            type="text"
            name="jurusan"
            placeholder="Jurusan/Program Studi"
            className="w-full border-[1px] bg-[#DFDFDF] cursor-pointer text-base text-[#8F8F8F] focus:text-bermuda focus:outline-none focus:border-bermuda rounded-3xl py-5 px-8 mb-6"
          />
          <textarea
            placeholder="Diskripsikan pendidikan kamu disini..."
            className="w-full border-[1px] bg-[#DFDFDF] cursor-pointer appearance-none text-base text-[#8F8F8F] focus:text-bermuda focus:outline-none focus:border-bermuda rounded-3xl py-8 px-8 mb-6"
            rows="6"
          ></textarea>
          <div className="mb-6 flex justify-between">
            <input
              type="date"
              name="mulaiSekolah"
              placeholder="Tanggal Mulai"
              className=" w-[49%] border-[1px] bg-[#DFDFDF] cursor-pointer text-base text-[#8F8F8F] focus:text-bermuda focus:outline-none focus:border-bermuda rounded-3xl py-5 px-8"
            />
            <input
              type="date"
              name="selesaiSekolah"
              placeholder="Tanggal Selesai"
              className=" w-[49%] border-[1px] bg-[#DFDFDF] cursor-pointer text-base text-[#8F8F8F] focus:text-bermuda focus:outline-none focus:border-bermuda rounded-3xl py-5 px-8"
            />
          </div>
          <div className="form-check">
            <input
              className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-bermuda checked:border-bermuda focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label
              className="form-check-label inline-block text-[#404040] cursor-pointer"
              htmlFor="flexCheckDefault"
            >
              Masih Belajar Disini.
            </label>
          </div>
        </div>

        <div className="flex flex-row justify-end">
          <button
            onClick={() => setStepper(4)}
            className="bg-bermuda hover:bg-[#c54933] transition-all text-sm text-white rounded-3xl px-5 py-3 "
          >
            Lanjut
          </button>
        </div>
      </form>
    </>
  );
}

export default FormTiga;
