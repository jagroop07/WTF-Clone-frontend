import { Link } from 'react-router-dom'

const Flex = () => {
    return (
        <>
            <div className="container-fluid px-5 pt-3" style={{ backgroundColor: "rgb(228 228 228)" }} >
                <div className="row mt-4 justify-content-between">
                    <div className="col-lg-6 col-md-6 col-sm-12 p-0 rounded-4 overflow-hidden">
                        <img style={{ height: '70vh', width: '100%' }} src="https://wtflex.in/cdn/shop/files/352178397_639174921565413_5550562391282319855_n.jpg?v=1701341086&width=750" alt="" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 mt-5 ps-5" >
                        <div className="div fs-5">
                            <h1 className='fw-bold'>We Are What The Flex</h1>
                            <p className='mb-0' style={{ marginTop: '30px' , fontSize: "18px"}}>Our commitment is to provide unparalleled quality because you deserve nothing but the finest.</p>
                            <p className='mb-0' style={{fontSize: "18px"}}>Join us on this journey where your style meets our passion, allowing you to keep flexing with the classiest products and services around.</p>
                            <p className='mb-0' style={{fontSize: "18px"}}>Discover your next favorite!</p>
                            <Link to={'/product'}><button type="button" className="btn btn-dark rounded-pill px-4 py-2 mt-4"> Shop All</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Flex