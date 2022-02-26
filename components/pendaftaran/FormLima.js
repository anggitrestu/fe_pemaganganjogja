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
import {
  alertBuatAkun,
  alertIsiLowongan,
  alertLengkapiProfile,
  alertSurvei,
} from './alert';

const FormLima = ({ setStepper, data }) => {
  const [user, setUser] = useState(undefined);
  const [profile, setProfile] = useState(undefined);
  const [userInternships, setUserInternships] = useState(undefined);
  const [userKuisioner, setUserKuisioner] = useState(undefined);
  const { register, handleSubmit } = useForm({});
  const [survey, setSurvey] = useState(undefined);
  const [isLoading, setLoading] = useState(false);

  const surveySession = getSessionStorage('dataSurvey');
  const lowonganSession = getSessionStorage('dataLowongan');
  const userSession = getSessionStorage('user');
  const profileSession = getSessionStorage('profile');
  const KuisionerSession = getSessionStorage('dataKuisioner');

  const registerUser = (dataSurveiForm) => {
    ApiUsers.register(user)
      .then((resUser) => {
        profile.user_id_hl = resUser[0].id;
        ApiUsers.updateProfile(profile)
          .then((resProfile) => {
            const data = {
              id: resProfile.data.id,
              user_id_hl: resProfile.data.user_id_hl,
            };
            try {
              createUserInternships(data, userInternships.lowongan1);
              createUserInternships(data, userInternships.lowongan2);
              createUserInternships(data, userInternships.lowongan3);

              userKuisioner.answers.map((item, index) => {
                {
                  if (Array.isArray(item.answer)) {
                    const answer = item.answer.toString();
                    item.user_id = resProfile.data.id;
                    item.user_id_hl = resProfile.data.user_id_hl;
                    item.answer = answer;
                    ApiKuisioners.user_kuisioner(item)
                      .then((res) => {})
                      .catch((err) => {
                        console.log(err);
                      });
                  } else {
                    item.user_id = resProfile.data.id;
                    item.user_id_hl = resProfile.data.user_id_hl;
                    ApiKuisioners.user_kuisioner(item)
                      .then((res) => {})
                      .catch((err) => {
                        console.log(err);
                      });
                  }
                }
              });

              dataSurveiForm.answers.map((item, index) => {
                {
                  if (Array.isArray(item.answer)) {
                    const answer = item.answer.toString();
                    item.user_id = resProfile.data.id;
                    item.user_id_hl = resProfile.data.user_id_hl;
                    item.answer = answer;
                    ApiSurvey.user_surcey(item)
                      .then((res) => {})
                      .catch((err) => {
                        console.log(err);
                      });
                  } else {
                    item.user_id = resProfile.data.id;
                    item.user_id_hl = resProfile.data.user_id_hl;
                    ApiSurvey.user_surcey(item)
                      .then((res) => {})
                      .catch((err) => {
                        console.log(err);
                      });
                  }
                }
              });
              setStepper(6);
            } catch (error) {
              console.log(error);
            }
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
      })
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

  const createUserInternships = (data, lowongan) => {
    try {
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
          .then((res) => console.log('succes create internship'))
          .catch((err) => {
            console.log(err);
          });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (dataSurveiForm) => {
    try {
      setLoading(true);
      createSessionStorage('dataSurvey', dataSurveiForm);
      setSurvey(dataSurveiForm);
      let timerInterval;
      console.log(dataSurveiForm);

      registerUser(dataSurveiForm);

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
    if (surveySession !== false) {
      setSurvey(surveySession);
    } else {
      setSurvey(null);
    }
    const data = {
      user: userSession,
      profile: profileSession,
      userInternships: lowonganSession,
      userKuisioner: KuisionerSession,
      userSurvey: surveySession,
    };

    console.log(data);

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
        } else {
          if (!KuisionerSession) {
            alertSurvei();
            setStepper(4);
          }
        }
      }
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
