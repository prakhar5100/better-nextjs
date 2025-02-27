'use client'
import { useMortgage } from '@/contexts/MotgageProvider'
import React, { useState } from 'react'

const Slider = () => {

  const {values, setValues} = useMortgage()
  const [value, setValue] = useState(50)

  return (
    <div className='w-full px-2'>

      <input type="range" 
      name="" 
      id=""
      min={0}
      max={Infinity}
      onChange={(e) => {
        setValue(e.target.value) 
        setValues((prev) => ({
          ...prev,
          homePrice : e.target.value * 10000
        }))

      }
      
      }
      className="w-full appearance-none h-5 bg-gray-300 rounded-lg focus:cursor-pointer 
      [&::-webkit-slider-thumb]:appearance-none 
      [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 
      [&::-webkit-slider-thumb]:bg-green-500 [&::-webkit-slider-thumb]:rounded-full"  
      style={{
        background : `linear-gradient(to right, #1f1f1f ${value}%, #c9c7c7 ${value}%)`
      }}    
    />

    </div>
  )
}

export default Slider
