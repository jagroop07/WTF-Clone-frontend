import React, { useContext, useEffect, useState } from 'react'
// import { contxt } from './Apicontxt'
import Card from './Card'
import Select from 'react-select'
import axios from 'axios'

const Allproducts = () => {
    // let {data} = useContext(contxt)
    // let [filterr, setfilterr] = useState('All_Products')
    let [SelectedOption, setSelectedOption] = useState(null)
    let [SortOption, setSortOption] = useState(null)
    let [dataaa, setdataaa] = useState([])

    const option = [
      {value: 'feature_products', label: 'Feature Products'},
      {value: 'bottom_trends', label: 'Bottom Trends'},
      {value: 'heavyweight_tshirts', label: 'Heavyweight Tshirts'}
    ]

    const optionSort = [
      {value: 1, label: 'Low to High'},
      {value: -1, label: 'High to Low'}
    ]

    // function handleupchnge(e){
    //   setfilterr(e.target.value)
    // }

    const customStyles = {
      option: (defaultStyles, state) => ({
        ...defaultStyles,
        color: state.isSelected ? "#212529" : "white",
        backgroundColor: state.isSelected ? "#a0a0a0" : "#212529",
      }),
    
      control: (defaultStyles) => ({
        ...defaultStyles,
        backgroundColor: "#212529",
        padding: "10px",
        border: "none",
        boxShadow: "none",
      }),
      singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#fff" }),
    };

    console.log(SelectedOption)

    useEffect(()=>{
      async function fetchdata(){
        let Category = SelectedOption? SelectedOption.value : null
        let Sort = SortOption? SortOption.value : null
        const response = await axios.post(`http://localhost:8080/product/compare/${Category}/${Sort}`)
        setdataaa(response.data.data)
        console.log(response.data.data)
      }
      fetchdata()
    },[SelectedOption, SortOption])
  return (
    <div className='container-fluid p-5'>
      <div className="row mt-3 justify-content-start">
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-3" style={{maxWidth: "300px"}}>
            {/* <h5 className='me-3 mb-0'>Filter: </h5>
            <select onChange={handlechnge} className='bg-transparent border-0' style={{width: "200px", outline: "none"}} name="products" id="para">
            <option value="All_Products">All products</option>
            <option value="feature_products">Feature Products</option>
            <option value="bottom_trends">Bottom Products</option>
            <option value="heavyweight_tshirts">Heavyweight Tshirts</option>
            </select> */}
            
            <Select
              value={SelectedOption}
              onChange={setSelectedOption}
              options={option}
              placeholder ={"Category"}
              styles={customStyles}
            />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-3" style={{maxWidth: "300px"}}>
            <Select
              value={SortOption}
              onChange={setSortOption}
              options={optionSort}
              placeholder ={"Sort"}
              styles={customStyles}
            />
        </div>
      </div>
      <div className="row justify-content-center">
        
        {/* {data?data.filter(e=>e.category==filterr).map(j => <div className="col-lg-3 col-md-6 col-sm-6 col-10 mt-5"><Card title={j.title} oldprice={j.old_price} newprice={j.new_price} img={j.image} id={j.id}/></div>)} */}
        {dataaa?dataaa.map(j => <div className="col-lg-3 col-md-6 col-sm-6 col-10 mt-5"><Card title={j.title} oldprice={j.old_price} newprice={j.new_price} img={j.image} id={j.id}/></div>):""}
      </div>
    </div>
  )
}

export default Allproducts
