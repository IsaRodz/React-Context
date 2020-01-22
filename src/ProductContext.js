import React, { createContext, useState } from 'react'

export const ProductContext = createContext()

export const ProductProvider = (props) => {

    const [products, setProducts] = useState([
        {
            id: 0,
            name: 'Laptop',
            price: 200
        },
        {
            id: 1,
            name: 'Phone',
            price: 150
        },
        {
            id: 2,
            name: 'Earphones',
            price: 15
        }
    ])

    return (
        <ProductContext.Provider value={[products, setProducts]}>
            {props.children}
        </ProductContext.Provider>
    )
}
