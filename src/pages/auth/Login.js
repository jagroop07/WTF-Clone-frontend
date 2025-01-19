import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { contxt } from '../../utils/Apicontxt'

export const Login = () => {
  const navigate = useNavigate()
  let { handleLogin } = useContext(contxt)

  let {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const token = localStorage.getItem('token')

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token])

  async function handlesubmit (data) {
    try {
      await handleLogin(data, navigate)
    } catch (error) {
      alert(error)
    }
  }
  return (
    <>
      <div
        style={{
          width: '100%',
          height: '89.6vh',
          background: 'black',
          marginTop: '5px'
        }}
      >
        <div
          className='row justify-content-center align-items-center m-auto'
          style={{ width: '100%', height: '100%' }}
        >
          <div
            className='col-md-6 col-lg-3 col-sm-6 col-12 rounded-lg-4 rounded-4'
            style={{ backgroundColor: 'white' }}
          >
            <h2 className='text-center pt-3 pb-3'>Login</h2>
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
                {errors.username && <p>last name is required</p>}
                <label for='floatingInput'>Email/Username</label>
              </div>
              <div class='form-floating'>
                <input
                  {...register('password', { required: true })}
                  type='password'
                  class='form-control shadow-none'
                  id='floatingPassword'
                  placeholder='Password'
                />
                {errors.password && <p>password is required</p>}
                <label for='floatingPassword'>Password</label>
              </div>
              <div className='d-flex mt-3 justify-content-center align-items-center'>
                <button className='btn btn-dark'>Submit</button>
              </div>
            </form>
            <p>
              Does not have any account yet?
              <Link style={{ textDecoration: 'none' }} to={'/signup'}>
                Signup
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
