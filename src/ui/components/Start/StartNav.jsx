import React from 'react'
import Image from 'next/image'
import { MdOutlineLocalPhone } from "react-icons/md";


const StartNav = () => {
  return (
    <div className='fixed w-screen h-32 bg-white py-4 lg:p-16 flex flex-col justify-center items-center'>

        <div className='w-[80%] flex justify-between items-center'>

            <Image                 src='/logo.jpg'
                alt='logo'
                width={90}
                height={90}
            />

            <div className='relative'>

            <MdOutlineLocalPhone 
                size={20}
                className='text-emerald-600 absolute left-0 top-1'
                />
            
                <div className='pl-6 text-slate-900 font-normal'>Need help? Call (415) 523 8837</div>


            </div>
        </div>
      
    </div>
  )
}

export default StartNav
