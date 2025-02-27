import React from 'react'
import Image from 'next/image'

const StatusQuo = () => {
  return (
    <div className='grid grid-cols-10 lg:pb-24 max-lg:grid-cols-1 gap-5 max-lg:p-8'>
      
      <div className='lg:col-start-3 lg:col-end-6 grid place-content-center gap-7'>
            <div className='text-slate-900 font-semibold text-2xl'>The status quo is broken</div>
            <div className='break-words text-slate-700 text-base tracking-wide'>The traditional processes around 
                homeownership are opaque and stressful. Fees aren’t transparent and some are simply outrageous in size. 
                Traditional mortgage lending is rife with unnecessary fees and slow, painful processes. 
                It’s a system set up to benefit insiders — not you. Better.com CEO, Vishal Garg, set out to change that.</div>
                <div className='bg-mortageGreen transition
         duration-75 ease-in-out w-fit px-6 py-4 rounded-lg grid place-content-center
          text-white cursor-pointer
          font-semibold
          '>
            Read Vishal's story
        </div>

      </div>

      <div className="lg:col-start-7 lg:col-end-11 lg:w-96 lg:h-96 overflow-hidden">
  <Image 
    src="https://media.better.com/video/vishal-mission.jpg"   
    width={2000}
    height={2000}
    alt="CEO"
    className="w-full h-full object-cover"
  />
</div>
    </div>
  )
}

export default StatusQuo
