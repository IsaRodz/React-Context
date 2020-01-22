import React, { useState, useContext } from 'react'
import { ProductContext } from './ProductContext'
import styled from 'styled-components'


function NewProduct() {

    const [products, setProducts] = useContext(ProductContext)

    const [toastActive, setToast] = useState(false)

    const Toast = styled.div`
        position: fixed;
        bottom: 10vh;
        left: 30vw;
        right: 30vw;
        padding: 16px;
        text-align: center;
        border-radius: 10px;
        background: #212121;
        color: #fff;
        box-shadow: 0 2px 7px -2px rgba(0, 0, 0, .33);
        animation: ToastIn 300ms cubic-bezier(0.35, 0.91, 0.92, 1.07);
        display: ${toastActive ? 'block' : 'none'};
        
        @media (max-width: 950px) {
            left: 10vw;
            right: 10vw;
        }
        @media (max-width: 700px) {
            left: 20px;
            right: 20px;
            bottom: 20px;
        }
        @keyframes ToastIn {
            from { opacity: 0; transform: translateY(100%)}
            to { opacity: 1; transform: translateY(0)}
        }   
    `

    const [newProduct, setNewProduct] = useState({
        id: products.length,
        name: '',
        price: '',
    })

    const addProduct = e => {
        e.preventDefault()

        if (isNaN(newProduct.price) || newProduct.price <= 0) {
            setToast(true, setTimeout(() => setToast(false), 3500))
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
            <Toast> Set a valid price for the product </Toast>
        </div>
    )
}

export default NewProduct
