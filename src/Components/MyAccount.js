import React, { useContext, useEffect, useState } from 'react'
import { contxt } from './Apicontxt'
import { useNavigate } from 'react-router-dom'

const MyAccount = () => {
  const {user} = useContext(contxt)
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem('token')
    useEffect(()=>{
        if(!token){
            navigate('/')
        }
    },[token])

  useEffect(() => {
    if (user && user.length > 0) {
      setLoading(false);
    }
  }, [user]);

  function handleprofile(){
    navigate('/editProfile')
  }

  function handleclickk(){
    navigate('/chngepss')
  }

  return (
    <div className='container-fluid'>
      <div className="container">
        <div className="row my-5">
              {!loading && (
                <>
                  <div className="row col-lg-6 col-md-12 col-12 d-flex align-items-center">
                    <div className="imggg text-center col-lg-6 col-md-6 col-12"><img className='rounded-circle responsive' src={user[0].image} height={'170px'} width={'170px'} alt="..." /></div>
                    <div className="col-lg-6 text-lg-start text-md-start text-center col-md-6 col-12 edit mt-lg-0 mt-md-0 mt-4">
                      <button onClick={handleprofile} className='btn btn-dark px-4'>Edit Profile</button>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-12 rounded-3 mt-lg-0 mt-5 bg-light px-lg-5 px-md-5 px-3 py-3 d-flex flex-column justify-content-center">
                  <div className='row'>
                      <h6 className='col-lg-6 col-md-6 col-sm-6 col-12'>Username: </h6>
                      <p className='col-lg-6 col-md-6 col-sm-6 col-12'>{user&&user[0].username}</p>
                  </div>
                  <div className='row'>
                      <h6 className='col-lg-6 col-md-6 col-sm-6 col-12'>Email: </h6>
                      <p className='col-lg-6 col-md-6 col-sm-6 col-12'>{user&&user[0].email}</p>
                  </div>
                  <div className='row'>
                      <h6 className='col-lg-6 col-md-6 col-sm-6 col-12'>Gender: </h6>
                      <p className='col-lg-6 col-md-6 col-sm-6 col-12'>{user&&user[0].gender}</p>
                  </div>
                  <div className='row'>
                      <h6 className='col-lg-6 col-md-6 col-sm-6 col-12'>Change Password: </h6>
                      <button onClick={handleclickk} className='text-start text-primary col-lg-6 col-md-6 col-sm-6 col-12 border-0 bg-transparent'>click to change {"->"}</button>
                  </div>
                </div>
                </>
              )}
        </div>
      </div>
    </div>
  )
}

export default MyAccount
