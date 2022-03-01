import { ArrowUpIcon } from '@heroicons/react/solid';



const Footer = () => {

  const handleUp = () => {
    window.scrollTo(0,0)
  }

  return (
    <div className="text-white">
      <div className="flex">
        <h1 className="font-normal text-base">
          © DISNAKERTRANS DIY. All rights reserved
        </h1>
        <div onClick={handleUp}  className="ml-auto bg-bermuda px-2 py-2 cursor-pointer">
        <ArrowUpIcon className="w-[20px] "></ArrowUpIcon>
        </div>
      </div>
    </div>
  );
};

export default Footer;
