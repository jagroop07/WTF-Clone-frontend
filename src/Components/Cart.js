import React, { useContext } from 'react'
import { contxt } from './Apicontxt'

const Cart = ({total,img,name,quan,id,size}) => {
  let {dataa, setdataa } = useContext(contxt)
  function handledelete(){
    let newdata = dataa.filter((e) => !(e.id === id && e.size === size))
    let jama = JSON.parse(localStorage.getItem('cart'))
    jama = newdata
    setdataa(newdata)
    localStorage.setItem('cart', JSON.stringify(jama))
  }
  function handledec(){
    const indexx = dataa.findIndex(e => e.id === id && e.size === size)
    const jam = dataa.find(e => e.id === id && e.size === size)
    if(jam.quantity>1){
      const data = [...dataa]
      data[indexx].quantity -= 1
      data[indexx].sub = Number(data[indexx].sub)-Number(data[indexx].old_price)
      data[indexx].total = Number(data[indexx].total)-Number(data[indexx].new_price)
      let jama = JSON.parse(localStorage.getItem('cart'))
      jama = data
      setdataa(data)
      localStorage.setItem('cart',JSON.stringify(jama))
    }
  }
  function handleincre(){
    const indexx = dataa.findIndex(e => e.id === id && e.size === size)
    const data = [...dataa]
    data[indexx].quantity += 1
    data[indexx].sub = Number(data[indexx].old_price)*Number(data[indexx].quantity)
    data[indexx].total = Number(data[indexx].new_price)*Number(data[indexx].quantity)
    let jama = JSON.parse(localStorage.getItem('cart'))
    jama = data
    setdataa(data)
    localStorage.setItem('cart',JSON.stringify(jama))
  }
  return (
    <>
      <div className="container-fluid mt-2">
          <div className="row bg-light py-4 px-3 rounded-4">
            <div className="col-3 p-0">
              <img src={`${img}`} width={"100%"} alt="" />
            </div>
            <div className="col-6 ps-3 p-0">
              <h5 className="div fw-bold w-100" style={{fontSize: "15px"}}>{name}</h5>
              <p className="col mb-0" style={{fontSize: "14px"}}>Size: {size}</p>
              <div className="div mt-3 d-flex justify-content-start align-items-end">
                <div className='border border-1 border-black py-2 col-9 rounded-pill d-flex justify-content-between'><button onClick={handledec} id='kkm' className='px-3 border-0 bg-transparent'>-</button><p className='mb-0'>{quan}</p><button onClick={handleincre} className='border-0 bg-transparent px-3'>+</button></div>
              </div>
            </div>
            <div className="col-3 d-flex flex-column align-items-end justify-content-between">
              <div className="p-0 d-flex flex-column align-items-end" style={{fontSize: "16px"}}><p className='mb-0'>${total.toFixed(2)}</p></div>
              <button onClick={handledelete} className='border border-1 bg-transparent border-black col-8 d-flex justify-content-center py-3 rounded-pill'><i class="fa-regular fa-trash-can" style={{color: "#091015"}}></i></button>
            </div>
          </div>  
        </div>
    </>
  )
}

export default Cart
