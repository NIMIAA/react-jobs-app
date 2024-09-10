import React from 'react';

const Button = ({label}) => {
  return (
    <div>
        <button className='rounded bg-custom-blue px-2 py-1 mt-2 text-white'>{label}</button>
    </div>
  )
}

export default Button;