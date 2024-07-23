import { Link } from 'react-router-dom'

const Exclusive = () => {
  return (
    <div className='container-fluid mt-4 d-flex justify-content-center p-5' style={{backgroundImage: `url("./pics/DII8.webp")`, backgroundPositionY: "top", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed"}}>
      <div className="product text-center p-5 my-5" style={{backgroundColor: "rgb(228,228,228)"}}>
        <h1>Exclusive Products</h1>
        <p>A brand new exclusive product is launched now, hurry up! Buy Now!</p>
        <Link to={'/products/11'}><button className='border-0 text-white bg-black py-2 px-3 rounded-pill'>See Now</button></Link>
      </div>
    </div>
  )
}

export default Exclusive
