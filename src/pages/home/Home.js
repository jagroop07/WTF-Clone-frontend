import React from 'react'
import Products from '../../components/Product'
import Frontpage from '../../components/Frontpage'
import { Homes } from '../../components/Homes'
import Bottomp from '../../components/Bottomp'
import Flex from '../../components/Flex'
import Insta from '../../components/Insta'
import Exclusive from '../../components/Exclusive'

const Home = () => {
  return (
    <>
      <Homes />
      <Products />
      <Bottomp />
      <Exclusive />
      <div className='px-lg-3'>
        <Frontpage />
        <Flex />
        <Insta />
      </div>
    </>
  )
}

export default Home
