'use client'
import { useMortgage } from '@/contexts/MotgageProvider'
import React, { useEffect, useRef, useState } from 'react'

const MonthlyPaymentBreakDown = () => {

    const ref = useRef(null) 

    const {monthly} = useMortgage()

    const [width, setWidth] = useState(null)

    useEffect(() => {
        if (ref.current) 
        {setWidth(ref.current.offsetWidth)
        }
    }, [])

    const totalValue = 6133

    const object = [
        {
            id : '1',
            color : '#017848',
            value : 5536 / totalValue
        },
        {
            id : '2',
            color : '#6E4CF6',
            value : 265 / totalValue
        },
        {
            id : '3',
            color : '#8E8EEB',
            value : 132 / totalValue
        },
        {
            id : '4',
            color : '#FFD566',
            value : 100 / totalValue
        },
        {
            id : '5',
            color : '#FE8B72',
            value : 100 / totalValue
        },
    ]   
    
  return (
    <div className='flex flex-col gap-6'>
      <h2 className='font-semibold'>Monthly payment breakdown</h2>

        <div className='py-2 w-80 h-20 font-medium tracking-tight 
        text-5xl'>${monthly.main}/mo</div> 

        <div id='breakdown' ref={ref} className='w-4/5 flex gap-0'>
            { width !== null &&
                object.map((element) => {
                    const elementWidth = element.value * width 
                    return (
                    <div key={element.id} className={`h-20 rounded-full`} 
                    style={{backgroundColor : element.color ,
                        width : `${elementWidth}px`

                    }}>
                    </div>
                    )
                })
            }
        </div>


    </div>
  )
}

export default MonthlyPaymentBreakDown
