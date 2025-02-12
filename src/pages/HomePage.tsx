import React from 'react';
import { Container } from '../assets/styles/Home-style';
import { ProductList } from '../components/ProductList';
import { Title } from '../assets/styles/Home-style';

export const HomePage = () => {
  return (
    <Container>
      <Title>Наші товари</Title>
      <Title>Жіночі</Title>
      <ProductList category="women" />
      <Title>Чоловічі</Title>
      <ProductList category="men" />
    </Container>
  );
};