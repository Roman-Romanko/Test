import React from 'react'
import { Container } from '../assets/styles/Home-style'
import { ProductList } from '../components/ProductList'

export const WomenPage = () => {
  return (
    <Container>
      <ProductList category="women" />
    </Container>
  )
}