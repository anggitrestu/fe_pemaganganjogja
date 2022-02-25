import Modal from 'components/Modal';
import {
  createSessionStorage,
  getSessionStorage,
} from 'helpers/useSessionStorage';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { alertIsiLowongan } from './alert';

function FormSatu({ data, setStepper }) {
  const [lowongan1, setLowongan1] = useState(
    {
      id: 0,
      name_program: '',
    },
    'lowongan-1'
  );

  const [lowongan2, setLowongan2] = useState(
    {
      id: 0,
      name_program: '',
    },
    'lowongan-2'
  );

  const [lowongan3, setLowongan3] = useState(
    {
      id: 0,
      name_program: '',
    },
    'lowongan-3'
  );

  useEffect(() => {
    const dataLowongan = getSessionStorage('dataLowongan');
    if (dataLowongan !== false) {
      setLowongan1(dataLowongan.lowongan1);
      setLowongan2(dataLowongan.lowongan2);
      setLowongan3(dataLowongan.lowongan3);
    }

    window.scrollTo(0, 0);
  }, [setLowongan1, setLowongan2, setLowongan3, setStepper]);

  const checkInput = (e) => {
    e.preventDefault();

    const dataLow = {
      lowongan1,
      lowongan2,
      lowongan3,
    };
    createSessionStorage('dataLowongan', dataLow);
    const a = getSessionStorage('dataLowongan');
    if (a.lowongan1.id === 0 && a.lowongan2.id === 0 && a.lowongan3.id === 0) {
      alertIsiLowongan();
    } else {
      let timerInterval;
      Swal.fire({
        title: 'Loading...',
        timer: 300,
        timerProgressBar: true,
        didOpen: async () => {
          Swal.showLoading();
          timerInterval = setInterval(() => {}, 100);
          setStepper(2);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      });
    }
  };

  const [onClickModal1, setOnClickModal1] = useState(false);
  const [onClickModal2, setOnClickModal2] = useState(false);
  const [onClickModal3, setOnClickModal3] = useState(false);

  return (
    <>
      {onClickModal1 && (
        <Modal
          data={data.data}
          setOnClick={setOnClickModal1}
          setValue={setLowongan1}
        ></Modal>
      )}
      {onClickModal2 && (
        <Modal
          data={data.data}
          setOnClick={setOnClickModal2}
          setValue={setLowongan2}
        ></Modal>
      )}
      {onClickModal3 && (
        <Modal
          data={data.data}
          setOnClick={setOnClickModal3}
          setValue={setLowongan3}
        ></Modal>
      )}
      <div>
        <h1 className="text-[#404040] font-semibold text-2xl mt-14">
          Pilih Lowongan Magang
        </h1>
        <p className="text-[#8F8F8F] font-normal text-base mt-2">
          Pilih minimal 1 lowongan dan maksimal 3 lowongan.
        </p>
        <form className="mt-8">
          <input
            value={lowongan1.id}
            name="lowongan-1"
            type="hidden"
            required
          />
          <div
            onClick={() => setOnClickModal1(true)}
            className="flex border-[1px] bg-[#DFDFDF] hover:scale-[1.008] cursor-pointer transition-all text-sm text-[#8F8F8F] rounded-3xl py-5 px-8 mb-6"
          >
            <p className="mr-auto text-base text-black">
              {lowongan1.name_program
                ? lowongan1.name_program
                : 'pilih lowongan'}
            </p>
            <Image
              src="/images/search.svg"
              height={24}
              width={24}
              alt="icon serach"
            />
          </div>
          <input value={lowongan2} name="lowongan-2" type="hidden" required />
          <div
            onClick={() => setOnClickModal2(true)}
            className="flex border-[1px] bg-[#DFDFDF] hover:scale-[1.008] cursor-pointer transition-all text-sm text-[#8F8F8F] rounded-3xl py-5 px-8 mb-6"
          >
            <p className="mr-auto text-base text-black">
              {lowongan2.name_program
                ? lowongan2.name_program
                : 'pilih lowongan'}
            </p>
            <Image
              src="/images/search.svg"
              height={24}
              width={24}
              alt="icon search"
            />
          </div>
          <input value={lowongan3} name="lowongan-3" type="hidden" required />
          <div
            onClick={() => setOnClickModal3(true)}
            className="flex border-[1px] bg-[#DFDFDF] hover:scale-[1.008] cursor-pointer transition-all text-sm text-[#8F8F8F] rounded-3xl py-5 px-8 mb-14"
          >
            <p className="mr-auto text-base text-black">
              {lowongan3.name_program
                ? lowongan3.name_program
                : 'pilih lowongan'}
            </p>
            <Image
              src="/images/search.svg"
              height={24}
              width={24}
              alt="icon search"
            />
          </div>
          <div className="flex flex-row justify-end">
            <button
              onClick={(e) => checkInput(e)}
              className="bg-bermuda hover:bg-[#c54933] transition-all text-sm text-white rounded-3xl px-5 py-3"
            >
              Lanjut
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default FormSatu;
