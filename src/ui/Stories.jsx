import React from 'react'
import Swap from './components/Stories/Swap'
import FindOut from './components/Stories/FindOut'

const Stories = () => {
  return (
    <div className='grid lg:grid-cols-7 gap-4 p-8 lg:p-20 font-poppins bg-white grid-cols-1'>
      <Swap />
      <FindOut />

    </div>
  )
}

export default Stories
