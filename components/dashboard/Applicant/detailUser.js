const Detailuser = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="w-full bg-gray-100 px-20 py-10">
        {data === undefined ? (
          <h1>Loading ...</h1>
        ) : (
          <>
            {data !== null && (
              <div>
                <div>
                  <h1 className="text-gray-900 font-semibold text-2xl mt-14">
                    Informasi Peserta
                  </h1>
                  <p className="text-gray-900  font-normal text-base mt-2"></p>
                  <form className="mt-8 ">
                    <div className="mt-10 mb-6">
                      <h4 className="text-gray-900 font-medium text-lg mb-6">
                        Informasi Pribadi
                      </h4>

                      <label className="label">
                        <span className="label-text">Nama Lengkap</span>
                      </label>
                      <input
                        type="text"
                        disabled
                        defaultValue={data?.fullname}
                        placeholder="Nama Lengkap"
                        className="w-full border-[1px] bg-[#DFDFDF] cursor-pointer text-base text-gray-900 focus:text-bermuda focus:outline-none focus:border-bermuda rounded-3xl py-5 px-8"
                      />

                      <label className="label block ">
                        <span className="label-text">Alamat Domisili</span>
                      </label>
                      <div className="mb-6 flex flex-col md:flex-row justify-between ">
                        <input
                          type="text"
                          disabled
                          defaultValue={data?.province}
                          placeholder="Provinsi Domisili"
                          className=" md:w-[49%] border-[1px] bg-[#DFDFDF] cursor-pointer text-base text-gray-900 focus:text-bermuda focus:outline-none focus:border-bermuda rounded-3xl py-5 px-8"
                        />

                        <input
                          type="text"
                          disabled
                          defaultValue={data?.city}
                          placeholder="Kota Domisili"
                          className="mt-6 md:mt-0 md:w-[49%]  border-[1px] bg-[#DFDFDF] cursor-pointer text-base text-gray-900 focus:text-bermuda focus:outline-none focus:border-bermuda rounded-3xl py-5 px-8"
                        />
                      </div>
                      <label className="label -mt-3">
                        <span className="label-text">Jenis Kelamin</span>
                      </label>
                      <select
                        disabled
                        defaultValue={data?.marital_status}
                        className="w-full border-[1px] bg-[#DFDFDF] cursor-pointer appearance-none text-base text-gray-900 focus:text-bermuda focus:outline-none focus:border-bermuda rounded-3xl py-5 px-8 mb-6"
                      >
                        <option hidden value={null}>
                          Pilih Jenis Kelamin
                        </option>
                        <option value={'Laki-Laki'}>Laki-Laki</option>
                        <option value={'Perempuan'}>Perempuan</option>
                      </select>

                      <label className="label -mt-3">
                        <span className="label-text">Tentang Dirimu</span>
                      </label>
                      <textarea
                        disabled
                        defaultValue={data?.about_you}
                        placeholder="Tuliskan gambaran mengenai dirimu disini..."
                        className="w-full border-[1px] bg-[#DFDFDF] cursor-pointer appearance-none text-base text-gray-900 focus:text-bermuda focus:outline-none focus:border-bermuda rounded-3xl py-8 px-8"
                        rows="6"
                      ></textarea>
                    </div>

                    <div className="mt-10 mb-6">
                      <h4 className="text-gray-900 font-medium text-lg mb-6">
                        Riwayat Pendidikan
                      </h4>
                      <label className="label -mt-3">
                        <span className="label-text">Pendidikan Terakhir</span>
                      </label>
                      <input
                        type="text"
                        disabled
                        defaultValue={data?.name_edu}
                        placeholder="Nama Sekolah/Universitas"
                        className="w-full border-[1px] bg-[#DFDFDF] cursor-pointer text-base text-gray-900 focus:text-bermuda focus:outline-none focus:border-bermuda rounded-3xl py-5 px-8 mb-6"
                      />

                      <select
                        disabled
                        defaultValue={data?.level_edu}
                        className="w-full border-[1px] bg-[#DFDFDF] cursor-pointer appearance-none text-base text-gray-900 focus:text-bermuda focus:outline-none focus:border-bermuda rounded-3xl py-5 px-8 mb-6"
                      >
                        <option hidden>Derajat Sekolah</option>
                        <option value={'SMA/SMK'}>SMA/SMK</option>
                        <option value={'Diploma'}>Diploma</option>
                        <option value={'Sarjana'}>Sarjana</option>
                      </select>
                      <input
                        type="text"
                        disabled
                        defaultValue={data?.major_edu}
                        placeholder="Jurusan/Program Studi"
                        className="w-full border-[1px] bg-[#DFDFDF] cursor-pointer text-base text-gray-900 focus:text-bermuda focus:outline-none focus:border-bermuda rounded-3xl py-5 px-8 "
                      />

                      <label className="label mt-3">
                        <span className="label-text">
                          Latar Belakang Pendidikan
                        </span>
                      </label>
                      <textarea
                        disabled
                        defaultValue={data?.educational_background}
                        placeholder="Diskripsikan pendidikan kamu disini..."
                        className="w-full border-[1px] bg-[#DFDFDF] cursor-pointer appearance-none text-base text-gray-900 focus:text-bermuda focus:outline-none focus:border-bermuda rounded-3xl py-8 px-8 mb-6"
                        rows="6"
                      ></textarea>
                      <label className="label mt-3">
                        <span className="label-text">Pengalaman Kerja</span>
                      </label>
                      <textarea
                        disabled
                        defaultValue={data?.work_experience}
                        placeholder="Deskripsikan pengalaman kerja jika ada..."
                        className="w-full border-[1px] bg-[#DFDFDF] cursor-pointer appearance-none text-base text-gray-900 focus:text-bermuda focus:outline-none focus:border-bermuda rounded-3xl py-8 px-8 mb-6"
                        rows="6"
                      ></textarea>
                    </div>
                  </form>
                </div>

                <div className="mt-10 mb-6">
                  <h4 className="text-gray-900 font-medium text-lg mb-6">
                    Hasil Kuisioner
                  </h4>
                  <form>
                    {data?.user_quistionnares.map((item, index) => {
                      return (
                        <div className="flex mt-6" key={index}>
                          <div className="w-10">
                            <p className="text-center text-bermuda bg-bermuda bg-opacity-10  rounded-full inline-block w-[25px] h-[25px]">
                              {index + 1}
                            </p>
                          </div>
                          <div className="form-control w-full  md:w-full -mt-2">
                            <label className="label">
                              <span className="text-base font-normal">
                                {item.question.question}
                              </span>
                            </label>
                            <input
                              className="w-full border-[1px] bg-[#DFDFDF] cursor-pointer appearance-none text-base text-gray-900 focus:text-bermuda focus:outline-none focus:border-bermuda rounded-3xl py-2 px-3 "
                              disabled
                              defaultValue={item.answer}
                              type="text"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </form>
                </div>

                <div className="mt-10 mb-6">
                  <h4 className="text-gray-900 font-medium text-lg mb-6">
                    Hasil Survey
                  </h4>
                  <form>
                    {data?.user_survey.map((item, index) => {
                      return (
                        <div className="flex mt-6" key={index}>
                          <div className="w-10">
                            <p className="text-center text-bermuda bg-bermuda bg-opacity-10  rounded-full inline-block w-[25px] h-[25px]">
                              {index + 1}
                            </p>
                          </div>
                          <div className="form-control w-full  md:w-full -mt-2">
                            <label className="label">
                              <span className="text-base font-normal">
                                {item.question.question}
                              </span>
                            </label>
                            <input
                              className="w-full border-[1px] bg-[#DFDFDF] cursor-pointer appearance-none text-base text-gray-900 focus:text-bermuda focus:outline-none focus:border-bermuda rounded-3xl py-2 px-3 "
                              disabled
                              defaultValue={item.answer}
                              type="text"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </form>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Detailuser;
