import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleOnclick = () => {
    localStorage.removeItem('token');
    navigate('/signin')
  }
  return (
    <div>
      <div className='w-[100%] shadow-md h-[5rem] flex justify-between items-center px-3 fixed z-10 bg-white'>
        <h1 className='font-bold text-4xl'>TM</h1>
        {
          token ? (
            <button onClick={handleOnclick} className='bg-black text-white font-bold p-1 rounded px-2 text-sm'>Sign Out</button>
          ):(
            <button onClick={()=>navigate('/signin')} className='bg-black text-white font-bold p-1 rounded px-2 text-sm'>Sign In</button>
          )
        }
      </div>
    </div>
  )
}

export default Navbar
