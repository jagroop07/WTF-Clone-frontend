import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Signup } from '../pages/auth/Signup'
import { Login } from '../pages/auth/Login'
import ScrollToTop from '../components/Scrolltotop'
import EditProfile from '../pages/profile/EditProfile'
import MyAccount from '../pages/profile/MyAccount'
import Home from '../pages/home/Home'
import Allproducts from '../pages/product/Allproducts'
import Detail from '../pages/product/Detail'
import MainLayout from '../layouts/MainLayout'
import ChangePass from '../pages/password/ChangePass'

function RouteManager () {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/editProfile' element={<EditProfile />} />
          <Route path='/myaccount' element={<MyAccount />} />
          <Route path='/login' element={<Login />} />
          <Route path='/product' element={<Allproducts />} />
          <Route path='/products/:id' element={<Detail />} />
          <Route path='/chngepss' element={<ChangePass />} />
        </Route>
      </Routes>
    </>
  )
}

export default RouteManager
