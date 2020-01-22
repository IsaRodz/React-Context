import React from 'react'
import styled from 'styled-components'
import './app.scss'

import Navigation from './Navigation'
import NewProduct from './NewProduct'
import ProductList from './ProductList'
import { ProductProvider } from "./ProductContext";

function App() {

  const Wrapper = styled.div`
        width: 1200px;
        max-width: 95%;
        margin: auto;
        display: grid;
        grid-template-columns: 29% 63%;
        grid-gap: 5%;
    `

  return (
    <ProductProvider>
      <div className="App">
        <Navigation />
        <Wrapper>
          <NewProduct />
          <ProductList />
        </Wrapper>
      </div>
    </ProductProvider>
  )
}

export default App
