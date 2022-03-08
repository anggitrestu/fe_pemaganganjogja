import { setAuthorHeader } from 'configs/axios';
import { getToken } from 'helpers/getToken';
import ApiCompanies from 'pages/api/ApiCompanies';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const Company = () => {
  const token = getToken();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [company, setCompany] = useState(undefined);
  const fetchMyCompany = () => {
    setAuthorHeader(token);
    ApiCompanies.getByAdminID().then((res) => {
      setCompany(res.data);
    });
  };

  useEffect(() => {
    fetchMyCompany();
  }, []);

  const onSubmit = (data) => {
    try {
      if (company !== null) {
        setAuthorHeader(token);
        ApiCompanies.update(company.id, data)
          .then((res) => {
            Swal.fire({
              icon: 'success',
              title: `${res.meta.status}`,
              text: `${res.meta.message}`,
            });
            window.location.reload();
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
      } else {
        setAuthorHeader(token);
        ApiCompanies.create(data)
          .then((res) => {
            Swal.fire({
              icon: 'success',
              title: `${res.meta.status}`,
              text: `${res.meta.message}`,
            });
            window.location.reload();
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
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full bg-gray-100 px-20 py-10">
      {company === undefined ? (
        <h1>loading...</h1>
      ) : (
        <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-[#F8F8F8] rounded-xl px-10 py-10">
            <h1 className="text-base font-semibold">Profil Perusahaan</h1>
            <hr />
            <div className="w-10/12 mx-auto">
              <div className="form-control mt-2">
                <label className="label">
                  <span className="label-text text-xs font-medium">
                    Nama Perusahaan
                  </span>
                </label>
                <input
                  type="text"
                  {...register('name', {
                    required: true,
                  })}
                  defaultValue={company?.name ? company.name : null}
                  placeholder="tambahkan nama perusahaan..."
                  className="input input-bordered h-[40px]"
                />
                {errors.name && (
                  <p className="text-xs text-bermuda mt-1">
                    *nama perusahaan harus di isi
                  </p>
                )}
              </div>
              <div className="form-control mt-2">
                <label className="label">
                  <span className="label-text text-xs font-medium">
                    URL Foto Profil
                  </span>
                </label>
                <input
                  type="text"
                  {...register('url_profile')}
                  defaultValue={
                    company?.url_profile ? company.url_profile : null
                  }
                  placeholder="tambahkan url foto informasi jika ada..."
                  className="input input-bordered  h-[40px]"
                />
              </div>
              <div className="form-control mt-2">
                <label className="label">
                  <span className="label-text text-xs font-medium">
                    URL File Pendukung Informasi Perusahaan
                  </span>
                </label>
                <input
                  type="text"
                  {...register('url_file')}
                  defaultValue={company?.url_file ? company.url_file : null}
                  placeholder="tambahkan url file pendukung informasi jika ada..."
                  className="input input-bordered  h-[40px]"
                />
              </div>
              <div className="form-control mt-2">
                <label className="label">
                  <span className="label-text text-xs font-medium">Alamat</span>
                </label>
                <input
                  type="text"
                  {...register('address', {
                    required: true,
                  })}
                  defaultValue={company?.address ? company.address : null}
                  placeholder="tambahkan alamat perusahaan..."
                  className="input input-bordered  h-[40px]"
                />
                {errors.address && (
                  <p className="text-xs text-bermuda mt-1">
                    *alamat perusahaan harus di isi
                  </p>
                )}
              </div>
              <div className="form-control mt-2">
                <label className="label">
                  <span className="label-text text-xs font-medium">
                    Email Perusahaan
                  </span>
                </label>
                <input
                  type="text"
                  defaultValue={company?.email ? company.email : null}
                  {...register('email', {
                    required: true,
                  })}
                  placeholder="tambahkan email perusahaan..."
                  className="input input-bordered "
                />
                {errors.email && (
                  <p className="text-xs text-bermuda mt-1">
                    *email perusahaan harus di isi
                  </p>
                )}
              </div>

              <div className="form-control mt-2">
                <label className="label">
                  <span className="label-text text-xs font-medium">
                    Nomor Telepon
                  </span>
                </label>
                <input
                  type="number"
                  defaultValue={company?.number ? company.number : null}
                  {...register('number', {
                    required: true,
                  })}
                  placeholder="tambahkan nomor telepon perusahaan..."
                  className="input input-bordered "
                />
                {errors.number && (
                  <p className="text-xs text-bermuda mt-1">
                    *nomor telepon perusahaan harus di isi
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
                  defaultValue={
                    company?.type_of_business ? company.type_of_business : null
                  }
                  {...register('type_of_business', {
                    required: true,
                  })}
                  placeholder="tambahkan bidang industri perusahaan..."
                  className="input input-bordered "
                />
                {errors.type_of_business && (
                  <p className="text-xs text-bermuda mt-1">
                    *bidang industri perusahaan harus di isi
                  </p>
                )}
              </div>
              <div className="form-control mt-2">
                <label className="label">
                  <span className="label-text text-xs font-medium">
                    Jumlah Karyawan
                  </span>
                </label>
                <input
                  type="text"
                  defaultValue={
                    company?.number_of_employee
                      ? company.number_of_employee
                      : null
                  }
                  {...register('number_of_employee', {
                    required: true,
                  })}
                  placeholder="tambahkan jumlah karyawan perusahaan..."
                  className="input input-bordered "
                />
                {errors.number_of_employee && (
                  <p className="text-xs text-bermuda mt-1">
                    *jumlah karyawan harus di isi
                  </p>
                )}
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

export default Company;
