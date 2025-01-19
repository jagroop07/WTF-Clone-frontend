import React, { useContext, useEffect, useState } from 'react'
import { contxt } from '../../utils/Apicontxt'
import Card from '../../components/Card'
import Select from 'react-select'

const Allproducts = () => {
  let { fetchdata } = useContext(contxt)
  let [SelectedOption, setSelectedOption] = useState(null)
  let [SortOption, setSortOption] = useState(null)
  let [dataaa, setdataaa] = useState([])

  const option = [
    { value: 'feature_products', label: 'Feature Products' },
    { value: 'bottom_trends', label: 'Bottom Trends' },
    { value: 'heavyweight_tshirts', label: 'Heavyweight Tshirts' }
  ]

  const optionSort = [
    { value: 1, label: 'Low to High' },
    { value: -1, label: 'High to Low' }
  ]

  const customStyles = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      color: state.isSelected ? '#212529' : 'white',
      backgroundColor: state.isSelected ? '#a0a0a0' : '#212529'
    }),

    control: defaultStyles => ({
      ...defaultStyles,
      backgroundColor: '#212529',
      padding: '10px',
      border: 'none',
      boxShadow: 'none'
    }),
    singleValue: defaultStyles => ({ ...defaultStyles, color: '#fff' })
  }

  useEffect(() => {
    const fetchInfo = async () => {
      await fetchdata(SelectedOption, SortOption, setdataaa)
    }

    fetchInfo()
  }, [SelectedOption, SortOption])

  return (
    <div className='container-fluid p-5'>
      <div className='row mt-3 justify-content-start'>
        <div
          className='col-lg-3 col-md-4 col-sm-6 col-12 mt-3'
          style={{ maxWidth: '300px' }}
        >
          <Select
            value={SelectedOption}
            onChange={setSelectedOption}
            options={option}
            placeholder={'Category'}
            styles={customStyles}
          />
        </div>
        <div
          className='col-lg-3 col-md-4 col-sm-6 col-12 mt-3'
          style={{ maxWidth: '300px' }}
        >
          <Select
            value={SortOption}
            onChange={setSortOption}
            options={optionSort}
            placeholder={'Sort'}
            styles={customStyles}
          />
        </div>
      </div>
      <div className='row justify-content-center'>
        {dataaa
          ? dataaa.map(j => (
              <div className='col-lg-3 col-md-6 col-sm-6 col-10 mt-5'>
                <Card
                  title={j.title}
                  oldprice={j.old_price}
                  newprice={j.new_price}
                  img={j.image}
                  id={j.id}
                />
              </div>
            ))
          : ''}
      </div>
    </div>
  )
}

export default Allproducts
