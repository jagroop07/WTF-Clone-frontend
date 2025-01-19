import React, { useContext } from 'react'
import { contxt } from '../utils/Apicontxt'

const Cart = ({ total, img, name, quan, id, size }) => {
  let { handleDecreement, handleDelete, handleIncreement } = useContext(contxt)

  function handledelete () {
    handleDelete(id, size)
  }

  function handledec () {
    handleDecreement(id, size)
  }

  function handleincre () {
    handleIncreement(id, size)
  }

  return (
    <>
      <div className='container-fluid mt-2'>
        <div className='row bg-light py-4 px-3 rounded-4'>
          <div className='col-3 p-0'>
            <img src={`${img}`} width={'100%'} alt='' />
          </div>
          <div className='col-6 ps-3 p-0'>
            <h5 className='div fw-bold w-100' style={{ fontSize: '15px' }}>
              {name}
            </h5>
            <p className='col mb-0' style={{ fontSize: '14px' }}>
              Size: {size}
            </p>
            <div className='div mt-3 d-flex justify-content-start align-items-end'>
              <div className='border border-1 border-black py-2 col-9 rounded-pill d-flex justify-content-between'>
                <button
                  onClick={handledec}
                  id='kkm'
                  className='px-3 border-0 bg-transparent'
                >
                  -
                </button>
                <p className='mb-0'>{quan}</p>
                <button
                  onClick={handleincre}
                  className='border-0 bg-transparent px-3'
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className='col-3 d-flex flex-column align-items-end justify-content-between'>
            <div
              className='p-0 d-flex flex-column align-items-end'
              style={{ fontSize: '16px' }}
            >
              <p className='mb-0'>${total.toFixed(2)}</p>
            </div>
            <button
              onClick={handledelete}
              className='border border-1 bg-transparent border-black col-8 d-flex justify-content-center py-3 rounded-pill'
            >
              <i
                class='fa-regular fa-trash-can'
                style={{ color: '#091015' }}
              ></i>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
