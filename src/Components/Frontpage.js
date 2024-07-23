import React, { useContext } from 'react'
import { contxt } from './Apicontxt'
import { Link } from 'react-router-dom'

const Frontpage = () => {
  let {data} = useContext(contxt)
  const dataa = data.find(e => e.id === '10')
  return (
    <div className='container-fluid rounded-4 mt-4 text-white' style={{backgroundColor: "#131313"}}>
      <div className="row">
        <div className="col-lg-4">
            <h1 className='fw-bold px-5 py-lg-5 py-3' style={{opacity: "0.9", letterSpacing: "2px"}}>Look Sharp And Stay Comfy With This Varsity Jacket</h1>
        </div>
        <div className="col-lg-8">
            <div className="row px-5 py-lg-5 py-3">
                <div className="col-lg-8 mt-lg-0 mt-3 order-lg-1 order-2" style={{opacity: "0.9"}}>
                    <h4 className='fw-bold' style={{letterSpacing: "1px"}}>DID I IMAGINE IT?VARSITY JACKET</h4>
                    <p className='mt-lg-5 mt-4 lh-lg'>The double-layered fabric featuring cotton blend with inner lining keeps you warm and snug all day long. High-density 3D puff print adds a stylish flair to the classic black color, making it perfect for both men and women</p>
                    <p className='mt-4 mb-4' style={{fontSize: "15px"}}>Rs.{dataa?dataa.new_price:""}</p>
                    <Link to={`/products/10`}><button className='border-0 bg-white col-8 rounded-pill text-black' style={{fontSize: "16px", padding: "10px",textDecoration: "none"}}>View Product</button></Link>
                </div>
                <div className="col-lg-4 d-flex order-lg-2 order-1 justify-content-lg-start justify-content-center py-3">
                    <img src={`${dataa?dataa.image:""}`} height={"auto"} style={{maxWidth: "100%"}} alt="" />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Frontpage
