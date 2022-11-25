import { useState, useContext, createContext } from 'react'

const CartContext = createContext(null)

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const changeItem = (itemId, count) => {
    let newCart = []
    if (cart.some((x) => x.itemId === itemId)) {
      cart.forEach((x) => {
        if (x.itemId !== itemId) {
          newCart.push(x)
        } else {
          newCart.push({ itemId: itemId, count: x.count + parseInt(count) })
        }
      })
    } else {
      newCart = [...cart, { itemId: itemId, count: parseInt(count) }]
    }
    setCart(newCart)
  }

  const removeItem = (itemId) => {
    const newCart = cart.filter((x) => x.itemId !== itemId)
    setCart(newCart)
  }

  return (
    <CartContext.Provider value={{ cart, changeItem, removeItem }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  return useContext(CartContext)
}
