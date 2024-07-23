import React from 'react'
import Products from './Product'
import Frontpage from './Frontpage'
import { Homes } from './Homes'
import Bottomp from './Bottomp'
import Flex from './Flex'
import Insta from './Insta'
import Exclusive from './Exclusive'
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios'

const Home = () => {
  return (
    <>
      <Homes/>
      <Products/>
      <Bottomp/>
      <Exclusive/>
      <div className='px-lg-3'>
        <Frontpage/>
        <Flex/>
        <Insta/>
      </div>
    </>
  )
}

export default Home
