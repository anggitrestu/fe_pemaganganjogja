import Image from 'next/image';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ApiAdmin from 'pages/api/ApiAdmin';
import Head from 'next/head';

const Index = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Set a Cookie
  function setCookie(cName, cValue, expDays) {
    let date = new Date();
    date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
    const expires = 'expires=' + date.toUTCString();
    document.cookie = cName + '=' + cValue + '; ' + expires + '; path=/';
  }

  const onSubmit = async (data) => {
    try {
      await ApiAdmin.register(data)
        .then((res) => {
          Swal.fire({
            icon: 'success',
            title: `${res.meta.status}`,
            text: `${res.meta.message}`,
          }).then(() => {
            ApiAdmin.login(data).then((res) => {
              setCookie('token', res.data.token, 1);
              Swal.fire({
                icon: 'success',
                title: `${res.meta.status}`,
                text: `${res.meta.message}`,
              });
              router.push('/dashboard');
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
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Head>
        <title>Register | Pemagangan Jogja</title>
        <link rel="shortcut icon" href="/icon.png" />
        <meta name="description" content="pemagangan jogja" />
      </Head>
      <div className="flex items-center min-h-screen p-6 bg-gray-50 :bg-gray-900">
        <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl :bg-gray-800">
          <div className="flex flex-col overflow-y-auto md:flex-row">
            <div className="h-32 md:h-auto md:w-1/2">
              <Image
                width={'448'}
                height={'700'}
                src="/images/information.jpg"
                layout="responsive"
                className="hidden object-cover w-full h-full :block"
                alt="..."
              />
            </div>
            <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
              <div className="w-full">
                <form className="" onSubmit={handleSubmit(onSubmit)}>
                  <h1 className="mb-4 text-xl font-semibold text-gray-700 :text-gray-200">
                    Register
                  </h1>
                  <label className="block text-sm">
                    <span className="text-gray-700 :text-gray-400">Nama</span>
                    <input
                      type="text"
                      {...register('name', {
                        required: true,
                      })}
                      className="border-[1px] bg-[#DFDFDF] block w-full px-3 py-3 mt-1 text-sm :border-gray-600 :bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple :text-gray-300 :focus:shadow-outline-gray form-input"
                      placeholder="masukan nama..."
                    />
                  </label>
                  <label className="block  mt-4 text-sm">
                    <span className="text-gray-700 :text-gray-400">Email</span>
                    <input
                      type="email"
                      {...register('email', {
                        required: true,
                      })}
                      className="border-[1px] bg-[#DFDFDF] block w-full px-3 py-3 mt-1 text-sm :border-gray-600 :bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple :text-gray-300 :focus:shadow-outline-gray form-input"
                      placeholder="masukan email..."
                    />
                  </label>
                  <label className="block mt-4 text-sm">
                    <span className="text-gray-700 :text-gray-400">
                      Password
                    </span>
                    <input
                      type="text"
                      {...register('password', {
                        required: true,
                      })}
                      defaultValue="pass123"
                      className="border-[1px] bg-[#DFDFDF] px-3 py-3 block w-full mt-1 text-sm :border-gray-600 :bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple :text-gray-300 :focus:shadow-outline-gray form-input"
                      placeholder="***************"
                    />
                  </label>
                  <label className="block mt-4 text-sm">
                    <span className="text-gray-700 :text-gray-400">
                      Jabatan
                    </span>
                    <input
                      type="text"
                      {...register('position', {
                        required: true,
                      })}
                      className="border-[1px] bg-[#DFDFDF] px-3 py-3 block w-full mt-1 text-sm :border-gray-600 :bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple :text-gray-300 :focus:shadow-outline-gray form-input"
                      placeholder="masukan jabatan..."
                    />
                  </label>
                  <label className="block mt-4 text-sm">
                    <span className="text-gray-700 :text-gray-400">
                      Nomor HP
                    </span>
                    <input
                      type="text"
                      {...register('number', {
                        required: true,
                      })}
                      className="border-[1px] bg-[#DFDFDF] px-3 py-3 block w-full mt-1 text-sm :border-gray-600 :bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple :text-gray-300 :focus:shadow-outline-gray form-input"
                      placeholder="masukan nomor hp "
                    />
                  </label>
                  {/* You should use a button here, as the anchor is only used for the example  */}
                  <button
                    type="submit"
                    className="bg-[#DFDFDF] block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-black transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                    href=""
                  >
                    Register
                  </button>
                  <hr className="my-8" />

                  <p className="mt-1">
                    <Link href="/login">
                      <a className="text-sm font-medium text-purple-600 :text-purple-400 hover:underline">
                        Have account ?
                      </a>
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
