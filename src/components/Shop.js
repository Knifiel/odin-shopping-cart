import React, { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useCart } from './util/shoppingCart'

function Shop() {
  const cart = useCart()
  const [total, setTotal] = useState()
  useEffect(() => {
    if (cart.cart.length === 0) {
      setTotal('Empty')
    } else {
      const result = cart.cart.reduce(
        (prev, cur) => prev + parseInt(cur.count),
        0
      )
      setTotal(`positions: ${cart.cart.length}, items in total: ${result}`)
    }
  }, [cart.cart])

  return (
    <>
      <nav className='nav-shop'>
        <NavLink to='products'>Products</NavLink>
        <NavLink to='cart'>Cart ({total})</NavLink>
      </nav>
      <Outlet />
    </>
  )
}

export default Shop
