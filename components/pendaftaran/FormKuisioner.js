import { useForm } from 'react-hook-form';
import ApiKuisioners from 'pages/api/ApiKuisioners';
import Swal from 'sweetalert2';
import { useEffect } from 'react';
import {
  getSessionStorage,
  useSessionStorage,
} from 'helpers/useSessionStorage';

const FormKuisioner = () => {
  const { register, handleSubmit } = useForm({});

  return (
    <div className="w-full mx-auto">
      <h3 className="text-black font-semibold text-2xl mb-3">Kuisioner</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        {data?.length > 0 ? (
          data.map((item, index) => {
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
                        value={profile.id}
                        type="hidden"
                      />
                      <input
                        {...register(`answers.${index}.user_id_hl`, {
                          setValueAs: (v) => parseInt(v),
                          required: true,
                        })}
                        value={profile.user_id_hl}
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
                        type="text"
                        placeholder={item.question}
                        className="input  bg-[#DFDFDF]"
                      />
                    </>
                  )}
                  {item.type === 'date' && (
                    <>
                      <input
                        {...register(`answers.${index}.user_id`, {
                          setValueAs: (v) => parseInt(v),
                          required: true,
                        })}
                        value={profile.id}
                        type="hidden"
                      />
                      <input
                        {...register(`answers.${index}.user_id_hl`, {
                          setValueAs: (v) => parseInt(v),
                          required: true,
                        })}
                        value={profile.user_id_hl}
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
                        className="input  bg-[#DFDFDF] w-full md:w-1/2"
                      />
                    </>
                  )}
                  {(item.type === 'radio-button' || item.type === 'select') && (
                    <div className="flex items-center">
                      <input
                        {...register(`answers.${index}.user_id`, {
                          setValueAs: (v) => parseInt(v),
                          required: true,
                        })}
                        value={profile.id}
                        type="hidden"
                      />
                      <input
                        {...register(`answers.${index}.user_id_hl`, {
                          setValueAs: (v) => parseInt(v),
                          required: true,
                        })}
                        value={profile.user_id_hl}
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
                              <div key={i} className="mr-3 flex items-center">
                                <span className="mr-2">{v.answer}</span>
                                <input
                                  type="radio"
                                  {...register(`answers.${index}.answer`, {
                                    required: true,
                                  })}
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
                        value={profile.id}
                        type="hidden"
                      />
                      <input
                        {...register(`answers.${index}.user_id_hl`, {
                          setValueAs: (v) => parseInt(v),
                          required: true,
                        })}
                        value={profile.user_id_hl}
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
                                    {...register(`answers.${index}.answer`, {
                                      required: true,
                                    })}
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
  );
};

export default FormKuisioner;
