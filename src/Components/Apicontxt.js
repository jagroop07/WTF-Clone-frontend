import React, {createContext, useEffect, useState } from 'react'
import axios from 'axios'
// import { useNavigate } from 'react-router-dom'
export const contxt = createContext()

const Apicontxt = ({children}) => {
    const [data, setdata] = useState([])
    let [dataa, setdataa] = useState([])
    let [user,setuser] = useState({})
  
    // const navigate = useNavigate()
    useEffect(() => async() => {
      const response = await axios.get('http://localhost:8080/product/getall')
      const dataaa = await response.data
      setdata(dataaa)
    },[])

  return (
    <div>
      <contxt.Provider value={{data, dataa, setdataa, user ,setuser }}>
        {children}
      </contxt.Provider>
    </div>
  )
}

export default Apicontxt
