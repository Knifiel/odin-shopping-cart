import { useState, useContext, createContext, useEffect } from 'react'

const ProductContext = createContext(null)

export const ProductProvider = ({ children }) => {
  const [list, setList] = useState([])

  //if it were real store, there we would be functions to fetch products based on categories or something else to provide in context, but for demonstration, this one will suffice
  useEffect(() => {
    setList([
      {
        id: 1,
        name: 'Example Product 1',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus varius facilisis. Aenean ornare tortor ac porttitor faucibus. Nunc mattis tempor nulla, ac consectetur augue tincidunt vitae. Quisque pretium tristique libero, non pulvinar ex maximus at. Suspendisse potenti. Curabitur at auctor nisi, et mollis neque. Nulla non finibus neque. Integer porta vestibulum velit, gravida varius ante laoreet sed. Sed non felis sed elit auctor tincidunt. Mauris ornare erat at neque pharetra, in laoreet eros tincidunt. In nec viverra ex. Sed a semper lacus, a vestibulum leo. Suspendisse felis turpis, consectetur eu blandit congue, egestas vitae nibh.',
      },
      {
        id: 2,
        name: 'Example Product 2',
        desc: 'In semper urna lacus, at maximus lorem gravida sed. Cras eu vestibulum nibh, ultricies finibus velit. Donec sagittis nisl eu purus euismod fringilla. Curabitur felis nisl, hendrerit vel felis vel, pharetra pulvinar metus. Fusce a libero ut mi pharetra pulvinar vitae sed magna. Vivamus finibus vehicula magna fringilla placerat. In dapibus ut lacus nec ultrices. Vivamus porta bibendum felis, placerat semper leo sagittis vel. Integer mi augue, faucibus ut lorem ac, consequat malesuada tellus. Pellentesque ullamcorper lorem non dictum blandit.',
      },
      {
        id: 3,
        name: 'Example Product 3',
        desc: 'Morbi purus sem, lacinia auctor iaculis ac, eleifend et sapien. Praesent rutrum bibendum nibh, in dapibus risus rutrum et. Suspendisse nec quam sed massa ornare blandit gravida quis tortor. Maecenas ullamcorper turpis a imperdiet aliquam. Etiam nisi nunc, dapibus eget cursus quis, consectetur bibendum quam. Aliquam vel risus commodo, gravida ipsum a, dictum odio. Sed euismod interdum neque, commodo scelerisque diam iaculis ac. Quisque vel malesuada ligula, quis bibendum mi. Morbi eget volutpat tellus. Nulla dictum non nunc id pellentesque. Vestibulum a sapien a urna consequat placerat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris sagittis neque est, vel cursus ligula sagittis ac.',
      },
      {
        id: 4,
        name: 'Example Product 4',
        desc: 'Praesent luctus finibus libero, sit amet accumsan felis suscipit eget. Sed gravida vitae sapien id vulputate. Vivamus viverra, turpis nec aliquet pharetra, nisi nunc imperdiet dolor, efficitur aliquam elit nisl eget erat. Aenean pretium molestie dui, ac ultricies metus consequat a. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. Aliquam elementum dui a aliquam placerat. Maecenas at mollis felis, vel cursus justo. Vestibulum auctor sit amet dui at dictum.',
      },
      {
        id: 5,
        name: 'Example Product 5',
        desc: 'Nam et dui pellentesque, dignissim ante eu, mattis quam. Integer sit amet enim eget nibh efficitur hendrerit. Etiam lobortis venenatis ex, et convallis arcu ullamcorper non. Aenean semper justo vitae ante semper blandit. Pellentesque mollis scelerisque ipsum porttitor tincidunt. Cras dignissim augue at aliquam tristique. Aenean mollis tellus vel nisl auctor, et fringilla nunc commodo.',
      },
    ])
  }, [])

  return (
    <ProductContext.Provider value={{ list: list }}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProductList = () => {
  return useContext(ProductContext)
}
