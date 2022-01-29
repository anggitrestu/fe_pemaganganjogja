const FormEmpat = ({ setStepper }) => {
  return (
    <div className="w-full mx-auto">
      <h3 className="text-black font-semibold text-2xl mb-3">Kuisioner</h3>
      <form>
        <div className="flex">
          <div className="w-10">
            <p className="text-center text-bermuda bg-bermuda bg-opacity-10  rounded-full inline-block w-[25px] h-[25px]">
              1
            </p>
          </div>
          <div className="form-control w-full  md:w-full lg:w-1/2 -mt-2">
            <label className="label">
              <span className="text-base font-normal">NIK</span>
            </label>
            <input
              type="number"
              placeholder="username"
              className="input  bg-[#DFDFDF]"
            />
          </div>
        </div>
        <div className="flex mt-6">
          <div className="w-10">
            <p className="text-center text-bermuda bg-bermuda bg-opacity-10  rounded-full inline-block w-[25px] h-[25px]">
              2
            </p>
          </div>
          <div className="form-control w-full  md:w-full lg:w-1/2 -mt-2">
            <label className="label">
              <span className="text-base font-normal">Tanggal Lahir</span>
            </label>
            <input
              type="date"
              placeholder="username"
              className="input  bg-[#DFDFDF]"
            />
          </div>
        </div>
        <div className="flex mt-6">
          <div className="w-10">
            <p className="text-center text-bermuda bg-bermuda bg-opacity-10  rounded-full inline-block w-[25px] h-[25px]">
              3
            </p>
          </div>
          <div className="form-control w-full  md:w-full lg:w-1/2 -mt-2">
            <label className="label">
              <span className="text-base font-normal">
                Apakah anda pernah bekerja?
              </span>
            </label>
            <div className="flex items-center">
              <span className="mr-2">Ya</span>
              <input
                type="radio"
                name="opt"
                defaultChecked="checked"
                className="radio radio-sm radio-secondary"
                defaultValue="ya"
              />
              <span className="ml-5 mr-2">Tidak</span>
              <input
                type="radio"
                name="opt"
                defaultChecked="checked"
                className="radio radio-sm radio-secondary"
                defaultValue="tidak"
              />
            </div>
          </div>
        </div>
        <div className="flex mt-6">
          <div className="w-10">
            <p className="text-center text-bermuda bg-bermuda bg-opacity-10  rounded-full inline-block w-[25px] h-[25px]">
              4
            </p>
          </div>
          <div className="form-control w-full  md:w-full lg:w-1/2 -mt-2">
            <label className="label">
              <span className="text-base font-normal">
                Minat untuk mengikuti Pemagangan 2021 di bidang usaha
              </span>
            </label>

            <div className="md:flex ">
              <div className="w-full  md:w-full lg:w-1/2">
                <label className="cursor-pointer flex items-center ">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-secondary"
                  />
                  <span className="label-text ml-2">Retail</span>
                </label>

                <label className="cursor-pointer flex items-center mt-2 ">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-secondary"
                  />
                  <span className="label-text ml-2">Rumah Sakit/Kesehatan</span>
                </label>

                <label className="cursor-pointer flex items-center mt-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-secondary"
                  />
                  <span className="label-text ml-2">Garmen/Tekstil</span>
                </label>
                <label className="cursor-pointer flex items-center mt-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-secondary"
                  />
                  <span className="label-text ml-2">Otomotif</span>
                </label>

                <label className="cursor-pointer flex items-center mt-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-secondary"
                  />
                  <span className="label-text ml-2">Media Kreatif</span>
                </label>
              </div>
              <div className="w-full  md:w-full lg:w-1/2 mt-2">
                <label className="cursor-pointer flex items-center ">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-secondary"
                  />
                  <span className="label-text ml-2">Mabel/Kerjinan</span>
                </label>

                <label className="cursor-pointer flex items-center mt-2 ">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-secondary"
                  />
                  <span className="label-text ml-2">Perhotelan/Resto/Spa</span>
                </label>

                <label className="cursor-pointer flex items-center mt-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-secondary"
                  />
                  <span className="label-text ml-2">Manufaktur</span>
                </label>
                <label className="cursor-pointer flex items-center mt-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-secondary"
                  />
                  <span className="label-text ml-2">Teknologi Informasi</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-6">
          <div className="w-10">
            <p className="text-center text-bermuda bg-bermuda bg-opacity-10  rounded-full inline-block w-[25px] h-[25px]">
              5
            </p>
          </div>
          <div className="form-control w-full md:w-1/2 lg:w-1/2 -mt-2">
            <label className="label">
              <span className="text-base font-normal">
                Anda bersedia magang di kabupaten/kota
              </span>
            </label>

            <div className="flex ">
              <div className="w-1/2">
                <label className="cursor-pointer flex items-center ">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-secondary"
                  />
                  <span className="label-text ml-2">Sleman</span>
                </label>

                <label className="cursor-pointer flex items-center mt-2 ">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-secondary"
                  />
                  <span className="label-text ml-2">Yogyakarta</span>
                </label>

                <label className="cursor-pointer flex items-center mt-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-secondary"
                  />
                  <span className="label-text ml-2">Bantul</span>
                </label>
                <label className="cursor-pointer flex items-center mt-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-secondary"
                  />
                  <span className="label-text ml-2">Gunung Kidul</span>
                </label>

                <label className="cursor-pointer flex items-center mt-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-secondary"
                  />
                  <span className="label-text ml-2">Kulon Progo</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-end">
          <button
            onClick={() => setStepper(5)}
            className="bg-bermuda hover:bg-[#c54933] transition-all text-sm text-white rounded-3xl px-5 py-3 "
          >
            Lanjut
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormEmpat;
