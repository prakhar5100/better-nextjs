'use client'
import { useMortgage } from '@/contexts/MotgageProvider'
import React from 'react'

const MonthlyPayment = () => {

  const {monthly} = useMortgage()
  return (

    <div className='flex flex-col gap-4 items-start justify-evenly w-[30%] h-[90%]'> 

    <h1 className='font-semibold'> Monthly Payment </h1> 

    <div className='font-medium tracking-tight text-lg
    lg:text-5xl'>${monthly.main}/mo</div>
          
    </div>

)}

export default MonthlyPayment
