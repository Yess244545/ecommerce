import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./styles/Categories.css"

const Categories = ({setCategory}) => {
    const [categories, setCategories] = useState([])

    const handleClickCategory=(id)=>{
        setCategory(id)
    }

    useEffect(() => {
        const URL="https://e-commerce-api.academlo.tech/api/v1/products/categories"
        axios.get(URL)
            .then(res=> setCategories(res.data.data.categories))
            .catch(err=>console.log(err))
     
    }, [])
    
  return (
    
        <ul className='categories'>
            <li onClick={()=>handleClickCategory("")}> <a href="all">All products</a> </li>
            {
                categories.map(category=> <li onClick={()=>handleClickCategory(category.id)} key={category.id}> <a href={category.name}>{category.name}</a> </li>)

            }
        </ul>
    
  )
}

export default Categories