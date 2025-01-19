import React, { createContext, useEffect, useState } from 'react'
import { apiClient } from '../utils/apiClient'
import { toast } from 'react-toastify'
export const contxt = createContext()

const Apicontxt = ({ children }) => {
  const [data, setdata] = useState([])
  let [dataa, setdataa] = useState([])
  let [user, setuser] = useState({})

  useEffect(
    () => async () => {
      const response = await apiClient.get('/product/getall')
      const dataaa = await response.data
      setdata(dataaa)
    },
    []
  )

  //cart
  const handleDelete = (id, size) => {
    let newdata = dataa.filter(e => !(e.id === id && e.size === size))
    let jama = JSON.parse(localStorage.getItem('cart'))
    jama = newdata
    setdataa(newdata)
    localStorage.setItem('cart', JSON.stringify(jama))
  }

  const handleDecreement = (id, size) => {
    const indexx = dataa.findIndex(e => e.id === id && e.size === size)
    const jam = dataa.find(e => e.id === id && e.size === size)
    if (jam.quantity > 1) {
      const data = [...dataa]
      data[indexx].quantity -= 1
      data[indexx].sub =
        Number(data[indexx].sub) - Number(data[indexx].old_price)
      data[indexx].total =
        Number(data[indexx].total) - Number(data[indexx].new_price)
      let jama = JSON.parse(localStorage.getItem('cart'))
      jama = data
      setdataa(data)
      localStorage.setItem('cart', JSON.stringify(jama))
    }
  }

  const handleIncreement = (id, size) => {
    const indexx = dataa.findIndex(e => e.id === id && e.size === size)
    const data = [...dataa]
    data[indexx].quantity += 1
    data[indexx].sub =
      Number(data[indexx].old_price) * Number(data[indexx].quantity)
    data[indexx].total =
      Number(data[indexx].new_price) * Number(data[indexx].quantity)
    let jama = JSON.parse(localStorage.getItem('cart'))
    jama = data
    setdataa(data)
    localStorage.setItem('cart', JSON.stringify(jama))
  }

  //login
  const handleLogin = async (data, navigate) => {
    let username = data ? data.username.trim() : ''
    let password = data ? data.password.trim() : ''
    const response = await apiClient.post('/users/login', {
      username,
      password
    })
    const token = response.data.token
    if (token) {
      localStorage.setItem('token', token)
      let response = await apiClient.get('/users/logged', {
        headers: {
          token: token
        }
      })
      const cart = response.data.cart
      localStorage.setItem('cart', JSON.stringify(cart))

      navigate('/')
    }

    alert(response.data.message)
  }

  const handleSignup = async (data, navigate) => {
    const formdata = new FormData()
    formdata.append('username', data.username.trim())
    formdata.append('email', data.email.trim())
    formdata.append('gender', data.gender.trim())
    formdata.append('password', data.password.trim())
    formdata.append('avatar', data.avatar[0])

    const response = await apiClient.post('/users/signup', formdata)
    if (response.data.message === 'Success') {
      navigate('/login')
    }

    alert(response.data)
  }

  //password
  const handlePassword = async (data, setmsg, reset) => {
    let oldpass = data.currentpass.trim()
    let newpass = data.newpassword.trim()

    const response = await apiClient.patch(`/users/password/${user[0]._id}`, {
      oldpass,
      newpass
    })
    console.log(user[0]._id)
    if (response.data == 'wrong password') {
      setmsg(response.data)
    }
    if (response.data === 'success') {
      toast.success('new password saved')
      setmsg(null)
      reset()
    }
  }

  //product
  const fetchdata = async (SelectedOption, SortOption, setdataaa) => {
    let Category = SelectedOption ? SelectedOption.value : null
    let Sort = SortOption ? SortOption.value : null
    const response = await apiClient.post(
      `/product/compare/${Category}/${Sort}`
    )
    setdataaa(response.data.data)
    console.log(response.data.data)
  }

  const handleDetail = async (jj, sizee, navigate) => {
    const token = localStorage.getItem('token')
    if (token) {
      if (dataa.length > 0) {
        const dam = dataa.findIndex(e => e.id === jj.id && e.size === sizee)
        if (dam === -1) {
          toast.success('Added to Cart!!')
          let data = JSON.parse(localStorage.getItem('cart'))
          data = [
            ...dataa,
            {
              ...jj,
              quantity: 1,
              sub: Number(jj.old_price),
              total: Number(jj.new_price),
              size: sizee
            }
          ]
          setdataa(data)
          localStorage.setItem('cart', JSON.stringify(data))
        } else {
          if (jj.size !== sizee) {
            let data = JSON.parse(localStorage.getItem('cart'))
            data = [
              ...dataa,
              {
                ...jj,
                quantity: 1,
                sub: Number(jj.old_price),
                total: Number(jj.new_price),
                size: sizee
              }
            ]
            setdataa(data)
            localStorage.setItem('cart', JSON.stringify(data))
          }
        }
      } else {
        toast.success('Added to Cart!!')
        let data = JSON.parse(localStorage.getItem('cart'))
        data = [
          ...dataa,
          {
            ...jj,
            quantity: 1,
            sub: Number(jj.old_price),
            total: Number(jj.new_price),
            size: sizee
          }
        ]
        setdataa(data)
        localStorage.setItem('cart', JSON.stringify(data))
      }
    } else {
      navigate('/login')
    }
  }

  //profile
  const handleProfile = async (data, navigate) => {
    const formdata = new FormData()
    formdata.append('username', data?.username.trim())
    formdata.append('email', data?.email.trim())
    formdata.append('gender', data?.gender.trim())
    formdata.append('avatar', data?.file)

    const response = await apiClient.patch(
      `/users/update/${user[0]._id}`,
      formdata
    )

    alert(response.data.message)

    if (response.data.message === 'successfully updated') {
      const token = localStorage.getItem('token')
      if (token) {
        let response = await apiClient.get('/users/logged', {
          headers: {
            token: token
          }
        })
        setuser(response.data.loginn)
      }
      navigate('/myaccount')
    }
  }

  //navbar
  const fetchUser = async (token, navigate) => {
    if (token) {
      let response = await apiClient.get('/users/logged', {
        headers: {
          token: token
        }
      })

      if (response.data == 'jwt expired') {
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
          console.error('Error parsing stored data:', error)
        }
      }
    }
  }

  const handleLogout = async (token, navigate) => {
    if (token) {
      const response = await apiClient.patch('/users/cart', {
        dataa,
        user
      })
      console.log(response.data)
      localStorage.removeItem('token')
      localStorage.removeItem('cart')
      setuser(null)
      navigate('/login')
    }
  }

  return (
    <div>
      <contxt.Provider
        value={{
          data,
          dataa,
          handleDecreement,
          handleDelete,
          handleIncreement,
          setdataa,
          user,
          setuser,
          handleLogin,
          handleSignup,
          handlePassword,
          fetchdata,
          handleDetail,
          handleProfile,
          fetchUser,
          handleLogout
        }}
      >
        {children}
      </contxt.Provider>
    </div>
  )
}

export default Apicontxt
