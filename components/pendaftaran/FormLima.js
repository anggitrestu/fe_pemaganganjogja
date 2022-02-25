import {
  createSessionStorage,
  getSessionStorage,
} from 'helpers/useSessionStorage';
import ApiKuisioners from 'pages/api/ApiKuisioners';
import ApiSurvey from 'pages/api/ApiSurvey';
import ApiUserInternship from 'pages/api/ApiUserInternship';
import ApiUsers from 'pages/api/ApiUsers';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const FormLima = ({ setStepper, data }) => {
  const [user, setUser] = useState(undefined);
  const [profile, setProfile] = useState(undefined);
  const [userInternships, setUserInternships] = useState(undefined);
  const [userKuisioner, setUserKuisioner] = useState(undefined);
  const { register, handleSubmit } = useForm({});
  const [survey, setSurvey] = useState(undefined);
  const [isLoading, setLoading] = useState(false);

  const userSession = getSessionStorage('user');
  const lowonganSession = getSessionStorage('dataLowongan');
  const profileSession = getSessionStorage('profile');
  const KuisionerSession = getSessionStorage('dataKuisioner');

  const createUser = async (user) => {
    await ApiUsers.register(user)
      .then((res) => res)
      .catch((err) => {
        if (err.response) {
          Swal.fire({
            icon: 'error',
            title: `invalid`,
            text: `email atau nomor hp anda sudah terdaftar, registrasi dengan  data yang baru`,
          });
        } else {
          console.log(err);
        }
        setStepper(2);
      });
  };

  const createProfile = async (profile) => {
    await ApiUsers.updateProfile(profile)
      .then((res) => res)
      .catch((err) => {
        if (err.response) {
          Swal.fire({
            icon: 'error',
            title: `invalid`,
            text: `pastikan data yang anda input benar`,
          });
        } else {
          console.log(err);
        }
        setStepper(3);
      });
  };

  async function createInternships(user_id, user_id_hl, dataLowongan) {
    let payload = {
      user_id: user_id,
      user_id_hl: user_id_hl,
      internship_id: 0,
    };

    if (dataLowongan.lowongan1.id !== 0) {
      payload.internship_id = dataLowongan.lowongan1.id;
      await ApiUserInternship.create(payload);
    }
    if (dataLowongan.lowongan2.id !== 0) {
      payload.internship_id = dataLowongan.lowongan2.id;
      await ApiUserInternship.create(payload);
    }
    if (dataLowongan.lowongan3.id !== 0) {
      payload.internship_id = dataLowongan.lowongan3.id;
      await ApiUserInternship.create(payload);
    }
  }

  async function createKuisioner(user_id, user_id_hl, kuisioner) {
    kuisioner.answers.map(async (item) => {
      {
        if (Array.isArray(item.answer)) {
          const answer = item.answer.toString();
          item.user_id = user_id;
          item.user_id_hl = user_id_hl;
          item.answer = answer;
          await ApiKuisioners.user_kuisioner(item);
        } else {
          item.user_id = user_id;
          item.user_id_hl = user_id_hl;
          await ApiKuisioners.user_kuisioner(item);
        }
      }
    });
  }

  async function createSurvey(user_id, user_id_hl, survey) {
    survey.answers.map(async (item) => {
      {
        if (Array.isArray(item.answer)) {
          const answer = item.answer.toString();
          item.user_id = user_id;
          item.user_id_hl = user_id_hl;
          item.answer = answer;
          await ApiSurvey.user_surcey(item);
        } else {
          item.user_id = user_id;
          item.user_id_hl = user_id_hl;
          await ApiSurvey.user_surcey(item);
        }
      }
    });
  }

  const onSubmit = async (dataSurveiForm) => {
    try {
      setLoading(true);
      createSessionStorage('dataSurvey', dataSurveiForm);
      setSurvey(dataSurveiForm);
      let data = {
        user: user,
        profile: profile,
        userInternships: userInternships,
        userKuisioner: userKuisioner,
        userSurvey: dataSurveiForm,
      };
      // console.log(data);

      const userRes = await createUser(data.user);
      data.profile.user_id_hl = userRes[0].id;
      const profileRes = await createProfile(data.profile);
      const user_id = profileRes.data.id;
      const user_id_hl = profileRes.data.user_id_hl;
      await createInternships(user_id, user_id_hl, data.userInternships);
      await createKuisioner(user_id, user_id_hl, data.userKuisioner);
      await createSurvey(user_id, user_id_hl, data.userSurvey);
      setStepper(6);
      console.log(data);
      let timerInterval;
      Swal.fire({
        title: 'Harap ditunggu, data anda sedang di proses!',
        timer: 7000,
        allowEscapeKey: false,
        allowOutsideClick: false,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          timerInterval = setInterval(() => {}, 100);
          setLoading(false);
        },
        willClose: () => {
          setLoading(false);
          clearInterval(timerInterval);
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const surveySession = getSessionStorage('dataSurvey');
    if (surveySession !== false) {
      setSurvey(surveySession);
    } else {
      setSurvey(null);
    }

    setUser(userSession);
    setProfile(profileSession);
    setUserInternships(lowonganSession);
    setUserKuisioner(KuisionerSession);
    window.scrollTo(0, 0);

    return () => {};
  }, [setStepper]);

  return (
    <>
      {survey === undefined ? (
        <h1>Loading...</h1>
      ) : (
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
                            defaultValue={survey?.answers[index]?.answer}
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
                            type="date"
                            placeholder={item.question}
                            defaultValue={survey?.answers[index]?.answer}
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
                                        survey?.answers[index]?.answer ===
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
                                        {...register(
                                          `answers.${index}.answer`,
                                          {
                                            required: true,
                                          }
                                        )}
                                        defaultChecked={
                                          survey?.answers[index]?.answer[i] ===
                                          v.answer
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
                disabled={isLoading}
                type="submit"
                className={
                  'bg-bermuda hover:bg-[#c54933] transition-all text-sm text-white rounded-3xl px-5 py-3  '
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
};

export default FormLima;
