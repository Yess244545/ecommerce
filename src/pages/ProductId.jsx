import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductInfo from '../components/ProductId/ProductInfo'
import SimilarProducts from '../components/ProductId/SimilarProducts'
import "./styles/ProductId.css"

const ProductId = () => {
  const [product, setProduct] = useState()
  const [categories, setCategories] = useState()
  const {id}=useParams()

  useEffect(() => {
    const URL=`https://e-commerce-api.academlo.tech/api/v1/products/${id}`
    axios.get(URL)
      .then(res=>setProduct(res.data.data.product))
      .catch(err=>console.log(err))
    
  }, [id])

  useEffect(() => {
    const URL=`https://e-commerce-api.academlo.tech/api/v1/products/categories`
    axios.get(URL)
      .then(res=>setCategories(res.data.data.categories))
      .catch(err=>console.log(err))
    
  }, [id])
  
  return (
    <main className='productId'>
      <section className='productId__path'>
        <Link to="/" className='productId__home'>Home</Link>
        <i className='productId__point bx bxs-circle'></i>
        <h4 className='productId__nameProduct'>{product?.title}</h4>
      </section>
      <ProductInfo product={product}/>
      <SimilarProducts categories={categories} product={product}/>
    </main>
  )
}

export default ProductId