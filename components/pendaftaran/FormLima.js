import { getLocalStorage, useLocalStorage } from 'helpers/useLocalStorage';
import ApiSurvey from 'pages/api/ApiSurvey';
import { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Swal from 'sweetalert2';

const FormLima = ({ setStepper, data }) => {
  const { register, handleSubmit } = useForm({});
  const kuisionerIsDone = getLocalStorage('kuisionerIsDone');
  const profile = getLocalStorage('profile');
  const [surveyIsDone, setSurveyIsDone] = useLocalStorage(
    'null',
    'surveyIsDone'
  );
  console.log(profile);
  const onSubmit = (data) => {
    try {
      data.answers.map((item, index) => {
        {
          if (Array.isArray(item.answer)) {
            const answer = item.answer.toString();
            item.answer = answer;
            ApiSurvey.user_surcey(item).then((res) => {
              console.log('success');
            });
          } else {
            ApiSurvey.user_surcey(item).then((res) => {
              console.log('success');
            });
          }
        }
      });

      Swal.fire({
        icon: 'success',
        title: `success`,
        text: `Successfully answered the questionnaire `,
      }).then(() => {
        setSurveyIsDone(true);
        setStepper(6);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (surveyIsDone !== 'null') {
      Swal.fire({
        icon: 'success',
        title: `success`,
        text: `Successfully answered the survey `,
      }).then(() => {
        setStepper(6);
      });
    }
    if (kuisionerIsDone === 'null') {
      setStepper(4);
    }
    if (profile === 'null') {
      setStepper(3);
    }
    window.scrollTo(0, 0);

    return () => {};
  }, [kuisionerIsDone, profile, setStepper, surveyIsDone]);

  return (
    <div className="w-full">
      <h3 className="text-black font-semibold text-2xl mb-3">
        Survey Literasi Digital
      </h3>
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
                <div className="form-control w-full  md:w-full lg:w-1/2 -mt-2">
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
                        {...register(`answers.${index}.survey_id`, {
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

                  {item.type === 'radio-button' ||
                    (item.type === 'select' && (
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
                          value={profile.user_id_hl}
                          type="hidden"
                        />
                        <input
                          {...register(`answers.${index}.survey_id`, {
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
                    ))}
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
                        {...register(`answers.${index}.survey_id`, {
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
            // onClick={() => setStepper(6)}
            className="bg-bermuda hover:bg-[#c54933] transition-all text-sm text-white rounded-3xl px-5 py-3 "
          >
            Lanjut
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormLima;
