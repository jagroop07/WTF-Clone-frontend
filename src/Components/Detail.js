import { useContext, useEffect, useState} from 'react'
import './Detail.css'
import {useNavigate, useParams} from 'react-router-dom'
import { contxt } from './Apicontxt'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Detail = () => {
  const navigate = useNavigate()
  let {data, dataa, setdataa } = useContext(contxt)
  const {id}=useParams()
  const jam = data?data.find((e) => e.id === id): ""
  const jj = jam?jam:""
  let [sizee,setsizee] = useState('')

  useEffect(()=>{
    const possible = jj?jj.available_sizes[0]:""
    setsizee(possible)
  },[jj])

  function handleupdate(j){
    setsizee(j)
  }

  function handlefunction(){
    const token = localStorage.getItem('token')
    if(token){
      if(dataa.length>0){
        const dam = dataa.findIndex(e => e.id === jj.id && e.size === sizee)
        if(dam === -1){
          toast.success("Added to Cart!!")
          let data = JSON.parse(localStorage.getItem('cart'))
          data = [...dataa,{...jj, quantity: 1, sub: Number(jj.old_price),total: Number(jj.new_price), size: sizee}]
          setdataa(data)
          localStorage.setItem('cart', JSON.stringify(data))

        }
        else{
          if(jj.size !== sizee){
            let data = JSON.parse(localStorage.getItem('cart'))
            data = [...dataa,{...jj, quantity: 1, sub: Number(jj.old_price),total: Number(jj.new_price), size: sizee}]
            setdataa(data)
            localStorage.setItem('cart',JSON.stringify(data))

          }
        }
      }
      else{
        toast.success("Added to Cart!!")
        let data = JSON .parse(localStorage.getItem('cart'))
        data = [...dataa,{...jj, quantity: 1, sub: Number(jj.old_price), total: Number(jj.new_price), size: sizee}]
        setdataa(data)
        localStorage.setItem('cart',JSON.stringify(data))
      }
    }
    else{
      navigate('/login')
    }
  }

  return (
    <div className='container-fluid' style={{ backgroundColor: "rgb(228,228,228)" }}>
      <div className="row">
        <div className="col-lg-5 px-0 col-md-5 col-12 d-flex flex-column align-items-lg-end align-items-md-end align-items-center">
          <div className="imgry mt-5" style={{ backgroundImage: `url(${jj.image})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", height: "490px", width: "95%", borderRadius: "30px" }}>
            <button className="border-0 james rounded-circle d-flex justify-content-center align-items-center ms-2 mt-2 bg-light opacity-75" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{height: "40px", width: "40px"}}>
             <i class="fa-solid fa-magnifying-glass-plus" style={{color: "#788397"}}></i>
            </button>
          </div>
          <div className="home-demo">
            <div class="owl-carousel owl-theme">
                <div class="item"><img src="../pics/box.png" alt="" /></div>
                <div class="item"><h4>2</h4></div>
                <div class="item"><h4>3</h4></div>
                <div class="item"><h4>4</h4></div>
                <div class="item"><h4>5</h4></div>
                <div class="item"><h4>6</h4></div>
            </div>
          </div>
        </div>
        <div className="col-lg-7 mt-lg-0 mt-md-0 mt-3 col-md-7 col-12 p-lg-5 p-md-5 p-3 ps-3">
          <h1 className='fw-bold'>{jj.title}</h1>
          <div className="pricing d-flex mt-4">
            <del className='opacity-75'>${jj.old_price}</del>
            <ins className='text-decoration-none ms-3'>${jj.new_price}</ins>
            <div className="sale ms-3 px-3 rounded-pill opacity-75" style={{ border: "1px solid gray" }}>
              <p className='mb-0' style={{ fontSize: "13px" }}>Sale</p>
            </div>
          </div>
          <p className='opacity-75 mt-2' style={{ fontSize: "13px", wordSpacing: "2px" }}><a href="/home" className='text-black'>shipping</a> calculated at checkout.</p>
          <p className='fw-bold mb-0'>Size</p>
          <div className="sizes col-lg-12 col-md-9 col-8 d-flex flex-wrap">
            <div className="col-lg-1 active  mt-2 col-md-2 col-sm-2 col-3 d-flex justify-content-center border me-2 border-1 border-black rounded-pill">
              <input onClick={()=>handleupdate('XS')} type="radio" id='radio1' className='size_radio' name='radio_group' checked={sizee==='XS'} disabled={jj && jj.available_sizes && !jj.available_sizes.includes("XS")}/>
              <label for="radio1" className='size_label py-1'>XS</label>
            </div>
            <div className="col-lg-1 active  mt-2 col-md-2 col-sm-2 col-3 d-flex justify-content-center border border-1 me-2 border-black rounded-pill">
              <input onClick={()=>handleupdate('S')} type="radio" id='radio2' className='size_radio' name='radio_group' checked={sizee==='S'} disabled={jj && jj.available_sizes && !jj.available_sizes.includes("S")}/>
              <label for="radio2" className='size_label py-1'>S</label>
            </div>
            <div className="col-lg-1 active  mt-2 col-md-2 col-sm-2 col-3 d-flex justify-content-center border border-1 me-2 border-black rounded-pill">
              <input onClick={()=>handleupdate('M')} type="radio" id='radio3' className='size_radio' name='radio_group' checked={sizee==='M'} disabled={jj && jj.available_sizes && !jj.available_sizes.includes("M")}/>
              <label for="radio3" className='size_label py-1'>M</label>
            </div>
            <div className="col-lg-1 active  mt-2 col-md-2 col-sm-2 col-3 d-flex justify-content-center border border-1 me-2 border-black rounded-pill">
              <input onClick={()=>handleupdate('L')} type="radio" id='radio4' className='size_radio' name='radio_group' checked={sizee==='L'} disabled={jj && jj.available_sizes && !jj.available_sizes.includes("L")}/>
              <label for="radio4" className='size_label py-1'>L</label>
            </div>
            <div className="col-lg-1 active  mt-2 col-md-2 col-sm-2 col-3 d-flex justify-content-center border border-1 me-2 border-black rounded-pill">
              <input onClick={()=>handleupdate('XL')} type="radio" id='radio5' className='size_radio' name='radio_group' checked={sizee==='XL'} disabled={jj && jj.available_sizes && !jj.available_sizes.includes("XL")}/>
              <label for="radio5" className='size_label py-1'>XL</label>
            </div>
            <div className="col-lg-1 active  mt-2 col-md-2 col-sm-2 col-3 d-flex justify-content-center border border-1 me-2 border-black rounded-pill">
              <input onClick={()=>handleupdate('XLL')} type="radio" id='radio6' className='size_radio' name='radio_group' checked={sizee==='XXL'} disabled={jj && jj.available_sizes && !jj.available_sizes.includes("XLL")}/>
              <label for="radio6" className='size_label py-1'>XLL</label>
            </div>
          </div>
          {localStorage.getItem('token')?dataa.find(e => e.id === jj.id && e.size === sizee)?<button className='rott col-lg-9 col-md-11 col-sm-10 col-12 bg-black text-white mt-4 mb-4 rounded-pill border-0' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" style={{ padding: "10px 0" }}><span style={{opacity: "0.9"}}>Go to cart</span></button>:<button className='rott col-lg-9 col-md-11 col-sm-10 col-12 bg-black text-white mt-4 mb-4 rounded-pill border-0' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" onClick={handlefunction} style={{ padding: "10px 0" }}><span style={{opacity: "0.9"}}>Add to cart</span></button>: <button className='rott col-lg-9 col-md-11 col-sm-10 col-12 bg-black text-white mt-4 mb-4 rounded-pill border-0' type="button" onClick={handlefunction} style={{ padding: "10px 0" }}><span style={{opacity: "0.9"}}>Add to cart</span></button>}
          <ToastContainer position='top-left'/>
          <div class="accordion accordion-flush m-1" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header" style={{borderTop: "1px solid #CEC8C7"}}>
                <button class="accordion-button collapsed shadow-none text-black fw-bold" style={{ backgroundColor: "rgb(228,228,228)" }} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  <img className='me-2' src="../pics/tshirt.png" height={"20px"} width={"20px"} alt="" />Description
                </button>
              </h2>
              <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body" style={{ backgroundColor: "rgb(228,228,228)" }}>{jj.description}</div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" style={{borderTop: "1px solid #CEC8C7"}}>
                <button class="accordion-button collapsed shadow-none text-black fw-bold" style={{ backgroundColor: "rgb(228,228,228)" }} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  <img className='me-2' src="../pics/box.png" height={"20px"} width={"20px"} alt="" />Details
                </button>
              </h2>
              <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body" style={{ backgroundColor: "rgb(228,228,228)" }}>{jj?Object.keys(jj.details).map(e=> <li className='list-unstyled'><span className='me-2 fw-bold'>{e}:</span>{jj.details[e]}</li>):""}</div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" style={{borderTop: "1px solid #CEC8C7"}}>
                <button class="accordion-button collapsed shadow-none text-black fw-bold" style={{ backgroundColor: "rgb(228,228,228)" }} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  <img className='me-2' src="../pics/bucket.png" height={"20px"} width={"20px"} alt="" />Care Instructions
                </button>
              </h2>
              <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body" style={{ backgroundColor: "rgb(228,228,228)" }}>{jj.care_instructions}</div>
              </div>
            </div>
            <hr className='mt-0 text-secondary'/>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-3 text-center">
          <img src="../pics/cash-on-delivery.png" height={"40px"} width={"40px"} alt="" />
          <p>COD Available</p>
        </div>
        <div className="col-3 text-center">
          <img src="../pics/yjhqsxsn.png" height={"40px"} width={"60px"} alt="...." className='img'/>
          <p>Delivery in 4-6 Days</p>
        </div>
        <div className="col-3 text-center">
          <img src="../pics/return.png" height={"40px"} width={"40px"} alt="" />
          <p className='mt-1'>Easy Exchange</p>
        </div>
      </div>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" style={{maxWidth: "100vw"}}>
          <div class="modal-content">
            <div class="modal-body d-flex flex-column align-items-center">
              <img src={`${jj.image}`} width={"90%"} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
