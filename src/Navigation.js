import React, { useContext } from 'react'
import styled from 'styled-components'

import { ProductContext } from "./ProductContext";

function Navigation() {

    const [products] = useContext(ProductContext)

    const Nav = styled.nav`
        background: #1976d2;
        box-shadow: 0 2px 7px -2px rgba(80, 80, 80, .5);
        color: #f7f7f7;
    `
    const Title = styled.h1`
        font-size: 2em;
        font-weight: 300;
        margin: 0;
    `
    const Total = styled.span`
        font-size: .85em;
        font-weight: 300;
        margin: 0;
        padding: .43em .56em;
        border-radius: 20px;
        background: rgba(250, 250, 250, .1);
    `
    const Wrapper = styled.div`
        width: 1200px;
        max-width: 95%;
        margin: auto;
        height: 10vh;
        display: flex;
        align-items: center;
        justify-content: space-between;
    `

    return (
        <Nav>
            <Wrapper>
                <Title>React Context</Title>
                <Total>Total products: {products.length}</Total>
            </Wrapper>
        </Nav>
    )
}

export default Navigation
