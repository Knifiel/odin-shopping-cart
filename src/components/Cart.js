import React from 'react'
import { useProductList } from './util/productList'
import { useCart } from './util/shoppingCart'

function Cart() {
  const cart = useCart()
  const products = useProductList()
  const handleDelete = (id) => {
    cart.removeItem(id)
  }
  return (
    <div className='cart'>
      {cart.cart.length !== 0 ? (
        <h3>Items in your cart:</h3>
      ) : (
        `Your cart is empty`
      )}
      <ul>
        {cart.cart.map((x) => {
          const product = products.list.find((y) => y.id === x.itemId)
          return (
            <li key={x.itemId}>
              <span className='product'>
                {product.name} : {x.count}
                <button
                  type='button'
                  onClick={() => handleDelete(x.itemId)}>
                  Remove
                </button>
              </span>
            </li>
          )
        })}
      </ul>
      {cart.cart.length !== 0 && (
        <button
          type='button'
          className='checkout'>
          Proceed to checkout
        </button>
      )}
    </div>
  )
}

export default Cart
