import React, { useState, useContext } from 'react'
import { ProductContext } from './ProductContext'

function NewProduct(props) {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')

    const updateName = e => setName(e.target.value)
    const updatePrice = e => setPrice(e.target.value)

    const [products, setProducts] = useContext(ProductContext)

    const addProduct = e => {
        e.preventDefault()

        if (isNaN(price) || price <= 0) {
            alert('Set a valid price for the product')
        } else {
            setProducts([...products, {
                id: products.length + 1,
                name: name,
                price: price
            }])
            setName('')
            setPrice('')
        }
    }
    return (
        <div>
            <h2>New Product</h2>
            <form onSubmit={addProduct}>
                <input type="text" onChange={updateName} placeholder="Name" value={name} />
                <input type="text" onChange={updatePrice} placeholder="Price" value={price} />
                <button>Save</button>
            </form>
        </div>
    )
}

export default NewProduct
