import React, { useContext } from 'react'
import Product from './Product'

import { ProductContext } from "./ProductContext";

function ProductList() {

    const [products] = useContext(ProductContext)

    return (
        <div>
            <h2>Products</h2>
            <ul>
                {
                    products.map((product, index) =>
                        <Product
                            key={index}
                            name={product.name}
                            price={product.price}
                        />
                    )
                }
            </ul>
        </div>
    )
}

export default ProductList
