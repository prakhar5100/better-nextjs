'use client'
import React from 'react'
import HomePrice from './components/MortgageCalculator/HomePrice'
import MonthlyPayment from './components/MortgageCalculator/MonthlyPayment'
import Button from './components/MortgageCalculator/Button'
import Slider from './components/MortgageCalculator/Slider'
import Input from './components/MortgageCalculator/Input'
import Image from 'next/image'
import { useMortgage } from '@/contexts/MotgageProvider'

const MortgageCalculator = () => {

  const {values, setValues, changeValue} = useMortgage()
  return (
    <div className='bg-calcBackground w-screen p-5 lg:p-20 lg:px-24 text-black font-poppins'> 

    <h1 className='my-8 text-3xl lg:text-5xl font-medium text-slate-950 tracking-tight'> Mortgage calculator</h1>

    <p className='w-full lg:w-2/3 text-slate-600 text-left leading-relaxed text-base'>Our mortgage calculator includes key factors like homeowners association fees, 
    property taxes, and private mortgage insurance (PMI). 
    Get the whole picture and calculate your total monthly payment.</p>  

    <div className='grid lg:grid-cols-9 lg:grid-rows-3 my-12  w-full gap-4'>

      <div className='gap-9  col-start-1 col-end-7 row-span-2
       flex justify-between items-start max-md:row-start-1 max-md:row-end-2
       '>
      <HomePrice /> 
        <MonthlyPayment />
      </div>

      <div className=' col-start-1 col-end-10 md:col-start-8 md:col-end-10 md:row-span-2 grid place-content-center
      max-md:row-start-3 max-md:row-end-4
      '>
      <Button text={"Get pre-approved"}/>
      </div>

      <div className=' col-start-1 col-end-10 row-span-1 max-md:row-start-2 max-md:row-end-3 grid place-items-center'>
      <Slider />
      </div>

    </div> 

    <div className='grid 
    xl:grid-cols-[auto_auto_1fr_auto_auto] w-full gap-4 max-xl:grid-cols-2 max-sm:grid-cols-1 place-items-center' > 
    <div className="">
      <Input type={"text"} content={"11025"} span={"ZIP Code"} context={'zipCode'}/>
    </div>
    
    <div className="">
      <Input type={"text"} content={"189440"} span={"Down Payment"} className={`pl-6`} context={'downPayment'}>
        <span className='absolute left-3 top-1/2 transform -translate-y-1/2 font-medium tracking-wider text-lg pt-3'>
          $
        </span>
      </Input>
    </div>
    <div className=" flex xl:justify-end">
      <Input type={"text"} content={"6.5"} span={"Interest Rate"} context={'interestRate'}>
        <span className='absolute right-3 top-1/2 transform -translate-y-1/2 font-medium tracking-wider text-lg pt-3'>
          %
        </span>
      </Input>
    </div>

    <div className="relative w-72 ">
      <span className='pl-3 absolute top-1 left-1 text-sm text-black/45'>Length of Loan</span> 
      
      <Image 
        src='/drop.png'
        alt='Drop down'
        width={24}
        height={24}
        className='absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none'
      />

      <select className='appearance-none bg-white pb-3 pt-6 pl-4 h-18 border w-72 border-black/30 rounded-lg font-medium tracking-loose 
      focus:outline-none focus:border-2 focus:border-green-800'
      onChange={(e) => {
        setValues((prev) => ({
          ...prev,
          timePeriod : e.target.value
        }))
      }}
      >
        <option value="30 years" className='font-poppins'>30 years</option>
        <option value="20 years">20 years</option>
        <option value="10 years">10 years</option>        
      </select>
    </div>
</div>


    </div>
  )
}

export default MortgageCalculator
