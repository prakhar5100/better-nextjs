import React from 'react'

const Button = ({text, className}) => {

  let originalClassName = 'bg-mortageGreen text-white rounded-md grid place-items-center p-5 px-8'

  return (
      <div className='grid place-content-end'>
      <button className={`${className ? className : ''} ${originalClassName}`}>
        {text}
      </button>
      </div>
  )
}

export default Button
