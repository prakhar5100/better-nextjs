'use client'
import { useMortgage } from '@/contexts/MotgageProvider'
import React, { useState } from 'react'

const Input = ({type, content, span, children, className, context}) => {

  const {values, setValues} = useMortgage()

    const originalClass = `pb-3 pt-6 pl-4 h-18 border w-72 border-black/30 rounded-lg font-medium tracking-loose 
        focus:outline-none focus:border-2 focus:border-green-800`

  return (
    <div className='relative w-72 max-xl:w-1/2'>
        <span className='pl-3 absolute top-1 left-1 text-sm text-black/45'>{span}</span> 

        { children }

        <input 
            type={type} 
            className={`${originalClass} ${className}`}
            value={values[context] || ""}
            onChange={(e) => {
              setValues((prev) => (
                {
                  ...prev,
                  [context] : e.target.value
                }
              ))
            }}
            /> 

    </div>
  )
}

export default Input
