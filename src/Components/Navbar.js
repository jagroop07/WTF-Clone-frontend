import React, { useContext, useEffect, useState } from 'react'
import Cart from './Cart'
import { contxt } from './Apicontxt'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Navbar.css'
// import Marquee from 'react-fast-marquee'

const Navbar = () => {
  const navigate = useNavigate()
  let [profile, setprofile] = useState('')
  let { dataa , user, setuser, setdataa } = useContext(contxt)

  function handlelogin(){
    navigate('/login')
  }
  
  let sub_total = dataa.reduce((e,j) => { 
    let sum = e+Number(j.total)
    return sum
    },0)
  
  let old_price = dataa.reduce((e,j) =>{
    return e+Number(j.sub)
  },0)

  let discount = (sub_total/old_price)*100

  //logout
   async function handlelogout(){
    try {
      const token = localStorage.getItem('token')
      if(token){
        const response = await axios.patch('http://localhost:8080/users/cart',{dataa , user})
        console.log(response.data)
        localStorage.removeItem('token')
        localStorage.removeItem('cart')
        setuser(null)
        navigate('/login')
      }
    } catch (error) {
       console.log(error.message)
    }
  }
  
  const token = localStorage.getItem('token')

  async function userrr(){
    try {
      if(token){
        let response = await axios.get('http://localhost:8080/users/logged',{
        headers:{
          'token':token
        }
      })

      if(response.data == "jwt expired"){
        localStorage.removeItem('token')
        navigate('/login')
      }
        const userr = await response.data.loginn
        setuser(userr)
        
        let storedData = localStorage.getItem('cart')
        if (storedData) {
          try {
            const backdata = JSON.parse(storedData)
            setdataa(backdata)
          } catch (error) {
            console.error('Error parsing stored data:', error);
          }
        }
      }
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=> {
    userrr()
  },[token])

  useEffect(()=>{
    if(user&&user.length>0){
      setprofile(user[0].image)
    }
  }, [user])
  
  return (
    <div>
      <nav className="navbar bg-dark">
        <div className="container-fluid d-flex">
          <Link to='/' className='me-auto'><img src='../pics/logo-nav.avif' alt='...' height={"60px"} width={"60px"} /></Link>
          {localStorage.getItem('token')?<div class="dropdown">
  
          <button className='bg-transparent border-0 rounded-pill dropdown' type="button" data-bs-toggle="dropdown" aria-expanded="false"><img className='rounded-pill' src={profile} alt=".." height={"35px"} width={"35px"}/></button><ul class="dropdown-menu dropdown-menu-end px-2 bg-light" style={{borderRadius:0}}>
            <li><Link class="dropdown-item" to='/myaccount'>My Account</Link></li><hr className='mt-0 mb-0 opacity-25'/>
            <li><a class="dropdown-item mt-0" href="#">My Orders</a></li><hr className='mt-0 mb-0 opacity-25'/>
            <li><a class="dropdown-item" href="#">Offers</a></li>
            <div className='d-flex justify-content-center mt-3 mb-2'>
              <li><button onClick={handlelogout} className='btn btn-dark rounded-pill'>Log Out</button></li>
            </div>
          </ul></div>: <button onClick={handlelogin} className='btn btn-dark'>Login</button>}
          <button className="navbar-toggler border-0 shadow-none position-relative" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <img src="../pics/shopping-cart.png" height={"30px"} width={"30px"} alt="" />
            {localStorage.getItem('token')?dataa.length>0?<div className="notification d-flex justify-content-center align-items-center bg-white rounded-circle position-absolute" style={{ height: "20px", width: "20px", position: "absolute", right: "0", bottom: "0" }}>
              <p className='mb-0' style={{ fontSize: "12px" }}>{dataa ? dataa.length : 0}</p>
            </div>:"":""}
          </button>
          <div className="offcanvas offcanvas-end" style={{ backgroundColor: "rgb(228,228,228)" }} tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <button type="button" className="btn-close shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              {localStorage.getItem('token')?dataa.length !== 0 ? <div><h2 className='text-center mb-3'>Your Cart</h2>{dataa.map((e) => <Cart total={e.total} img={e.image} size={e.size} name={e.title} quan={e.quantity} id={e.id} />)}<div className="container-fluid">
                <div className="row bg-white px-3 py-4 rounded-4 mt-3">
                  <div className="row mb-2">
                    <h6 style={{fontSize: "20px"}}>Payment Summary</h6>
                  </div>
                  <div className="row ">
                    <div className="col">Subtotal</div>
                    <div className="col d-flex justify-content-end fw-bold">${old_price.toFixed(2)}</div>
                  </div>
                  <div className="row ">
                    <div className="col">Discount</div>
                    <div className="col d-flex justify-content-end fw-bold">{discount.toFixed(2)}%</div>
                  </div>
                  <div className="row ">
                    <div className="col">Discounted price</div>
                    <div className="col d-flex justify-content-end fw-bold">${sub_total.toFixed(2)}</div>
                  </div>
                  <div className="row">
                    <div className="col">Shipping</div>
                    <div className="col d-flex justify-content-end fw-bold text-success">FREE!</div>
                  </div>
                  <div className="row">
                    <div className="col">
                      You got FREE SHIPPING!
                    </div>
                  </div>
                  <hr className='mt-3 px-5'/>
                  <div className="row">
                    <div className="col fw-bold">TOTAL</div>
                    <div className="col d-flex justify-content-end fw-bold">${sub_total.toFixed(2)}</div>
                  </div>
                </div>
              </div></div> : <div><h3 className='text-center'>Your Cart is Empty</h3></div>:<div><h3 className='text-center'><Link to={'/login'}>Login to check</Link></h3></div>}
            </div>
          </div>
        </div>
      </nav>
      {/* <div className="jagroop"> */}
      {/* <marquee behavior="slide" direction="right">jagroop did it with rattan's </marquee> */}
      {/* <Marquee direction='right'>jagroop did it with rattan's</Marquee>
        </div>*/}
    </div>

  )
}

export default Navbar
