import React from 'react'
import {NavLink } from 'react-router-dom'
import Button from '../../components/Button'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { authSchema } from '../../validation/authValidation'
import { useSignin } from '../../hooks/useAuth'

const Signin = () => {
    const {mutate} = useSignin();
    const handleSumit = (signupData) => {
      mutate(signupData);
    }
  return (
  <div className='w-[100%] h-screen  flex justify-center items-center '>
    <div className='w-[23rem] h-[23rem] border rounded-md shadow-md flex flex-col items-center gap-5 py-5'>
      <h1 className='text-2xl font-bold'>Sign In</h1>
      <Formik initialValues={{email:"",password:""}} validationSchema={authSchema}
      onSubmit={(values)=>{
        handleSumit(values)
      }}
      >
     <Form className='flex flex-col gap-5 items-center w-[100%]'>
      <div className='w-[90%]'>
      <label htmlFor="email">Email</label>
        <Field type="text" name='email' className='w-[100%] px-2 border h-10 rounded' placeholder='a@gmail.com'/>
        <ErrorMessage name="email" component="div" className="text-red-500 text-xs" ></ErrorMessage>
      </div>
     <div className='w-[90%]'>
        <label htmlFor="password">Password</label>
        <Field type="password" name='password' className='w-[100%] px-2 border h-10 rounded' placeholder='ab@334'/>
        <ErrorMessage name="password" component="div" className="text-red-500 text-xs" ></ErrorMessage>
     </div>
      <Button value='Sign In' bg='black' color='yellow' width={'90%'} height={"2.5rem"}/>
     <div className='w-[90%] text-sm'>
      <p>Create a new account? <NavLink to='/signup'><span className='text-yellow-500 underline cursor-pointer'>Sign Up</span></NavLink></p>
     </div>
     </Form>
     </Formik>
    </div>
  </div>
  )
}

export default Signin
