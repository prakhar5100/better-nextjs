import React from "react";
import Image from "next/image";
import { MdOutlineLocalPhone } from "react-icons/md";

const Layout = ({ children }) => {
  return (
    <div className="bg-white">
      <div
        className="z-10 font-poppins w-screen bg-white lg:p-10 lg:pb-0
        flex flex-col justify-center items-center fixed top-0 left-0 right-0"
      >
        <div className="w-[80%] flex justify-between items-center">
          <Image src="/logo.jpg" alt="logo" width={90} height={90} />

          <div className="relative">
            <MdOutlineLocalPhone
              size={20}
              className="text-emerald-600 absolute left-0 top-1 max-md:-left-4 max-md:-top-3"
            />

            <div className="pl-6 text-slate-900 font-normal max-md:hidden">
              Need help? Call (415) 523 8837
            </div>
          </div>
        </div>

        <div className="relative w-[80%] h-1 bg-specialGray rounded-lg">
            <Image 
            src="https://media.better.com/components/preapproval/industry-parity-v2/betty1.jpg"
            className="absolute left-1/2 top-1/2 transform -translate-y-6 rounded-full"
            width={50}
            height={50}
            alt="woman"

            />
        </div>
      </div>

      <div className="bg-white"> {children} </div>
    </div>
  );
};

export default Layout;
