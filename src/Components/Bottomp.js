import React, { useContext } from 'react'
import { contxt } from './Apicontxt'
import Card from './Card'

const Bottomp = () => {
    let {data} = useContext(contxt)
  return (
    <>
        <div className="container-fluid">
            <div className="container">
                <div className="row justify-content-center mt-5 align-items-center">
                    <h1>Bottom Products</h1>
                </div>
                <div className="row justify-content-center flex-wrap" >
                    {data?data.filter((j) => {return j.category === "bottom_trends"}).map((e) => <div className="col-lg-3 col-md-6 col-sm-6 col-10 mt-5"><Card title={e.title} oldprice={e.old_price} newprice={e.new_price} img={e.image} id={e.id}/></div> ) : <li>data not found</li>}
                </div>
            </div>
        </div>
    </>
  )
}

export default Bottomp
