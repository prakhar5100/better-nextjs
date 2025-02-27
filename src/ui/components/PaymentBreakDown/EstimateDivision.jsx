'use client'
import React from 'react'
import Input from './Input'
import Button from '../MortgageCalculator/Button'

const EstimateDivision = () => {

  const object = [
    {
      id : 1,
      title : 'Principal & interest',
      color : '#017848',
      type : false,
      value : 5536,
    }, 

    {
      id : 2,
      title : 'Property taxes',
      color : '#6E4CF6',
      type : true,
      value : 265,
      context : 'taxes'
    },

    {
      id : 3,
      title : 'Homeowners insurance',
      color : '#8E8EEB',
      type : true,
      value : 132,
      context : 'insurance'
    },

    {
      id : 4,
      title : 'HOA fees',
      color : '#FFD566',
      type : true,
      value : 132,
      context : 'hoa'
    },

    {
      id : 5,
      title : 'Utilities',
      color : '#FE8B72',
      type : true,
      value : 100,
      context : 'utilities'
    },

  ]
  return (
    <div className='flex flex-col items-start'>
      <div className='grid grid-rows-6 gap-7 w-full'>
        {
          object.map((element) => (
            <Input key={element.id} props={element}/>
          ))
        }
      </div>

      <Button text={'Copy Estimate Link'} className={`bg-slate-200 !text-black lg:my-5`}/>
      </div>
  )
}

export default EstimateDivision
