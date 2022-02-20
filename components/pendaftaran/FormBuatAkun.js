import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid';
import { data } from 'autoprefixer';
import {
  getSessionStorage,
  useSessionStorage,
} from 'helpers/useSessionStorage';
import ApiUsers from 'pages/api/ApiUsers';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import Error from 'utils/errorMessage/error';
import { alertBuatAkun, alertIsiLowongan } from './alert';
import Checklowongan from './validasi/checkLowongan';
import ValidasiForm from './ValidasiForm';

const FormBuatAkun = ({ setStepper }) => {
  // alur pembuatan akun
  // 1. user harus memilih lowongan terlebih dahulu, cek jika lowngan kosong kembalikan ke form pilih lowongan
  // 2.

  const [isLoading, setLoading] = useState(false);
  const [dataAkun, setDataAkun] = useSessionStorage('null', 'dataAkun');
  const [showPassword, setShowPassword] = useState(false);
  const handlePassowrd = () => {
    setShowPassword(!showPassword);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    try {
      setDataAkun(data);
      setStepper(3);
    } catch (error) {}
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const valid = ValidasiForm({ setStepper, lowongan: true });
    if (valid === true) {
      console.log('valid');
    }
  }, [setStepper]);

  return (
    <div className="w-full md:w-8/12 md:mx-auto">
      <h1 className="text-[#404040] font-semibold text-2xl mt-14">Buat Akun</h1>
      <p className="text-[#8F8F8F] font-normal text-base mt-2">
        Akun yang dibuat akan terhubung dengan Hacklab.
      </p>
      <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="hidden"
          {...register('name', {
            required: true,
          })}
          value="user"
        />
        <input
          type="email"
          {...register('email', {
            required: true,
          })}
          placeholder="Email"
          defaultValue={dataAkun !== 'null' ? `${dataAkun.email}` : null}
          className="w-full select-auto border-[1px] bg-[#DFDFDF] after:bg-fuchsia-500 cursor-pointer text-base text-black focus:outline-none focus:border-bermuda rounded-[50px] py-5 px-8 mt-6"
        />
        {errors.email && <Error message={'*email is required'} />}
        <input
          type="number"
          {...register('phone_number', {
            required: true,
          })}
          defaultValue={dataAkun !== 'null' ? `${dataAkun.phone_number}` : null}
          placeholder="Nomor Handphone/Whatsapp (+62)"
          className="w-full border-[1px] bg-[#DFDFDF] cursor-pointer text-base text-black focus:outline-none focus:border-bermuda rounded-[50px] py-5 px-8 mt-6"
        />
        {errors.phone_number && <Error message={'*phone number is required'} />}
        <span className="flex">
          <input
            type={showPassword ? 'password' : 'text'}
            {...register('password', {
              minLength: 8,
              required: true,
            })}
            defaultValue={dataAkun !== 'null' ? `${dataAkun.password}` : null}
            placeholder="Passsword"
            className="flex w-full border-[1px] bg-[#DFDFDF] cursor-pointer text-base text-black focus:outline-none focus:border-bermuda rounded-[50px] py-5 px-8 mt-6"
          />

          <input
            type="hidden"
            {...register('password_confirmation', {
              required: true,
            })}
            value="password"
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
        {errors.password && (
          <Error message={'*password is required , minimal 8 character'} />
        )}

        <div className="flex flex-row justify-end mt-6">
          <button
            type="submit"
            className={
              'bg-bermuda hover:bg-[#c54933] transition-all text-sm text-white rounded-3xl px-5 py-3 ' +
              (isLoading ? 'cursor-wait' : '')
            }
          >
            Lanjut
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormBuatAkun;
