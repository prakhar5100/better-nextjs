import React from 'react'
import { IoStar } from "react-icons/io5";

const FindOut = () => {
  return (
    <div className='lg:col-start-4 lg:col-end-8 grid lg:col-span-3 place-content-center gap-4'>
        
        <div className='text-black text-7xl font-semibold my-4'>
        Find out why <br /> we’re better.
        </div>

        <div className='bg-darkGreen hover:bg-mortageGreen transition
         duration-75 ease-in-out w-fit px-8 py-6 rounded-full grid place-content-center
          text-white cursor-pointer
          font-semibold
          '>
            See all our stories
        </div>

            <div className='relative grid grid-flow-col w-max gap-3'>
                <IoStar size={20} className='absolute left-0 top-0  text-emerald-600'/>
                <div className='pl-6 text-black text-sm'>Trustpilot</div>
                <div className='text-slate-700'>Excellent</div>
                <div className='text-slate-800'>4.4 out of 5</div>
            </div>
    </div>
  )
}

export default FindOut
