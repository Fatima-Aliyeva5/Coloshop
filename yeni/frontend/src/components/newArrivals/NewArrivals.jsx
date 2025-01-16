import React, { useEffect } from 'react'
import Title from '../title/Title'
import Cards from '../card/Cards'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/features/ProductSlice'


const NewArrivals = () => {
  const dispatch = useDispatch()
  const {products} = useSelector((state) => state.product);
  console.log(products)
  useEffect(()=>{
    dispatch(getProducts())
  }, [])


  return (
    <div className='container my-5'> 
        <Title>
        <h3>New Arrivals</h3>
        </Title>
      <div className="cards d-flex justify-content-start  flex-wrap" >
      {products.length > 0 && products ? (
        products.map((product) => (
          <Cards key={product._id} product = {product}/>
        ))
      ) : ( <p>Not found</p>)
    }
      </div>
    </div>
  )
}

export default NewArrivals