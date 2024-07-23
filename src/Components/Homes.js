import React from 'react'
import Marquee from 'react-fast-marquee';
import { Link, useNavigate } from 'react-router-dom';


export const Homes = () => {
  return (
    <>
    <div>
    <h6 className='text-center text-white bg-black mt-1 p-3 mt mb-0'>❤HAPPY HOLIDAY DEALS ON EVERYTHING❤</h6>
    </div>
    <div className="banner d-lg-none " style={{position:"relative"}}>
        <video style={{height:"75vh",width:"100%",objectFit:"cover"}} autoPlay muted loop src=".\pics\WhatsApp Video 2024-04-16 at 12.15.09_4f6653ea.mp4"></video>
        <div style={{position:"absolute",top:"75%",left:"0",right:"0",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Link to={'/product'} className=' bg-black text-white rounded-pill pt-3 pb-3 ps-4 pe-4 fs-7 text-decoration-none ' style={{fontWeight:"bolder"}}> shop now</Link>
        </div>
        
    </div>
    <div className="banner d-lg-block d-none " style={{background: `url("./pics/WhatsApp Image 2024-04-16 at 12.15.36_12d3a420.jpg")`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",height:"75vh",position:"relative"}}>
        <div  style={{position:"absolute",top:"60%",right:"0" ,left:"0"}} ><Marquee style={{color:"white",fontFamily:"Permanent Marker,cursive",fontWeight:"300",background:"black",fontStyle:"normal",fontSize:"30px"}}>BOTTOMWEAR / HOODIES / SWEATSHIRTS / CARGOS / T-SHIRTS</Marquee>
        <div className='d-flex justify-content-center mt-5'><Link to={"/product"}  className=' bg-white text-black rounded-pill pt-3 pb-3 ps-4 pe-4 fs-7 text-decoration-none ' style={{fontWeight:"bolder"}}> shop now</Link>
</div>
        </div>
    
    </div>
    <ul>
    
    </ul>
    </>
  )
}