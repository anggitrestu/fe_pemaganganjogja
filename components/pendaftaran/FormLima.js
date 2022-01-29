const FormLima = ({ setStepper }) => {
  return (
    <div className="w-full">
      <h3 className="text-black font-semibold text-2xl mb-3">
        Survey Literasi Digital
      </h3>
      <div className="flex">
        <div className="w-10">
          <p className="text-center text-bermuda bg-bermuda bg-opacity-10  rounded-full inline-block w-[25px] h-[25px]">
            1
          </p>
        </div>
        <div className="form-control w-full -mt-2">
          <label className="label">
            <span className="text-base font-normal">
              Perangkat yang anda miliki (tidak berbagi-pakai dengan orang lain)
            </span>
          </label>
          <div className="md:flex ">
            <div className="w-full  md:w-full lg:w-1/2">
              <label className="cursor-pointer flex items-center ">
                <input
                  type="checkbox"
                  className="checkbox checkbox-secondary"
                />
                <span className="label-text ml-2">Ponsel</span>
              </label>

              <label className="cursor-pointer flex items-center mt-2 ">
                <input
                  type="checkbox"
                  className="checkbox checkbox-secondary"
                />
                <span className="label-text ml-2">PC Desktop</span>
              </label>

              <label className="cursor-pointer flex items-center mt-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-secondary"
                />
                <span className="label-text ml-2">PC Laptop</span>
              </label>
              <label className="cursor-pointer flex items-center mt-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-secondary"
                />
                <span className="label-text ml-2">Tablet</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-6">
        <div className="w-10">
          <p className="text-center text-bermuda bg-bermuda bg-opacity-10  rounded-full inline-block w-[25px] h-[25px]">
            2
          </p>
        </div>
        <div className="form-control w-full -mt-2">
          <label className="label">
            <span className="text-base font-normal">
              Bagaimana perangkat anda mengakses jaringan internet?
            </span>
          </label>
          <div className="md:flex ">
            <div className="w-full  md:w-full lg:w-1/2">
              <label className="cursor-pointer flex items-center ">
                <input
                  type="checkbox"
                  className="checkbox checkbox-secondary"
                />
                <span className="label-text ml-2">Paket Data HP</span>
              </label>

              <label className="cursor-pointer flex items-center mt-2 ">
                <input
                  type="checkbox"
                  className="checkbox checkbox-secondary"
                />
                <span className="label-text ml-2">Wifi di rumah</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-6">
        <div className="w-10">
          <p className="text-center text-bermuda bg-bermuda bg-opacity-10  rounded-full inline-block w-[25px] h-[25px]">
            3
          </p>
        </div>
        <div className="form-control w-full -mt-2">
          <label className="label">
            <span className="text-base font-normal">
              Apakah anda punya email?
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
        <div className="form-control w-full -mt-2">
          <label className="label">
            <span className="text-base font-normal">
              Apakah pernah menggunakan Zoom, Meet, Teams, atau semacamnya?
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
            5
          </p>
        </div>
        <div className="form-control w-full -mt-2">
          <label className="label">
            <span className="text-base font-normal">
              Apakah pernah menggunakan Office 365. Google Workspace, atau
              semacamnya?
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
            6
          </p>
        </div>
        <div className="form-control w-full -mt-2">
          <label className="label">
            <span className="text-base font-normal">
              Apakah pernah menggunakan Google atau mesin pencari untuk mencari
              informasi?
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
            7
          </p>
        </div>
        <div className="form-control w-full -mt-2">
          <label className="label">
            <span className="text-base font-normal">
              Apakah pernah berbelanja di e-commerce? (Shopee/Tokopedia/dll)
            </span>
          </label>
          <div className="flex items-center">
            <span className="mr-2">Ya</span>
            <input
              type="radio"
              name="opt"
              className="radio radio-sm radio-secondary"
              defaultValue="ya"
            />
            <span className="ml-5 mr-2">Tidak</span>
            <input
              type="radio"
              name="opt"
              className="radio radio-sm radio-secondary"
              defaultValue="tidak"
            />
          </div>
        </div>
      </div>

      <div className="flex mt-6">
        <div className="w-10">
          <p className="text-center text-bermuda bg-bermuda bg-opacity-10  rounded-full inline-block w-[25px] h-[25px]">
            8
          </p>
        </div>
        <div className="form-control w-full -mt-2">
          <label className="label">
            <span className="text-base font-normal">
              Aplikasi uang elektronik (e-money) yang digunakan
            </span>
          </label>

          <div className="md:flex ">
            <div className="w-full  md:w-full lg:w-1/2">
              <label className="cursor-pointer flex items-center ">
                <input
                  type="checkbox"
                  className="checkbox checkbox-secondary"
                />
                <span className="label-text ml-2">Ovo</span>
              </label>

              <label className="cursor-pointer flex items-center mt-2 ">
                <input
                  type="checkbox"
                  className="checkbox checkbox-secondary"
                />
                <span className="label-text ml-2">Gopay</span>
              </label>

              <label className="cursor-pointer flex items-center mt-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-secondary"
                />
                <span className="label-text ml-2">ShopeePay</span>
              </label>
              <label className="cursor-pointer flex items-center mt-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-secondary"
                />
                <span className="label-text ml-2">Dana</span>
              </label>

              <label className="cursor-pointer flex items-center mt-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-secondary"
                />
                <span className="label-text ml-2">Link Aja</span>
              </label>
              <label className="cursor-pointer flex items-center mt-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-secondary"
                />
                <span className="label-text ml-2">Lainnya</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-6">
        <div className="w-10">
          <p className="text-center text-bermuda bg-bermuda bg-opacity-10  rounded-full inline-block w-[25px] h-[25px]">
            9
          </p>
        </div>
        <div className="form-control w-full -mt-2">
          <label className="label">
            <span className="text-base font-normal">
              Aplikasi chat yang digunakan:
            </span>
          </label>

          <div className="md:flex ">
            <div className="w-full  md:w-full lg:w-1/2">
              <label className="cursor-pointer flex items-center ">
                <input
                  type="checkbox"
                  className="checkbox checkbox-secondary"
                />
                <span className="label-text ml-2">WhatsApp</span>
              </label>

              <label className="cursor-pointer flex items-center mt-2 ">
                <input
                  type="checkbox"
                  className="checkbox checkbox-secondary"
                />
                <span className="label-text ml-2">Telegram</span>
              </label>

              <label className="cursor-pointer flex items-center mt-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-secondary"
                />
                <span className="label-text ml-2">Line</span>
              </label>
              <label className="cursor-pointer flex items-center mt-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-secondary"
                />
                <span className="label-text ml-2">WeChat</span>
              </label>

              <label className="cursor-pointer flex items-center mt-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-secondary"
                />
                <span className="label-text ml-2">Lainnya</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-6">
        <div className="w-10">
          <p className="text-center text-bermuda bg-bermuda bg-opacity-10  rounded-full inline-block w-[25px] h-[25px]">
            10
          </p>
        </div>
        <div className="form-control w-full -mt-2">
          <label className="label">
            <span className="text-base font-normal">
              Media sosial yang digunakan:
            </span>
          </label>

          <div className="md:flex ">
            <div className="w-full  md:w-full lg:w-1/2">
              <label className="cursor-pointer flex items-center ">
                <input
                  type="checkbox"
                  className="checkbox checkbox-secondary"
                />
                <span className="label-text ml-2">Instagram</span>
              </label>

              <label className="cursor-pointer flex items-center mt-2 ">
                <input
                  type="checkbox"
                  className="checkbox checkbox-secondary"
                />
                <span className="label-text ml-2">TikTok</span>
              </label>

              <label className="cursor-pointer flex items-center mt-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-secondary"
                />
                <span className="label-text ml-2">Facebook</span>
              </label>
              <label className="cursor-pointer flex items-center mt-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-secondary"
                />
                <span className="label-text ml-2">Twitter</span>
              </label>

              <label className="cursor-pointer flex items-center mt-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-secondary"
                />
                <span className="label-text ml-2">Lainnya</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-6">
        <div className="w-10">
          <p className="text-center text-bermuda bg-bermuda bg-opacity-10  rounded-full inline-block w-[25px] h-[25px]">
            11
          </p>
        </div>
        <div className="form-control w-full -mt-2">
          <label className="label">
            <span className="text-base font-normal">
              Perangkat elektronik yang bisa/pernah dioperasikan
            </span>
          </label>

          <div className="md:flex ">
            <div className="w-full  md:w-full lg:w-1/2">
              <label className="cursor-pointer flex items-center ">
                <input
                  type="checkbox"
                  className="checkbox checkbox-secondary"
                />
                <span className="label-text ml-2">Printer</span>
              </label>

              <label className="cursor-pointer flex items-center mt-2 ">
                <input
                  type="checkbox"
                  className="checkbox checkbox-secondary"
                />
                <span className="label-text ml-2">Scanner</span>
              </label>

              <label className="cursor-pointer flex items-center mt-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-secondary"
                />
                <span className="label-text ml-2">kamera Digital</span>
              </label>
              <label className="cursor-pointer flex items-center mt-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-secondary"
                />
                <span className="label-text ml-2">Perekam Video</span>
              </label>
              <label className="cursor-pointer flex items-center mt-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-secondary"
                />
                <span className="label-text ml-2">Wifi Router</span>
              </label>
              <label className="cursor-pointer flex items-center mt-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-secondary"
                />
                <span className="label-text ml-2">Modem</span>
              </label>

              <label className="cursor-pointer flex items-center mt-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-secondary"
                />
                <span className="label-text ml-2">Lainnya</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-end">
        <button
          onClick={() => setStepper(6)}
          className="bg-bermuda hover:bg-[#c54933] transition-all text-sm text-white rounded-3xl px-5 py-3 "
        >
          Selesai
        </button>
      </div>
    </div>
  );
};

export default FormLima;
