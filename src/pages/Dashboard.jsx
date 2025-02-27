import React, { useEffect, useState } from 'react'
import { addTask, deleteTask, getAllTasks, updateTask } from '../redux/taskHandleSlice';
import { useDispatch, useSelector } from 'react-redux';
import { taskSchema } from '../validation/taskValidation';
import {ErrorMessage, Field, Form, Formik} from 'formik';

const Dashboard = () => {
    const [id,setId] = useState(null);
    const [taskData,setTaskData] = useState({
        title:"",
        due_date:"",
        completed:false
    });
    const dispatch = useDispatch();
    const {tasks} = useSelector((state)=>state.tasks);
    const [updateTitle,setUpdateTitle] = useState('');
    const [filter, setFilter] = useState(null); 
    const [filterdData,setFilterdData] = useState(tasks);
    const [page, setPage] = useState(1);
    const limit = 4;
    const userId = 1; // Example userId

    useEffect(() => {
        let result = tasks;
        if (filter !== null) {
          result = result.filter((item) => item.completed === filter);
        }
        
        setFilterdData(result);
      }, [tasks, filter]);

      useEffect(() => {
        dispatch(getAllTasks({ page, limit, filter }));
    }, [dispatch,page,filter]);
    
    
    const handleOnSubmit = (values) => {
        dispatch(addTask(values));
        setTaskData({
            title:"",
            due_date:"",
            completed:false
        })
    }

    const handleUpdate = (task) => {
        const isConfirmed = window.confirm("Are you sure update task");
  if    (!isConfirmed) return;
        const {userId,completed,id,} = task
        dispatch(updateTask({title:updateTitle,completed,userId,id}))
        setId(null)
    }

    const handleDelete = ( id) => {
        const isConfirmed = window.confirm("Are you sure delete task");
  if    (!isConfirmed) return;
        dispatch(deleteTask(id))
    }

    const handleChecked = (e,task) => {
        const updatedTask = { ...task, completed: e.target.checked };
        dispatch(updateTask(updatedTask))
    }

  return (
    <div className='h-screen flex w-[100%] py-10'>
      <div className='mt-20 w-full flex flex-col items-center gap-5 '>
        <Formik initialValues={taskData}
            validationSchema={taskSchema}
            onSubmit={(values,{resetForm })=>{
                handleOnSubmit(values)
                resetForm()
            }}
        >
            <Form className='flex w-[80%] justify-between gap-3 items-center'>
                <div className='w-full'>
                    <Field type="text" name='title' className=' border h-10 rounded-md px-3 w-[100%]' placeholder='Enter the task . . .'/>
                    <ErrorMessage name="title" component="div" className="text-red-500 text-xs" ></ErrorMessage>
                </div>
                <div className=''>
                    <Field name='due_date' className='border h-10 rounded-md px-3 text-sm'  type="date"  />
                    <ErrorMessage name="due_date" component="div" className="text-red-500 text-xs" ></ErrorMessage>
                </div>
                <button  type='submit' className=' bg-yellow-500 px-3 h-10 rounded text-sm'>Add</button>
            </Form>
        </Formik>
        <div className='flex gap-3'>
            <button onClick={()=>setFilter(null)} className='px-2 p-1 bg-slate-200 rounded text-sm'>All</button>
            <button onClick={()=>setFilter(true)} className='px-2 p-1 bg-slate-200 rounded'>Completed</button>
            <button onClick={()=>setFilter(false)} className='px-2 p-1 bg-slate-200 rounded'>Pending</button>
        </div>
        {
            filterdData && filterdData.map((task,index)=>{
                return(
                    <div key={index} className='border border-gray-700 w-[80%] h-[5rem] rounded-md p-2 flex flex-col justify-between'>
            <div className='flex justify-between'>
                {
                    id == task.id?(
                        <input onChange={(e)=>setUpdateTitle(e.target.value)} type="text"  className='w-[70%] border px-2 rounded'/>
                    ):(
                        <input type="text" value={task.title} className='w-[70%] px-2 bg-white' disabled/>
                    )
                }
                <div className='flex gap-2'>
                    {
                        id == task.id?(
                            <>
                                <button onClick={()=>handleUpdate(task)} className='bg-blue-500 p-1 px-2 rounded text-sm'>Save</button>
                                <button  onClick={()=>setId(null)} className='bg-red-500 p-1 px-2 rounded text-sm'>Cancel</button>
                            </>
                        ):(
                            <>
                                <button onClick={()=>setId(task.id)} className='bg-blue-500 p-1 px-2 rounded text-sm'>Edit</button>
                                <button onClick={()=>handleDelete(task.id)} className='bg-red-500 p-1 px-2 rounded text-sm'>Delete</button>
                            </>
                        )
                    }
                </div>
            </div>
            <div className='flex justify-between'>
                <div className='flex items-center gap-2'>
                    <input onChange={(e)=>handleChecked(e,task)} type="checkbox" checked={task.completed} /> <span className='text-sm'>Complted</span>
                </div>
                <div className='text-xs flex gap-3'>
                    <p>{task.due_date}</p>
                </div>
            </div>
        </div>
                )
            })
        }
      <div className='flex justify-center gap-10'>
        <button disabled={page === 1} className='bg-slate-300 p-1 px-2 rounded' onClick={() => setPage(page - 1)}>Prev</button>
        <span>{page}</span>
        <button disabled={tasks.length === 0} className='bg-slate-300 p-1 px-2 rounded' onClick={() => setPage(page + 1)}>Next</button>
      </div>
      </div>

    </div>
  )
}

export default Dashboard
