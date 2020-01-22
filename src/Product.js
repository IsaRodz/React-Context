import React from 'react'

function Product(props) {
    return (
        <li>
            <h4>{props.name}</h4>
            <p>${props.price}</p>
        </li>
    )
}

export default Product
