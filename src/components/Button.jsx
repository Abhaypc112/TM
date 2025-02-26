import React from 'react'

const Button = ({value,bg,color,width,height}) => {
  return (
    <button type='submit' className='rounded-md font-bold' style={{backgroundColor:bg,color:color,width:width,height:height,}}>{value}</button>
  )
}

export default Button
