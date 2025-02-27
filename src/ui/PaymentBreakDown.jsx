'use client'
import React from 'react'
import MonthlyPaymentBreakDown from './components/PaymentBreakDown/MonthlyPaymentBreakDown'
import EstimateDivision from './components/PaymentBreakDown/EstimateDivision'

const PaymentBreakDown = () => {
  return (
    <div className='bg-white w-screen p-8 lg:p-20 lg:px-24 text-black 
    font-poppins grid grid-cols-2 max-md:grid-cols-1 gap-10'>
      <MonthlyPaymentBreakDown />
      <EstimateDivision />
    </div>
  )
}

export default PaymentBreakDown
