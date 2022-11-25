import React, { useState } from 'react'
import { useCart } from './util/shoppingCart'
import styles from '../styles/ProductCard.module.css'

function ProductCard({ productId, productName, productDescription }) {
  const [count, setCount] = useState(0)
  const cart = useCart()
  const handleSubmit = () => {
    if (count === 0) {
      return
    }
    cart.changeItem(productId, count)
    setCount(0)
  }

  const handleChange = (e) => {
    if (isNaN(parseInt(e.target.value)) || parseInt(e.target.value) <= 0) {
      setCount(0)
    } else {
      setCount(parseInt(e.target.value))
    }
  }
  return (
    <div className={styles.productCard}>
      <span className={styles.head}>{productName} </span>
      <p className={styles.desc}>{productDescription}</p>
      <span className={styles.addMenu}>
        <label
          className={styles.label}
          htmlFor={productId}>
          Quantity:
        </label>
        <input
          className={styles.input}
          id={productId}
          type='number'
          value={count}
          step='1'
          min='0'
          onChange={handleChange}
        />
        <button
          className={styles.button}
          type='button'
          onClick={handleSubmit}>
          Add
        </button>
      </span>
    </div>
  )
}

export default ProductCard
