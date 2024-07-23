import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { contxt } from './Apicontxt'
import { ToastContainer, toast } from 'react-toastify'

const ChangePass = () => {
    let {user} = useContext(contxt)
    const navigate = useNavigate()
    let [msg, setmsg] = useState(null)
    let {register,
        watch,
        handleSubmit,
        reset, 
        formState: {errors}} = useForm()

    const password = watch("newpassword")

    const token = localStorage.getItem('token')

    useEffect(()=>{
        if(!token){
            navigate('/')
        }
    },[token])

    async function handlesubmission(data){
        try {
           let oldpass = data.currentpass.trim()
           let newpass = data.newpassword.trim()
           
           const response = await axios.patch(`http://localhost:8080/users/password/${user[0]._id}`, {oldpass, newpass})
           console.log(user[0]._id)
           if(response.data == "wrong password"){
            setmsg(response.data)
           }
           if(response.data === "success"){
            toast.success("new password saved")
            setmsg(null)
            reset()
           }
        } catch (error) {
            console.log(error.message)
        }
    }

  return (
    <div className='d-flex justify-content-center align-items-center py-5'>
      <ToastContainer position='top-left'/>
      <form onSubmit={handleSubmit(handlesubmission)} method='post' className='col-lg-3 col-md-5 col-sm-6 col-12 bg-white p-4 rounded-3'>
        <label htmlFor="current_pass">Current Password:</label>
        <input {...register('currentpass',{required: "current password is required"})} type="password" id='current_pass' className='form-control shadow-none mt-1' placeholder='enter current password'/>
        <p className='text-danger mb-0'>{msg==null?"":msg}</p>
        {errors.currentpass&&<p className='mb-0 text-danger'>{errors.currentpass.message}</p>}
        <label htmlFor="new_pass" className='mt-3'>New Password:</label>
        <input {...register('newpassword',{required: "new password is required"})} type="password" id='new_pass' className='form-control shadow-none mt-1' placeholder='enter new password'/>
        {errors.newpassword&&<p className='mb-0 text-danger'>{errors.newpassword.message}</p>}
        <label htmlFor="cnew_pass" className='mt-3'>Confirm Password:</label>
        <input {...register('confirmpass',{
            required: "confirm password",
            validate: value => value === password || "wrong password"
        })} type="password" id='cnew_pass' className='form-control shadow-none mt-1' placeholder='confirm new password'/>
        {errors.confirmpass&&<p className='mb-0 text-danger'>{errors.confirmpass.message}</p>}
        <div className="butnss mt-4">
            <button type='button' onClick={()=> navigate('/myaccount')} className="btn btn-dark me-4">cancel</button>
            <button type='submit' className='btn btn-dark'>submit</button>
        </div>
      </form>
    </div>
  )
}

export default ChangePass
