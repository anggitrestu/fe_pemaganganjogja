import React from 'react';
import ApiInternship from 'pages/api/ApiInternship';
import { setAuthorHeader } from 'configs/axios';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { getToken } from 'helpers/getToken';
import { useState, useEffect } from 'react';
import ApiCompanies from 'pages/api/ApiCompanies';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { useRouter } from 'next/router';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const Create = () => {
  const token = getToken();
  const [condition, setCondition] = useState('');
  const [jobDesc, setJobDesc] = useState('');
  const router = useRouter();
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
  }, []);

  const onSubmit = (data) => {
    try {
      setAuthorHeader(token);
      data.location = data.location.toString();
      data.condition = condition;
      data.job_desc = jobDesc;
      if (data.disability === '') {
        data.disability = 'tidak';
      }
      ApiInternship.create(data)
        .then((res) => {
          Swal.fire({
            icon: 'success',
            title: `${res.meta.status}`,
            text: `${res.meta.message}`,
          }).then(() => {
            router.push('/dashboard/lowongan');
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
    } catch (error) {
      console.loh(error);
    }
  };

  return (
    <div className="w-full bg-gray-100 px-20 py-10">
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
                      value={'Kota Jogja'}
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
                      value={'Sleman'}
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
                      value={'Bantul'}
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
                      value={'Gunung Kidul'}
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
                      value={'Kulon Progo'}
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
                    Syarat Magang
                  </span>
                </label>

                <ReactQuill
                  theme="snow"
                  value={condition}
                  onChange={setCondition}
                  placeholder="tambahkan deskripsi syarat magang..."
                />

                <input
                  type="hidden"
                  {...register('condition', {
                    required: true,
                  })}
                  defaultValue={'tidak ada'}
                />

                {errors.condition && (
                  <p className="text-xs text-bermuda mt-1">
                    *deskripsi syarat magang harus di isi
                  </p>
                )}
              </div>

              <div className="form-control mt-2">
                <label className="label">
                  <span className="label-text text-xs font-medium">
                    Deskripsi Kegiatan Magang
                  </span>
                </label>
                <ReactQuill
                  theme="snow"
                  value={jobDesc}
                  onChange={setJobDesc}
                  placeholder="tambahkan deskripsi pekerjaan magang..."
                />
                <input
                  type="hidden"
                  {...register('job_desc', {
                    required: true,
                  })}
                  value={'job desc'}
                />

                {errors.job_desc && (
                  <p className="text-xs text-bermuda mt-1">
                    *deskripsi pekerjaan magang harus di isi
                  </p>
                )}
              </div>

              <div className="form-control mt-2">
                <label className="label">
                  <span className="label-text text-xs font-medium">
                    Terbuka untuk Penyandang Disabilitas?
                  </span>
                </label>
                <input
                  type="text"
                  {...register('disability')}
                  placeholder="tambahkan jika ada..."
                  className="input input-bordered "
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
