import React from 'react'
import { timeline } from '@/utils'

const Timeline = () => {
  return (
    <div className='flex flex-col p-3 lg:p-14 w-full'>
        
        <div className='text-black text-3xl font-semibold text-center'>Company Timeline</div>

        <div className='relative mx-auto lg:py-10 b'>
                <div className='w-1 h-[95%] bg-specialGray absolute left-1/2 transform -translate-x-1/2 top-20
                '></div>

                {
                    timeline.map((object) => (
                        <div key={object.id} className='flex flex-col gap-5 my-6'>
                            <div className='bg-mortageGreen w-min mx-auto px-4 py-2 text-2xl rounded-full grid 
                            place-content-center font-semibold z-10'> {object.time} </div>

                            <div className={`p-4 lg:p-10 w-40 lg:w-96 leading-relaxed tracking-wide text-sm bg-specialGray
                                 text-slate-600 rounded-lg transform ${object.even ? `-translate-x-[60%]` : `translate-x-[60%]`}`}>
                                {object.text}
                            </div>

                        </div>
                    ))
                }
        </div>

    </div>
  )
}

export default Timeline
