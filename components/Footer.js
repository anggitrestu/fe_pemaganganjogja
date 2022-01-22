import { ArrowUpIcon } from '@heroicons/react/solid';

const Footer = () => {
  return (
    <div className="text-white">
      <div className="flex">
        <h1 className="font-normal text-base">
          © DISNAKERTRANS DIY. All rights reserved
        </h1>
        <div className="ml-auto bg-bermuda px-2 py-2">
          <ArrowUpIcon className="w-[20px] "></ArrowUpIcon>
        </div>
      </div>
    </div>
  );
};

export default Footer;
