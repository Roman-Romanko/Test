import React from 'react';
import { StyledButton, StyledLink, NavContainer, NavLinks, ButtonContainer } from '../assets/styles/NavBar-style';
import { SearchPanel } from './SearchPanel';

export const NavBar = () => {
  return (
    <NavContainer>
      <NavLinks>
        <StyledLink to="/">Luxora</StyledLink>
        <StyledLink to="/men">Men</StyledLink>
        <StyledLink to="/women">Women</StyledLink>
        <StyledLink to="/contact">Children</StyledLink>
        <StyledLink to="/blog">For House</StyledLink>
      </NavLinks>
      <NavLinks>
        <ButtonContainer>
          <SearchPanel />
          <StyledButton>Sign in</StyledButton>
          <StyledButton>Favourite</StyledButton>
          <StyledButton>Cart</StyledButton>
        </ButtonContainer>
      </NavLinks>
    </NavContainer>
  );
};
