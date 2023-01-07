import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartProduct from '../components/cart/CartProduct'
import { getAllCartProducts, purchaseCart } from '../store/slices/cart.slice'
import "./styles/Cart.css"

const Cart = () => {
  const cart=useSelector(state=>state.cart)
  const dispatch= useDispatch()

  const handlePurchaseCart=()=>{
    const data={
        street: "Green St. 1456",
        colony: "Southwest",
        zipCode: 12345,
        city: "USA",
        references: "Some references",
    };
    dispatch(purchaseCart(data))
  };

  useEffect(() => {
    dispatch(getAllCartProducts())
   
  }, [])
  
  return (
    <main className='cart'>
      <h2>My cart</h2>
      <section className='cart__list'>
        {
          cart.map(cartProduct=> <CartProduct key={cartProduct.id} cartProduct={cartProduct}/>)
        }
        {
          !cart.length && (
            <h2>Not found product in cart</h2>
          )
        }
      </section>
      <div className='cart__btn-container'>
        <button onClick={handlePurchaseCart} className='cart__btn'>Purchase cart</button>
      </div>

    </main>
  )
}

export default Cart