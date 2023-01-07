import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Categories from '../components/home/Categories'
import ProductCard from '../components/home/ProductCard'
import { getAllProducts } from '../store/slices/products.slice'
import "./styles/Home.css"

const Home = () => {
  const [nameProduct, setNameProduct] = useState("")
  const [category, setCategory] = useState("")
  const [filterProducts, setFilterProducts] = useState([])
    const products = useSelector(state=>state.products)
    //console.log(products)

    const dispatch = useDispatch()
    const handleSubmit=e=>{
      e.preventDefault()
      const newName=e.target.nameProduct.value
      setNameProduct(newName)
    }

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])

    useEffect(() => {
      setFilterProducts(products)
    }, [products])

    useEffect(() => {
      const newProducts=products.filter(product=>product.title.includes(nameProduct) && (product.category.id===category || category===""))
      setFilterProducts(newProducts)
    }, [nameProduct, category])
    
    
  return (
    <div className='home'>
      <div>
      <form className='home__form' onSubmit={handleSubmit}>
            <div className='home__form-div'>
              <input className='home__form-input' type="text" id='nameProduct' placeholder='what are you looking for?'/>
              <button className='home__form-btn'><i className='bx bx-search'></i></button>
            </div>
          </form>
        <Categories setCategory={setCategory}/>

      </div>
      
      <section>
          
          <section className='home__containerProducts'>
            {
              filterProducts.map(product=> <ProductCard key={product.id} product={product}/>)
            }
          </section>
      </section>
      
    </div>
  )
}

export default Home