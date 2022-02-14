import ApiInternship from 'pages/api/ApiInternship';
import { setAuthorHeader } from 'configs/axios';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { getToken } from 'helpers/getToken';
import { useState, useEffect } from 'react';
import ApiCompanies from 'pages/api/ApiCompanies';
import ApiRegulation from 'pages/api/ApiRegulation';

const Create = () => {
  const token = getToken();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [companyID, setCompanyID] = useState(undefined);
  const fetchMyCompany = () => {
    setAuthorHeader(token);
    ApiCompanies.getByAdminID().then((res) => {
      setCompanyID(res.data.id);
    });
  };
  useEffect(() => {
    fetchMyCompany();
  });

  const onSubmit = (data) => {
    try {
      console.log(data);
      setAuthorHeader(token);
      ApiInternship.create(data)
        .then((res) => {
          console.log(res);
          data.internship_id = res.data.id;
          data.gender = data.gender.toString();
          Swal.fire({
            icon: 'success',
            title: `${res.meta.status}`,
            text: `${res.meta.message}`,
          });
          setAuthorHeader(token);
          ApiRegulation.create(data).then((res) => {
            console.log(res);
            Swal.fire({
              icon: 'success',
              title: `${res.meta.status}`,
              text: `${res.meta.message}`,
            });
          });
        })
        .catch((err) => {
          if (err.response) {
            Swal.fire({
              icon: 'error',
              title: `${err.response.data.meta.status}`,
              text: `${err.response.data.meta.message}`,
            });
          } else {
            console.log(err);
          }
        });
    } catch (error) {}
  };

  return (
    <div className="w-full bg-gray-300 px-20 py-10">
      {companyID === undefined ? (
        <h1>loading...</h1>
      ) : (
        <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-[#F8F8F8] rounded-xl px-10 py-10">
            <h1 className="text-base font-semibold">
              Isi Data Lowongan Magang
            </h1>
            <hr />
            <div className="w-10/12 mx-auto">
              <div className="form-control mt-2">
                <label className="label">
                  <span className="label-text text-xs font-medium">
                    Nama Program Magang
                  </span>
                </label>
                <input
                  type="hidden"
                  {...register('company_id', {
                    required: true,
                    setValueAs: (v) => parseInt(v),
                  })}
                  value={companyID}
                  placeholder="tambahkan nama perusahaan..."
                  className="input input-bordered h-[40px]"
                />
                <input
                  type="text"
                  {...register('name_program', {
                    required: true,
                  })}
                  placeholder="masukan nama program magang..."
                  className="input input-bordered h-[40px]"
                />
                {errors.name_program && (
                  <p className="text-xs text-bermuda mt-1">
                    *nama program magang harus di isi
                  </p>
                )}
              </div>
              <div className="form-control mt-2">
                <label className="label">
                  <span className="label-text text-xs font-medium">
                    Bidang Industri
                  </span>
                </label>
                <input
                  type="text"
                  {...register('industrial_field', {
                    required: true,
                  })}
                  placeholder="tambahkan alamat perusahaan..."
                  className="input input-bordered  h-[40px]"
                />
                {errors.industrial_field && (
                  <p className="text-xs text-bermuda mt-1">
                    *bidang industri harus di isi
                  </p>
                )}
              </div>

              <div className="form-control mt-2">
                <label className="label">
                  <span className="label-text text-xs font-medium">
                    Kuota Penerimaan
                  </span>
                </label>
                <input
                  type="number"
                  {...register('quota', {
                    required: true,
                    setValueAs: (v) => parseInt(v),
                  })}
                  placeholder="tambahkan jumlah karyawan perusahaan..."
                  className="input input-bordered "
                />
                {errors.quota && (
                  <p className="text-xs text-bermuda mt-1">
                    *kuota penerimaan harus di isi
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="bg-[#F8F8F8] rounded-xl px-10 py-10 mt-10">
            <h1 className="text-base font-semibold">
              Lengkapi Persyaratan Magang
            </h1>
            <hr />
            <div className="w-10/12 mx-auto">
              <div className="form-control mt-2">
                <input
                  type="hidden"
                  {...register('internship_id', {
                    required: true,
                    setValueAs: (v) => parseInt(v),
                  })}
                  value={0}
                />
                <label className="label">
                  <span className="label-text text-xs font-medium">
                    Pendidikan Terakhir
                  </span>
                </label>
                <input
                  type="text"
                  {...register('education', {
                    required: true,
                  })}
                  placeholder="masukan nama program magang..."
                  className="input input-bordered h-[40px]"
                />
                {errors.education && (
                  <p className="text-xs text-bermuda mt-1">
                    *data pendidikan terakhir harus di isi
                  </p>
                )}
              </div>
              <div className="form-control mt-2">
                <label className="label">
                  <span className="label-text text-xs font-medium">
                    Umur Minimal
                  </span>
                </label>
                <input
                  type="number"
                  {...register('age', {
                    required: true,
                    setValueAs: (v) => parseInt(v),
                  })}
                  placeholder="minimal umur pemagang..."
                  className="input input-bordered "
                />
                {errors.age && (
                  <p className="text-xs text-bermuda mt-1">
                    *minimal umur pemagang harus di isi
                  </p>
                )}
              </div>
              <div className="form-control mt-2">
                <label className="label">
                  <span className="label-text text-xs font-medium">Gender</span>
                </label>
                <div className="flex flex-col w-[150px]">
                  <label className="cursor-pointer label ">
                    <span className="label-text text-xs font-normal mr-9">
                      Pria
                    </span>
                    <input
                      {...register('gender', {
                        required: true,
                      })}
                      value={'pria'}
                      type="checkbox"
                      className="checkbox checkbox-xs  checkbox-secondary"
                    />
                  </label>
                  <label className="cursor-pointer label ">
                    <span className="label-text text-xs font-normal mr-4">
                      Wanita
                    </span>
                    <input
                      {...register('gender', {
                        required: true,
                      })}
                      value={'wanita'}
                      type="checkbox"
                      className="checkbox checkbox-xs checkbox-secondary"
                    />
                  </label>
                  {errors.gender && (
                    <p className="text-xs text-bermuda mt-1">
                      *gender harus di isi
                    </p>
                  )}
                </div>
              </div>
              <div className="form-control mt-2">
                <label className="label">
                  <span className="label-text text-xs font-medium">
                    Lokasi Magang
                  </span>
                </label>
                <div className="flex flex-col w-[150px]">
                  <label className="cursor-pointer label ">
                    <span className="label-text text-xs font-normal mr-9">
                      Kota Jogja
                    </span>
                    <input
                      {...register('location', {
                        required: true,
                      })}
                      value={'pria'}
                      type="checkbox"
                      className="checkbox checkbox-xs  checkbox-secondary"
                    />
                  </label>
                  <label className="cursor-pointer label ">
                    <span className="label-text text-xs font-normal mr-4">
                      Sleman
                    </span>
                    <input
                      {...register('location', {
                        required: true,
                      })}
                      value={'wanita'}
                      type="checkbox"
                      className="checkbox checkbox-xs checkbox-secondary"
                    />
                  </label>
                  <label className="cursor-pointer label ">
                    <span className="label-text text-xs font-normal mr-4">
                      Bantul
                    </span>
                    <input
                      {...register('location', {
                        required: true,
                      })}
                      value={'wanita'}
                      type="checkbox"
                      className="checkbox checkbox-xs checkbox-secondary"
                    />
                  </label>
                  <label className="cursor-pointer label ">
                    <span className="label-text text-xs font-normal mr-4">
                      Gunung Kidul
                    </span>
                    <input
                      {...register('location', {
                        required: true,
                      })}
                      value={'wanita'}
                      type="checkbox"
                      className="checkbox checkbox-xs checkbox-secondary"
                    />
                  </label>
                  <label className="cursor-pointer label ">
                    <span className="label-text text-xs font-normal mr-4">
                      Kulon Progo
                    </span>
                    <input
                      {...register('location', {
                        required: true,
                      })}
                      value={'wanita'}
                      type="checkbox"
                      className="checkbox checkbox-xs checkbox-secondary"
                    />
                  </label>
                  {errors.location && (
                    <p className="text-xs text-bermuda mt-1">
                      *lokasi magang harus di isi
                    </p>
                  )}
                </div>
              </div>

              <div className="form-control mt-2">
                <label className="label">
                  <span className="label-text text-xs font-medium">
                    Pengalaman Terkait
                  </span>
                </label>
                <textarea
                  {...register('experience', {
                    required: true,
                  })}
                  placeholder="tambahkan latar belakang pengalaman..."
                  className="textarea h-12 textarea-bordered"
                />
                {errors.experience && (
                  <p className="text-xs text-bermuda mt-1">
                    *latar belakang pengalaman harus di isi
                  </p>
                )}
              </div>
              <div className="form-control mt-2">
                <label className="label">
                  <span className="label-text text-xs font-medium">
                    Sertifikat Keterampilan
                  </span>
                </label>
                <textarea
                  {...register('certificate', {
                    required: true,
                  })}
                  placeholder="tambahkan latar belakang pengalaman..."
                  className="textarea h-12 textarea-bordered"
                />
                {errors.certificate && (
                  <p className="text-xs text-bermuda mt-1">
                    *certificate harus di isi
                  </p>
                )}
              </div>
              <div className="form-control mt-2">
                <label className="label">
                  <span className="label-text text-xs font-medium">
                    Syarat Lainnya
                  </span>
                </label>
                <textarea
                  {...register('other_condition')}
                  placeholder="tambahkan latar belakang pengalaman..."
                  className="textarea h-24 textarea-bordered"
                />
              </div>
            </div>
          </div>
          <div>
            <div></div>
            <div className="flex flex-row justify-end mt-6">
              <button
                type="submit"
                className="bg-bermuda hover:bg-[#c54933] transition-all text-sm text-white rounded-3xl px-5 py-3 "
              >
                Simpan
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default Create;
