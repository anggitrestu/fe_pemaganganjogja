import { EyeIcon } from '@heroicons/react/solid';

function useFormDua(defaultValue, key) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const stickyValue = window.localStorage.getItem(key);

    if (stickyValue !== null) {
      setValue(JSON.parse(stickyValue));
    }
  }, [key]);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

function FormDua({ setStepper }) {
  return (
    <div className="w-8/12 mx-auto">
      <h1 className="text-[#404040] font-semibold text-2xl mt-14">Buat Akun</h1>
      <p className="text-[#8F8F8F] w-[793px] font-normal text-base mt-2">
        Akun yang dibuat akan terhubung dengan Hacklab.
      </p>
      <form className="mt-8">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border-[1px] bg-[#DFDFDF] cursor-pointer text-base text-[#8F8F8F] focus:text-bermuda focus:outline-none focus:border-bermuda rounded-3xl py-5 px-8 mb-6"
        />
        <input
          type="text"
          name="handphone"
          placeholder="Nomor Handphone/Whatsapp (+62)"
          className="w-full border-[1px] bg-[#DFDFDF] cursor-pointer text-base text-[#8F8F8F] focus:text-bermuda focus:outline-none focus:border-bermuda rounded-3xl py-5 px-8 mb-6"
        />
        <input
          type="password"
          name="password"
          placeholder="Passsword"
          className="w-full border-[1px] bg-[#DFDFDF] cursor-pointer text-base text-[#8F8F8F] focus:text-bermuda focus:outline-none focus:border-bermuda rounded-3xl py-5 px-8 mb-6"
        />
        <i>
          <EyeIcon className="w-[22px]"></EyeIcon>
        </i>
        <div className="flex flex-row justify-end">
          <button
            onClick={() => setStepper(3)}
            className="bg-bermuda hover:bg-[#c54933] transition-all text-sm text-white rounded-3xl px-5 py-3 "
          >
            Lanjut
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormDua;
