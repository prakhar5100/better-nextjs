import React from 'react'
import Mission from '@/ui/Mission'
import StatusQuo from '@/ui/StatusQuo'
import ChangingThings from '@/ui/ChangingThings'
import Timeline from '@/ui/Timeline'

const Page = () => {
  return (
    <div className='bg-white font-poppins'>

        <Mission />
        <StatusQuo />
        <ChangingThings />
        <Timeline />
      
    </div>
  )
}

export default Page
