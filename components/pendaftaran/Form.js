import Image from 'next/image';

function Form() {
    return (
        <>
            <h1 className="text-[#404040] font-semibold text-2xl mt-14">
                Pilih Lowongan Magang
            </h1>
            <p className="text-[#8F8F8F] w-[793px] font-normal text-base mt-2">
                Pilih minimal 1 lowongan dan maksimal 3 lowongan.
            </p>
            <form className='mt-8'>
                <input id="lowongan-1" type="hidden" required />
                <a className=" flex border-[1px] bg-[#DFDFDF] hover:scale-[1.008] cursor-pointer transition-all text-sm text-[#8F8F8F] rounded-3xl py-5 px-8 mb-6">
                    <p className="mr-auto text-base">Pilih Lowongan 1</p>
                    <Image src="/images/search.svg" height={24} width={24} />
                </a>

                <input id="lowongan-2" type="hidden" required />
                <a className=" flex border-[1px] bg-[#DFDFDF] hover:scale-[1.008] cursor-pointer transition-all text-sm text-[#8F8F8F] rounded-3xl py-5 px-8 mb-6">
                    <p className="mr-auto text-base">Pilih Lowongan 2</p>
                    <Image src="/images/search.svg" height={24} width={24} />
                </a>

                <input id="lowongan-3" type="hidden" required />
                <a className=" flex border-[1px] bg-[#DFDFDF] hover:scale-[1.008] cursor-pointer transition-all text-sm text-[#8F8F8F] rounded-3xl py-5 px-8 mb-14">
                    <p className="mr-auto text-base">Pilih Lowongan 3</p>
                    <Image src="/images/search.svg" height={24} width={24} />
                </a>
                <div className='flex flex-row justify-end'>
                    <button type='submit' className="bg-bermuda hover:bg-[#c54933] transition-all text-sm text-white rounded-3xl px-5 py-3 ">
                        Lanjut
                    </button>
                </div>
            </form>
        </>
    );
}

export default Form;
