import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { contxt } from '../../utils/Apicontxt'

const EditProfile = () => {
  const navigate = useNavigate()
  let [username, setusername] = useState('')
  let [loading, setLoading] = useState(true)
  let [email, setemail] = useState('')
  let [gender, setgender] = useState('')
  let [file, setfile] = useState(null)
  let { user, handleProfile } = useContext(contxt)

  const token = localStorage.getItem('token')
  useEffect(() => {
    if (!token) {
      navigate('/')
    }
  }, [token])

  useEffect(() => {
    if (user && user.length > 0) {
      setLoading(false)
    }
  }, [user])

  function handlename (e) {
    setusername(e.target.value)
  }

  function handleemail (e) {
    setemail(e.target.value)
  }

  function handlegender (e) {
    setgender(e.target.value)
  }

  function handlefilee (e) {
    setfile(e.target.files[0])
  }

  async function handleSubmit (e) {
    try {
      e.preventDefault()
      await handleProfile({ username, email, gender, file }, navigate)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className='d-flex justify-content-center align-items-center py-5'>
      {!loading && (
        <>
          <div className='d-flex flex-column align-items-center bg-light rounded-3'>
            <img
              src={user[0].image}
              className='rounded-pill responsive mt-4'
              height={'150px'}
              width={'150px'}
              alt='...'
            />
            <form
              encType='multipart/form-data'
              onSubmit={handleSubmit}
              method='post'
              className='p-3'
            >
              <label htmlFor='username'>Username</label>
              <input
                onChange={handlename}
                type='text'
                id='username'
                className='form-control shadow-none'
                placeholder='username'
              />
              <label className='mt-2' htmlFor='email'>
                Email
              </label>
              <input
                onChange={handleemail}
                type='email'
                id='email'
                className='form-control shadow-none'
                placeholder='email@gmail.com'
              />
              <label className='mt-2' htmlFor='gender'>
                Gender
              </label>
              <input
                onChange={handlegender}
                type='text'
                id='gender'
                className='form-control shadow-none'
                placeholder='gender'
              />
              <label className='mt-2' htmlFor='username'>
                Profile Pic
              </label>
              <input
                onChange={handlefilee}
                type='file'
                id='file'
                className='form-control shadow-none'
              />
              <div className='mt-4'>
                <button
                  type='button'
                  className='btn btn-dark'
                  onClick={() => navigate('/myaccount')}
                >
                  Cancel
                </button>
                <button type='submit' className='btn btn-dark ms-5'>
                  Save
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  )
}

export default EditProfile
