import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid';
import ApiUsers from 'pages/api/ApiUsers';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Error from 'utils/errorMessage/error';

function FormDua({ setStepper }) {
  const [showPassword, setShowPassword] = useState(false);
  const handlePassowrd = () => {
    console.log(showPassword);
    setShowPassword(!showPassword);
  };

  const usersRegister = async (payload) => {
    try {
      await ApiUsers.register(payload);
    } catch (error) {}
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    try {
      usersRegister(data);
      alert('akun berhasil dibuat, silahkan cek email anda');
      setStepper(3);
    } catch (error) {}
  };

  return (
    <div className="w-full md:w-8/12 md:mx-auto">
      <h1 className="text-[#404040] font-semibold text-2xl mt-14">Buat Akun</h1>
      <p className="text-[#8F8F8F] font-normal text-base mt-2">
        Akun yang dibuat akan terhubung dengan Hacklab.
      </p>
      <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          {...register('email', {
            required: true,
          })}
          placeholder="Email"
          className="w-full select-auto border-[1px] bg-[#DFDFDF] after:bg-fuchsia-500 cursor-pointer text-base text-black focus:outline-none focus:border-bermuda rounded-[50px] py-5 px-8 mt-6"
        />
        {errors.email && <Error message={'*email is required'} />}
        <input
          type="number"
          {...register('phone_number', {
            required: true,
          })}
          placeholder="Nomor Handphone/Whatsapp (+62)"
          className="w-full border-[1px] bg-[#DFDFDF] cursor-pointer text-base text-black focus:outline-none focus:border-bermuda rounded-[50px] py-5 px-8 mt-6"
        />
        {errors.phone_number && <Error message={'*phone number is required'} />}
        <span className="flex">
          <input
            type={showPassword ? 'password' : 'text'}
            {...register('password', {
              required: true,
            })}
            placeholder="Passsword"
            className="flex w-full border-[1px] bg-[#DFDFDF] cursor-pointer text-base text-black focus:outline-none focus:border-bermuda rounded-[50px] py-5 px-8 mt-6"
          />
          <i className="mt-11 -ml-11">
            {showPassword ? (
              <EyeIcon
                onClick={() => handlePassowrd()}
                className="w-[22px] cursor-pointer"
              ></EyeIcon>
            ) : (
              <EyeOffIcon
                onClick={() => handlePassowrd()}
                className="w-[22px] cursor-pointer"
              ></EyeOffIcon>
            )}
          </i>
        </span>
        {errors.password && <Error message={'*password is required'} />}
        <div className="flex flex-row justify-end mt-6">
          <button
            type="submit"
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
