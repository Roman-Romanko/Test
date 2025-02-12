import React from 'react';
import { Container } from '../assets/styles/Home-style';
import { ProductList } from '../components/ProductList';

export const MenPage = () => {
  return (
    <Container>
      <ProductList category="men" />
    </Container>
  );
};