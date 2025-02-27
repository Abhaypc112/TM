import React from 'react'

const Modal = ({message,conformation}) => {
  return (
    <div className='w-[100%] z-50 fixed flex justify-center top-24'>
      <div className='w-[25rem] h-[10rem] bg-slate-200 rounded-lg flex flex-col gap-10 p-10'>
            <div className='flex justify-center'>
                <p>Are you sure want to {message}</p>
            </div>
            <div className='flex justify-center gap-10 text-sm font-bold'>
                <button onClick={conformation} className='bg-yellow-500 px-3 p-1 rounded'>Ok</button> 
                <button className='bg-black text-white px-3 p-1 rounded'>Cancel</button> 
            </div>
        </div>
      </div>
  )
}

export default Modal
