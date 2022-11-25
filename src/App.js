import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Cart from './components/Cart'
import Homepage from './components/Homepage'
import Products from './components/Products'
import Shop from './components/Shop'
import { ProductProvider } from './components/util/productList'
import { CartProvider } from './components/util/shoppingCart'

function App() {
  return (
    <CartProvider>
      <ProductProvider>
        <nav className='nav-primary'>
          <NavLink to='/'>Homepage</NavLink>
          <NavLink to='shop'>Shop</NavLink>
        </nav>
        <Routes>
          <Route
            path='/'
            element={<Homepage />}
          />
          <Route
            path='shop'
            element={<Shop />}>
            <Route
              index
              element={<Products />}
            />
            <Route
              path='products'
              element={<Products />}
            />
            <Route
              path='cart'
              element={<Cart />}
            />
          </Route>
          <Route
            path='*'
            element={<h1>No such page found</h1>}
          />
        </Routes>
      </ProductProvider>
    </CartProvider>
  )
}

export default App
