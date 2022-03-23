import React from 'react';
import FormSatu from 'components/pendaftaran/FormSatu';
import FormDua from 'components/pendaftaran/FormDua';
import FormTiga from 'components/pendaftaran/FormTiga';
import FormEmpat from 'components/pendaftaran/FormEmpat';
import FormLima from 'components/pendaftaran/FormLima';
import FormEnam from 'components/pendaftaran/FormEnam';
import { useSessionStorage } from 'helpers/useSessionStorage';

export default function Wizard() {
  const [stepper, setStepper] = useSessionStorage(1, 'stepper');

  return (
    <>
      <section className="">
        <div className="container mx-auto px-8 md:px-20 py-10">
          {stepper === 6 ? null : (
            <ul className="w-full steps">
              <li
                {...(stepper <= 1 ? null : { onClick: () => setStepper(1) })}
                className={
                  'step cursor-pointer ' +
                  (stepper >= 1 ? 'step-error text-bermuda' : '')
                }
              >
                Pilih Lowongan
              </li>
              <li
                {...(stepper <= 2 ? {} : { onClick: () => setStepper(2) })}
                className={
                  'step cursor-pointer ' +
                  (stepper >= 2 ? 'step-error text-bermuda' : '')
                }
              >
                Buat Akun
              </li>
              <li
                {...(stepper <= 3 ? {} : { onClick: () => setStepper(3) })}
                className={
                  'step cursor-pointer ' +
                  (stepper >= 3 ? 'step-error text-bermuda' : '')
                }
              >
                Lengkapi Profil
              </li>
              <li
                {...(stepper <= 4 ? {} : { onClick: () => setStepper(4) })}
                className={
                  'step cursor-pointer ' +
                  (stepper >= 4 ? 'step-error text-bermuda' : '')
                }
              >
                Kuisioner
              </li>
              <li
                {...(stepper <= 5 ? {} : { onClick: () => setStepper(5) })}
                className={
                  'step cursor-pointer ' +
                  (stepper >= 5 ? 'step-error text-bermuda' : '')
                }
              >
                Survey Digital
              </li>
              <li
                {...(stepper <= 6 ? {} : { onClick: () => setStepper(6) })}
                className={
                  'step cursor-pointer ' +
                  (stepper >= 6 ? 'step-error text-bermuda' : '')
                }
              >
                Selesai
              </li>
            </ul>
          )}
        </div>
      </section>

      <section className="container mx-auto px-8 md:px-20">
        {stepper === 1 && (
          <FormSatu data={data} setStepper={setStepper}></FormSatu>
        )}
        {stepper === 2 && <FormDua setStepper={setStepper}></FormDua>}
        {stepper === 3 && <FormTiga setStepper={setStepper}></FormTiga>}
        {stepper === 4 && (
          <FormEmpat setStepper={setStepper} data={kuisioner}></FormEmpat>
        )}
        {stepper === 5 && (
          <FormLima setStepper={setStepper} data={survey}></FormLima>
        )}
        {stepper === 6 && <FormEnam setStepper={setStepper}></FormEnam>}
      </section>
    </>
  );
}
