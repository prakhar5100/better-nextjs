import React from 'react'
import Image from 'next/image'
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { CiStopwatch } from "react-icons/ci";

const LandingPage = () => {
  return (
    <div className='font-poppins relative w-screen h-[100vh] lg:h-[120vh] bg-gradient-to-b from-[#004733]
     to-[#004732] overflow-hidden grid grid-cols-6 grid-rows-10 lg:grid-rows-2 p-8 lg:p-20'>

            <Image 
            src="https://media.better.com/better-com/homepage/hero-variant-c.webp"
            alt='Phone in Hand'
            width={500}
            height={500}
            className='absolute bottom-0 mx-auto left-1/2 transform -translate-x-1/2 translate-y-0'

            />

        <div className='col-start-1 col-end-7 text-5xl lg:text-8xl font-semibold 
        tracking-normal text-center text-textMortgage leading-tight z-10 max-md:row-start-2 max-md:row-end-4' >
        Mortgages <br />
        made simple
        </div>

        <div className='col-start-2 col-end-5 z-10 w-max h-max grid place-items-center max-md:row-start-5'>


            <div className='bg-textMortgage text-slate-800 
            rounded-full grid place-content-center p-4 px-12 max-w-max'>
                Start my approval
            </div>

            <div className='relative'>
            <CiStopwatch className='absolute left-0 top-2 '/>
            <div className='text-xs mt-2 pl-5'>
                3 min &nbsp;| Non credit impact
            </div>

            </div>

        </div>


        <div className='relative col-start-2 lg:col-start-5 lg:col-end-7 w-max h-max p-2 grid gap-3 max-md:row-start-7'>
            <Image 
            src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
            width={25}
            height={25}
            alt='google'
            className='absolute left-0 top-5 transform -translate-y-1/2 '
            />

            <div className='grid pl-8 grid-flow-col gap-1'>
            {
                Array(4).fill().map((_, index) => (
                    <div key={index}> <FaStar size={22} color='gold'/>  </div>
                ))
            }
            <FaRegStarHalfStroke size={22} color='gold'/>
            </div>

            <h1 className='text-xs'>4.6 Stars | 3177 Google reviews</h1>

        </div>
      
    </div>
  )
}

export default LandingPage
