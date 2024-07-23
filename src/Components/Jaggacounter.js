import React from 'react'
import {useSelector} from 'react-redux'
const Jaggacounter = () => {
    const count=useSelector((state)=>state.counter.value)
  return (
    <div>
      {count}
    </div>
  )
}

export default Jaggacounter
