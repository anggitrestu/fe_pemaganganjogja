import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import {
  createSessionStorage,
  getSessionStorage,
} from 'helpers/useSessionStorage';
import { alertBuatAkun, alertIsiLowongan, alertLengkapiProfile } from './alert';
import Error from 'utils/errorMessage/error';

const FormEmpat = ({ setStepper, data }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const lowonganSession = getSessionStorage('dataLowongan');
  const userSession = getSessionStorage('user');
  const profileSession = getSessionStorage('profile');
  const [kuisioner, setKuisioner] = useState(undefined);

  useEffect(() => {
    if (!lowonganSession) {
      alertIsiLowongan();
      setStepper(1);
    } else {
      if (!userSession) {
        alertBuatAkun();
        setStepper(2);
      } else {
        if (!profileSession) {
          alertLengkapiProfile();
          setStepper(3);
        }
      }
    }

    const kuisionerSession = getSessionStorage('dataKuisioner');
    if (kuisionerSession !== false) {
      setKuisioner(kuisionerSession);
    } else {
      setKuisioner(null);
    }
    window.scrollTo(0, 0);

    return () => {};
  }, [setStepper]);

  const onSubmit = (data) => {
    try {
      createSessionStorage('dataKuisioner', data);
      let timerInterval;
      Swal.fire({
        title: 'Loading...',
        timer: 300,
        timerProgressBar: true,
        didOpen: async () => {
          Swal.showLoading();
          timerInterval = setInterval(() => {}, 100);

          setStepper(5);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {kuisioner === undefined ? (
        <h1>Loading...</h1>
      ) : (
        <div className="w-full mx-auto">
          <h3 className="text-black font-semibold text-2xl mb-3">Kuisioner</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            {data?.length > 0 ? (
              data.map((item, index) => {
                // console.log(errors ? errors.answers[0].answer : null);
                // console.log(errors.answers.[0].answer);
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
                          {item.question}
                        </span>
                      </label>
                      {item.type === 'textarea' && (
                        <>
                          <input
                            {...register(`answers.${index}.user_id`, {
                              setValueAs: (v) => parseInt(v),
                              required: true,
                            })}
                            value={1}
                            type="hidden"
                          />
                          <input
                            {...register(`answers.${index}.user_id_hl`, {
                              setValueAs: (v) => parseInt(v),
                              required: true,
                            })}
                            value={1}
                            type="hidden"
                          />
                          <input
                            {...register(`answers.${index}.questionnaire_id`, {
                              setValueAs: (v) => parseInt(v),
                              required: true,
                            })}
                            value={item.id}
                            type="hidden"
                          />

                          {item.question === 'NIK (Nomor KTP)' ? (
                            <>
                              <input
                                {...register(`answers.${index}.answer`, {
                                  required: true,
                                  minLength: 16,
                                })}
                                type="number"
                                placeholder={item.question}
                                defaultValue={kuisioner?.answers[index]?.answer}
                                className="input  bg-[#DFDFDF]"
                              />
                            </>
                          ) : (
                            <>
                              <input
                                {...register(`answers.${index}.answer`, {
                                  required: true,
                                })}
                                type="text"
                                placeholder={item.question}
                                defaultValue={kuisioner?.answers[index]?.answer}
                                className="input  bg-[#DFDFDF]"
                              />
                            </>
                          )}
                        </>
                      )}
                      {item.type === 'date' && (
                        <>
                          <input
                            {...register(`answers.${index}.user_id`, {
                              setValueAs: (v) => parseInt(v),
                              required: true,
                            })}
                            value={1}
                            type="hidden"
                          />
                          <input
                            {...register(`answers.${index}.user_id_hl`, {
                              setValueAs: (v) => parseInt(v),
                              required: true,
                            })}
                            value={1}
                            type="hidden"
                          />
                          <input
                            {...register(`answers.${index}.questionnaire_id`, {
                              setValueAs: (v) => parseInt(v),
                              required: true,
                            })}
                            value={item.id}
                            type="hidden"
                          />
                          <input
                            {...register(`answers.${index}.answer`, {
                              required: true,
                            })}
                            type="date"
                            placeholder={item.question}
                            defaultValue={kuisioner?.answers[index]?.answer}
                            className="input  bg-[#DFDFDF] w-full md:w-1/2"
                          />
                        </>
                      )}
                      {(item.type === 'radio-button' ||
                        item.type === 'select') && (
                        <div className="flex items-center">
                          <input
                            {...register(`answers.${index}.user_id`, {
                              setValueAs: (v) => parseInt(v),
                              required: true,
                            })}
                            value={1}
                            type="hidden"
                          />
                          <input
                            {...register(`answers.${index}.user_id_hl`, {
                              setValueAs: (v) => parseInt(v),
                              required: true,
                            })}
                            value={1}
                            type="hidden"
                          />
                          <input
                            {...register(`answers.${index}.questionnaire_id`, {
                              setValueAs: (v) => parseInt(v),
                              required: true,
                            })}
                            value={item.id}
                            type="hidden"
                          />

                          {item.answers.length > 0 ? (
                            <>
                              {item.answers.map((v, i) => {
                                return (
                                  <div
                                    key={i}
                                    className="mr-3 flex items-center"
                                  >
                                    <span className="mr-2">{v.answer}</span>
                                    <input
                                      type="radio"
                                      {...register(`answers.${index}.answer`, {
                                        required: true,
                                      })}
                                      defaultChecked={
                                        kuisioner?.answers[index]?.answer ===
                                        v.answer
                                          ? true
                                          : false
                                      }
                                      value={v.answer}
                                      className="radio radio-sm radio-secondary"
                                    />
                                  </div>
                                );
                              })}
                            </>
                          ) : null}
                        </div>
                      )}
                      {item.type === 'checkbox' && (
                        <div>
                          <input
                            {...register(`answers.${index}.user_id`, {
                              setValueAs: (v) => parseInt(v),
                              required: true,
                            })}
                            value={1}
                            type="hidden"
                          />
                          <input
                            {...register(`answers.${index}.user_id_hl`, {
                              setValueAs: (v) => parseInt(v),
                              required: true,
                            })}
                            value={1}
                            type="hidden"
                          />
                          <input
                            {...register(`answers.${index}.questionnaire_id`, {
                              setValueAs: (v) => parseInt(v),
                              required: true,
                            })}
                            value={item.id}
                            type="hidden"
                          />
                          {item.answers.length > 0 ? (
                            <>
                              {item.answers.map((v, i) => {
                                return (
                                  <div key={i} className="my-1">
                                    <label className="cursor-pointer flex items-center ">
                                      <input
                                        {...register(
                                          `answers.${index}.answer`,
                                          {
                                            required: true,
                                          }
                                        )}
                                        defaultChecked={
                                          kuisioner?.answers[index]?.answer[
                                            i
                                          ] === v.answer
                                            ? true
                                            : false
                                        }
                                        value={v.answer}
                                        type="checkbox"
                                        className="checkbox checkbox-sm checkbox-secondary"
                                      />
                                      <span className="label-text ml-2">
                                        {v.answer}
                                      </span>
                                    </label>
                                  </div>
                                );
                              })}
                            </>
                          ) : null}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })
            ) : (
              <h1>kosong</h1>
            )}

            <div className="flex flex-row justify-end">
              <button
                type="submit"
                className="bg-bermuda hover:bg-[#c54933] transition-all text-sm text-white rounded-3xl px-5 py-3 "
              >
                Lanjut
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default FormEmpat;
