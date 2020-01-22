import React, { useState, useContext } from 'react'
import { ProductContext } from './ProductContext'

function NewProduct() {

    const [products, setProducts] = useContext(ProductContext)

    const [newProduct, setNewProduct] = useState({
        id: products.length + 1,
        name: '',
        price: '',
    })

    const addProduct = e => {
        e.preventDefault()

        if (isNaN(newProduct.price) || newProduct.price <= 0) {
            alert('Set a valid price for the product')
        } else {
            setProducts([...products, newProduct])
            setNewProduct({
                id: products.length + 1,
                name: '',
                price: '',
            })
        }
    }
    return (
        <div>
            <h2>New Product</h2>
            <form onSubmit={addProduct}>
                <input required
                    onChange={e => setNewProduct({ ...newProduct, name: e.target.value })}
                    placeholder="Name"
                    value={newProduct.name}
                />
                <input
                    onChange={e => setNewProduct({ ...newProduct, price: e.target.value })}
                    placeholder="Price"
                    value={newProduct.price}
                />
                <button>Save</button>
            </form>
        </div>
    )
}

export default NewProduct
