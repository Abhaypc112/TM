import React from 'react'

const Dashboard = () => {
  return (
    <div className='h-screen flex w-[100%] py-10'>
      <div className='mt-20 w-full flex flex-col items-center gap-5'>
        <div className='flex w-[80%] justify-between gap-3'>
            <input type="text" className=' border h-10 w-[80%] rounded-md'/>
            <button className=' bg-yellow-500 w-[20%] rounded'>Add Task</button>
        </div>
        <div className='bg-slate-400 w-[80%] h-[5rem] rounded-md p-2'>
            
        </div>
        <div className='bg-slate-400 w-[80%] h-[5rem] rounded-md p-2'>

        </div>
      </div>
    </div>
  )
}

export default Dashboard
