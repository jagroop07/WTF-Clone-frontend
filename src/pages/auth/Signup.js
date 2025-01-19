import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { contxt } from '../../utils/Apicontxt'
import { useNavigate } from 'react-router-dom'

export const Signup = () => {
  const { handleSignup } = useContext(contxt)
  const navigate = useNavigate()

  let {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()

  let password = watch('password')

  async function handlesubmit (data) {
    try {
      await handleSignup(data, navigate)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div
        className='py-2'
        style={{
          width: '100%',
          height: 'auto',
          background: 'black',
          marginTop: '5px'
        }}
      >
        <div
          className='row justify-content-center align-items-center m-auto my-5'
          style={{ width: '100%', height: '100%' }}
        >
          <div
            className='col-md-6 col-lg-4 col-sm-6 col-12 rounded-4'
            style={{ backgroundColor: 'white' }}
          >
            <h2 className='text-center pt-3 pb-3'>Signup</h2>
            <form
              onSubmit={handleSubmit(handlesubmit)}
              className='pb-2'
              method='post'
            >
              <div class='form-floating mb-3 '>
                <input
                  {...register('username', { required: true })}
                  type='text'
                  class='form-control shadow-none'
                  id='floatingInput'
                  placeholder='name@example.com'
                />
                {errors.username && (
                  <p className='text-danger'>username is required</p>
                )}
                <label for='floatingInput'>Username</label>
              </div>
              <div class='form-floating mb-3'>
                <input
                  {...register('gender', { required: true })}
                  type='text'
                  class='form-control shadow-none'
                  id='floatingGender'
                  placeholder='Gender'
                />
                {errors.gender && (
                  <p className='text-danger'>gender is required*</p>
                )}
                <label for='floatingPassword'>Gender</label>
              </div>
              <div class='form-floating mb-3'>
                <input
                  {...register('email', { required: true })}
                  type='email'
                  class='form-control shadow-none'
                  id='floatingEmail'
                  placeholder='Email'
                />
                {errors.email && (
                  <p className='text-danger'>email is required*</p>
                )}
                <label for='floatingPassword'>Email</label>
              </div>
              <div class='form-floating mb-3'>
                <input
                  {...register('password', { required: true })}
                  type='password'
                  class='form-control shadow-none'
                  id='floatingPassword'
                  placeholder='Password'
                />
                {errors.password && (
                  <p className='text-danger'>password is required*</p>
                )}
                <label for='floatingPassword'>Password</label>
              </div>
              <div class='form-floating mb-3'>
                <input
                  {...register('newpassword', {
                    required: 'password is required*',
                    validate: value =>
                      value === password || 'password doesnt match*'
                  })}
                  type='password'
                  class='form-control shadow-none'
                  id='floatingConfirmPassword'
                  placeholder='Password'
                />
                {errors.newpassword && (
                  <p className='text-danger'>{errors.newpassword.message}</p>
                )}
                <label for='floatingPfassword'>Confirm Password</label>
              </div>
              <div class='form-floating mb-3'>
                <input
                  {...register('avatar')}
                  type='file'
                  class='form-control shadow-none'
                  id='floatingPassword'
                  placeholder='Password'
                />
                <label for='floatingPassword'>Profile pic</label>
              </div>
              <div className='d-flex mt-3 justify-content-center align-items-center'>
                <button className='btn btn-dark'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
