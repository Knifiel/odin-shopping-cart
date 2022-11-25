import React from 'react'
import ProductCard from './ProductCard'
import { useProductList } from './util/productList'

function Products() {
  const productList = useProductList()

  return (
    <ul className='productList'>
      {productList.list.map((item) => {
        return (
          <li key={item.id}>
            <ProductCard
              productId={item.id}
              productName={item.name}
              productDescription={item.desc}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default Products
