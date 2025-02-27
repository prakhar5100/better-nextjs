import React from 'react'
import { startComp } from '@/utils'
import Image from 'next/image'
import { CiDollar } from "react-icons/ci";
import { TbCirclePercentage } from "react-icons/tb";
import { MdOutlinePhoneAndroid } from "react-icons/md";

const Page = () => {
  return (
    <div className='bg-white font-poppins w-full h-screen y
     mt-32 mb-16'>

        <div className='text-slate-800 
        leading-normal text-4xl font-semibold tracking-tight text-center my-4 p-4'>
        Hi, I'm Betsy!
        < br/> 
        What can I help you with? 
        </div>

        <div className='w-[80%] max-w-lg mx-auto grid gap-4 my-4'>
            {
                startComp.map((element, index) => (
                    <div key={index} className='relative'> 

                            <Image 
                            src={element.image}
                            width={30}
                            height={30}
                            alt='element'
                            className='absolute left-3 top-1/2 transform -translate-y-5'
                            />
                        
                        <div className='pl-14 text-black flex items-center 
                        rounded-lg border border-slate-500 text-lg font-medium py-4'>{element.text}</div>

                    </div>
                ) )
            }
        </div>

        <div className='w-[80%] max-w-lg mx-auto flex justify-between gap-4 my-10 '>

            <div>
                <div className='text-3xl text-slate-950 font-medium my-5 text-center'>$100B</div>
                <div className='text-sm text-slate-600 text-center'>home loans funded entirely online</div>
            </div>

            <div>
                <div className='text-3xl text-slate-950 font-medium my-5 text-center'>400K</div>
                <div className='text-sm text-slate-600 text-center'>Customers who chose a Better Mortgage</div>
            </div>


        </div>


        <div className="bg-lightGreen w-[80%] max-w-lg mx-auto flex flex-col gap-4 my-10 p-6 rounded-lg text-slate-600">
  <div className="text-sm text-center">After a few questions, you'll unlock:</div>

  <div className="flex items-center justify-center gap-4 transform lg:translate-x-1/4 ">
    <CiDollar size={20} className="text-mortageGreen shrink-0" />
    <div className="text-sm w-[80%]">Custom mortgage rates</div>
  </div>

  <div className="flex items-center justify-center gap-4 lg:translate-x-1/4">
    <TbCirclePercentage size={20} className="text-mortageGreen shrink-0" />
    <div className="text-sm w-[80%]">Exclusive offers</div>
  </div>

  <div className="flex items-center justify-center gap-4 lg:translate-x-1/4">
    <MdOutlinePhoneAndroid size={20} className="text-mortageGreen shrink-0" />
    <div className="text-sm w-[80%]">A personalized dashboard</div>
  </div>
</div>



    
    </div>
  )
}

export default Page
