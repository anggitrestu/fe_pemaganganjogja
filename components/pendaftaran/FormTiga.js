import { getLocalStorage, useLocalStorage } from 'helpers/useLocalStorage';
import ApiUserInternship from 'pages/api/ApiUserInternship';
import ApiUsers from 'pages/api/ApiUsers';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

function FormTiga({ setStepper }) {
  const user = getLocalStorage('user');
  const [userIDHL, setUserIDHL] = useState(0);
  const [isLoading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const lowongan1 = getLocalStorage('lowongan-1');
  const lowongan2 = getLocalStorage('lowongan-2');
  const lowongan3 = getLocalStorage('lowongan-3');
  const [profile, setProfile] = useLocalStorage('null', 'profile');

  console.log(lowongan1);
  console.log(lowongan2);
  console.log(lowongan3);

  const createUserInternships = (data, lowongan) => {
    try {
      setLoading(true);
      const payload = {
        user_id: 0,
        user_id_hl: 0,
        internship_id: 0,
      };
      if (lowongan.id !== 0) {
        payload.user_id = data.id;
        payload.user_id_hl = data.user_id_hl;
        payload.internship_id = lowongan.id;
        ApiUserInternship.create(payload)
          .then((res) => setLoading(false))
          .catch((err) => {
            setLoading(false);
            console.log(err);
          });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (data) => {
    try {
      setLoading(true);
      ApiUsers.updateProfile(data)
        .then((res) => {
          const data = {
            id: res.data.id,
            user_id_hl: res.data.user_id_hl,
          };
          setProfile(data);
          try {
            createUserInternships(data, lowongan1);
            createUserInternships(data, lowongan2);
            createUserInternships(data, lowongan3);
          } catch (error) {
            console.log(error);
          }
          Swal.fire({
            icon: 'success',
            title: `${res.meta.status}`,
            text: `${res.meta.message}`,
          }).then(() => {
            setStepper(4);
          });
        })
        .catch((err) => {
          if (err.response) {
            Swal.fire({
              icon: 'error',
              title: `error`,
              text: `pastikan data yang anda input benar`,
            });
          } else {
            console.log(err);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user === 'null') {
      setStepper(2);
    }
    if (profile !== 'null') {
      setStepper(4);
    }
    setUserIDHL(user[0].id);
    window.scrollTo(0, 0);

    return () => {};
  }, [profile, setStepper, user]);

  return (
    <>
      {userIDHL === 0 ? (
        <h1>Harap buat akun terlebih dahulu</h1>
      ) : (
        <div>
          <h1 className="text-[#404040] font-semibold text-2xl mt-14">
            Lengkapi Profil
          </h1>
          <p className="text-[#8F8F8F]  font-normal text-base mt-2">
            Masukan informasi detail tentang dirimu.
          </p>
          <form className="mt-8 " onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-10 mb-6">
              <h4 className="text-[#404040] font-medium text-lg mb-6">
                Informasi Pribadi
              </h4>
              <input
                type="hidden"
                {...register('user_id_hl', {
                  required: true,
                  setValueAs: (v) => parseInt(v),
                })}
                value={userIDHL}
                placeholder="tambahkan nama perusahaan..."
                className="input input-bordered h-[40px]"
              />

              <input
                type="text"
                {...register('fullname', {
                  required: true,
                })}
                placeholder="Nama Lengkap"
                className="w-full border-[1px] bg-[#DFDFDF] cursor-pointer text-base text-[#8F8F8F] focus:text-bermuda focus:outline-none focus:border-bermuda rounded-3xl py-5 px-8"
              />
              {errors.fullname && (
                <p className="text-xs text-bermuda mt-1">
                  *nama lengkap harus di isi
                </p>
              )}
              <div className="mt-6 mb-6 flex flex-col md:flex-row justify-between">
                <input
                  type="text"
                  {...register('province', {
                    required: true,
                  })}
                  placeholder="Provinsi Domisili"
                  className=" md:w-[49%] border-[1px] bg-[#DFDFDF] cursor-pointer text-base text-[#8F8F8F] focus:text-bermuda focus:outline-none focus:border-bermuda rounded-3xl py-5 px-8"
                />
                {errors.province && (
                  <p className="text-xs text-bermuda mt-1">
                    *provinsi domisili harus di isi
                  </p>
                )}
                <input
                  type="text"
                  {...register('city', {
                    required: true,
                  })}
                  placeholder="Kota Domisili"
                  className="mt-6 md:mt-0 md:w-[49%]  border-[1px] bg-[#DFDFDF] cursor-pointer text-base text-[#8F8F8F] focus:text-bermuda focus:outline-none focus:border-bermuda rounded-3xl py-5 px-8"
                />
                {errors.city && (
                  <p className="text-xs text-bermuda mt-1">
                    *kota domisili harus di isi
                  </p>
                )}
              </div>
              <select
                {...register('marital_status', {
                  required: true,
                })}
                className="w-full border-[1px] bg-[#DFDFDF] cursor-pointer appearance-none text-base text-[#8F8F8F] focus:text-bermuda focus:outline-none focus:border-bermuda rounded-3xl py-5 px-8 mb-6"
              >
                <option hidden value={null}>
                  Pilih Jenis Kelamin
                </option>
                <option value={'Laki-Laki'}>Laki-Laki</option>
                <option value={'Perempuan'}>Perempuan</option>
              </select>
              {errors.marital_status && (
                <p className="text-xs text-bermuda mt-1">
                  *jenis kelamin harus di isi
                </p>
              )}
              <textarea
                {...register('about_you', {
                  required: true,
                })}
                placeholder="Tuliskan gambaran mengenai dirimu disini..."
                className="w-full border-[1px] bg-[#DFDFDF] cursor-pointer appearance-none text-base text-[#8F8F8F] focus:text-bermuda focus:outline-none focus:border-bermuda rounded-3xl py-8 px-8"
                rows="6"
              ></textarea>
              {errors.about_you && (
                <p className="text-xs text-bermuda mt-1">
                  *gambaran mengenai dirimu harus di isi
                </p>
              )}
            </div>

            <div className="mt-10 mb-6">
              <h4 className="text-[#404040] font-medium text-lg mb-6">
                Pendidikan Terakhir
              </h4>
              <input
                type="text"
                {...register('name_edu', {
                  required: true,
                })}
                placeholder="Nama Sekolah/Universitas"
                className="w-full border-[1px] bg-[#DFDFDF] cursor-pointer text-base text-[#8F8F8F] focus:text-bermuda focus:outline-none focus:border-bermuda rounded-3xl py-5 px-8 mb-6"
              />
              {errors.name_edu && (
                <p className="text-xs text-bermuda mt-1">
                  *nama sekolah/universitas harus di isi
                </p>
              )}
              <select
                {...register('level_edu', {
                  required: true,
                })}
                className="w-full border-[1px] bg-[#DFDFDF] cursor-pointer appearance-none text-base text-[#8F8F8F] focus:text-bermuda focus:outline-none focus:border-bermuda rounded-3xl py-5 px-8 mb-6"
              >
                <option hidden>Derajat Sekolah</option>
                <option value={'SMA/SMK'}>SMA/SMK</option>
                <option value={'Diploma'}>Diploma</option>
                <option value={'Sarjana'}>Sarjana</option>
              </select>
              <input
                type="text"
                {...register('major_edu', {
                  required: true,
                })}
                placeholder="Jurusan/Program Studi"
                className="w-full border-[1px] bg-[#DFDFDF] cursor-pointer text-base text-[#8F8F8F] focus:text-bermuda focus:outline-none focus:border-bermuda rounded-3xl py-5 px-8 "
              />
              {errors.major_edu && (
                <p className="text-xs text-bermuda mt-1">
                  *jurusan pendidikan harus di isi
                </p>
              )}
              <textarea
                {...register('educational_background', {
                  required: true,
                })}
                placeholder="Diskripsikan pendidikan kamu disini..."
                className="w-full border-[1px] bg-[#DFDFDF] cursor-pointer appearance-none text-base text-[#8F8F8F] focus:text-bermuda focus:outline-none focus:border-bermuda rounded-3xl py-8 px-8 mt-6 mb-6"
                rows="6"
              ></textarea>
              {errors.educational_background && (
                <p className="text-xs text-bermuda mt-1">
                  *latar belakang pendidikan harus di isi
                </p>
              )}
              <textarea
                {...register('work_experience', { required: true })}
                placeholder="Deskripsikan pengalaman kerja jika ada..."
                className="w-full border-[1px] bg-[#DFDFDF] cursor-pointer appearance-none text-base text-[#8F8F8F] focus:text-bermuda focus:outline-none focus:border-bermuda rounded-3xl py-8 px-8 mt-6 mb-6"
                rows="6"
              ></textarea>
              {errors.work_experience && (
                <p className="text-xs text-bermuda mt-1">*harap di isi </p>
              )}

              {/* 
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
            */}
            </div>

            <div className="flex flex-row justify-end">
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
      )}
    </>
  );
}

export default FormTiga;
