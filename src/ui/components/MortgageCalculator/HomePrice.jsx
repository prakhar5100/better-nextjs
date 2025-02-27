'use client'
import { useMortgage } from '@/contexts/MotgageProvider'
import React, { useState } from 'react'

const HomePrice = () => {

  const [value, setValue] = useState("2,00,000") 

  const {values, setValues} = useMortgage()


  const handleChange = (e) => { 

    setValues((prev) => (
      {
        ...prev,
        homePrice : e.target.value.replace(/,/g, "")
      }
    ))
    const rawValue = values['homePrice'].replace(/,/g, "");
    if (!/^\d*$/.test(rawValue)) return; 
    const newValue = rawValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    setValue(newValue)

  }

  return (
    <div className='flex flex-col gap-4 w-1/2 justify-center'> 

    <h1 className='font-semibold'> Home price </h1> 

    <div className='relative w-full '>
    <span className='absolute left-3 top-1/2 transform -translate-y-1/2 font-medium tracking-wider text-2xl lg:text-5xl '>$</span>
    <input type='text'
    value={values['homePrice'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || ""}
    onChange = {handleChange}
    className='p-2 pl-12 w-full lg:h-20 border border-black/30 rounded-lg font-medium tracking-tight 
    text-2xl lg:text-5xl focus:outline-none focus:border-4 focus:border-green-800  transition-all ease-in-out'/>

    </div>
      
    </div>
  )
}

export default HomePrice
